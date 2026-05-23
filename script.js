
const OHGS = {
  phone: '255689528193',
  phoneDisplay: '+255 689 528 193',
  email: 'olotuhardware@yahoo.com',
  instagram: '@olotuhardware',
  location: 'Uhuru Rd - Arusha'
};

(function(){
  const html = document.documentElement;
  const body = document.body;
  const MENU_BREAKPOINT = 980;

  const selectors = {
    header: '.site-header',
    menu: '#ohgsMainMenu, .ohgs-main-menu, .nav-links, .site-header nav',
    menuBtn: '#ohgsMenuButton, #menuToggle, .ohgs-menu-toggle, .menu-toggle'
  };

  const qs = (s, root=document) => root.querySelector(s);
  const qsa = (s, root=document) => Array.from(root.querySelectorAll(s));

  function getHeader(){ return qs(selectors.header); }
  function getMenu(){ return qs(selectors.menu); }
  function getMenuBtn(){ return qs(selectors.menuBtn); }

  function safeStorageGet(key, fallback=''){
    try { return localStorage.getItem(key) || fallback; } catch(e){ return fallback; }
  }
  function safeStorageSet(key, value){
    try { localStorage.setItem(key, value); } catch(e){}
  }

  function applyTheme(theme){
    const light = theme === 'light';
    html.classList.toggle('light', light);
    body.classList.toggle('light', light);
    body.classList.toggle('light-mode', light);
    html.setAttribute('data-theme', light ? 'light' : 'dark');
    body.setAttribute('data-theme', light ? 'light' : 'dark');
    safeStorageSet('ohgsTheme', light ? 'light' : 'dark');
    safeStorageSet('theme', light ? 'light' : 'dark');
  }

  function currentTheme(){
    return safeStorageGet('ohgsTheme', safeStorageGet('theme', 'dark')) || 'dark';
  }

  window.toggleTheme = function(){
    applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
  }

  function applyLanguage(lang){
    const current = lang === 'sw' ? 'sw' : 'en';
    html.setAttribute('lang', current === 'sw' ? 'sw' : 'en');
    body.setAttribute('data-lang', current);
    safeStorageSet('ohgsLang', current);

    qsa('[data-en]').forEach(el => {
      const val = current === 'sw' && el.dataset.sw ? el.dataset.sw : el.dataset.en;
      if (['INPUT','TEXTAREA'].includes(el.tagName)) {
        if (el.hasAttribute('placeholder')) el.placeholder = current === 'sw' ? (el.dataset.placeholderSw || el.dataset.sw || el.dataset.en || el.placeholder) : (el.dataset.placeholderEn || el.dataset.en || el.placeholder);
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });

    qsa('[data-placeholder-en], [data-placeholder-sw]').forEach(el => {
      const placeholder = current === 'sw' ? (el.dataset.placeholderSw || el.placeholder) : (el.dataset.placeholderEn || el.placeholder);
      if (placeholder) el.placeholder = placeholder;
    });
  }

  window.toggleLang = function(){
    const current = safeStorageGet('ohgsLang', 'en');
    applyLanguage(current === 'sw' ? 'en' : 'sw');
  }

  function closeMenu(){
    const menu = getMenu();
    const btn = getMenuBtn();
    if (!menu || !btn) return;
    menu.classList.remove('open', 'ohgs-menu-open', 'is-open');
    body.classList.remove('menu-open', 'ohgs-menu-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }

  function openMenu(){
    const menu = getMenu();
    const btn = getMenuBtn();
    if (!menu || !btn) return;
    menu.classList.add('open', 'ohgs-menu-open');
    body.classList.add('menu-open', 'ohgs-menu-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }

  function toggleMenu(e){
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const menu = getMenu();
    if (!menu) return false;
    const open = menu.classList.contains('open') || menu.classList.contains('ohgs-menu-open');
    open ? closeMenu() : openMenu();
    return false;
  }

  function syncHeader(){
    const header = getHeader();
    if (!header) return;
    const compact = window.scrollY > 8;
    header.classList.toggle('scrolled', compact);
    body.classList.toggle('ohgs-scrolled', compact);
  }

  let headerTicking = false;
  function onScroll(){
    if (headerTicking) return;
    headerTicking = true;
    requestAnimationFrame(() => {
      syncHeader();
      headerTicking = false;
    });
  }

  function initMenu(){
    const btn = getMenuBtn();
    const menu = getMenu();
    if (!btn || !menu) return;
    btn.setAttribute('type','button');
    btn.setAttribute('aria-controls','ohgsMainMenu');
    btn.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-hidden','true');
    btn.onclick = null;
    btn.addEventListener('click', toggleMenu);
    qsa('a', menu).forEach(link => link.addEventListener('click', () => {
      if (window.innerWidth <= MENU_BREAKPOINT) closeMenu();
    }));
    document.addEventListener('click', (e) => {
      if (window.innerWidth > MENU_BREAKPOINT) return;
      if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > MENU_BREAKPOINT) closeMenu();
    });
  }

  function initThemeButtons(){
    qsa('.theme-toggle,[data-theme-toggle],#themeToggle,.theme-btn').forEach(btn => {
      btn.onclick = null;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.toggleTheme();
      });
    });
  }

  function waMessage(product='OHGS hardware products'){
    const lang = safeStorageGet('ohgsLang', 'en');
    return lang === 'sw'
      ? `Habari OHGS, naomba maelezo zaidi kuhusu ${product}. Nipo tayari kupata bei, upatikanaji na ushauri.`
      : `Hello OHGS, I would like more details about ${product}. Please share price, availability and guidance.`;
  }

  function openWhatsApp(product='OHGS hardware products'){
    const text = encodeURIComponent(waMessage(product));
    window.open(`https://wa.me/${OHGS.phone}?text=${text}`, '_blank');
  }

  function openEmail(product='OHGS hardware products'){
    const lang = safeStorageGet('ohgsLang', 'en');
    const subject = encodeURIComponent(lang === 'sw' ? `Maombi ya taarifa: ${product}` : `Product inquiry: ${product}`);
    const bodyText = lang === 'sw'
      ? `Habari OHGS,%0D%0A%0D%0ANaomba maelezo zaidi kuhusu ${product}. Tafadhali nitumieni bei, upatikanaji na maelezo ya delivery.%0D%0A%0D%0AAsante.`
      : `Hello OHGS,%0D%0A%0D%0AI would like more information about ${product}. Please send price, availability and delivery details.%0D%0A%0D%0AThank you.`;
    window.location.href = `mailto:${OHGS.email}?subject=${subject}&body=${bodyText}`;
  }

  window.submitWhatsApp = function(event){
    if (event) event.preventDefault();
    const name = qs('#name')?.value?.trim() || '';
    const phone = qs('#phone')?.value?.trim() || '';
    const product = qs('#product')?.value?.trim() || 'OHGS hardware products';
    const message = qs('#message')?.value?.trim() || '';
    const lang = safeStorageGet('ohgsLang', 'en');
    const text = lang === 'sw'
      ? `Habari OHGS,%0D%0AJina: ${name}%0D%0ASimu: ${phone}%0D%0ABidhaa/Huduma: ${product}%0D%0AUjumbe: ${message}`
      : `Hello OHGS,%0D%0AName: ${name}%0D%0APhone: ${phone}%0D%0AProduct/Service: ${product}%0D%0AMessage: ${message}`;
    window.open(`https://wa.me/${OHGS.phone}?text=${text}`, '_blank');
    return false;
  };

  window.submitEmail = function(event){
    if (event) event.preventDefault();
    const name = qs('#name')?.value?.trim() || '';
    const phone = qs('#phone')?.value?.trim() || '';
    const product = qs('#product')?.value?.trim() || 'OHGS hardware products';
    const message = qs('#message')?.value?.trim() || '';
    const subject = encodeURIComponent(`OHGS Inquiry: ${product}`);
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nProduct/Service: ${product}\nMessage: ${message}`);
    window.location.href = `mailto:${OHGS.email}?subject=${subject}&body=${body}`;
    return false;
  };

  function initContactLinks(){
    qsa('.whatsapp-action').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        openWhatsApp(link.dataset.product || 'OHGS hardware products');
      });
    });
    qsa('.email-action').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        openEmail(link.dataset.product || 'OHGS hardware products');
      });
    });
  }

  function initReveal(){
    const revealEls = qsa('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('show'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12, rootMargin: '0px 0px -30px 0px'});
    revealEls.forEach(el => io.observe(el));
  }

  function hideLoaders(){
    qsa('.loader, #ohgsLoader, .ohgs-loader-screen').forEach(loader => {
      loader.classList.add('hide');
      loader.setAttribute('aria-hidden', 'true');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 700);
    });
  }

  function init(){
    applyTheme(currentTheme());
    applyLanguage(safeStorageGet('ohgsLang', 'en'));
    initMenu();
    initThemeButtons();
    initContactLinks();
    initReveal();
    syncHeader();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('pageshow', () => { applyTheme(currentTheme()); syncHeader(); });
  }

  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('load', hideLoaders);
})();
