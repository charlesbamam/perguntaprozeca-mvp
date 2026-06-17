# Pergunta pro Zeca — Design System
## Landing Page: Parcerias para Empresas e Profissionais

> Documento de referência para UX, visual e componentes da página de parcerias do Zeca.

---

## 1. Identidade Visual de Base

### Paleta de cores

| Token | Hex | Uso |
|---|---|---|
| `--color-brand-yellow` | `#F5E800` | Background hero, destaques primários |
| `--color-brand-green` | `#1E8C45` | CTAs principais, ícones, mascote |
| `--color-brand-green-light` | `#D0FFF7` | Seção de fechamento, cards suaves |
| `--color-black` | `#111111` | Headings, texto de alto contraste |
| `--color-white` | `#FFFFFF` | Fundo das seções neutras, cards |
| `--color-gray-100` | `#F5F5F5` | Fundo alternado de seções |
| `--color-gray-400` | `#9CA3AF` | Microcopy, labels secundários |
| `--color-green-cta-text` | `#0D5C2E` | Texto sobre fundos verdes claros |

> **Regra:** amarelo e verde nunca competem no mesmo elemento. Amarelo = palco. Verde = ação.

---

### Tipografia

| Papel | Fonte | Peso | Tamanho base |
|---|---|---|---|
| Display / Hero headline | **Montserrat** | 800 (ExtraBold) | 48–56px |
| Subtítulos de seção | **Montserrat** | 700 (Bold) | 28–36px |
| Corpo de texto | **Inter** | 400–500 | 16–18px |
| Labels / Eyebrows | **Inter** | 600 (SemiBold) | 11–12px, uppercase, letter-spacing 0.1em |
| Microcopy / Notas | **Inter** | 400 | 13px, cor gray-400 |

> Montserrat carrega a energia e confiança da marca. Inter garante legibilidade no corpo.

---

## 2. Princípios de UX

### 2.1 Hierarquia de intenção

A jornada do visitante segue um funil emocional:

```
Contexto (eu me identifico)
→ Diferenciação (isso é diferente)
→ Como funciona (eu entendo)
→ Para quem é (sou eu)
→ Oferta (quero entrar)
→ Formulário (me cadastro)
```

Cada seção tem **uma tarefa**. Nenhuma seção deve tentar vender e explicar ao mesmo tempo.

---

### 2.2 O mascote como elemento de ancoragem

O Zeca (personagem 3D) aparece no hero e pode reaparecer pontualmente. Regras:

- **Hero:** Zeca ocupa o lado direito, gesticulando, expressivo. Sempre sobrepondo o fundo, nunca enquadrado.
- **Seção de exemplos de conversa:** Zeca pode aparecer como avatar pequeno nas bolhas de resposta.
- **Seção final (CTA):** versão menor do Zeca, mais discreta — o texto é o protagonista aqui.
- **Nunca:** duplicar o mascote em posições próximas. Uma aparição impactante > várias decorativas.

---

### 2.3 Cards de benefício / funcionalidade

Baseado na referência visual (6 cards em grid 3×2):

- **Estrutura:** ícone monocromático (verde) + label em caps + headline descritiva
- **Fundo:** branco, borda `1px solid #E5E7EB`, border-radius `12px`
- **Hover:** elevação sutil com `box-shadow: 0 4px 16px rgba(0,0,0,0.08)` + transição 200ms
- **Grid:** 3 colunas em desktop, 2 em tablet, 1 em mobile
- **Espaçamento interno:** padding `24px`
- **Label:** cor `--color-brand-green`, 11px, uppercase, weight 600
- **Headline:** cor `--color-black`, 18px, weight 700, máximo 2 linhas

---

### 2.4 Seções alternadas

Para evitar monotonia visual sem perder clareza:

| Seção | Fundo | Observação |
|---|---|---|
| Hero | `--color-brand-yellow` | Impacto máximo |
| Contexto | `--color-white` | Respiro |
| Diferenciação | `--color-gray-100` | Separação suave |
| Como Funciona | `--color-white` | Foco nos passos |
| Benefício principal | `--color-brand-yellow` | Segundo pico de energia |
| Para quem é | `--color-white` | Lista de categorias |
| Confiança | `--color-gray-100` | Credibilidade, tom sério |
| Planos | `--color-white` | Limpeza para decisão |
| Exemplos de conversa | `--color-brand-green-light` | Warmth, proximidade |
| Formulário | `--color-white` | Foco na ação |
| Final | `--color-brand-green` | Fechamento com força |

