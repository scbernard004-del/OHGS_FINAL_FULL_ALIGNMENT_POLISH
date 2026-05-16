
// Apply saved language to loader immediately
(function(){
  const lang = localStorage.getItem("ohgs-lang") || "en";
  document.documentElement.lang = lang === "sw" ? "sw" : "en";
  document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("[data-en]").forEach(function(el){
      const val = el.getAttribute("data-" + lang);
      if(val) el.textContent = val;
    });
  });
})();


const OHGS_TRANSLATIONS = {"Home": "Nyumbani", "Products": "Bidhaa", "Services": "Huduma", "Projects": "Miradi", "Gallery": "Picha", "Promotions": "Matangazo", "About": "Kuhusu", "Contact": "Mawasiliano", "Explore Products": "Angalia Bidhaa", "Request Quote": "Omba Bei", "View Details": "Angalia Maelezo", "Order on WhatsApp": "Agiza WhatsApp", "Email OHGS": "Tuma Email OHGS", "Send Email": "Tuma Email", "Official OHGS Brand": "Nembo Rasmi ya OHGS", "OFFICIAL OHGS BRAND": "NEMBO RASMI YA OHGS", "Professional hardware, tools and equipment for serious projects.": "Hardware, zana na vifaa vya kazi kubwa kwa miradi ya kitaalamu.", "From pumps and power tools to construction materials and workshop essentials, OHGS helps contractors, technicians, builders and homeowners find the right product faster.": "Kuanzia pampu na zana za umeme hadi vifaa vya ujenzi na mahitaji ya warsha, OHGS husaidia wakandarasi, mafundi, wajenzi na wamiliki wa nyumba kupata bidhaa sahihi haraka.", "Visit us at Uhuru Rd - Arusha, message us on WhatsApp, or send an email inquiry for product availability, prices and delivery support.": "Tutembelee Uhuru Rd - Arusha, tutumie ujumbe WhatsApp, au tuma email kuulizia upatikanaji wa bidhaa, bei na delivery.", "Featured Products": "Bidhaa Maarufu", "Equipment customers ask for most.": "Vifaa vinavyouliziwa sana na wateja.", "Browse OHGS equipment by function.": "Angalia vifaa vya OHGS kwa matumizi yake.", "The product range is organized around common hardware store categories: power tools, hand tools, building materials, plumbing and pumps, outdoor equipment, cleaning, adhesives and facility supplies.": "Bidhaa zimepangwa kwa makundi ya hardware yanayotumika mara kwa mara: zana za umeme, zana za mkono, vifaa vya ujenzi, plumbing na pampu, vifaa vya nje, usafi, gundi na vifaa vya maeneo ya kazi.", "Pumps, Motors & Generators": "Pampu, Motors na Generators", "Outdoor Power Equipment": "Vifaa vya Nje vya Nguvu", "Cleaning Equipment": "Vifaa vya Usafi", "Workshop Equipment": "Vifaa vya Warsha", "Pumps & Outdoor Power": "Pampu na Vifaa vya Nje", "Cutting machines for timber work, maintenance tasks and outdoor jobs.": "Mashine za kukata mbao, kazi za matengenezo na kazi za nje.", "Compact and powerful washers for vehicle cleaning, outdoor floors, tools, workshops and facility maintenance.": "Mashine ndogo na zenye nguvu za kusafisha magari, sakafu za nje, zana, warsha na maeneo ya kazi.", "Portable diesel pumping equipment for construction sites, farms and heavy-duty field work where reliability matters.": "Pampu za dizeli zinazobebeka kwa sites za ujenzi, mashamba na kazi nzito za nje zinazohitaji uhakika.", "Store Walkthrough & Product Shelves": "Muonekano wa Duka na Shelves za Bidhaa", "Customer Service & Product Guidance": "Huduma kwa Wateja na Ushauri wa Bidhaa", "Inside OHGS Hardware Shop": "Ndani ya Duka la OHGS Hardware", "Equipment Demonstration & Shop Activity": "Demo ya Vifaa na Shughuli Dukani", "A quick look at OHGS products, shop environment and equipment demos.": "Tazama bidhaa za OHGS, mazingira ya duka na demo za vifaa.", "Product Details": "Maelezo ya Bidhaa", "Recommended Questions": "Maswali ya Kuuliza", "Ask on WhatsApp": "Uliza WhatsApp", "More Products": "Bidhaa Zaidi", "Contact OHGS": "Wasiliana na OHGS", "Ask for price, availability or recommendation.": "Ulizia bei, upatikanaji au ushauri.", "Send Order to WhatsApp": "Tuma Oda WhatsApp", "What We Supply": "Tunachouza", "Customer Support": "Huduma kwa Wateja", "Location": "Mahali", "Hardware, tools, pumps, building materials and industrial equipment in Arusha.": "Hardware, zana, pampu, vifaa vya ujenzi na vifaa vya viwandani Arusha.", "Power tools, pumps, compressors, chainsaws, pressure washers, plywood, adhesives, hand tools, construction materials and cleaning equipment.": "Zana za umeme, pampu, compressors, chainsaws, pressure washers, plywood, gundi, zana za mkono, vifaa vya ujenzi na vifaa vya usafi.", "Ask for current price, availability, model recommendation, accessories, bulk order support and delivery guidance.": "Ulizia bei ya sasa, upatikanaji, ushauri wa model, accessories, oda kubwa na maelekezo ya delivery.", "© OHGS Hardware & General Supply Ltd. Built for Arusha projects.": "© OHGS Hardware & General Supply Ltd. Imetengenezwa kwa miradi ya Arusha.", "Water Pump Systems": "Mifumo ya Pampu za Maji", "Diesel Water Pumps": "Pampu za Maji za Dizeli", "Air Compressors": "Air Compressors", "Pressure Washers": "Mashine za Kuosha kwa Pressure", "Power Tools": "Zana za Umeme", "Chainsaws": "Mashine za Kukata Mbao", "Plywood & Building Boards": "Plywood na Boards za Ujenzi", "Hand Tools & Spanners": "Zana za Mkono na Spanners", "Construction Materials": "Vifaa vya Ujenzi", "Loading OHGS Industrial Experience...": "Tunafungua tovuti ya OHGS..."};
const OHGS_WHATSAPP = "255689528193";
const OHGS_EMAIL = "olotuhardware@yahoo.com";
const loader = document.querySelector(".loader");

