// Dados de Cidades por País para os formulários e filtros
const CIDADES_POR_PAIS = {
  Canada: ["Calgary", "Toronto", "Vancouver", "Montreal"],
  EUA: ["Orlando", "Dallas", "Miami", "Nova Iorque", "Seattle", "Boston"]
};

// Base de Dados de Cupons (Catálogo)
const CUPONS_DATA = [
  {
    id: 1,
    empresa: "The Pizza Makers",
    usados: "5k usados",
    stars: 3,
    categoria: "Restaurantes",
    pais: "Canada",
    cidade: "Calgary",
    beneficio: "CAD$ 10.00 de desconto em drinks",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "TPZM10JUN26",
    influenciador: "VemProCanada",
    regras: [
      "Não pode ser usado em conjunto com qualquer outra oferta.",
      "Disponível enquanto durarem os estoques.",
      "Válido apenas para bebidas selecionadas.",
      "Limitado a um cupom por pessoa por dia."
    ]
  },
  {
    id: 2,
    empresa: "Dinah Rios Hairshop",
    usados: "1k usados",
    stars: 5,
    categoria: "Beleza e Estética",
    pais: "Canada",
    cidade: "Toronto",
    beneficio: "CAD$ 25.00 no corte masculino",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "DRHS25JUN26",
    influenciador: "CanadensesOficial",
    regras: [
      "Válido de segunda a quinta-feira com agendamento prévio.",
      "Não acumulativo com outras promoções da barbearia.",
      "Apresentar o cupom no início do atendimento."
    ]
  },
  {
    id: 3,
    empresa: "Dr. James Olimpo",
    usados: "50 usados",
    stars: 3,
    categoria: "Saúde",
    pais: "EUA",
    cidade: "Orlando",
    beneficio: "10% cashback em consultas",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "DRJO10JUN26",
    influenciador: "ZecaIndica",
    regras: [
      "Válido apenas para consultas particulares presenciais.",
      "O cashback será creditado na sua conta cadastrada em até 10 dias úteis.",
      "Necessário agendamento prévio informando o convênio do Zeca."
    ]
  },
  {
    id: 4,
    empresa: "Hunters Brazilian HR",
    usados: "3 usados",
    stars: 4,
    categoria: "Trabalho e Emprego",
    pais: "EUA",
    cidade: "Seattle",
    beneficio: "100% cashback em consultorias em TI",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "HBHR100JUN26",
    influenciador: "TrabalhoEUA",
    regras: [
      "Válido para a primeira sessão de diagnóstico de carreira.",
      "Sujeito à disponibilidade de agenda dos consultores sêniores.",
      "O reembolso do valor pago na reserva é feito em até 48 horas após a sessão."
    ]
  },
  {
    id: 5,
    empresa: "Larissa Alvares English",
    usados: "20 usados",
    stars: 4,
    categoria: "Idiomas",
    pais: "EUA",
    cidade: "Nova Iorque",
    beneficio: "CAD$ 100.00 para cursos para CELPIP",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "LAEL100JUN26",
    influenciador: "InglesFacil",
    regras: [
      "Aplicável na matrícula de cursos preparatórios completos de no mínimo 3 meses.",
      "Desconto concedido na última parcela do plano contratado.",
      "Apenas para novos alunos."
    ]
  },
  {
    id: 6,
    empresa: "Two Canada Experience",
    usados: "1k usados",
    stars: 4,
    categoria: "Turismo",
    pais: "Canada",
    cidade: "Calgary",
    beneficio: "15% cashback para novos clientes",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "TCEX15JUN26",
    influenciador: "TwoCanada",
    regras: [
      "Aplicável a pacotes de viagens selecionados nas Rockies Canadenses.",
      "Cashback pago diretamente via Interac e-Transfer após a conclusão da viagem.",
      "Não válido para tarifas promocionais de baixa temporada."
    ]
  },
  {
    id: 7,
    empresa: "Brazil Burger Shop",
    usados: "5k usados",
    stars: 4,
    categoria: "Restaurantes",
    pais: "EUA",
    cidade: "Dallas",
    beneficio: "$ 15.00 de desconto em burgers",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "BBS15JUN26",
    influenciador: "BurgersDoZeca",
    regras: [
      "Válido em compras de combos selecionados acima de $45.",
      "Consumo local ou retirada (takeout) diretamente no balcão.",
      "Limitado a um uso por CPF cadastrado no sistema do parceiro."
    ]
  },
  {
    id: 8,
    empresa: "Marcus Yansen Dentist",
    usados: "5k usados",
    stars: 4,
    categoria: "Saúde",
    pais: "EUA",
    cidade: "Orlando",
    beneficio: "CAD$ 120.00 em tratamento dentário",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "MYD120JUN26",
    regras: [
      "Aplicável em tratamentos clínicos gerais acima de CAD$ 500.",
      "Não cumulativo com seguros dentários locais.",
      "Apresentar o código do cupom na primeira consulta de avaliação."
    ]
  },
  {
    id: 9,
    empresa: "Brandnew Rentals",
    usados: "10k usados",
    stars: 4,
    categoria: "Imóveis",
    pais: "EUA",
    cidade: "Orlando",
    beneficio: "$ 5k de desconto locação de aptos",
    disponibilidade: "40 cupons disponíveis",
    tempo: "1 dia - 45 seg",
    codigo: "BNR5KJUN26",
    regras: [
      "Desconto diluído nas 12 primeiras parcelas do contrato anual de aluguel.",
      "Válido apenas para condomínios selecionados e parceiros da imobiliária.",
      "Sujeito a aprovação de crédito e análise de antecedentes."
    ]
  }
];