> **Regra:** nunca duas seções com fundo `--color-brand-yellow` adjacentes. O amarelo é escasso — e por isso funciona.

---

## 3. Componentes Específicos

### 3.1 Hero Section

```
┌─────────────────────────────────────────────────────┐
│ [Logo Zeca]            [Pergunte no WhatsApp]  [Olá] │
├─────────────────────────────────────────────────────┤
│                                                      │
│  [Eyebrow: badge "Parcerias"]                        │
│                                                      │
│  Headline grande (2–3 linhas, peso 800)              │
│                                                      │
│  Subheadline (corpo, máx. 2 linhas)                  │
│                                                      │
│  [CTA primário ▶]   [CTA secundário outline]         │
│  Microcopy abaixo do CTA                             │
│                                        [Zeca 3D →]  │
│                                    [mapa ao fundo]   │
└─────────────────────────────────────────────────────┘
```

- **Headline:** máx. 3 linhas, fonte 48px desktop / 32px mobile
- **CTA primário:** fundo `--color-black`, texto branco, border-radius `999px` (pill), padding `14px 28px`
- **CTA secundário:** borda `2px solid --color-black`, fundo transparente, mesmo tamanho
- **Mapa:** elemento decorativo, baixa opacidade (~20%), não deve competir com o Zeca
- **Zeca:** posição `right: -5%`, `bottom: 0`, altura ~80% do hero. Em mobile: reduz para 50% e vai para baixo do texto.

---

### 3.2 Seção "Como Funciona" — Steps numerados

```
Passo 1   →   Passo 2   →   Passo 3   →   Passo 4   →   Passo 5
```

- **Layout:** linha horizontal com seta conectora em desktop; lista vertical em mobile
- **Número:** círculo com fundo `--color-brand-green`, texto branco, 24px
- **Título do passo:** Montserrat Bold, 16px
- **Descrição:** Inter 400, 14px, cor gray-600
- **Conectores:** linha tracejada `2px dashed --color-brand-green`, opacity 40%
- **Hover no passo:** o card do passo levanta suavemente (translateY -4px)

---

### 3.3 Bolhas de conversa (Seção de Exemplos)

Simula uma conversa de WhatsApp real:

```
┌──────────────────────────────────┐
│  [Avatar usuário]                │
│         "Zeca, preciso de..."    │ ← balão direito, fundo branco
│                                  │
│  [Avatar Zeca]                   │
│  "Claro! Posso te indicar..."    │ ← balão esquerdo, fundo verde claro
└──────────────────────────────────┘
```

- **Balão do usuário:** fundo `#FFFFFF`, borda sutil, alinhado à direita
- **Balão do Zeca:** fundo `#DCF8C6` (verde WhatsApp), alinhado à esquerda
- **Fonte:** Inter 15px, como no WhatsApp real
- **Avatar do Zeca:** versão pequena do mascote, 36px
- **Animação opcional:** digitação simulada (typing dots) antes da resposta aparecer no scroll

---

### 3.4 Seção de Planos

```
┌──────────────────┐   ┌──────────────────────────┐
│  Parceiro Base   │   │   Parceiro Prioridade ★  │
│  [lista incluso] │   │   [lista incluso]         │
│                  │   │   [badge DESTAQUE]        │
│  [Fale c/ nós]   │   │   [Fale c/ nós]           │
└──────────────────┘   └──────────────────────────┘
```

- **Card Base:** borda `2px solid #E5E7EB`, fundo branco
- **Card Prioridade:** borda `2px solid --color-brand-green`, fundo branco, sombra mais forte
- **Badge "Destaque":** ribbon ou pill no topo do card, fundo `--color-brand-green`, texto branco
- **CTA dos planos:** botão outline com cor verde — não compete com o CTA hero
- **Nota de rodapé:** abaixo dos cards, em microcopy gray-400, explicando que prioridade ≠ garantia

---

### 3.5 Formulário de cadastro

- **Layout:** coluna única centralizada, max-width `560px`
- **Campos:** borda `1px solid #D1D5DB`, border-radius `8px`, padding `12px 16px`
- **Focus state:** borda `2px solid --color-brand-green`, sem outline padrão do browser
- **Dropdown de categoria:** styled select com ícone chevron
- **Checkbox de consentimento:** custom checkbox verde, label em 13px gray-600
- **CTA do formulário:** largura 100%, fundo `--color-brand-green`, texto branco, Montserrat Bold 16px
- **Microcopy abaixo do CTA:** "A entrada está sujeita à análise da equipe do Zeca." — centralizado, gray-400

