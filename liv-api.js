/* LIV Beira — camada de dados dos chamados de garçom.
   Com Supabase configurado: funciona entre todos os telemóveis.
   Sem configuração: modo demonstração (localStorage, só neste aparelho). */
(function () {
  const C = window.LIV_CONFIG || {}, B = C.backend || {};
  const remote = !!(B.url && B.key);
  const KEY = 'liv_calls_v1';
  const H = { apikey: B.key, 'Content-Type': 'application/json' };
  if (remote && String(B.key).startsWith('eyJ')) H.Authorization = 'Bearer ' + B.key;
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const now = () => new Date().toISOString();

  async function rq(path, opt) {
    opt = opt || {};
    const r = await fetch(B.url.replace(/\/$/, '') + '/rest/v1/' + path, Object.assign({}, opt, { headers: Object.assign({}, H, opt.headers || {}) }));
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.status === 204 ? null : r.json();
  }
  const ls = {
    get() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } },
    set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) {} }
  };
  const REP = { Prefer: 'return=representation' };

  window.LIV_API = {
    remote,
    async create(d) {
      const row = { space: d.space, table_ref: d.table_ref || '', client_name: d.client_name || '', reason: d.reason, items: d.items || [], note: d.note || '', status: 'pending' };
      if (remote) return (await rq('calls', { method: 'POST', headers: REP, body: JSON.stringify(row) }))[0];
      const x = Object.assign({ id: uid(), created_at: now(), waiter: null, accepted_at: null, done_at: null }, row);
      const a = ls.get(); a.unshift(x); ls.set(a); return x;
    },
    async list() {
      if (remote) return rq('calls?select=*&order=created_at.desc&limit=1000');
      return ls.get();
    },
    async get(id) {
      if (remote) return (await rq('calls?select=*&id=eq.' + encodeURIComponent(id)))[0] || null;
      return ls.get().find(c => c.id === id) || null;
    },
    /* Aceitar: só o primeiro garçom consegue (devolve null a quem chegou tarde). */
    async accept(id, waiter) {
      const patch = { status: 'accepted', waiter, accepted_at: now() };
      if (remote) return (await rq('calls?id=eq.' + encodeURIComponent(id) + '&status=eq.pending', { method: 'PATCH', headers: REP, body: JSON.stringify(patch) }))[0] || null;
      const a = ls.get(), c = a.find(c => c.id === id);
      if (!c || c.status !== 'pending') return null;
      Object.assign(c, patch); ls.set(a); return c;
    },
    async finish(id, waiter) {
      const patch = { status: 'done', done_at: now() };
      if (remote) return (await rq('calls?id=eq.' + encodeURIComponent(id) + '&status=eq.accepted&waiter=eq.' + encodeURIComponent(waiter), { method: 'PATCH', headers: REP, body: JSON.stringify(patch) }))[0] || null;
      const a = ls.get(), c = a.find(c => c.id === id);
      if (!c || c.status !== 'accepted' || c.waiter !== waiter) return null;
      Object.assign(c, patch); ls.set(a); return c;
    },
    async cancel(id) {
      const patch = { status: 'cancelled', done_at: now() };
      if (remote) return (await rq('calls?id=eq.' + encodeURIComponent(id) + '&status=eq.pending', { method: 'PATCH', headers: REP, body: JSON.stringify(patch) }))[0] || null;
      const a = ls.get(), c = a.find(c => c.id === id);
      if (!c || c.status !== 'pending') return null;
      Object.assign(c, patch); ls.set(a); return c;
    }
  };
})();