// Estado global da aplicação na sessão
const AppState = {
  selectedCouponId: null,
  activeFilters: {
    country: "all",
    city: "all",
    category: "all",
    search: ""
  }
};

// Inicialização da Página
document.addEventListener("DOMContentLoaded", () => {
  checkUserLoginStatus();
  initGlobalEvents();
  
  // Identifica a página atual
  const path = window.location.pathname.toLowerCase();
  if (path.includes("index.html") || path === "/" || path.endsWith("/pergunta%20pro%20zeca/") || path.endsWith("/pergunta pro zeca/") || path.endsWith("/index")) {
    initHomePage();
  } else if (path.includes("clube-landing")) {
    initLandingPage();
  } else if (path.includes("clube-vantagens")) {
    initCatalogPage();
  } else if (path.includes("influenciador-perfil")) {
    initInfluencerPage();
  }
});

// Inicializadores de Eventos Globais
function initGlobalEvents() {
  const loginModal = document.getElementById("login-modal");
  const cupomModal = document.getElementById("cupom-modal");
  const loginForm = document.getElementById("login-form");
  
  if (loginModal || cupomModal) {
    // Fechamento de Modais
    document.getElementById("btn-close-login")?.addEventListener("click", () => closeModal(loginModal));
    document.getElementById("btn-close-cupom")?.addEventListener("click", () => closeModal(cupomModal));
    
    window.addEventListener("click", (e) => {
      if (e.target === loginModal) closeModal(loginModal);
      if (e.target === cupomModal) closeModal(cupomModal);
    });
    
    // Toggle Mostrar/Ocultar Senha no Login
    document.getElementById("btn-toggle-pwd")?.addEventListener("click", function() {
      const input = document.getElementById("login-password");
      if (input && input.type === "password") {
        input.type = "text";
        this.textContent = "🙈";
      } else if (input) {
        input.type = "password";
        this.textContent = "👁";
      }
    });
    
    // Submissão do Formulário de Login
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        
        let nomeCliente = "CHARLES BAMAM MEDEIROS DE SOUZA";
        if (email.toLowerCase().includes("charles")) {
          nomeCliente = "CHARLES BAMAM MEDEIROS DE SOUZA";
        } else {
          const userPart = email.split("@")[0];
          nomeCliente = userPart.charAt(0).toUpperCase() + userPart.slice(1) + " (Membro)";
        }
        
        localStorage.setItem("zeca_cliente_nome", nomeCliente);
        checkUserLoginStatus();
        closeModal(loginModal);
        
        const headerJoinBtn = document.getElementById("btn-header-join");
        if (headerJoinBtn) {
          headerJoinBtn.textContent = "Quero participar";
        }
        
        if (AppState.selectedCouponId !== null) {
          openCupomModal(AppState.selectedCouponId);
        }
      });
    }

    // Acordeão do Cupom
    const accordionTrigger = document.getElementById("accordion-trigger");
    const accordionContent = document.getElementById("accordion-content");
    if (accordionTrigger && accordionContent) {
      accordionTrigger.addEventListener("click", () => {
        accordionTrigger.classList.toggle("active");
        if (accordionTrigger.classList.contains("active")) {
          accordionContent.style.display = "flex";
        } else {
          accordionContent.style.display = "none";
        }
      });
    }
    
    // Copiar link de indicação
    const btnCopy = document.getElementById("btn-copy-link-action");
    const btnCopyAnchor = document.getElementById("btn-copy-link-anchor");
    const copyInput = document.getElementById("copy-link-input-field");
    
    const handleCopyLink = (e) => {
      if (e) e.preventDefault();
      if (copyInput) {
        copyInput.select();
        copyInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyInput.value)
          .then(() => {
            alert("Link de indicação copiado com sucesso!");
          })
          .catch(err => {
            console.error("Falha ao copiar link: ", err);
          });
      }
    };
    
    btnCopy?.addEventListener("click", handleCopyLink);
    btnCopyAnchor?.addEventListener("click", handleCopyLink);
    
    // Salvar Print
    document.getElementById("btn-salvar-print")?.addEventListener("click", () => {
      window.print();
    });
  }
}