window.addEventListener("load", () => setTimeout(() => loader?.classList.add("hide"), 850));

document.querySelectorAll('a[href$=".html"]').forEach(link => {
  link.addEventListener("click", e => {
    if (link.target === "_blank") return;
    e.preventDefault();
    loader?.classList.remove("hide");
    setTimeout(() => { window.location.href = link.href; }, 550);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("show"); });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function toggleMenu() { document.getElementById("navMenu")?.classList.toggle("open"); }

function applyTheme() {
  const saved = localStorage.getItem("ohgs-theme") || "dark";
  document.body.classList.toggle("light", saved === "light");
}
function toggleTheme() {
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("ohgs-theme", isLight ? "dark" : "light");
  applyTheme();
}

function translateAttributes(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    const val = el.getAttribute("data-" + lang);
    if (val) el.textContent = val;
  });
  document.querySelectorAll("[data-placeholder-en]").forEach(el => {
    const val = el.getAttribute("data-placeholder-" + lang);
    if (val) el.setAttribute("placeholder", val);
  });
}

function translateTextNodes(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const p = node.parentElement;
      if (!p || ["SCRIPT","STYLE","TEXTAREA","INPUT","SELECT","OPTION","IFRAME","VIDEO","SOURCE"].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
      return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const clean = node.textContent.trim();
    if (!node.__ohgsOriginal) {
      const swToEn = Object.entries(OHGS_TRANSLATIONS).find(([en, sw]) => sw === clean);
      node.__ohgsOriginal = swToEn ? swToEn[0] : clean;
    }
    const key = node.__ohgsOriginal;
    if (lang === "sw") {
      const translated = OHGS_TRANSLATIONS[key] || OHGS_TRANSLATIONS[clean];
      if (translated) node.textContent = node.textContent.replace(clean, translated);
    } else {
      const swToEn = Object.entries(OHGS_TRANSLATIONS).find(([en, sw]) => sw === clean);
      node.textContent = node.textContent.replace(clean, swToEn ? swToEn[0] : key);
    }
  });
}

