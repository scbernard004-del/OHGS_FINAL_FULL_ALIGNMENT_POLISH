
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