// Verifica e exibe estado de login no header
function checkUserLoginStatus() {
  const profileIndicator = document.getElementById("user-profile-indicator");
  const avatarInitials = document.getElementById("user-avatar-initials");
  const welcomeName = document.getElementById("user-welcome-name");
  const logoutBtn = document.getElementById("btn-user-logout");
  
  const nome = localStorage.getItem("zeca_cliente_nome");
  
  if (nome && profileIndicator) {
    profileIndicator.classList.add("active");
    
    // Pega o primeiro nome para a saudação
    const primeiroNome = nome.split(" ")[0];
    if (welcomeName) welcomeName.textContent = `Olá, ${primeiroNome}`;
    
    // Iniciais para o avatar (até 2 letras)
    const partesNome = nome.split(" ");
    let iniciais = "";
    if (partesNome.length > 0 && partesNome[0]) iniciais += partesNome[0].charAt(0).toUpperCase();
    if (partesNome.length > 1 && partesNome[1]) iniciais += partesNome[1].charAt(0).toUpperCase();
    if (avatarInitials) avatarInitials.textContent = iniciais || "M";
    
    // Ação do botão de Logout
    if (logoutBtn) {
      const newLogoutBtn = logoutBtn.cloneNode(true);
      logoutBtn.parentNode.replaceChild(newLogoutBtn, logoutBtn);
      newLogoutBtn.addEventListener("click", () => {
        localStorage.removeItem("zeca_cliente_nome");
        window.location.reload();
      });
    }
  } else if (profileIndicator) {
    profileIndicator.classList.remove("active");
  }
}

/* ================= LÓGICA DA PÁGINA HOME ================= */
function initHomePage() {
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const tags = document.querySelectorAll(".search-tag");
  
  if (searchForm && searchInput) {
    // Ao clicar em enviar pergunta
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query !== "") {
        // Redireciona para o WhatsApp com o texto preenchido
        const whatsappNumber = "5500000000000"; // Número fictício do Zeca
        const textEncoded = encodeURIComponent(`Olá Zeca, tudo bem? Tenho uma dúvida: ${query}`);
        window.open(`https://wa.me/${whatsappNumber}?text=${textEncoded}`, "_blank");
      }
    });
    
    // Suporte ao Enter no textarea para enviar (Shift+Enter pula linha)
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        searchForm.dispatchEvent(new Event("submit"));
      }
    });
  }
  
  // Clique nas tags sugestivas
  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = tag.textContent;
        searchInput.focus();
      }
    });
  });
}