function applyLanguage() {
  const lang = localStorage.getItem("ohgs-lang") || "en";
  document.documentElement.lang = lang === "sw" ? "sw" : "en";
  translateAttributes(lang);
  translateTextNodes(lang);
}
function toggleLang() {
  const current = localStorage.getItem("ohgs-lang") || "en";
  localStorage.setItem("ohgs-lang", current === "en" ? "sw" : "en");
  applyLanguage();
}

function showContactToast(text) {
  let toast = document.querySelector(".contact-toast");
  if (!toast) { toast = document.createElement("div"); toast.className = "contact-toast"; document.body.appendChild(toast); }
  toast.textContent = text; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}
function openWhatsApp(message = "") {
  const defaultMessage = message || "Hello OHGS, I would like to make an order. Please assist me with price and availability.";
  window.open(`https://wa.me/${OHGS_WHATSAPP}?text=${encodeURIComponent(defaultMessage)}`, "_blank");
}
function openEmail(subject = "OHGS Hardware Inquiry", body = "") {
  const defaultBody = body || "Hello OHGS,\n\nI would like to ask about your products. Please send price and availability.\n\nThank you.";
  window.location.href = `mailto:${OHGS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(defaultBody)}`;
}
function submitWhatsApp(e) {
  e.preventDefault();
  const name = document.querySelector("#name")?.value || "";
  const phone = document.querySelector("#phone")?.value || "";
  const product = document.querySelector("#product")?.value || "";
  const msg = document.querySelector("#message")?.value || "";
  const text = `Hello OHGS, I would like to make an order.\n\nName: ${name}\nPhone: ${phone}\nProduct/Service: ${product}\nMessage: ${msg}\n\nPlease send me price and availability.`;
  showContactToast((localStorage.getItem("ohgs-lang") === "sw") ? "Tunafungua WhatsApp..." : "Opening WhatsApp order chat...");
  setTimeout(() => openWhatsApp(text), 350);
}
function submitEmail(e) {
  e.preventDefault();
  const name = document.querySelector("#name")?.value || "";
  const phone = document.querySelector("#phone")?.value || "";
  const product = document.querySelector("#product")?.value || "";
  const msg = document.querySelector("#message")?.value || "";
  const body = `Hello OHGS,\n\nI would like to make an order / inquiry.\n\nName: ${name}\nPhone: ${phone}\nProduct/Service: ${product}\nMessage: ${msg}\n\nPlease send me price and availability.\n\nThank you.`;
  showContactToast((localStorage.getItem("ohgs-lang") === "sw") ? "Tunafungua email..." : "Opening email message...");
  setTimeout(() => openEmail("OHGS Hardware Order / Inquiry", body), 350);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  applyLanguage();

  document.querySelectorAll(".whatsapp-action").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const product = btn.getAttribute("data-product") || "OHGS hardware products";
      showContactToast((localStorage.getItem("ohgs-lang") === "sw") ? "Tunafungua WhatsApp..." : "Opening WhatsApp order chat...");
      setTimeout(() => openWhatsApp(`Hello OHGS, I want to make an order for ${product}. Please send price and availability.`), 350);
    });
  });

  document.querySelectorAll(".email-action").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const product = btn.getAttribute("data-product") || "OHGS hardware products";
      showContactToast((localStorage.getItem("ohgs-lang") === "sw") ? "Tunafungua email..." : "Opening email message...");
      setTimeout(() => openEmail("OHGS Product Inquiry", `Hello OHGS,\n\nI would like to ask about ${product}. Please send price and availability.\n\nThank you.`), 350);
    });
  });
});


