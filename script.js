
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





// === OHGS Professional Loading Screen Fix ===
(function(){
  function getLogoSrc(){
    const logo = document.querySelector("header .brand img, .site-header .brand img, img[src*='logo'], img[alt*='OHGS']");
    return logo ? logo.getAttribute("src") : "assets/ohgs-logo.png";
  }

  function buildLoader(){
    // Hide old loaders that may distort images.
    document.querySelectorAll(".loader, .preloader, #loader, .loading-screen").forEach(el => {
      if(!el.classList.contains("ohgs-pro-loader")) el.classList.add("ohgs-old-loader-hidden");
    });

    if(document.querySelector(".ohgs-pro-loader")) return;

    const lang = localStorage.getItem("ohgsLang") || "en";
    const loader = document.createElement("div");
    loader.className = "ohgs-pro-loader";
    loader.innerHTML = `
      <div class="ohgs-loader-card">
        <div class="ohgs-loader-mark">
          <span class="ohgs-loader-ring"></span>
          <img src="${getLogoSrc()}" alt="OHGS logo">
        </div>
        <p class="ohgs-loader-text">${lang === "sw" ? "Tunafungua tovuti ya OHGS..." : "Loading OHGS Industrial Experience..."}</p>
      </div>
    `;
    document.body.appendChild(loader);

    window.addEventListener("load", function(){
      setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => loader.remove(), 520);
      }, 650);
    });

    // Fallback so loader never gets stuck.
    setTimeout(() => {
      if(document.body.contains(loader)){
        loader.classList.add("hide");
        setTimeout(() => loader.remove(), 520);
      }
    }, 2200);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", buildLoader);
  }else{
    buildLoader();
  }
})();


// === OHGS FINAL RESPONSIVE MENU BEHAVIOUR ===
(function(){
  function setupResponsiveMenu(){
    const btn = document.querySelector(".ohgs-menu-toggle");
    const nav = document.querySelector("#ohgsMainMenu, header nav, .site-header nav");
    if(!btn || !nav) return;

    function isMobile(){
      return window.matchMedia("(max-width: 760px)").matches;
    }

    function closeMenu(){
      nav.classList.remove("ohgs-menu-open");
      document.body.classList.remove("ohgs-menu-is-open");
      btn.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }

    function openMenu(){
      nav.classList.add("ohgs-menu-open");
      document.body.classList.add("ohgs-menu-is-open");
      btn.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }

    function sync(){
      if(!isMobile()){
        nav.classList.add("ohgs-desktop-menu");
        closeMenu();
      }else{
        nav.classList.remove("ohgs-desktop-menu");
        closeMenu();
      }
    }

    if(!btn.__ohgsResponsiveFinal){
      btn.__ohgsResponsiveFinal = true;
      btn.addEventListener("click", function(e){
        if(!isMobile()) return;
        e.preventDefault();
        nav.classList.contains("ohgs-menu-open") ? closeMenu() : openMenu();
      });
    }

    nav.querySelectorAll("a").forEach(link => {
      if(link.__ohgsResponsiveFinal) return;
      link.__ohgsResponsiveFinal = true;
      link.addEventListener("click", () => {
        if(isMobile()) closeMenu();
      });
    });

    window.addEventListener("resize", sync);
    sync();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", setupResponsiveMenu);
  }else{
    setupResponsiveMenu();
  }
})();