/* ================= LÓGICA DA LANDING PAGE DO CLUBE ================= */
function initLandingPage() {
  const countrySelect = document.getElementById("reg-country");
  const citySelect = document.getElementById("reg-city");
  const registerForm = document.getElementById("register-form");
  
  if (countrySelect && citySelect) {
    countrySelect.addEventListener("change", () => {
      const pais = countrySelect.value;
      
      // Limpa as cidades anteriores
      citySelect.innerHTML = '<option value="" disabled selected>Escolha a Cidade</option>';
      
      if (pais && CIDADES_POR_PAIS[pais]) {
        citySelect.removeAttribute("disabled");
        CIDADES_POR_PAIS[pais].forEach(cidade => {
          const option = document.createElement("option");
          option.value = cidade;
          option.textContent = cidade;
          citySelect.appendChild(option);
        });
      } else {
        citySelect.setAttribute("disabled", "true");
      }
    });
  }
  
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("reg-name").value.trim();
      
      // Salva o nome do usuário no localStorage para simular o cadastro e a autenticação
      localStorage.setItem("zeca_cliente_nome", nome);
      
      // Redireciona para o catálogo de vantagens
      window.location.href = "clube-vantagens.html";
    });
  }
}

/* ================= LÓGICA DO CATÁLOGO DE VANTAGENS ================= */
function initCatalogPage() {
  // Captura o influenciador da URL se existir e salva no localStorage
  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get('ref') || urlParams.get('influencer') || urlParams.get('influenciador');
  if (refParam) {
    localStorage.setItem('zeca_influenciador_nome', refParam);
  }

  const couponsContainer = document.getElementById("coupons-container");
  const countryFilter = document.getElementById("filter-country");
  const cityFilter = document.getElementById("filter-city");
  const categoryFilter = document.getElementById("filter-category");
  const searchFilter = document.getElementById("catalog-search");
  const headerJoinBtn = document.getElementById("btn-header-join");
  
  // Controle de Modais
  const loginModal = document.getElementById("login-modal");
  const cupomModal = document.getElementById("cupom-modal");
  const loginForm = document.getElementById("login-form");
  
  // Trata o botão "Quero participar" do cabeçalho do catálogo
  if (headerJoinBtn) {
    headerJoinBtn.textContent = "Quero participar";
    headerJoinBtn.addEventListener("click", () => {
      const cadastrado = localStorage.getItem("zeca_cliente_nome");
      if (cadastrado) {
        alert(`Você já está logado como: ${cadastrado}`);
      } else {
        openModal(loginModal);
      }
    });
  }

  // Se o país mudar nos filtros do catálogo
  if (countryFilter && cityFilter) {
    countryFilter.addEventListener("change", () => {
      const pais = countryFilter.value;
      AppState.activeFilters.country = pais;
      AppState.activeFilters.city = "all"; // reseta cidade
      
      cityFilter.innerHTML = '<option value="all">Escolha a Cidade</option>';
      
      if (pais && pais !== "all" && CIDADES_POR_PAIS[pais]) {
        cityFilter.removeAttribute("disabled");
        CIDADES_POR_PAIS[pais].forEach(cidade => {
          const option = document.createElement("option");
          option.value = cidade;
          option.textContent = cidade;
          cityFilter.appendChild(option);
        });
      } else {
        cityFilter.setAttribute("disabled", "true");
      }
      
      filterAndRenderCoupons();
    });
  }
  
  // Demais filtros
  if (cityFilter) {
    cityFilter.addEventListener("change", () => {
      AppState.activeFilters.city = cityFilter.value;
      filterAndRenderCoupons();
    });
  }
  
  if (categoryFilter) {
    categoryFilter.addEventListener("change", () => {
      AppState.activeFilters.category = categoryFilter.value;
      filterAndRenderCoupons();
    });
  }
  
  if (searchFilter) {
    searchFilter.addEventListener("input", () => {
      AppState.activeFilters.search = searchFilter.value.trim().toLowerCase();
      filterAndRenderCoupons();
    });
  }

  // Render inicial
  renderCoupons(CUPONS_DATA);
  
  // Botão do Banner Promocional Principal
  document.getElementById("btn-featured-cupom")?.addEventListener("click", () => {
    // Abre o cupom do Two Canada Experience (ID 6 na base de dados)
    handleCouponGrab(6);
  });

  // Lógica do Modal de Convite (Popup)
  setTimeout(() => {
    const cadastrado = localStorage.getItem("zeca_cliente_nome");
    const inviteModal = document.getElementById("invite-modal");
    if (!cadastrado && inviteModal) {
      openModal(inviteModal);
    }
  }, 3000);
}

