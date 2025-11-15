// Array com dados dos produtos para renderizar

const products = [
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/36c68772-bd1d-40e8-a250-49982913ba1f.jpg',
    name: 'TELA PARAMOUNT',
    priceOld: 'R$ 10,00',
    discount: '30%',
    priceCurrent: 'R$ 6,99',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Olá,+tudo+bem?+Quero+comprar+um+produto+da+Canvix+Store"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/1a2abb20-58ab-4e7b-ad40-1831372d9e5b.png',
    name: 'YOUTUBE PREMIUM LINK MENSAL',
    priceOld: 'R$ 20,00',
    discount: '20%',
    priceCurrent: 'R$ 16,00',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+YouTube+Premium+Link+Mensal"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/4546dc4b-6989-486c-b40f-35a88749df18.png',
    name: 'CAP CUT PRO MENSAL',
    priceOld: 'R$ 21,25',
    discount: '20%',
    priceCurrent: 'R$ 17,00',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+CapCut+Pro"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/8f15b884-eaa8-4e1b-b7ce-511f1c50dd84.png',
    name: 'PRIME VIDEO TELA',
    priceOld: 'R$ 7,00',
    discount: '21%',
    priceCurrent: 'R$ 5,50',
    pixInfo: 'À vista no Pix',
    soldOut: true,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Prime+Video+Tela"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/8f15b884-eaa8-4e1b-b7ce-511f1c50dd84.png',
    name: 'PRIME VIDEO ADM',
    priceOld: 'R$ 14,00',
    discount: '39%',
    priceCurrent: 'R$ 8,49',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Prime+Video+ADM"
  },
  {
    image: 'https://wallpaperaccess.com/full/9250480.jpg',
    name: 'SPOTIFY PREMIUM MENSAL',
    priceOld: 'R$ 19,90',
    discount: '50%',
    priceCurrent: 'R$ 15,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Spotify+Premium"
  },
  {
    image: 'https://s2-techtudo.glbimg.com/4kALwDTy70QAy72RDk9ymrTIIrY=/fit-in/324x299/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/X/9/OaIpxQQvGlLhWV95ibrQ/star-plus-logo.png',
    name: 'STAR PLUS + DISNEY',
    priceOld: 'R$ 22,50',
    discount: '20%',
    priceCurrent: 'R$ 18,00',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Star+Plus+Disney"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/5a63e8a9-2e85-4eaf-aefe-0c46b22527d6.png',
    name: 'TELA NETFLIX',
    priceOld: 'R$ 34,88',
    discount: '20%',
    priceCurrent: 'R$ 27,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Tela+Netflix"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/ecb96a83-d7ff-4544-9984-3669d7d5d5fa.png',
    name: 'TELA HBO MAX',
    priceOld: 'R$ 17,38',
    discount: '20%',
    priceCurrent: 'R$ 13,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+HBO+Max"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/7fe9d9ee-73ff-4427-ba1b-164ce16aed1d.png',
    name: 'CRUNCHYROLL FULL ACESSO',
    priceOld: 'R$ 13,00',
    discount: '55%',
    priceCurrent: 'R$ 5,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Crunchyroll"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/ee156c6e-793a-4797-925a-0d201bac61a7.png',
    name: 'CANVA PRO',
    priceOld: 'R$ 13,00',
    discount: '46%',
    priceCurrent: 'R$ 6,99',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Canva+Pro"
  },
  {
    image: 'https://cdn.centralcart.com.br/stores/9071/packages/13b87b79-0e82-4824-aa8f-90d9dc9ca6c1.png',
    name: 'DISNEY PREMIUM',
    priceOld: 'R$ 41,29',
    discount: '30%',
    priceCurrent: 'R$ 28,90',
    pixInfo: 'À vista no Pix',
    soldOut: false,
    link: "https://wa.me/5599991805595?text=Quero+comprar:+Disney+Premium"
  }
];


// Seleciona o container onde os cards serão inseridos
const cardsGrid = document.getElementById('cardsGrid');
let visibleCount = 6;

// Lista atual (necessário para busca)
let currentList = [...products];


// Função para criar cards
function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');
  if (product.soldOut) card.classList.add('sold-out');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="card-content">
      <div>
        <div class="card-title">${product.name}</div>
        <div>
          <span class="price-old">${product.priceOld}</span>
          <span class="discount-badge">↓ ${product.discount}</span>
        </div>
        <div class="price-current">${product.priceCurrent}</div>
        <div class="price-info">${product.pixInfo}</div>
      </div>
      <div class="card-footer">
        <a class="btn-buy" href="${product.link}" target="_blank">
          Comprar agora
        </a>
      </div>
    </div>
  `;

  return card;
}


// Render cards
function renderCards() {
  cardsGrid.innerHTML = '';

  for (let i = 0; i < visibleCount && i < currentList.length; i++) {
    cardsGrid.appendChild(createCard(currentList[i]));
  }

  const btnSeeMore = document.getElementById('btnSeeMore');
  btnSeeMore.style.display = visibleCount >= currentList.length ? "none" : "inline-flex";
}


// Função de busca
function searchProducts() {
  const q = document.getElementById("searchInput").value.trim().toLowerCase();

  if (q === "") {
    currentList = [...products];
    visibleCount = 6;
    renderCards();
    return;
  }

  currentList = products.filter(p =>
    p.name.toLowerCase().includes(q)
  );

  visibleCount = currentList.length;
  renderCards();
}


// Enter ativa a busca
document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchProducts();
});


// Botão ver mais
document.getElementById('btnSeeMore').addEventListener('click', () => {
  visibleCount += 4;
  renderCards();
});


// Render inicial
renderCards();
