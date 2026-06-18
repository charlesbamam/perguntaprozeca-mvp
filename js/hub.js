(function() {
  // Cidades por país para preencher o filtro dinamicamente
  const CIDADES_POR_PAIS = {
    Canada: ["Calgary", "Toronto", "Vancouver", "Montreal"],
    EUA: ["Orlando", "Dallas", "Miami", "Boston", "Jacksonville"]
  };

  // Base de dados dos Influenciadores reais da imagem de referência e parceiros do Zeca
  const INFLUENCIADORES_DATA = [
    {
      id: 1,
      username: "twocanada",
      name: "Two Canada",
      avatar: "imagens/inf_hub_twocanada.png",
      pais: "Canada",
      cidade: "Calgary",
      seguidoresText: "300k seguidores",
      seguidoresNum: 300000,
      faixaSeguidores: "500k",
      plataforma: "Instagram",
      bio: "Mostramos como é a vida real de uma família de imigrantes no Canadá. 🍁 A família TWOCANADA já não é formada apenas por dois. Quando deixamos o interior de São Paulo para começar uma nova vida em Calgary, Alberta, éramos só nós dois: Joel e Bruna. Hoje, mais de 6 anos depois, nossa história ganhou novos capítulos com Joshua e Samuel, nossos filhos canadenses, que completam e dão ainda mais sentido à família TWOCANADA.",
      cuponsText: "40 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 2,
      username: "irmaoprezia",
      name: "Irmãos Prezia",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Toronto",
      seguidoresText: "400k seguidores",
      seguidoresNum: 400000,
      faixaSeguidores: "500k",
      plataforma: "Youtube",
      bio: "Somos os irmãos brasileiros mais conhecidos do Canadá 🇨🇦🎬 filming/videos 🎥 + 23 milhões de views no YouTube",
      cuponsText: "120 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 3,
      username: "thuanyamaro",
      name: "Thuany Amaro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Calgary",
      seguidoresText: "65k seguidores",
      seguidoresNum: 65000,
      faixaSeguidores: "100k",
      plataforma: "Instagram",
      bio: "Te mostro os Estados Unidos com humor 🇺🇸 Brasileira nos EUA há 9 anos 📧 thuanyassessoria@gmail.com",
      cuponsText: "10 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 4,
      username: "thuanyamaro2",
      name: "Thuany Amaro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Calgary",
      seguidoresText: "65k seguidores",
      seguidoresNum: 65000,
      faixaSeguidores: "100k",
      plataforma: "Instagram",
      bio: "Te mostro os Estados Unidos com humor 🇺🇸 Brasileira nos EUA há 9 anos 📧 thuanyassessoria@gmail.com",
      cuponsText: "10 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 5,
      username: "thuanyamaro3",
      name: "Thuany Amaro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Calgary",
      seguidoresText: "65k seguidores",
      seguidoresNum: 65000,
      faixaSeguidores: "100k",
      plataforma: "Instagram",
      bio: "Te mostro os Estados Unidos com humor 🇺🇸 Brasileira nos EUA há 9 anos 📧 thuanyassessoria@gmail.com",
      cuponsText: "10 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 6,
      username: "thuanyamaro4",
      name: "Thuany Amaro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Calgary",
      seguidoresText: "65k seguidores",
      seguidoresNum: 65000,
      faixaSeguidores: "100k",
      plataforma: "Instagram",
      bio: "Te mostro os Estados Unidos com humor 🇺🇸 Brasileira nos EUA há 9 anos 📧 thuanyassessoria@gmail.com",
      cuponsText: "10 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 7,
      username: "thuanyamaro5",
      name: "Thuany Amaro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Calgary",
      seguidoresText: "65k seguidores",
      seguidoresNum: 65000,
      faixaSeguidores: "100k",
      plataforma: "Instagram",
      bio: "Te mostro os Estados Unidos com humor 🇺🇸 Brasileira nos EUA há 9 anos 📧 thuanyassessoria@gmail.com",
      cuponsText: "10 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 8,
      username: "thuanyamaro6",
      name: "Thuany Amaro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Calgary",
      seguidoresText: "65k seguidores",
      seguidoresNum: 65000,
      faixaSeguidores: "100k",
      plataforma: "Instagram",
      bio: "Te mostro os Estados Unidos com humor 🇺🇸 Brasileira nos EUA há 9 anos 📧 thuanyassessoria@gmail.com",
      cuponsText: "10 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 9,
      username: "diegoangel",
      name: "Diego Angel",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      pais: "EUA",
      cidade: "Orlando",
      seguidoresText: "85k seguidores",
      seguidoresNum: 85000,
      faixaSeguidores: "100k",
      plataforma: "Instagram",
      bio: "Guia de viagens, parques temáticos e estilo de vida em Orlando.",
      cuponsText: "25 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 10,
      username: "jazzbond",
      name: "Jazz Bond",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      pais: "EUA",
      cidade: "Jacksonville",
      seguidoresText: "8.5k seguidores",
      seguidoresNum: 8500,
      faixaSeguidores: "10k",
      plataforma: "Instagram",
      bio: "Beauty and lifestyle content creator based in Jacksonville.",
      cuponsText: "15 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 11,
      username: "alessiahabibi",
      name: "Alessia Habibi",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      pais: "EUA",
      cidade: "Miami",
      seguidoresText: "28.2k seguidores",
      seguidoresNum: 28200,
      faixaSeguidores: "50k",
      plataforma: "Tik Tok",
      bio: "Fashion blogger and UGC creator.",
      cuponsText: "5 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 12,
      username: "emilyhill",
      name: "Emily Hill",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      pais: "EUA",
      cidade: "Boston",
      seguidoresText: "24.5k seguidores",
      seguidoresNum: 24500,
      faixaSeguidores: "50k",
      plataforma: "Instagram",
      bio: "Foodie exploring local culinary scenes.",
      cuponsText: "18 cupons disponíveis",
      link: "influenciador-perfil.html"
    },
    {
      id: 13,
      username: "melissabrown",
      name: "Melissa Brown",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80",
      pais: "Canada",
      cidade: "Toronto",
      seguidoresText: "4.5k seguidores",
      seguidoresNum: 4500,
      faixaSeguidores: "5k",
      plataforma: "Instagram",
      bio: "Professional food photographer and reviewer.",
      cuponsText: "8 cupons disponíveis",
      link: "influenciador-perfil.html"
    }
  ];

  // Configuração do Estado do Hub
  const HubState = {
    visibleCount: 12, // Mostrar 12 cards inicialmente
    filters: {
      influencer: "all",
      platform: "all",
      followers: "all",
      country: "all",
      city: "all"
    }
  };

  // Inicialização
  document.addEventListener("DOMContentLoaded", () => {
    initFilters();
    renderHub();
  });

  // Inicializa Eventos dos Filtros
  function initFilters() {
    const filterCountry = document.getElementById("filter-country");
    const filterCity = document.getElementById("filter-city");
    const btnBuscar = document.getElementById("btn-hub-buscar");
    const btnLimpar = document.getElementById("btn-hub-limpar");

    // Evento ao alterar país
    if (filterCountry && filterCity) {
      filterCountry.addEventListener("change", () => {
        const selectedCountry = filterCountry.value;
        
        // Reseta e limpa cidades
        filterCity.innerHTML = '<option value="all">Cidade</option>';
        
        if (selectedCountry === "all") {
          filterCity.disabled = true;
        } else {
          filterCity.disabled = false;
          const cidades = CIDADES_POR_PAIS[selectedCountry] || [];
          cidades.forEach(cidade => {
            const opt = document.createElement("option");
            opt.value = cidade;
            opt.textContent = cidade;
            filterCity.appendChild(opt);
          });
        }
      });
    }

    // Evento ao clicar em Buscar
    if (btnBuscar) {
      btnBuscar.addEventListener("click", () => {
        applyFilters();
        HubState.visibleCount = 12;
        renderHub();
      });
    }

    // Evento ao clicar em Limpar
    if (btnLimpar) {
      btnLimpar.addEventListener("click", (e) => {
        e.preventDefault();
        
        const filterInfluencer = document.getElementById("filter-influencer");
        const filterPlatform = document.getElementById("filter-platform");
        const filterFollowers = document.getElementById("filter-followers");
        
        if (filterInfluencer) filterInfluencer.value = "all";
        if (filterPlatform) filterPlatform.value = "all";
        if (filterFollowers) filterFollowers.value = "all";
        if (filterCountry) filterCountry.value = "all";
        
        if (filterCity) {
          filterCity.innerHTML = '<option value="all">Cidade</option>';
          filterCity.disabled = true;
          filterCity.value = "all";
        }

        HubState.filters = {
          influencer: "all",
          platform: "all",
          followers: "all",
          country: "all",
          city: "all"
        };

        HubState.visibleCount = 12;
        renderHub();
      });
    }
  }

  // Aplica as seleções dos selects no estado global
  function applyFilters() {
    const filterInfluencer = document.getElementById("filter-influencer");
    const filterPlatform = document.getElementById("filter-platform");
    const filterFollowers = document.getElementById("filter-followers");
    const filterCountry = document.getElementById("filter-country");
    const filterCity = document.getElementById("filter-city");

    HubState.filters.influencer = filterInfluencer ? filterInfluencer.value : "all";
    HubState.filters.platform = filterPlatform ? filterPlatform.value : "all";
    HubState.filters.followers = filterFollowers ? filterFollowers.value : "all";
    HubState.filters.country = filterCountry ? filterCountry.value : "all";
    HubState.filters.city = filterCity ? filterCity.value : "all";
  }

  // Filtro dos dados de influenciadores
  function getFilteredInfluencers() {
    // Mapa de faixas de seguidores para valores máximos
    const FAIXAS_SEGUIDORES = {
      "1k": 1000,
      "5k": 5000,
      "10k": 10000,
      "50k": 50000,
      "100k": 100000,
      "500k": 500000,
      "1M": Infinity // Mais de 1M = sem teto
    };

    return INFLUENCIADORES_DATA.filter(inf => {
      // 1. Filtro por Influenciador (busca por username)
      const matchInfluencer = HubState.filters.influencer === "all" || 
        inf.username.includes(HubState.filters.influencer);

      // 2. Filtro por Plataforma
      const matchPlatform = HubState.filters.platform === "all" || 
        inf.plataforma === HubState.filters.platform;

      // 3. Filtro por Seguidores (faixas cumulativas: "até X")
      let matchFollowers = true;
      if (HubState.filters.followers !== "all") {
        const faixa = HubState.filters.followers;
        if (faixa === "1M") {
          matchFollowers = inf.seguidoresNum >= 1000000;
        } else {
          const maxVal = FAIXAS_SEGUIDORES[faixa];
          matchFollowers = maxVal ? inf.seguidoresNum <= maxVal : true;
        }
      }

      // 4. Filtro por País
      const matchCountry = HubState.filters.country === "all" || 
        inf.pais === HubState.filters.country;

      // 5. Filtro por Cidade
      const matchCity = HubState.filters.city === "all" || 
        inf.cidade === HubState.filters.city;

      return matchInfluencer && matchPlatform && matchFollowers && matchCountry && matchCity;
    });
  }

  // Renderiza o grid de cards com o botão Carregar mais
  function renderHub() {
    const container = document.getElementById("hub-grid");
    const paginationContainer = document.getElementById("hub-pagination");
    const noResults = document.getElementById("hub-no-results");

    if (!container) return;

    const filtered = getFilteredInfluencers();
    const totalItems = filtered.length;

    if (totalItems === 0) {
      container.innerHTML = "";
      if (paginationContainer) paginationContainer.innerHTML = "";
      if (noResults) noResults.classList.remove("hidden-hub-msg");
      return;
    }

    if (noResults) noResults.classList.add("hidden-hub-msg");

    // Limitar exibição com base no visibleCount
    const itemsToRender = filtered.slice(0, HubState.visibleCount);

    // Renderizar cards
    container.innerHTML = itemsToRender.map(inf => createInfluencerCardHTML(inf)).join("");

    // Botão Carregar mais HTML (somente quando total de itens for maior que 12 e maior que os visíveis)
    if (paginationContainer) {
      if (totalItems > 12 && totalItems > HubState.visibleCount) {
        paginationContainer.innerHTML = `
          <button type="button" class="btn-load-more" onclick="loadMoreHubItems()">Carregar mais</button>
        `;
      } else {
        paginationContainer.innerHTML = "";
      }
    }
  }

  // Cria o componente HTML do Card de Influenciador idêntico ao mockup da imagem
  function createInfluencerCardHTML(inf) {
    const displayName = inf.name;
    
    return `
      <div class="influencer-card">
        <div class="inf-card-header">
          <img src="${inf.avatar}" alt="${displayName}" class="inf-avatar-round" onerror="this.src='imagens/ic_zeca_011.png'">
          <div class="inf-name-area">
            <h3>${displayName}</h3>
            <span class="inf-followers-count">${inf.seguidoresText}</span>
          </div>
        </div>
        
        <div class="inf-location-row">
          <span class="flag-icon">${inf.pais === 'Canada' ? '🇨🇦' : '🇺🇸'}</span>
          <span class="inf-location-text">${inf.cidade} / ${inf.pais === 'Canada' ? 'Canadá' : 'EUA'}</span>
        </div>
        
        <p class="inf-bio-text" title="${inf.bio}">${inf.bio}</p>
        
        <div class="inf-coupons-count">${inf.cuponsText}</div>
        
        <div class="inf-actions-area">
          <a href="${inf.link}" class="btn-access-profile">Acessar perfil</a>
        </div>
        
        <div class="inf-alliance-badge">
          PARCEIROS ALLIANCE <span class="stars">★★★★★</span>
        </div>
      </div>
    `;
  }

  // Função para carregar mais itens
  window.loadMoreHubItems = function() {
    HubState.visibleCount += 12;
    renderHub();
  };
})();