// Filtra e Renderiza os cupons conforme o estado dos filtros
function filterAndRenderCoupons() {
  const f = AppState.activeFilters;
  const filtered = CUPONS_DATA.filter(coupon => {
    const matchCountry = f.country === "all" || coupon.pais === f.country;
    const matchCity = f.city === "all" || coupon.cidade === f.city;
    const matchCategory = f.category === "all" || coupon.categoria === f.category;
    
    const searchText = f.search;
    const matchSearch = searchText === "" || 
      coupon.empresa.toLowerCase().includes(searchText) || 
      coupon.beneficio.toLowerCase().includes(searchText) ||
      coupon.categoria.toLowerCase().includes(searchText) ||
      coupon.cidade.toLowerCase().includes(searchText);
      
    return matchCountry && matchCity && matchCategory && matchSearch;
  });
  
  renderCoupons(filtered);
}

// Renderiza a lista de cupons no Grid
function renderCoupons(cuponsList) {
  const container = document.getElementById("coupons-container");
  if (!container) return;
  
  container.innerHTML = "";
  
  if (cuponsList.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted); font-weight: 500;">Nenhum cupom encontrado para os filtros selecionados.</div>`;
    return;
  }
  
  cuponsList.forEach(coupon => {
    // Cria estrelas
    let starsHtml = "";
    for (let i = 0; i < 5; i++) {
      starsHtml += i < coupon.stars ? "★" : "☆";
    }
    
    const card = document.createElement("div");
    card.className = "coupon-card";
    card.innerHTML = `
      <div class="coupon-card-header">
        <h3>${coupon.empresa}</h3>
        <span class="used-badge">${coupon.usados}</span>
      </div>
      <div class="rating-stars">${starsHtml}</div>
      <div class="coupon-meta">
        <div class="meta-item">
          <!-- Ícone Estrela/Categoria Contornado Verde -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="meta-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span>${coupon.categoria}</span>
        </div>
        <div class="meta-item">
          <!-- Ícone Localização Contornado Verde -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="meta-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>${coupon.cidade} / ${coupon.pais === "Canada" ? "Canadá" : "EUA"}</span>
        </div>
      </div>
      <div class="coupon-offer-box">
        <div class="offer-value">${coupon.beneficio}</div>
        <div class="offer-details">
          <span>${coupon.disponibilidade}</span>
          <span class="timer-badge">
            <img src="icones/time-left.svg" alt="Relógio" style="width: 12px; height: 12px; margin-right: 4px;">
            ${coupon.tempo}
          </span>
        </div>
        <button class="btn-grab" onclick="handleCouponGrab(${coupon.id})" type="button">Pegar esse benefício</button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Lida com o clique no botão de pegar benefício
window.handleCouponGrab = function(couponId) {
  AppState.selectedCouponId = couponId;
  const cadastrado = localStorage.getItem("zeca_cliente_nome");
  
  if (cadastrado) {
    // Usuário já cadastrado/logado -> abre o cupom diretamente
    openCupomModal(couponId);
  } else {
    // Não cadastrado -> abre modal de login
    const loginModal = document.getElementById("login-modal");
    openModal(loginModal);
  }
};

// Abre o Modal do Cupom e preenche com os dados corretos
function openCupomModal(couponId) {
  const cupomModal = document.getElementById("cupom-modal");
  const coupon = CUPONS_DATA.find(c => c.id === couponId);
  if (!coupon || !cupomModal) return;
  
  // Obtém influenciador: primeiro tenta da URL/localStorage, senão tenta do cupom, senão usa padrão "TwoCanada"
  let influencer = localStorage.getItem("zeca_influenciador_nome");
  if (!influencer) {
    influencer = coupon.influenciador || "TwoCanada";
  }

  // Preenche dados do modal
  const brandBox = document.getElementById("cupom-brand");
  const codeText = document.getElementById("cupom-code-text");
  const titleText = document.getElementById("cupom-title-text");
  const clientName = document.getElementById("cupom-client-name");
  const influencerName = document.getElementById("cupom-influencer-name");
  const expiryTag = document.getElementById("cupom-expiry-tag");
  const rulesList = document.querySelector(".cupom-rules-list");
  const copyInputField = document.getElementById("copy-link-input-field");
  
  if (brandBox) brandBox.textContent = coupon.empresa;
  if (codeText) codeText.textContent = coupon.codigo;
  if (titleText) titleText.textContent = coupon.beneficio;
  if (expiryTag) expiryTag.textContent = `Encerra em 23/06/2026`; // Data padrão simulada
  if (copyInputField) copyInputField.value = `https://pergunteprozeca.com/clube-vantagens?cupom=${coupon.codigo}&ref=${encodeURIComponent(influencer)}`;
  
  const nomeCadastrado = localStorage.getItem("zeca_cliente_nome") || "CHARLES BAMAM MEDEIROS DE SOUZA";
  if (clientName) clientName.textContent = nomeCadastrado;
  if (influencerName) influencerName.textContent = influencer;

  // Configuração do QR Code Dinâmico usando a API qrserver.com (robusta contra acentuação e espaços)
  const qrCodeImg = document.getElementById("cupom-qrcode-img");
  if (qrCodeImg) {
    const valUrl = `https://pergunteprozeca.com/validar-cupom?codigo=${coupon.codigo}&cliente=${encodeURIComponent(nomeCadastrado)}&ref=${encodeURIComponent(influencer)}`;
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(valUrl)}`;
  }
  
  // Link dinâmico para o WhatsApp com os dados de resgate e o influenciador
  const btnSendWhatsapp = document.getElementById("btn-send-whatsapp");
  if (btnSendWhatsapp) {
    const whatsMsg = `Olá Zeca! Acabei de resgatar meu cupom no Clube de Vantagens:%0A%0A🎫 *Código:* ${coupon.codigo}%0A🏢 *Parceiro:* ${coupon.empresa}%0A🎁 *Benefício:* ${coupon.beneficio}%0A👤 *Cliente:* ${nomeCadastrado}%0A📣 *Influenciador:* ${influencer}%0A%0AComo faço para usar?`;
    btnSendWhatsapp.href = `https://wa.me/5500000000000?text=${whatsMsg}`;
  }
  
  // Renderiza regras
  if (rulesList) {
    rulesList.innerHTML = "";
    coupon.regras.forEach(regra => {
      const li = document.createElement("li");
      li.textContent = regra;
      rulesList.appendChild(li);
    });
  }
  
  openModal(cupomModal);
}

