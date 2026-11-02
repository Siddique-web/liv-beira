-- LIV Beira: tabela dos chamados de garçom.
-- Supabase > SQL Editor > New query > cole tudo > Run.
create extension if not exists pgcrypto;

create table if not exists public.calls (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  space       text not null check (space in ('palco','restaurante','lounge')),
  table_ref   text not null default '',
  client_name text default '',
  reason      text not null,
  items       jsonb not null default '[]',
  note        text default '',
  status      text not null default 'pending' check (status in ('pending','accepted','done','cancelled')),
  waiter      text,
  accepted_at timestamptz,
  done_at     timestamptz
);
create index if not exists calls_status_idx on public.calls (status, created_at desc);

alter table public.calls enable row level security;
drop policy if exists "calls_ler" on public.calls;
drop policy if exists "calls_criar" on public.calls;
drop policy if exists "calls_atualizar" on public.calls;
create policy "calls_ler"       on public.calls for select to anon using (true);
create policy "calls_criar"     on public.calls for insert to anon with check (status = 'pending');
create policy "calls_atualizar" on public.calls for update to anon using (true) with check (true);
