// ===============================
// PRODUTOS (COMPLETO - 13 items)
// ===============================
const products = [
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/36c68772-bd1d-40e8-a250-49982913ba1f.jpg',
    name: 'TELA PARAMOUNT',
    priceOld: 'R$ 10,00',
    discount: '30%',
    priceCurrent: 'R$ 6,99',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Olá,+tudo+bem?+Quero+comprar+uma+Paramount",
    desc: 'Duração: 30 dias • Tela individual • Entrega imediata'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/1a2abb20-58ab-4e7b-ad40-1831372d9e5b.png',
    name: 'YOUTUBE PREMIUM LINK MENSAL',
    priceOld: 'R$ 20,00',
    discount: '20%',
    priceCurrent: 'R$ 16,00',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+YouTube+Premium+Link+Mensal",
    desc: 'Duração: 30 dias • Link de ativação • Suporte na ativação'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/4546dc4b-6989-486c-b40f-35a88749df18.png',
    name: 'CAP CUT PRO MENSAL',
    priceOld: 'R$ 21,25',
    discount: '20%',
    priceCurrent: 'R$ 17,00',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+CapCut+Pro",
    desc: 'Plano mensal • Funções liberadas • Entrega rápida'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/8f15b884-eaa8-4e1b-b7ce-511f1c50dd84.png',
    name: 'PRIME VIDEO TELA',
    priceOld: 'R$ 7,00',
    discount: '21%',
    priceCurrent: 'R$ 5,50',
    pixInfo: 'À vista no Pix',
    soldOut: true,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Prime+Video+Tela",
    desc: 'Tela Prime Video • Entrega por link'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/8f15b884-eaa8-4e1b-b7ce-511f1c50dd84.png',
    name: 'PRIME VIDEO',
    priceOld: 'R$ 14,00',
    discount: '39%',
    priceCurrent: 'R$ 8,49',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Prime+Video+ADM",
    desc: '30 Dias de uso • 7 dias de garantia'
  },
  {
    image: 'https://wallpaperaccess.com/full/9250480.jpg',
    name: 'SPOTIFY PREMIUM MENSAL',
    priceOld: 'R$ 19,90',
    discount: '50%',
    priceCurrent: 'R$ 15,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Spotify+Premium",
    desc: 'Plano individual mensal • Renovação fácil • 30 Dias de uso'
  },
  {
    image: 'https://s2-techtudo.glbimg.com/4kALwDTy70QAy72RDk9ymrTIIrY=/fit-in/324x299/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/X/9/OaIpxQQvGlLhWV95ibrQ/star-plus-logo.png',
    name: 'STAR PLUS + DISNEY',
    priceOld: 'R$ 22,50',
    discount: '20%',
    priceCurrent: 'R$ 18,00',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Star+Plus+Disney",
    desc: 'Combo Star+ + Disney+ • 30 dias de uso'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/5a63e8a9-2e85-4eaf-aefe-0c46b22527d6.png',
    name: 'TELA NETFLIX',
    priceOld: 'R$ 34,88',
    discount: '20%',
    priceCurrent: 'R$ 27,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Tela+Netflix",
    desc: 'Netflix PREMIUM • Acesso imediato • 1 Tela • 30 Dias de uso'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/ecb96a83-d7ff-4544-9984-3669d7d5d5fa.png',
    name: 'TELA HBO MAX',
    priceOld: 'R$ 17,38',
    discount: '20%',
    priceCurrent: 'R$ 13,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+HBO+Max",
    desc: 'Tela HBO Max • Entrega instantânea • 30 Dias de uso'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/7fe9d9ee-73ff-4427-ba1b-164ce16aed1d.png',
    name: 'CRUNCHYROLL FULL ACESSO',
    priceOld: 'R$ 13,00',
    discount: '55%',
    priceCurrent: 'R$ 5,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Crunchyroll",
    desc: 'Acesso completo Crunchyroll • Renovação rápida • 30 Dias de uso'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/ee156c6e-793a-4797-925a-0d201bac61a7.png',
    name: 'CANVA PRO',
    priceOld: 'R$ 13,00',
    discount: '46%',
    priceCurrent: 'R$ 6,99',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Canva+Pro",
    desc: 'Canva Pro • Recursos premium'
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/13b87b79-0e82-4824-aa8f-90d9dc9ca6c1.png',
    name: 'DISNEY PREMIUM',
    priceOld: 'R$ 41,29',
    discount: '30%',
    priceCurrent: 'R$ 28,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Disney+Premium",
    desc: 'Disney Premium • Conteúdo completo • 30 Dias de uso'
  }
];

// ===============================
// DOM + VARS
// ===============================
const cardsGrid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');
let visibleCount = 6;
let currentList = [...products];

// ===============================
// CRIA CARD
// ===============================
function createCard(product) {
  const card = document.createElement('div');
  card.className = 'card';
  if (product.soldOut) card.classList.add('sold-out');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="card-content">
      <div>
        <div class="card-title">${product.name}</div>
        <div class="desc-text">${product.desc || ''}</div>

        <div class="price-row">
          <div class="price-old">${product.priceOld}</div>
          <div class="discount-badge">↓ ${product.discount}</div>
        </div>

        <div class="price-current">${product.priceCurrent}</div>
        <div class="price-info">${product.pixInfo}</div>
      </div>

      <div class="card-footer">
        <a class="btn-buy" href="${product.link}" target="_blank">${product.soldOut ? 'Indisponível' : 'Comprar agora'}</a>
        <button class="btn-cart" title="Adicionar ao carrinho">+</button>
      </div>
    </div>
  `;
  return card;
}

// ===============================
// SUGESTÃO "Talvez você quis dizer"
// ===============================
function getSuggestion(query) {
  if (!query) return '';
  query = query.toLowerCase();
  let closest = '';
  let maxScore = 0;

  products.forEach(p => {
    const name = p.name.toLowerCase();
    let score = 0;
    query.split(' ').forEach(word => { if (name.includes(word)) score++; });
    if (score > maxScore) {
      maxScore = score;
      closest = p.name;
    }
  });

  return maxScore > 0 ? closest : '';
}

// ===============================
// RENDER
// ===============================
function renderCards() {
  cardsGrid.innerHTML = '';
  if (currentList.length === 0) {
    const suggestion = getSuggestion(searchInput.value);
    cardsGrid.innerHTML = `<p class="no-results">Nenhum produto encontrado.${suggestion ? ` Talvez você quis dizer: <strong>${suggestion}</strong>` : ''}</p>`;
  } else {
    for (let i = 0; i < visibleCount && i < currentList.length; i++) {
      cardsGrid.appendChild(createCard(currentList[i]));
    }
  }
  document.getElementById('btnSeeMore').style.display = visibleCount >= currentList.length ? 'none' : 'inline-flex';
}

// ===============================
// BUSCA
// ===============================
function searchProducts() {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) {
    currentList = [...products];
    visibleCount = 6;
    renderCards();
    return;
  }
  currentList = products.filter(p => p.name.toLowerCase().includes(q));
  visibleCount = currentList.length;
  renderCards();
}

// ===============================
// EVENTOS
// ===============================
searchInput.addEventListener('keypress', e => { if (e.key === 'Enter') searchProducts(); });
document.getElementById('btnSearch').addEventListener('click', searchProducts);
document.getElementById('btnSeeMore').addEventListener('click', () => { visibleCount += 4; renderCards(); });

// ===============================
// INICIAL
// ===============================
renderCards();