// Funções de Utilitários de Modal
function openModal(modal) {
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // trava rolagem da página
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = ""; // destrava rolagem
}

window.openModal = openModal;
window.closeModal = closeModal;

let influencerCouponsLoaded = false;

window.loadMoreCoupons = function() {
  influencerCouponsLoaded = true;
  const path = window.location.pathname.toLowerCase();
  if (path.includes("influenciador-perfil")) {
    const coupons = document.querySelectorAll(".horizontal-coupon-card");
    coupons.forEach(coupon => {
      coupon.classList.remove("coupon-hidden");
    });
    const btnLoadMore = document.getElementById("btn-load-more");
    if (btnLoadMore) {
      btnLoadMore.style.display = "none";
    }
  } else {
    const hiddenCoupons = document.querySelectorAll(".coupon-hidden");
    hiddenCoupons.forEach(coupon => {
      coupon.classList.remove("coupon-hidden");
    });
    const btnLoadMore = document.getElementById("btn-load-more");
    if (btnLoadMore) {
      btnLoadMore.style.display = "none";
    }
  }
};

function initInfluencerPage() {
  const filterCategory = document.getElementById("filter-category");
  const filterCountry = document.getElementById("filter-country");
  const filterCity = document.getElementById("filter-city");
  
  if (!filterCategory || !filterCountry || !filterCity) return;
  
  // Evento ao alterar país
  filterCountry.addEventListener("change", () => {
    const selectedCountry = filterCountry.value;
    
    // Reseta cidade
    filterCity.innerHTML = '<option value="all">Todas as Cidades</option>';
    
    if (selectedCountry === "all") {
      filterCity.disabled = true;
    } else {
      filterCity.disabled = false;
      const cidades = CIDADES_POR_PAIS[selectedCountry] || [];
      cidades.forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade;
        option.textContent = cidade;
        filterCity.appendChild(option);
      });
    }
    
    filterInfluencerCoupons();
  });
  
  // Eventos ao alterar categoria ou cidade
  filterCategory.addEventListener("change", filterInfluencerCoupons);
  filterCity.addEventListener("change", filterInfluencerCoupons);
}