// Header shrink animation on scroll
function ohgsHeaderScrollEffect(){
  const header = document.querySelector(".site-header, header");
  if(!header) return;
  if(window.scrollY > 55){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", ohgsHeaderScrollEffect, { passive:true });
document.addEventListener("DOMContentLoaded", ohgsHeaderScrollEffect);








// OHGS enhanced menu animation: button ripple, page reaction, smooth open/close
function ohgsEnhancedMenuAnimation(){
  const btn = document.querySelector(".ohgs-menu-toggle");
  const nav = document.querySelector("#ohgsMainMenu, header nav, .site-header nav");
  const main = document.querySelector("main") || document.querySelector(".page") || document.body;
  if(!btn || !nav) return;

  function setOpen(open){
    nav.classList.toggle("ohgs-menu-open", open);
    document.body.classList.toggle("ohgs-menu-is-open", open);
    btn.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");

    // Tiny page reaction, like the website breathing when the menu opens
    main.classList.remove("ohgs-page-react");
    void main.offsetWidth;
    main.classList.add("ohgs-page-react");
    setTimeout(() => main.classList.remove("ohgs-page-react"), 520);
  }

  // Keep closed by default on each page load
  setOpen(false);

  btn.addEventListener("click", function(e){
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--tap-x", `${e.clientX - rect.left}px`);
    btn.style.setProperty("--tap-y", `${e.clientY - rect.top}px`);

    btn.classList.remove("ohgs-tap-burst");
    void btn.offsetWidth;
    btn.classList.add("ohgs-tap-burst");
    setTimeout(() => btn.classList.remove("ohgs-tap-burst"), 650);

    setOpen(!nav.classList.contains("ohgs-menu-open"));
  });

  nav.querySelectorAll("a").forEach(function(link, index){
    link.style.setProperty("--item-delay", `${index * 42}ms`);
    link.addEventListener("click", function(){
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function(e){
    if(e.key === "Escape") setOpen(false);
  });
}
document.addEventListener("DOMContentLoaded", ohgsEnhancedMenuAnimation);


// === OHGS full language + theme patch ===
(function(){
  const phrasePairs = [
    ["Home","Nyumbani"],["Products","Bidhaa"],["Services","Huduma"],["Projects","Miradi"],["Gallery","Picha"],["Promotions","Matangazo"],["About","Kuhusu"],["Contact","Mawasiliano"],
    ["Explore Products","Angalia Bidhaa"],["Request Quote","Omba Bei"],["View Details","Angalia Maelezo"],["Order on WhatsApp","Agiza WhatsApp"],["Ask About Offer","Uliza Kuhusu Ofa"],["Ask OHGS","Uliza OHGS"],["Browse Categories","Angalia Makundi"],["Send List","Tuma Orodha"],["Email OHGS","Tuma Email OHGS"],["Send Email OHGS","Tuma Email OHGS"],
    ["Product Collection","Mkusanyiko wa Bidhaa"],["Browse OHGS equipment by function.","Angalia vifaa vya OHGS kwa matumizi."],["Professional hardware, tools and equipment for serious projects.","Vifaa bora vya hardware, zana na mashine kwa miradi makini."],
    ["From pumps and power tools to construction materials and workshop essentials, OHGS helps contractors, technicians, builders and homeowners find the right product faster.","Kuanzia pampu na zana za umeme mpaka vifaa vya ujenzi na mahitaji ya karakana, OHGS huwasaidia wakandarasi, mafundi, wajenzi na wamiliki wa nyumba kupata bidhaa sahihi haraka."],
    ["Official OHGS Brand","Nembo Rasmi ya OHGS"],["Visit us at Uhuru Rd - Arusha, message us on WhatsApp, or send an email inquiry for product availability, prices and delivery support.","Tutembelee Uhuru Rd - Arusha, tutumie ujumbe WhatsApp, au tuma barua pepe kuulizia upatikanaji wa bidhaa, bei na usafirishaji."],
    ["Built for Tanzania projects","Imejengwa kwa Miradi ya Tanzania"],["A better way to shop hardware in Arusha.","Njia bora ya kununua vifaa vya hardware Arusha."],
    ["The collection includes power tools, pumps, construction materials, workshop equipment, cleaning machines and general hardware.","Mkusanyiko huu una zana za umeme, pampu, vifaa vya ujenzi, vifaa vya karakana, mashine za usafi na hardware za jumla."],
    ["Water Pump Systems","Mifumo ya Pampu za Maji"],["Pumps & Plumbing","Pampu na Mabomba"],["Outdoor Power","Mashine za Nje"],["Outdoor Power Equipment","Vifaa vya Nguvu za Nje"],["Cleaning Equipment","Vifaa vya Usafi"],["Workshop Equipment","Vifaa vya Karakana"],["Construction Materials","Vifaa vya Ujenzi"],["Power Tools","Zana za Umeme"],["Hand Tools","Zana za Mkono"],["Pumps, Motors & Generators","Pampu, Mota na Jenereta"],
    ["Water projects","Miradi ya Maji"],["Building projects","Miradi ya Ujenzi"],["Product recommendation","Ushauri wa Bidhaa"],["Project supply support","Msaada wa Vifaa vya Mradi"],["Bulk inquiry","Oda Kubwa"],
    ["Get help choosing between pumps, power tools, boards, glues, cleaning machines and accessories.","Pata msaada kuchagua kati ya pampu, zana za umeme, mbao, gundi, mashine za usafi na vifaa vingine."],
    ["Useful for contractors, workshops, homes, farms and facility managers buying multiple categories.","Inafaa kwa wakandarasi, karakana, nyumba, mashamba na wasimamizi wanaonunua makundi mengi ya bidhaa."],
    ["Send a list by WhatsApp and request availability, alternatives and pricing.","Tuma orodha kwa WhatsApp na uulizie upatikanaji, mbadala na bei."],
    ["Built for contractors, homes, farms and businesses.","Imejengwa kwa wakandarasi, nyumba, mashamba na biashara."],
    ["OHGS supports practical project needs: water systems, construction supply, workshop setup, cleaning businesses and general hardware purchases.","OHGS inasaidia mahitaji halisi ya miradi: mifumo ya maji, vifaa vya ujenzi, maandalizi ya karakana, biashara za usafi na ununuzi wa hardware za jumla."],
    ["Pumps, hoses, fittings and pressure support for homes, farms and buildings.","Pampu, mipira, viungio na vifaa vya pressure kwa nyumba, mashamba na majengo."],
    ["Boards, adhesives, construction materials, tools and safe delivery guidance.","Mbao, gundi, vifaa vya ujenzi, zana na ushauri wa usafirishaji salama."],
    ["Watch OHGS tools and shop service","Tazama zana na huduma za dukani OHGS"],["Customer product demo and support","Maonesho ya bidhaa na msaada kwa mteja"],["Shop walkthrough and product range","Muonekano wa duka na bidhaa mbalimbali"],["Hardware supply in action","Huduma za hardware zikifanya kazi"],
    ["Made by Isaac Sabuni","Imetengenezwa na Isaac Sabuni"],["Website by Isaac Sabuni","Tovuti imetengenezwa na Isaac Sabuni"],["Call or WhatsApp","Piga Simu au WhatsApp"],["Loading OHGS Industrial Experience...","Tunafungua tovuti ya OHGS..."]
  ];
  const SW = Object.fromEntries(phrasePairs); const EN = Object.fromEntries(phrasePairs.map(([e,s])=>[s,e]));
  function norm(s){return (s||'').replace(/\s+/g,' ').trim();}
  function translateNode(n, lang){
    const t=norm(n.nodeValue); if(!t) return;
    if(!n.__ohgsEN){ n.__ohgsEN = EN[t] || t; }
    const base=n.__ohgsEN;
    if(lang==='sw' && SW[base]) n.nodeValue=n.nodeValue.replace(t,SW[base]);
    if(lang==='en') n.nodeValue=n.nodeValue.replace(t,base);
  }
  function walk(lang){
    const skip=new Set(['SCRIPT','STYLE','NOSCRIPT','IFRAME','VIDEO']);
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){return n.parentElement && !skip.has(n.parentElement.tagName) && norm(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
    const nodes=[]; while(w.nextNode()) nodes.push(w.currentNode); nodes.forEach(n=>translateNode(n,lang));
    document.querySelectorAll('[placeholder],[aria-label],[title],input[value]').forEach(el=>['placeholder','aria-label','title','value'].forEach(a=>{if(!el.hasAttribute(a))return;let v=norm(el.getAttribute(a)); if(!v)return; const k='__ohgs_'+a; if(!el[k])el[k]=EN[v]||v; let b=el[k]; if(lang==='sw'&&SW[b])el.setAttribute(a,SW[b]); if(lang==='en')el.setAttribute(a,b);}));
    document.querySelectorAll('.lang-toggle,[data-lang-toggle],.language-toggle').forEach(btn=>{btn.textContent=lang==='sw'?'SW / EN':'EN / SW';});
    document.querySelectorAll('.loader-text,.loading-text,#loader p,.preloader p').forEach(el=>{el.textContent=lang==='sw'?'Tunafungua tovuti ya OHGS...':'Loading OHGS Industrial Experience...';});
  }
  function applyLang(lang){document.documentElement.lang=lang==='sw'?'sw':'en'; document.body.classList.toggle('lang-sw',lang==='sw'); document.body.classList.toggle('lang-en',lang!=='sw'); localStorage.setItem('ohgsLang',lang); walk(lang);}
  function applyTheme(theme){document.documentElement.classList.toggle('light',theme==='light'); document.documentElement.classList.toggle('dark',theme!=='light'); document.body.classList.toggle('light',theme==='light'); document.body.classList.toggle('dark',theme!=='light'); document.body.dataset.theme=theme; localStorage.setItem('ohgsTheme',theme);}
  function init(){
    applyTheme(localStorage.getItem('ohgsTheme') || (document.body.classList.contains('light')?'light':'dark'));
    applyLang(localStorage.getItem('ohgsLang') || 'en');
    document.querySelectorAll('.lang-toggle,[data-lang-toggle],.language-toggle').forEach(btn=>{if(btn.__lang)return;btn.__lang=1;btn.addEventListener('click',e=>{e.preventDefault();applyLang((localStorage.getItem('ohgsLang')||'en')==='sw'?'en':'sw');});});
    document.querySelectorAll('.theme-toggle,[data-theme-toggle],.mode-toggle').forEach(btn=>{if(btn.__theme)return;btn.__theme=1;btn.addEventListener('click',e=>{e.preventDefault();applyTheme((localStorage.getItem('ohgsTheme')||'dark')==='light'?'dark':'light');});});
  }
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();
})();
// === END OHGS full language + theme patch ===


// === OHGS stronger full-site theme control ===
(function(){
  function applyFullTheme(theme){
    const isLight = theme === "light";
    document.documentElement.classList.toggle("light", isLight);
    document.documentElement.classList.toggle("dark", !isLight);
    document.body.classList.toggle("light", isLight);
    document.body.classList.toggle("dark", !isLight);
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("ohgsTheme", theme);

    document.querySelectorAll(".theme-toggle, [data-theme-toggle], .mode-toggle").forEach(btn => {
      btn.setAttribute("aria-label", isLight ? "Change to dark mode" : "Change to light mode");
    });
  }

  function setupFullTheme(){
    const saved = localStorage.getItem("ohgsTheme") || "dark";
    applyFullTheme(saved);

    document.querySelectorAll(".theme-toggle, [data-theme-toggle], .mode-toggle").forEach(btn => {
      if(btn.__ohgsFullThemeReady) return;
      btn.__ohgsFullThemeReady = true;
      btn.addEventListener("click", function(e){
        e.preventDefault();
        const current = localStorage.getItem("ohgsTheme") || "dark";
        applyFullTheme(current === "light" ? "dark" : "light");
      });
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", setupFullTheme);
  }else{
    setupFullTheme();
  }

  setInterval(function(){
    const current = localStorage.getItem("ohgsTheme") || "dark";
    document.documentElement.classList.toggle("light", current === "light");
    document.documentElement.classList.toggle("dark", current !== "light");
    document.body.classList.toggle("light", current === "light");
    document.body.classList.toggle("dark", current !== "light");
  }, 700);
})();