// === OHGS FINAL CLEAN ENGLISH / SWAHILI LANGUAGE SYSTEM ===
(function(){
  const SW = {
    "Home":"Nyumbani",
    "Products":"Bidhaa",
    "Services":"Huduma",
    "Projects":"Miradi",
    "Gallery":"Picha",
    "Promotions":"Matangazo",
    "About":"Kuhusu",
    "Contact":"Mawasiliano",
    "Hardware":"Hardware",
    "Product Collection":"Mkusanyiko wa Bidhaa",
    "Browse OHGS equipment by function.":"Angalia vifaa vya OHGS kwa matumizi.",
    "OHGS Hardware & General Supply Ltd":"OHGS Hardware & General Supply Ltd",
    "Olotu Hardware & General Supply LTD":"Olotu Hardware & General Supply LTD",
    "Professional hardware, tools and equipment for serious projects.":"Hardware, zana na vifaa bora kwa miradi makini.",
    "From pumps and power tools to construction materials and workshop essentials, OHGS helps contractors, technicians, builders and homeowners find the right product faster.":"Kuanzia pampu na zana za umeme hadi vifaa vya ujenzi na mahitaji ya karakana, OHGS husaidia wakandarasi, mafundi, wajenzi na wamiliki wa nyumba kupata bidhaa sahihi haraka.",
    "Explore Products":"Angalia Bidhaa",
    "Request Quote":"Omba Bei",
    "WhatsApp":"WhatsApp",
    "View Details":"Maelezo",
    "Order on WhatsApp":"Agiza WhatsApp",
    "Ask About Offer":"Uliza Ofa",
    "Ask OHGS":"Uliza OHGS",
    "Browse Categories":"Angalia Makundi",
    "Send List":"Tuma Orodha",
    "Send Email OHGS":"Tuma Email OHGS",
    "Email OHGS":"Tuma Email OHGS",
    "Email":"Barua Pepe",
    "Call":"Piga Simu",
    "Location":"Mahali",
    "Pumps & Plumbing":"Pampu na Mabomba",
    "Water Pump Systems":"Mifumo ya Pampu za Maji",
    "Submersible pumps, pressure controllers, fittings and water transfer solutions for homes, farms, buildings and commercial sites.":"Pampu za kuzamisha, vidhibiti pressure, viungio na vifaa vya kusukuma maji kwa nyumba, mashamba, majengo na biashara.",
    "Premium product selection":"Uchaguzi bora wa bidhaa",
    "Ask for current price and availability":"Uliza bei ya sasa na upatikanaji",
    "Accessories and delivery guidance available":"Vifaa vya ziada na ushauri wa usafirishaji vinapatikana",
    "Suitable for homes, workshops, farms and construction sites":"Inafaa kwa nyumba, karakana, mashamba na maeneo ya ujenzi",
    "Outdoor Power":"Mashine za Nje",
    "Outdoor Power Equipment":"Vifaa vya Nguvu za Nje",
    "Cleaning Equipment":"Vifaa vya Usafi",
    "Workshop Equipment":"Vifaa vya Karakana",
    "Construction Materials":"Vifaa vya Ujenzi",
    "Power Tools":"Zana za Umeme",
    "Hand Tools":"Zana za Mkono",
    "Pumps, Motors & Generators":"Pampu, Mota na Jenereta",
    "Water projects":"Miradi ya Maji",
    "Building projects":"Miradi ya Ujenzi",
    "Product recommendation":"Ushauri wa Bidhaa",
    "Project supply support":"Msaada wa Vifaa vya Mradi",
    "Bulk inquiry":"Oda Kubwa",
    "Get help choosing between pumps, power tools, boards, glues, cleaning machines and accessories.":"Pata msaada kuchagua kati ya pampu, zana za umeme, mbao, gundi, mashine za usafi na vifaa vingine.",
    "Useful for contractors, workshops, homes, farms and facility managers buying multiple categories.":"Inafaa kwa wakandarasi, karakana, nyumba, mashamba na wasimamizi wanaonunua makundi mengi ya bidhaa.",
    "Send a list by WhatsApp and request availability, alternatives and pricing.":"Tuma orodha kwa WhatsApp na uulizie upatikanaji, mbadala na bei.",
    "Built for contractors, homes, farms and businesses.":"Kwa wakandarasi, nyumba, mashamba na biashara.",
    "OHGS supports practical project needs: water systems, construction supply, workshop setup, cleaning businesses and general hardware purchases.":"OHGS husaidia mahitaji ya miradi: mifumo ya maji, vifaa vya ujenzi, karakana, biashara za usafi na ununuzi wa hardware.",
    "Built for Tanzania projects":"Kwa Miradi ya Tanzania",
    "A better way to shop hardware in Arusha.":"Njia bora ya kununua hardware Arusha.",
    "The collection includes power tools, pumps, construction materials, workshop equipment, cleaning machines and general hardware.":"Mkusanyiko huu una zana za umeme, pampu, vifaa vya ujenzi, vifaa vya karakana, mashine za usafi na hardware za jumla.",
    "Official OHGS Brand":"Nembo Rasmi ya OHGS",
    "Visit us at Uhuru Rd - Arusha, message us on WhatsApp, or send an email inquiry for product availability, prices and delivery support.":"Tutembelee Uhuru Rd - Arusha, tutumie ujumbe WhatsApp, au tuma email kuulizia bidhaa, bei na usafirishaji.",
    "Watch OHGS tools and shop service":"Tazama zana na huduma za dukani OHGS",
    "Customer product demo and support":"Maonesho ya bidhaa na msaada kwa mteja",
    "Shop walkthrough and product range":"Muonekano wa duka na bidhaa mbalimbali",
    "Hardware supply in action":"Huduma za hardware zikifanya kazi",
    "Loading OHGS Industrial Experience...":"Tunafungua tovuti ya OHGS...",
    "Opening OHGS website...":"Tunafungua tovuti ya OHGS...",
    "Made by Isaac Sabuni":"Imetengenezwa na Isaac Sabuni",
    "Website by Isaac Sabuni":"Tovuti na Isaac Sabuni",
    "Call or WhatsApp":"Piga Simu au WhatsApp",
    "Contact OHGS":"Wasiliana na OHGS",
    "Send Message":"Tuma Ujumbe",
    "Name":"Jina",
    "Phone":"Simu",
    "Message":"Ujumbe",
    "Address":"Anwani",
    "Arusha, Tanzania":"Arusha, Tanzania"
  };

  const EN = {};
  Object.keys(SW).forEach(en => { EN[SW[en]] = en; });

  const phraseKeys = Object.keys(SW).sort((a,b)=>b.length-a.length);

  function clean(s){ return (s || "").replace(/\s+/g, " ").trim(); }

  function toEnglish(text){
    let out = text;
    Object.keys(EN).sort((a,b)=>b.length-a.length).forEach(sw => {
      out = out.split(sw).join(EN[sw]);
    });
    return out;
  }

  function toSwahili(text){
    let out = toEnglish(text);
    phraseKeys.forEach(en => {
      out = out.split(en).join(SW[en]);
    });
    return out;
  }

  function rememberEnglish(node){
    if(node.__ohgsOriginalEnglish) return;
    const text = node.nodeValue;
    const trimmed = clean(text);
    if(!trimmed) return;
    node.__ohgsOriginalEnglish = toEnglish(text);
  }

  function translateTextNode(node, lang){
    rememberEnglish(node);
    if(!node.__ohgsOriginalEnglish) return;
    node.nodeValue = lang === "sw" ? toSwahili(node.__ohgsOriginalEnglish) : node.__ohgsOriginalEnglish;
  }

  function translateAttributes(el, lang){
    ["placeholder","aria-label","title","alt","value"].forEach(attr => {
      if(!el.hasAttribute || !el.hasAttribute(attr)) return;
      if(attr === "value" && !["INPUT","BUTTON"].includes(el.tagName)) return;
      const val = el.getAttribute(attr);
      if(!clean(val)) return;
      const key = "__ohgsOriginalEnglish_" + attr;
      if(!el[key]) el[key] = toEnglish(val);
      el.setAttribute(attr, lang === "sw" ? toSwahili(el[key]) : el[key]);
    });
  }

  function applyLanguage(lang){
    document.documentElement.setAttribute("lang", lang === "sw" ? "sw" : "en");
    document.body.classList.toggle("lang-sw", lang === "sw");
    document.body.classList.toggle("lang-en", lang !== "sw");

    const skip = new Set(["SCRIPT","STYLE","NOSCRIPT","IFRAME","VIDEO","SVG"]);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        if(!node.parentElement || skip.has(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
        if(!clean(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n => translateTextNode(n, lang));

    document.querySelectorAll("[placeholder], [aria-label], [title], [alt], input[value], button[value]").forEach(el => translateAttributes(el, lang));

    document.querySelectorAll(".lang-toggle, [data-lang-toggle], .language-toggle").forEach(btn => {
      btn.textContent = lang === "sw" ? "SW / EN" : "EN / SW";
      btn.setAttribute("aria-label", lang === "sw" ? "Badilisha kwenda Kiingereza" : "Change to Swahili");
    });

    document.querySelectorAll(".brand-title").forEach(el => { el.textContent = "OHGS"; });
    document.querySelectorAll(".brand-subtitle").forEach(el => { el.textContent = "Hardware"; });

    localStorage.setItem("ohgsLang", lang);
  }

  function initLanguage(){
    const saved = localStorage.getItem("ohgsLang") || "en";
    applyLanguage(saved);

    document.querySelectorAll(".lang-toggle, [data-lang-toggle], .language-toggle").forEach(btn => {
      if(btn.__ohgsCleanLangReady) return;
      btn.__ohgsCleanLangReady = true;
      btn.addEventListener("click", function(e){
        e.preventDefault();
        const current = localStorage.getItem("ohgsLang") || "en";
        applyLanguage(current === "sw" ? "en" : "sw");
      });
    });

    let busy = false;
    const observer = new MutationObserver(() => {
      if(busy) return;
      busy = true;
      setTimeout(() => {
        applyLanguage(localStorage.getItem("ohgsLang") || "en");
        busy = false;
      }, 80);
    });
    observer.observe(document.body, { childList:true, subtree:true });
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", initLanguage);
  else initLanguage();
})();


// === OHGS Sakura-style header behaviour ===
(function(){
  function initSakuraHeader(){
    const header = document.querySelector(".site-header, header");
    const btn = document.querySelector(".ohgs-menu-toggle");
    const nav = document.querySelector("#ohgsMainMenu, header nav, .site-header nav");
    if(!header || !nav) return;

    function isMobile(){
      return window.matchMedia("(max-width: 760px)").matches;
    }

    function closeMenu(){
      nav.classList.remove("ohgs-menu-open");
      document.body.classList.remove("ohgs-menu-is-open");
      if(btn){
        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    }

    function openMenu(){
      nav.classList.add("ohgs-menu-open");
      document.body.classList.add("ohgs-menu-is-open");
      if(btn){
        btn.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    }

    function syncHeader(){
      if(isMobile()){
        header.classList.add("ohgs-mobile-header");
        header.classList.remove("ohgs-desktop-header");
        closeMenu();
      }else{
        header.classList.add("ohgs-desktop-header");
        header.classList.remove("ohgs-mobile-header");
        closeMenu();
      }
    }

    if(btn && !btn.__ohgsSakuraReady){
      btn.__ohgsSakuraReady = true;
      btn.addEventListener("click", function(e){
        if(!isMobile()) return;
        e.preventDefault();
        nav.classList.contains("ohgs-menu-open") ? closeMenu() : openMenu();
      });
    }

    document.addEventListener("click", function(e){
      if(!isMobile()) return;
      if(!header.contains(e.target)) closeMenu();
    });

    nav.querySelectorAll("a").forEach(link => {
      if(link.__ohgsSakuraLinkReady) return;
      link.__ohgsSakuraLinkReady = true;
      link.addEventListener("click", function(){
        if(isMobile()) closeMenu();
      });
    });

    window.addEventListener("resize", syncHeader);
    window.addEventListener("scroll", function(){
      header.classList.toggle("ohgs-scrolled", window.scrollY > 16);
    }, {passive:true});

    syncHeader();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initSakuraHeader);
  }else{
    initSakuraHeader();
  }
})();


// === OHGS final card/header polish behaviour ===
(function(){
  function fixImageFallbacks(){
    const fallbackList = [
      "images/shop-inside.jpg",
      "images/inside-ohgs-shop.jpg",
      "images/ohgs-shop.jpg",
      "images/shop-front.jpg",
      "images/gallery-shop.jpg",
      "shop-inside.jpg",
      "inside-ohgs-shop.jpg"
    ];
    document.querySelectorAll(".ohgs-about-image-card img").forEach(img => {
      if(img.__ohgsFallbackReady) return;
      img.__ohgsFallbackReady = true;
      let index = 0;
      img.addEventListener("error", function(){
        index++;
        if(index < fallbackList.length) img.src = fallbackList[index];
      });
    });
  }

  function polishHeader(){
    const header = document.querySelector(".site-header, header");
    if(!header) return;
    const nav = document.querySelector("#ohgsMainMenu, header nav, .site-header nav");
    const actions = document.querySelector(".header-actions");
    if(nav) nav.classList.add("ohgs-clean-nav");
    if(actions) actions.classList.add("ohgs-clean-actions");
  }

  function boot(){
    fixImageFallbacks();
    polishHeader();
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();


// === OHGS final header alignment and scroll shrink ===
(function(){
  function initHeaderPolish(){
    const header = document.querySelector(".site-header, header");
    const btn = document.querySelector(".ohgs-menu-toggle");
    const nav = document.querySelector("#ohgsMainMenu, header nav, .site-header nav");
    if(!header) return;

    function isMobile(){
      return window.matchMedia("(max-width: 760px)").matches;
    }

    function updateScroll(){
      header.classList.toggle("ohgs-scrolled", window.scrollY > 18);
    }

    function closeMobileMenu(){
      if(nav) nav.classList.remove("ohgs-menu-open");
      if(btn) {
        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
      document.body.classList.remove("ohgs-menu-is-open");
    }

    function openMobileMenu(){
      if(nav) nav.classList.add("ohgs-menu-open");
      if(btn) {
        btn.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
      document.body.classList.add("ohgs-menu-is-open");
    }

    if(btn && nav && !btn.__ohgsFinalAlignReady){
      btn.__ohgsFinalAlignReady = true;
      btn.addEventListener("click", function(e){
        if(!isMobile()) return;
        e.preventDefault();
        nav.classList.contains("ohgs-menu-open") ? closeMobileMenu() : openMobileMenu();
      });
    }

    if(nav){
      nav.querySelectorAll("a").forEach(a => {
        if(a.__ohgsFinalAlignReady) return;
        a.__ohgsFinalAlignReady = true;
        a.addEventListener("click", () => { if(isMobile()) closeMobileMenu(); });
      });
    }

    window.addEventListener("scroll", updateScroll, {passive:true});
    window.addEventListener("resize", closeMobileMenu);
    updateScroll();
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", initHeaderPolish);
  else initHeaderPolish();
})();


// === OHGS image, floating button, and loader polish ===
(function(){
  const fallbackImages = [
    "images/shop-inside.jpg",
    "images/inside-ohgs-shop.jpg",
    "images/ohgs-shop.jpg",
    "images/shop-front.jpg",
    "images/chainsaw-counter.jpg",
    "images/compressor-service.jpg",
    "images/cleaning-trolleys.jpg",
    "chainsaw-counter.jpg",
    "compressor-service.jpg",
    "cleaning-trolleys.jpg"
  ];

  function addImageFallbacks(){
    document.querySelectorAll("img").forEach(img => {
      if(img.__ohgsImageFallback) return;
      img.__ohgsImageFallback = true;
      let i = 0;
      img.addEventListener("error", function(){
        if(i < fallbackImages.length){
          img.src = fallbackImages[i++];
        }
      });
    });
  }

  function improveLoader(){
    const existing = document.querySelector(".ohgs-pro-loader");
    if(existing) existing.classList.add("ohgs-loader-perfect");

    document.querySelectorAll(".ohgs-loader-mark img, .ohgs-pro-loader img").forEach(img => {
      img.style.transform = "none";
      img.style.objectFit = "contain";
      img.style.borderRadius = "50%";
    });
  }

  function alignFloatingButtons(){
    document.querySelectorAll(".float-whatsapp, .float-email, [class*='float'], [class*='floating']").forEach(el => {
      if(el.closest("header")) return;
      el.classList.add("ohgs-floating-compact");
    });
  }

  function boot(){
    addImageFallbacks();
    improveLoader();
    alignFloatingButtons();
  }

  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
  window.addEventListener("load", boot);
})();


// OHGS image safety patch: replace older wrong/missing showcase references
(function(){
  const fallbackMap = {
    'images/ohgs-shop-extra-showcase.png': 'images/ohgs-storefront.jpg',
    'images/shop-inside.jpg': 'images/ohgs-storefront.jpg',
    'images/inside-ohgs-shop.jpg': 'images/showroom-machines.jpg',
    'images/ohgs-shop.jpg': 'images/water-pump-display.jpg',
    'images/shop-front.jpg': 'images/plywood-building-boards.jpg'
  };
  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('img').forEach(function(img){
      const src = img.getAttribute('src') || '';
      if (fallbackMap[src]) img.setAttribute('src', fallbackMap[src]);
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
      img.addEventListener('error', function(){
        const current = img.getAttribute('src') || '';
        if (fallbackMap[current]) img.setAttribute('src', fallbackMap[current]);
      }, { once:true });
    });
  });
})();
