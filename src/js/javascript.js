/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Cartao(termo, definicao) {
  this.termo = termo;
  this.definicao = definicao;
}

function FlipCard() {
  var card = document.querySelector(".card");
  card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0)" : "rotateY(180deg)"; 
  
  // Nao precisa esconder nesse método de cartão animado
  // if (frente.style.visibility !== "hidden") {
  //   frente.style.visibility = "hidden";
  //   verso.style.visibility = "visible";
  // } else {
  //   frente.style.visibility = "visible";
  //   verso.style.visibility = "hidden";
  // }
}
    
var frente = document.getElementById("front");
var verso = document.getElementById("back");

var cartao1 = new Cartao(
  "Implantar e manter uma estrutura de governança",
  "Avaliar, Dirigir e Monitorar (EDM – Evaluate, Direct, and Monitor)"
);
var cartao2 = new Cartao(
  "Assegurar a entrega de benefícios",
 "Avaliar, Dirigir e Monitorar (EDM – Evaluate, Direct, and Monitor)");
var cartao3 = new Cartao(
  "Otimização de riscos garantida",
  " Avaliar, Dirigir e Monitorar (EDM – Evaluate, Direct, and Monitor)"
);
var cartao4 = new Cartao(
  "Otimização de recursos garantida",
  "Avaliar, Dirigir e Monitorar (EDM – Evaluate, Direct, and Monitor)"
);
var cartao5 = new Cartao(
  "Engajamento garantido das partes interessadas",
  "Avaliar, Dirigir e Monitorar (EDM – Evaluate, Direct, and Monitor)"
);
var cartao6 = new Cartao(
  "Estrutura de gestão de TI gerenciada",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao7 = new Cartao(
  "Estratégia gerenciada",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao8 = new Cartao(
  "Arquitetura corporativa gerenciada",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao9 = new Cartao(
  "Inovação gerenciada",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao10 = new Cartao(
  "Portifólio gerenciado",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao11 = new Cartao(
  "Orçamento e custos gerenciados",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao12 = new Cartao(
  "Recursos humanos gerenciados",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao13 = new Cartao(
  "Relacionamentos gerenciados",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao14 = new Cartao(
  "Contratos de serviços gerenciados",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao15 = new Cartao(
  "Fornecedores gerenciados",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao16 = new Cartao(
  "Qualidade gerenciada",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao17 = new Cartao(
  "Risco gerenciado",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao18 = new Cartao(
  "Segurança gerenciada",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao19 = new Cartao(
  "Dados gerenciados",
  "Alinhar, Planejar e Organizar (APO – Align, Plan, and Organize)"
);
var cartao20 = new Cartao(
  "Programas gerenciados",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao21 = new Cartao(
  "Requisitos definidos e gerenciados",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao22 = new Cartao(
  "Identificação e construção de soluções gerenciadas",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao23 = new Cartao(
  "Disponibilidade e capacidade gerenciadas",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao24 = new Cartao(
  "Mudanças organizacionais gerenciadas",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao25 = new Cartao(
  "Mudanças de TI gerenciadas",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao26 = new Cartao(
  "Transição e aceitação de mudanças de TI",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao27 = new Cartao(
  "Conhecimento gerenciado",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao28 = new Cartao(
  "Ativos gerenciados",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao29 = new Cartao(
  "Configuração gerenciada",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao30 = new Cartao(
  "Projetos gerenciados",
  "Construir, Adquirir e Implementar (BAI – Buid, Acquire, and Implement)"
);
var cartao31 = new Cartao(
  "Operações gerenciadas",
  "Entregar, Prestar Serviços e dar Suporte (DSS – Deliver, Service, and Support)."
);
var cartao32 = new Cartao(
  "Solicitações e incidentes de serviço gerenciados",
  "Entregar, Prestar Serviços e dar Suporte (DSS – Deliver, Service, and Support)."
);
var cartao33 = new Cartao(
  "Problemas gerenciados",
  "Entregar, Prestar Serviços e dar Suporte (DSS – Deliver, Service, and Support)."
);
var cartao34 = new Cartao(
  "Continuidade gerenciada",
  "Entregar, Prestar Serviços e dar Suporte (DSS – Deliver, Service, and Support)."
);
var cartao35 = new Cartao(
  "Serviços de segurança gerenciados",
  "Entregar, Prestar Serviços e dar Suporte (DSS – Deliver, Service, and Support)."
);
var cartao36 = new Cartao(
  "Controles de processos de negócios gerenciados",
  "Entregar, Prestar Serviços e dar Suporte (DSS – Deliver, Service, and Support)."
);
var cartao37 = new Cartao(
  "Monitoramento de desempenho e conformidade gerenciado",
  "Monitorar, Avaliar e Analisar (MEA – Monitor, Evaluate, and Assess)"
);
var cartao38 = new Cartao(
  "Sistema de controles internos gerenciados",
  "Monitorar, Avaliar e Analisar (MEA – Monitor, Evaluate, and Assess)"
);
var cartao39 = new Cartao(
  "Conformidade e requisitos externos gerenciados",
  "Monitorar, Avaliar e Analisar (MEA – Monitor, Evaluate, and Assess)"
);
var cartao40 = new Cartao(
  "Sistema de Avaliações Gerenciado",
  "Monitorar, Avaliar e Analisar (MEA – Monitor, Evaluate, and Assess)"
);


var meusCartoes = [cartao1, cartao2, cartao3, cartao4, cartao5, cartao6, cartao7, cartao8, cartao9, cartao10, cartao11, cartao12, cartao13,
                   cartao14, cartao15, cartao16, cartao17, cartao18, cartao19, cartao20, cartao21, cartao22, cartao23, cartao24, cartao25,
                   cartao26, cartao27, cartao28, cartao29, cartao30, cartao31, cartao32, cartao33, cartao34, cartao35, cartao36, cartao37,
                   cartao38, cartao39, cartao40];
var indiceCartao = 0;

frente.innerHTML = cartao1.termo;
frente.setAttribute("style", "color: black; text-align: center")
verso.innerHTML = cartao1.definicao;
verso.setAttribute("style", "color: black; text-align: center")
// Nao precisa esconder nesse método de cartão animado
// verso.style.visibility = "hidden";

function proxCart() {
  const card = document.querySelector(".card");
  const style = window.getComputedStyle(card);
  var angle = style.transform;
  // Validação para verificar se o cartao esta virado e desviralo para passar pro proximo item
  if (angle === 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)') {
    card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0)" : "rotateY(180deg)"; 
  } 
  indiceCartao = (indiceCartao + 1) % meusCartoes.length;
  frente.innerHTML = meusCartoes[indiceCartao].termo;
  verso.innerHTML = meusCartoes[indiceCartao].definicao;
}
function antCart() {
  const card = document.querySelector(".card");
  const style = window.getComputedStyle(card);
  var angle = style.transform;
  if (indiceCartao > 0) {
    indiceCartao = (indiceCartao - 1);
  } else if (indiceCartao === 0){ 
    indiceCartao = meusCartoes.length-1;
  } 
  // Validação para verificar se o cartao esta virado e desviralo para passar pro proximo item
  if (angle === 'matrix3d(-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1)') {
    card.style.transform = card.style.transform === "rotateY(180deg)" ? "rotateY(0)" : "rotateY(180deg)";  
  }
  frente.innerHTML = meusCartoes[indiceCartao].termo;
  verso.innerHTML = meusCartoes[indiceCartao].definicao;
}