---

## 4. Regras de Espaçamento

| Nível | Valor | Onde usar |
|---|---|---|
| `--space-xs` | 8px | Entre ícone e label |
| `--space-sm` | 16px | Padding interno de cards pequenos |
| `--space-md` | 24px | Padding de cards, gap entre elementos de seção |
| `--space-lg` | 48px | Padding vertical de seções (mobile) |
| `--space-xl` | 80px | Padding vertical de seções (desktop) |
| `--space-2xl` | 120px | Separação entre seções de alto impacto |

> **Regra de ouro:** seções com fundo `--color-brand-yellow` recebem `--space-2xl` vertical para dar "palco" ao amarelo.

---

## 5. Navegação e Header

- **Estilo:** fixo no topo (`position: sticky`), fundo branco, `box-shadow: 0 1px 0 #E5E7EB`
- **Logo:** à esquerda, com mascote e wordmark
- **CTA no header:** botão pill verde "Pergunte no WhatsApp" com ícone do WhatsApp
- **Saudação do usuário:** à direita (quando logado), avatar + nome, link "Sair"
- **Mobile:** hamburger menu, CTA de WhatsApp permanece visível

---

## 6. Microinterações e Motion

| Elemento | Comportamento | Duração |
|---|---|---|
| Cards de benefício | Hover eleva (translateY -4px + sombra) | 200ms ease |
| CTAs | Hover escurece 10% o fundo | 150ms ease |
| Steps do fluxo | Scroll-reveal sequencial da esquerda | 400ms staggered |
| Bolhas de conversa | Fade + slide-up no scroll | 300ms ease-out |
| Formulário: focus | Borda verde transiciona suave | 150ms ease |

> **Regra:** nenhuma animação deve durar mais de 500ms. Respeitar `prefers-reduced-motion`.

---

## 7. Responsividade

| Breakpoint | Comportamento |
|---|---|
| `> 1200px` | Layout máximo, Zeca grande, grid 3 colunas |
| `768px–1199px` | Grid 2 colunas, Zeca reduzido ao lado |
| `< 768px` | Grid 1 coluna, Zeca abaixo do texto hero, steps em lista vertical |
| `< 480px` | Tipografia reduzida, padding mínimo `--space-lg`, bolhas de conversa full-width |

---

## 8. Acessibilidade

- **Contraste mínimo:** 4.5:1 para texto normal, 3:1 para texto grande (verificar preto sobre amarelo — ok; verde claro sobre branco — verificar)
- **Foco visível:** todos os elementos interativos têm `focus-visible` com borda `2px solid --color-brand-green` e `outline-offset: 3px`
- **Alt text:** mascote Zeca → `"Zeca, o concierge digital do Pergunta pro Zeca, personagem animado sorrindo"`
- **Formulário:** todos os `<input>` têm `<label>` associado via `for`/`id`
- **Botões:** nunca apenas ícone sem texto ou `aria-label`
- **`prefers-reduced-motion`:** desativar todas as animações de scroll e de digitação simulada

---

## 9. Tom de Voz no UI

| Contexto | Tom | Exemplo |
|---|---|---|
| CTAs | Direto, ativo, primeira pessoa | "Quero meu negócio no Zeca" |
| Labels de eyebrow | Descritivo, conciso, neutro | "COMO FUNCIONA" |
| Microcopy | Honesto, sem hype | "A entrada está sujeita à análise." |
| Estados vazios | Orientador | "Preencha todos os campos para continuar." |
| Erros de formulário | Específico, sem culpa | "Informe um e-mail válido." |

> O Zeca fala como um amigo experiente — não como um vendedor, não como um formulário de governo.

---

## 10. Checklist de Qualidade

Antes de publicar a página, verificar:

- [ ] Contraste em todos os pares texto/fundo
- [ ] Zeca não é cortado em nenhum breakpoint
- [ ] CTA do hero visível sem scroll em viewport 375px × 667px
- [ ] Formulário funciona e valida em mobile
- [ ] Todos os campos têm label visível (não apenas placeholder)
- [ ] `prefers-reduced-motion` desativa animações
- [ ] Hover nos cards funciona no trackpad (não apenas mouse)
- [ ] Bolhas de conversa legíveis em tela pequena
- [ ] Planos lado a lado no tablet, empilhados no mobile
- [ ] Microcopy abaixo de cada CTA presente e legível

---

*Documento gerado para o projeto Pergunta pro Zeca — versão landing page de parcerias.*
