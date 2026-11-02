/* ==========================================================
   LIV BEIRA — CONFIGURAÇÃO (único ficheiro a editar)
   ========================================================== */
window.LIV_CONFIG = {

  /* ---------- CONTACTOS ---------- */
  phone: '258856473974',            // formato internacional, sem + nem espaços
  phoneShow: '+258 85 647 3974',
  email: 'info.livbeira@gmail.com',

  /* ---------- CHAMAR GARÇOM: ligação à base de dados (Supabase) ----------
     Sem url/key o sistema funciona em MODO DEMONSTRAÇÃO (só no mesmo
     telemóvel/navegador). Para funcionar entre telemóveis diferentes,
     siga os passos do LEIAME.txt e preencha as duas linhas abaixo. */
  backend: {
    url: '',   // ex.: 'https://xxxx.supabase.co'
    key: ''    // chave "anon" ou "publishable" do Supabase
  },

  /* ---------- GARÇONS (nome + PIN de 4 dígitos para entrar em /garcom.html) ---------- */
  waiters: [
    { name: 'Garçom 1', pin: '1111' },
    { name: 'Garçom 2', pin: '2222' },
    { name: 'Garçom 3', pin: '3333' },
    { name: 'Garçom 4', pin: '4444' }
  ],

  /* ---------- MOTIVOS DO CHAMADO ---------- */
  reasons: [
    { id: 'pedido',  n: 'Fazer pedido',      menu: true },
    { id: 'conta',   n: 'Pedir a conta' },
    { id: 'ajuda',   n: 'Preciso de ajuda' },
    { id: 'limpeza', n: 'Limpar a mesa' },
    { id: 'outro',   n: 'Outro motivo' }
  ],

  /* ---------- ESPAÇOS, O QUE OFERECEM E PREÇOS (em MT) ----------
     ATENÇÃO: os preços marcados como "exemplo" devem ser confirmados
     e substituídos pelos preços reais de cada espaço.
     Para mudar um preço, altere só o número "p".                    */
  spaces: {

    palco: {
      name: 'Palco',
      label: 'Área de palco',
      img: 'images/palco-estrutura.jpg',
      gallery: ['images/espaco-palco.jpg', 'images/palco-mesas.jpg', 'images/palco-sofas.jpg'],
      tagline: 'Música ao vivo, DJs e a energia da pista.',
      desc: 'O coração das noites do LIV. Mesas altas e sofás junto ao palco, com a melhor vista para os shows, DJs e concertos.',
      offers: ['Shows e concertos ao vivo', 'DJs residentes e convidados', 'Mesas altas e sofás junto ao palco', 'Karaoke aos domingos', 'Serviço de garrafa à mesa'],
      note: 'Preços da área de palco. Promoção de quinta: compre 4 cervejas e ganhe 1 grátis.',
      menu: [
        { cat: 'Cervejas', items: [
          { n: 'Cerveja nacional', p: 150 },
          { n: 'Cerveja importada', p: 250 },
          { n: 'Balde de 5 cervejas', p: 650, d: 'Cerveja nacional' }
        ]},
        { cat: 'Cocktails e gin', items: [
          { n: 'Caipirinha', p: 400, d: 'Quinta com 10% de desconto' },
          { n: 'Gin tónico', p: 450 },
          { n: 'Mojito', p: 450 }
        ]},
        { cat: 'Garrafas', items: [
          { n: 'Whisky 12 anos', p: 8500 },
          { n: 'Vodka premium', p: 6000 },
          { n: 'Espumante', p: 3500 }
        ]},
        { cat: 'Sem álcool', items: [
          { n: 'Água', p: 80 },
          { n: 'Refrigerante', p: 100 },
          { n: 'Energético', p: 250 }
        ]},
        { cat: 'Petiscos', items: [
          { n: 'Batata frita', p: 250 },
          { n: 'Asinhas de frango', p: 450 },
          { n: 'Pizza grande', p: 900, d: 'Quinta com 20% de desconto' }
        ]}
      ]
    },

    restaurante: {
      name: 'Restaurante',
      label: 'Salão climatizado',
      img: 'images/espaco-restaurante.jpg',
      gallery: ['images/foto-gin.jpg', 'images/foto-brinde.jpg', 'images/foto-amigas.jpg'],
      tagline: 'Pratos do dia, feijoada e buffet de família.',
      desc: 'Um salão climatizado, com mesas postas e bar completo. Ideal para almoços, jantares e para a família inteira ao domingo.',
      offers: ['Pratos do dia às quintas (12h às 15h)', 'Feijoada às sextas', 'Buffet de família aos domingos, 12h', 'Parquinho grátis para crianças no buffet', 'Pizzas, grelhados e carta de vinhos'],
      note: 'Preços do restaurante. Pratos do dia e feijoada incluem 1 água de oferta.',
      menu: [
        { cat: 'Almoços da semana', items: [
          { n: 'Domingo Buffet, adulto', p: 600, d: 'Domingos a partir das 12h' },
          { n: 'Domingo Buffet, criança', p: 450, d: 'Até aos 12 anos' },
          { n: 'Prato do dia', p: 450, d: 'Quinta, 12h às 15h. Frango à zambeziano ou carapau grelhado com xima' },
          { n: 'Feijoada com todos', p: 450, d: 'Sexta. Com chouriço, legumes, arroz e couve' }
        ]},
        { cat: 'Pratos', items: [
          { n: 'Frango grelhado', p: 550 },
          { n: 'Bife com batata frita', p: 750 },
          { n: 'Camarão grelhado', p: 1400 }
        ]},
        { cat: 'Pizzas', items: [
          { n: 'Pizza Margherita', p: 500 },
          { n: 'Pizza de frango e piri-piri', p: 650 }
        ]},
        { cat: 'Bebidas', items: [
          { n: 'Água', p: 60 },
          { n: 'Refrigerante', p: 80 },
          { n: 'Sumo natural', p: 150 },
          { n: 'Cerveja nacional', p: 120 },
          { n: 'Vinho da casa (garrafa)', p: 1800 }
        ]},
        { cat: 'Sobremesas', items: [
          { n: 'Pudim', p: 200 },
          { n: 'Gelado', p: 180 }
        ]}
      ]
    },

    lounge: {
      name: 'Lounge',
      label: 'Sofás e zonas VIP',
      img: 'images/lounge-vip.jpg',
      gallery: ['images/espaco-lounge.jpg', 'images/lounge-corona.jpg', 'images/lounge-poltronas.jpg'],
      tagline: 'Sofás, conforto e serviço à mesa.',
      desc: 'Um ambiente elegante e mais reservado, com sofás Chesterfield e zonas VIP. Ideal para conversar, brindar e celebrar com calma.',
      offers: ['Sofás Chesterfield e mesas reservadas', 'Zonas VIP', 'Serviço de garrafa à mesa', 'Cocktails e gins', 'Ambiente calmo para conversar'],
      note: 'Preços do lounge, com serviço à mesa.',
      menu: [
        { cat: 'Cocktails e gin', items: [
          { n: 'Caipirinha', p: 500 },
          { n: 'Gin tónico', p: 550 },
          { n: 'Mojito', p: 550 }
        ]},
        { cat: 'Cervejas', items: [
          { n: 'Cerveja nacional', p: 180 },
          { n: 'Cerveja importada', p: 300 }
        ]},
        { cat: 'Garrafas', items: [
          { n: 'Whisky 12 anos', p: 9500 },
          { n: 'Vodka premium', p: 7000 },
          { n: 'Espumante', p: 4000 }
        ]},
        { cat: 'Sem álcool', items: [
          { n: 'Água', p: 100 },
          { n: 'Refrigerante', p: 120 },
          { n: 'Sumo natural', p: 200 }
        ]},
        { cat: 'Petiscos', items: [
          { n: 'Tábua de queijos e enchidos', p: 1200 },
          { n: 'Asinhas de frango', p: 500 },
          { n: 'Batata frita', p: 300 }
        ]}
      ]
    }
  }
};