function filterInfluencerCoupons() {
  const categoryVal = document.getElementById("filter-category").value;
  const countryVal = document.getElementById("filter-country").value;
  const cityVal = document.getElementById("filter-city").value;
  const btnLoadMore = document.getElementById("btn-load-more");
  const noMsg = document.getElementById("no-coupons-message");
  
  const hasActiveFilter = (categoryVal !== "all" || countryVal !== "all" || cityVal !== "all");
  const coupons = document.querySelectorAll(".horizontal-coupon-card");
  
  if (!hasActiveFilter) {
    // Caso em que nenhum filtro está ativo (Resete ou Estado Inicial)
    coupons.forEach((coupon, index) => {
      if (index < 3 || influencerCouponsLoaded) {
        coupon.classList.remove("coupon-hidden");
      } else {
        coupon.classList.add("coupon-hidden");
      }
    });
    
    if (btnLoadMore) {
      btnLoadMore.style.display = influencerCouponsLoaded ? "none" : "inline-block";
    }
    if (noMsg) {
      noMsg.classList.add("coupon-hidden");
    }
    return;
  }
  
  // Caso em que há pelo menos um filtro ativo
  if (btnLoadMore) {
    btnLoadMore.style.display = "none";
  }
  
  let visibleCount = 0;
  
  coupons.forEach(coupon => {
    const cardCategory = coupon.getAttribute("data-categoria");
    const cardCountry = coupon.getAttribute("data-pais");
    const cardCity = coupon.getAttribute("data-cidade");
    
    const matchCategory = (categoryVal === "all" || cardCategory === categoryVal);
    const matchCountry = (countryVal === "all" || cardCountry === countryVal);
    const matchCity = (cityVal === "all" || cardCity === cityVal);
    
    if (matchCategory && matchCountry && matchCity) {
      coupon.classList.remove("coupon-hidden");
      visibleCount++;
    } else {
      coupon.classList.add("coupon-hidden");
    }
  });
  
  if (noMsg) {
    if (visibleCount === 0) {
      noMsg.classList.remove("coupon-hidden");
    } else {
      noMsg.classList.add("coupon-hidden");
    }
  }
}



