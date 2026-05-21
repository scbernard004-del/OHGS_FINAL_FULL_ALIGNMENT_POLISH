
(function(){
  const PHONE='255689528193';
  const EMAIL='olotuhardware@yahoo.com';
  const BRAND_KEEP=new Set(['OHGS','HARDWARE','WhatsApp','Instagram','Arusha','Uhuru Rd - Arusha','olotuhardware@yahoo.com','@olotuhardware','+255 689 528 193','+255 746 584 214','Isaac Sabuni','OHGS Hardware & General Supply Ltd','Olotu Hardware & General Supply LTD']);
  const MAP={
    'Home':'Nyumbani','Products':'Bidhaa','Services':'Huduma','Projects':'Miradi','Gallery':'Picha','Promotions':'Matangazo','About':'Kuhusu','Contact':'Mawasiliano',
    'Product Collection':'Mkusanyiko wa Bidhaa','Browse OHGS equipment by function.':'Angalia vifaa vya OHGS kwa matumizi yake.',
    'The collection includes power tools, pumps, compressors, construction materials, hand tools, cleaning equipment and project supply support.':'Mkusanyiko huu unajumuisha zana za umeme, pampu, compressors, vifaa vya ujenzi, zana za mkono, vifaa vya usafi na msaada wa miradi.',
    'Explore equipment with pictures and details':'Angalia vifaa kwa picha na maelezo','Click any card to open more information, then use WhatsApp or email to ask for price, availability and delivery.':'Bonyeza kadi yoyote kuona maelezo zaidi, kisha tumia WhatsApp au email kuuliza bei, upatikanaji na delivery.',
    'View Details':'Angalia Maelezo','Order on WhatsApp':'Agiza WhatsApp','Ask on WhatsApp':'Uliza WhatsApp','Request Quote':'Omba Bei','Explore Products':'Angalia Bidhaa','Send Order to WhatsApp':'Tuma Oda WhatsApp','Send Email':'Tuma Email','Browse Categories':'Angalia Categories','Send List':'Tuma Orodha','Ask OHGS':'Uliza OHGS',
    'Water Pump Systems':'Mifumo ya Pampu za Maji','Diesel Water Pumps':'Pampu za Maji za Dizeli','Air Compressors':'Compressors za Hewa','Pressure Washers':'Mashine za Kuosha kwa Pressure','Power Tools':'Zana za Umeme','Hand Tools':'Zana za Mkono','Wood Boards and Adhesives':'Mbao na Gundi','Construction Materials':'Vifaa vya Ujenzi','Outdoor Power Equipment':'Vifaa vya Nje vya Umeme','Chainsaws and Outdoor Cutters':'Chainsaws na Mashine za Kukata',
    'Submersible pumps, pressure controllers, fittings and water transfer solutions for homes, farms, buildings and commercial sites.':'Pampu za ndani ya maji, pressure controllers, fittings na suluhisho za kusukuma maji kwa nyumba, mashamba, majengo na biashara.',
    'Premium product selection':'Bidhaa bora za kuchagua','Ask for current price and availability':'Ulizia bei ya sasa na upatikanaji','Accessories and delivery guidance available':'Ushauri wa accessories na delivery unapatikana','Suitable for homes, workshops, farms and construction sites':'Inafaa kwa nyumba, warsha, mashamba na site za ujenzi',
    'Support beyond the shelf.':'Huduma zaidi ya kuuza bidhaa.','OHGS helps customers choose equipment, plan purchases, source hardware products, organize bulk orders and understand the accessories required for reliable work.':'OHGS huwasaidia wateja kuchagua vifaa, kupanga manunuzi, kupata bidhaa za hardware, kuandaa oda kubwa na kuelewa accessories zinazohitajika kwa kazi ya uhakika.',
    'Product recommendation':'Ushauri wa bidhaa','Project supply support':'Msaada wa vifaa vya miradi','Bulk inquiry':'Oda kubwa','Get help choosing between pumps, power tools, boards, glues, cleaning machines and accessories.':'Pata msaada kuchagua kati ya pampu, zana za umeme, mbao, gundi, mashine za usafi na accessories.','Useful for contractors, workshops, homes, farms and facility managers buying across many categories.':'Inafaa kwa wakandarasi, warsha, nyumba, mashamba na wasimamizi wanaonunua bidhaa nyingi.','Send a list by WhatsApp and request availability, alternatives, pricing and repeat-order support.':'Tuma orodha kwa WhatsApp na uulizie upatikanaji, mbadala, bei na msaada wa oda za kurudia.',
    'Contact OHGS':'Wasiliana na OHGS','Ask for price, availability or recommendation.':'Ulizia bei, upatikanaji au ushauri.','Your name':'Jina lako','Phone number':'Namba ya simu','Write what you need, quantity, budget or project type':'Andika unachohitaji, idadi, bajeti au aina ya mradi','WhatsApp Order':'Oda WhatsApp','Email OHGS':'Tuma Email OHGS','Location':'Eneo','Fast contact':'Mawasiliano ya haraka','Use WhatsApp or email for price, stock and delivery questions.':'Tumia WhatsApp au email kuuliza bei, stock na delivery.',
    'New OHGS product arrivals':'Bidhaa mpya zilizoongezwa OHGS','Fresh equipment and building supplies added to the website.':'Vifaa vipya na bidhaa za ujenzi zimeongezwa kwenye tovuti.','Request price and availability by WhatsApp before visiting or ordering.':'Ulizia bei na upatikanaji kwa WhatsApp kabla ya kufika au kuagiza.',
    'INGCO 1100W 16mm 2-Gear Drill':'Drill ya INGCO 1100W 16mm yenye Gear 2','INGCO 230x2.0mm Cutting Disc':'Diski ya Kukatia INGCO 230x2.0mm','EDON ED-C90T Plate Compactor':'Plate Compactor EDON ED-C90T','VACKSON Silent Inverter Generator':'Generator Silent Inverter ya VACKSON','EDON PROMAX 1100W Submersible Pump':'Pampu ya Maji EDON PROMAX 1100W','Concrete Mixer / Site Equipment':'Concrete Mixer / Vifaa vya Site','VACKSON Heavy Duty Generator':'Generator Heavy Duty ya VACKSON','EDON Pressure Washer 120 Bar':'Pressure Washer EDON 120 Bar','INGCO Cordless Angle Grinder':'Grinder ya Battery ya INGCO','INGCO Rotary Hammer 800W':'Rotary Hammer ya INGCO 800W','EDON Socket Set 108 Pieces':'Seti ya Socket EDON Vipande 108','INGCO Drywall Sander 1050W':'Sander ya Ukuta INGCO 1050W','Building Aggregates / Kokoto':'Kokoto / Vifaa vya Ujenzi','Fast Local Delivery':'Delivery ya Haraka ya Karibu','Hardware & Building Supply':'Hardware na Vifaa vya Ujenzi',
    'Latest product visuals and shop support.':'Picha mpya za bidhaa na msaada wa dukani.','Shop service, product guidance and delivery support shown through real OHGS visuals.':'Huduma za dukani, ushauri wa bidhaa na delivery vinaonyeshwa kwa picha halisi za OHGS.',
    'Service visuals and clickable support cards':'Picha za huduma na kadi za msaada zinazobonyezwa','Open each service card for more information, then message OHGS for price, stock, delivery and project guidance.':'Fungua kila kadi ya huduma kuona maelezo zaidi, kisha wasiliana na OHGS kwa bei, stock, delivery na ushauri wa mradi.',
    'Product demo and setup':'Maonesho na maandalizi ya bidhaa','Delivery support':'Msaada wa delivery','Contractor supply help':'Msaada kwa wakandarasi','Generator and machine support':'Msaada wa generators na mashine','Shop guidance':'Ushauri wa dukani','Site equipment support':'Msaada wa vifaa vya site','Water and pump guidance':'Ushauri wa maji na pampu','Safety and workwear':'Usalama na mavazi ya kazi'
  };
  const REVERSE={}; Object.keys(MAP).forEach(k=>REVERSE[MAP[k]]=k);
  const WORDS={
    'equipment':'vifaa','Equipment':'Vifaa','tools':'zana','Tools':'Zana','machine':'mashine','Machine':'Mashine','machines':'mashine','Machines':'Mashine','pumps':'pampu','Pumps':'Pampu','water':'maji','Water':'Maji','construction':'ujenzi','Construction':'Ujenzi','materials':'vifaa','Materials':'Vifaa','delivery':'delivery','Delivery':'Delivery','support':'msaada','Support':'Msaada','price':'bei','Price':'Bei','availability':'upatikanaji','Availability':'Upatikanaji','customers':'wateja','Customers':'Wateja','shop':'duka','Shop':'Duka','store':'duka','Store':'Duka','project':'mradi','Project':'Mradi','projects':'miradi','Projects':'Miradi','service':'huduma','Service':'Huduma','services':'huduma','Services':'Huduma','cleaning':'usafi','Cleaning':'Usafi','outdoor':'nje','Outdoor':'Nje','building':'ujenzi','Building':'Ujenzi','hand':'mkono','Hand':'Mkono','power':'umeme','Power':'Umeme','recommendation':'ushauri','Recommendation':'Ushauri','details':'maelezo','Details':'Maelezo','pictures':'picha','Pictures':'Picha','images':'picha','Images':'Picha','gallery':'picha','Gallery':'Picha','new':'mpya','New':'Mpya','more':'zaidi','More':'Zaidi','current':'sasa','current':'sasa','available':'inapatikana','Available':'Inapatikana','guidance':'ushauri','Guidance':'Ushauri','workshop':'warsha','Workshop':'Warsha','farm':'shamba','farms':'mashamba','homes':'nyumba','Homes':'Nyumba','contractors':'wakandarasi','Contractors':'Wakandarasi','builders':'wajenzi','technicians':'mafundi','businesses':'biashara','fast':'haraka','Fast':'Haraka','buying':'kununua','Buying':'Kununua','clear':'wazi','Clear':'Wazi','real':'halisi','Real':'Halisi','useful':'muhimu','Useful':'Muhimu','practical':'vitendo','Practical':'Vitendo','send':'tuma','Send':'Tuma','list':'orodha','List':'Orodha','open':'fungua','Open':'Fungua','click':'bonyeza','Click':'Bonyeza'
  };
  const REVWORDS={}; Object.keys(WORDS).forEach(k=>REVWORDS[WORDS[k]]=k);
  function clean(s){return (s||'').replace(/\s+/g,' ').trim();}
  function esc(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
  function replaceMap(text,map){let out=text||''; const c=clean(out); if(map[c]) return out.replace(c,map[c]); Object.keys(map).sort((a,b)=>b.length-a.length).forEach(k=>{out=out.split(k).join(map[k]);}); return out;}
  function replaceWords(text,map){let out=text||''; Object.keys(map).sort((a,b)=>b.length-a.length).forEach(k=>{out=out.replace(new RegExp('\\b'+esc(k)+'\\b','g'),map[k]);}); return out;}
  function toEnglish(text){return replaceWords(replaceMap(text||'',REVERSE),REVWORDS);}
  function toSwahili(text){return replaceWords(replaceMap(toEnglish(text||''),MAP),WORDS);}
  function translateString(text,lang){const c=clean(text); if(!c || BRAND_KEEP.has(c)) return text; return lang==='sw'?toSwahili(text):toEnglish(text);}
  function setLanguage(lang){
    lang=lang==='sw'?'sw':'en';
    document.documentElement.lang=lang; document.body.classList.toggle('lang-sw',lang==='sw'); document.body.classList.toggle('lang-en',lang==='en');
    document.querySelectorAll('[data-en]').forEach(el=>{const v=el.getAttribute('data-'+lang); if(v) el.textContent=v;});
    const skip=new Set(['SCRIPT','STYLE','NOSCRIPT','IFRAME','SVG','VIDEO','SOURCE','CANVAS']);
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){if(!n.parentElement||skip.has(n.parentElement.tagName))return NodeFilter.FILTER_REJECT; if(!clean(n.nodeValue))return NodeFilter.FILTER_REJECT; return NodeFilter.FILTER_ACCEPT;}});
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n=>{if(!n.__ohgsOriginal)n.__ohgsOriginal=toEnglish(n.nodeValue); if(!BRAND_KEEP.has(clean(n.__ohgsOriginal))) n.nodeValue=translateString(n.__ohgsOriginal,lang);});
    document.querySelectorAll('[placeholder],[aria-label],[title],[alt],input[value],button[value],option').forEach(el=>['placeholder','aria-label','title','alt','value','label'].forEach(attr=>{if(el.hasAttribute&&el.hasAttribute(attr)){const k='__ohgs_'+attr;if(!el[k])el[k]=toEnglish(el.getAttribute(attr));el.setAttribute(attr,translateString(el[k],lang));}}));
    if(!document.__ohgsTitle) document.__ohgsTitle=toEnglish(document.title); document.title=translateString(document.__ohgsTitle,lang);
    document.querySelectorAll('.lang-toggle,[data-lang-toggle],.language-toggle').forEach(b=>{b.textContent=lang==='sw'?'SW / EN':'EN / SW'; b.setAttribute('aria-label',lang==='sw'?'Badilisha kwenda Kiingereza':'Change to Swahili');});
    document.querySelectorAll('.brand-title').forEach(el=>el.textContent='OHGS'); document.querySelectorAll('.brand-subtitle').forEach(el=>el.textContent='HARDWARE');
    localStorage.setItem('ohgsLang',lang); localStorage.setItem('ohgs-lang',lang);
  }
  function getLang(){return localStorage.getItem('ohgsLang')||localStorage.getItem('ohgs-lang')||'en';}
  window.toggleLang=function(){setLanguage(getLang()==='sw'?'en':'sw');}; window.OHGSApplyLanguage=setLanguage;
  window.toggleTheme=function(){document.body.classList.toggle('light'); localStorage.setItem('ohgsTheme',document.body.classList.contains('light')?'light':'dark');};
  function openWhatsApp(product='OHGS hardware products'){
    const lang=getLang(); const msg=lang==='sw'?`Habari OHGS, naomba bei na upatikanaji wa ${product}.`: `Hello OHGS, I would like price and availability for ${product}.`;
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`,'_blank');
  }
  window.submitWhatsApp=function(e){if(e)e.preventDefault(); const p=document.getElementById('product')?.value||'OHGS hardware products'; const name=document.getElementById('name')?.value||''; const phone=document.getElementById('phone')?.value||''; const msg=document.getElementById('message')?.value||''; const text=`Hello OHGS, my name is ${name}. Phone: ${phone}. Product: ${p}. Details: ${msg}`; window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`,'_blank');};
  window.submitEmail=function(e){if(e)e.preventDefault(); const p=document.getElementById('product')?.value||'OHGS hardware products'; const msg=document.getElementById('message')?.value||''; window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('OHGS Inquiry - '+p)}&body=${encodeURIComponent(msg)}`;};
  function boot(){
    if(localStorage.getItem('ohgsTheme')==='light') document.body.classList.add('light');
    document.querySelectorAll('.loader').forEach(l=>setTimeout(()=>l.classList.add('hide'),650));
    document.querySelectorAll('.lang-toggle,[data-lang-toggle],.language-toggle').forEach(btn=>{btn.removeAttribute('onclick'); btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggleLang();},{capture:true});});
    document.querySelectorAll('.theme-toggle').forEach(btn=>{btn.removeAttribute('onclick'); btn.addEventListener('click',e=>{e.preventDefault();toggleTheme();},{capture:true});});
    document.querySelectorAll('.whatsapp-action').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();openWhatsApp(a.dataset.product||a.textContent||'OHGS hardware products');});});
    document.querySelectorAll('.email-action').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();window.location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('OHGS Inquiry')}`;});});
    const btn=document.querySelector('.ohgs-menu-toggle,.menu-toggle'); const nav=document.querySelector('#ohgsMainMenu, header nav, .site-header nav');
    if(btn&&nav){btn.removeAttribute('onclick'); btn.addEventListener('click',e=>{e.preventDefault(); e.stopPropagation(); nav.classList.toggle('ohgs-menu-open'); btn.classList.toggle('is-open'); btn.setAttribute('aria-expanded',nav.classList.contains('ohgs-menu-open')?'true':'false');}); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('ohgs-menu-open'))); document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!btn.contains(e.target)) nav.classList.remove('ohgs-menu-open');});}
    const header=document.querySelector('.site-header'); if(header){const sync=()=>header.classList.toggle('scrolled',scrollY>10); addEventListener('scroll',sync,{passive:true}); sync();}
    const obs=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting)en.target.classList.add('show');}),{threshold:.08}); document.querySelectorAll('.reveal,.product-card,.service-card,.stock-card,.info-card,.contact-card,.gallery img').forEach(el=>obs.observe(el));
    setLanguage(getLang());
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

/* OHGS sticky header reliability patch */
(function(){
  function ready(fn){document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn();}
  ready(function(){
    var header = document.querySelector('.site-header, header.site-header');
    var btn = document.querySelector('.ohgs-menu-toggle, .menu-toggle');
    var nav = document.querySelector('#ohgsMainMenu, .site-header nav, header nav');
    function syncHeader(){
      if(!header) return;
      var on = window.scrollY > 8;
      header.classList.toggle('scrolled', on);
      document.body.classList.toggle('scrolled', on);
      header.style.transform = 'translateY(0)';
      header.style.opacity = '1';
      header.style.visibility = 'visible';
    }
    window.addEventListener('scroll', syncHeader, {passive:true});
    window.addEventListener('resize', syncHeader, {passive:true});
    syncHeader();
    if(btn && nav && !btn.dataset.ohgsStickyMenuFixed){
      btn.dataset.ohgsStickyMenuFixed = 'true';
      btn.addEventListener('click', function(e){
        e.preventDefault(); e.stopPropagation();
        var open = nav.classList.toggle('ohgs-menu-open');
        nav.classList.toggle('open', open);
        btn.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }, true);
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click', function(){nav.classList.remove('ohgs-menu-open','open');btn.classList.remove('is-open');btn.setAttribute('aria-expanded','false');});});
      document.addEventListener('click', function(e){if(!nav.contains(e.target) && !btn.contains(e.target)){nav.classList.remove('ohgs-menu-open','open');btn.classList.remove('is-open');btn.setAttribute('aria-expanded','false');}});
    }
  });
})();

/* Final mobile sticky header animation controller */
(function(){
  function initStickyMobileHeader(){
    var header = document.querySelector('.site-header, header.site-header');
    if(!header) return;

    function sync(){
      var compact = window.scrollY > 12;
      header.classList.toggle('scrolled', compact);
      document.body.classList.toggle('ohgs-scrolled', compact);
      header.style.position = 'fixed';
      header.style.top = '0';
      header.style.left = '0';
      header.style.right = '0';
      header.style.zIndex = '2147483000';
      header.style.transform = 'translate3d(0,0,0)';
      header.style.opacity = '1';
      header.style.visibility = 'visible';
    }

    var ticking = false;
    function onScroll(){
      if(!ticking){
        window.requestAnimationFrame(function(){
          sync();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', sync, {passive:true});
    window.addEventListener('orientationchange', sync, {passive:true});
    sync();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initStickyMobileHeader);
  }else{
    initStickyMobileHeader();
  }
})();

/* FINAL: force sticky header visible and responsive after all other scripts */
(function(){
  function bootFinalSticky(){
    var header = document.querySelector('.site-header, header.site-header');
    var btn = document.querySelector('.ohgs-menu-toggle, .menu-toggle');
    var nav = document.querySelector('#ohgsMainMenu, .site-header nav, header nav');
    if(!header) return;

    function sync(){
      var small = window.scrollY > 10;
      header.classList.toggle('scrolled', small);
      document.body.classList.toggle('ohgs-scrolled', small);
      document.body.classList.toggle('scrolled', small);
      header.style.position = 'fixed';
      header.style.top = '0';
      header.style.left = '0';
      header.style.right = '0';
      header.style.zIndex = '2147483000';
      header.style.transform = 'translate3d(0,0,0)';
      header.style.opacity = '1';
      header.style.visibility = 'visible';
      header.style.pointerEvents = 'auto';
    }

    window.addEventListener('scroll', sync, {passive:true});
    window.addEventListener('resize', sync, {passive:true});
    window.addEventListener('orientationchange', sync, {passive:true});
    setInterval(sync, 700);
    sync();

    if(btn && nav && !btn.dataset.ohgsFinalStickyBound){
      btn.dataset.ohgsFinalStickyBound = 'true';
      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var open = !nav.classList.contains('ohgs-menu-open');
        nav.classList.toggle('ohgs-menu-open', open);
        nav.classList.toggle('open', open);
        btn.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        sync();
      }, true);
    }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootFinalSticky);
  else bootFinalSticky();
})();



/* =========================================================
   FINAL GUARANTEE PATCH: sticky header controller + menu
   ========================================================= */
(function(){
  function startFinalStickyHeader(){
    var header = document.querySelector('.site-header, header.site-header');
    var btn = document.querySelector('.ohgs-menu-toggle, .menu-toggle');
    var nav = document.querySelector('#ohgsMainMenu, .site-header nav, header nav');
    if(!header) return;

    function sync(){
      var compact = window.scrollY > 10;
      header.classList.toggle('scrolled', compact);
      document.body.classList.toggle('ohgs-scrolled', compact);
      document.body.classList.toggle('scrolled', compact);
      header.style.position = 'fixed';
      header.style.top = '0';
      header.style.left = '0';
      header.style.right = '0';
      header.style.zIndex = '2147483640';
      header.style.transform = 'translate3d(0,0,0)';
      header.style.opacity = '1';
      header.style.visibility = 'visible';
      header.style.pointerEvents = 'auto';
    }

    function closeMenu(){
      if(!btn || !nav) return;
      nav.classList.remove('ohgs-menu-open','open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded','false');
      document.body.classList.remove('ohgs-menu-open');
    }

    function toggleMenu(e){
      if(e){ e.preventDefault(); e.stopPropagation(); }
      if(!btn || !nav) return;
      var isOpen = nav.classList.contains('ohgs-menu-open') || nav.classList.contains('open');
      if(isOpen){ closeMenu(); }
      else{
        nav.classList.add('ohgs-menu-open','open');
        btn.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
        document.body.classList.add('ohgs-menu-open');
      }
      sync();
    }

    if(btn && nav && !btn.dataset.finalStickyBound2026){
      btn.dataset.finalStickyBound2026 = 'true';
      btn.addEventListener('click', toggleMenu, true);
      nav.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click', function(){ if(window.innerWidth <= 1024) closeMenu(); });
      });
      document.addEventListener('click', function(e){
        if(window.innerWidth <= 1024 && !header.contains(e.target)) closeMenu();
      }, true);
    }

    var ticking = false;
    function rafSync(){
      if(ticking) return;
      ticking = true;
      requestAnimationFrame(function(){ sync(); ticking = false; });
    }

    window.addEventListener('scroll', rafSync, {passive:true});
    window.addEventListener('resize', function(){ if(window.innerWidth > 1024) closeMenu(); sync(); }, {passive:true});
    window.addEventListener('orientationchange', sync, {passive:true});
    setInterval(sync, 1000);
    sync();

    if(localStorage.getItem('ohgsTheme') === 'light' || localStorage.getItem('theme') === 'light'){
      document.body.classList.add('light');
    }
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startFinalStickyHeader);
  else startFinalStickyHeader();
})();



/* Final sticky header watchdog */
(function(){
  function init(){
    var header=document.querySelector('.site-header,header.site-header');
    var btn=document.querySelector('.ohgs-menu-toggle,.menu-toggle');
    var nav=document.querySelector('#ohgsMainMenu,.site-header nav,header nav');
    if(!header)return;
    function force(){
      var c=window.scrollY>10;
      header.classList.toggle('scrolled',c);
      document.body.classList.toggle('ohgs-scrolled',c);
      document.body.classList.toggle('scrolled',c);
      header.style.setProperty('position','fixed','important');
      header.style.setProperty('top','0','important');
      header.style.setProperty('left','0','important');
      header.style.setProperty('right','0','important');
      header.style.setProperty('width','100vw','important');
      header.style.setProperty('z-index','2147483647','important');
      header.style.setProperty('transform','translateY(0) translateZ(0)','important');
      header.style.setProperty('opacity','1','important');
      header.style.setProperty('visibility','visible','important');
    }
    function close(){
      if(!btn||!nav)return;
      nav.classList.remove('ohgs-menu-open','open');
      btn.classList.remove('is-open');
      btn.setAttribute('aria-expanded','false');
    }
    if(btn&&nav&&!btn.dataset.finalStickyWatchdog){
      btn.dataset.finalStickyWatchdog='true';
      btn.addEventListener('click',function(e){
        e.preventDefault();e.stopPropagation();
        var open=nav.classList.contains('ohgs-menu-open')||nav.classList.contains('open');
        if(open){close()}else{nav.classList.add('ohgs-menu-open','open');btn.classList.add('is-open');btn.setAttribute('aria-expanded','true')}
        force();
      },true);
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(window.innerWidth<=760)close()})});
    }
    window.addEventListener('scroll',force,{passive:true});
    window.addEventListener('resize',force,{passive:true});
    window.addEventListener('orientationchange',force,{passive:true});
    setInterval(force,300);
    force();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();



/* FINAL PATCH: synchronize light mode to html + body */
(function(){
  function syncThemeClasses(){
    var body=document.body;
    var html=document.documentElement;
    var stored=localStorage.getItem('ohgsTheme')||localStorage.getItem('theme')||localStorage.getItem('siteTheme');
    var isLight=body.classList.contains('light')||body.classList.contains('light-mode')||html.classList.contains('light')||html.getAttribute('data-theme')==='light'||body.getAttribute('data-theme')==='light'||stored==='light';
    if(isLight){
      body.classList.add('light','light-mode');
      html.classList.add('light');
      html.setAttribute('data-theme','light');
      body.setAttribute('data-theme','light');
      localStorage.setItem('ohgsTheme','light');
    }
  }

  function bindThemeButtons(){
    document.querySelectorAll('.theme-toggle,[data-theme-toggle],#themeToggle,.theme-btn').forEach(function(btn){
      if(btn.dataset.ohgsLightSyncBound)return;
      btn.dataset.ohgsLightSyncBound='true';
      btn.addEventListener('click',function(){
        setTimeout(syncThemeClasses,30);
        setTimeout(syncThemeClasses,160);
        setTimeout(syncThemeClasses,420);
      },true);
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',function(){syncThemeClasses();bindThemeButtons();setInterval(syncThemeClasses,700);});
  }else{
    syncThemeClasses();bindThemeButtons();setInterval(syncThemeClasses,700);
  }
})();



/* FINAL THEME + HEADER PATCH: exact light/dark sync and mobile support */
(function(){
  function setTheme(mode){
    var light = mode === 'light';
    var body = document.body;
    var html = document.documentElement;
    body.classList.toggle('light', light);
    body.classList.toggle('light-mode', light);
    html.classList.toggle('light', light);
    if(light){
      body.setAttribute('data-theme','light');
      html.setAttribute('data-theme','light');
    }else{
      body.setAttribute('data-theme','dark');
      html.setAttribute('data-theme','dark');
    }
    localStorage.setItem('ohgsTheme', light ? 'light' : 'dark');
    localStorage.setItem('theme', light ? 'light' : 'dark');
  }

  window.toggleTheme = function(){
    var current = localStorage.getItem('ohgsTheme') || localStorage.getItem('theme') || (document.body.classList.contains('light') ? 'light' : 'dark');
    setTheme(current === 'light' ? 'dark' : 'light');
  };

  function initTheme(){
    var saved = localStorage.getItem('ohgsTheme') || localStorage.getItem('theme') || 'dark';
    setTheme(saved === 'light' ? 'light' : 'dark');
  }

  function keepHeaderSticky(){
    var header = document.querySelector('.site-header, header.site-header');
    if(!header) return;
    var compact = window.scrollY > 8;
    header.classList.toggle('scrolled', compact);
    document.body.classList.toggle('ohgs-scrolled', compact);
    header.style.setProperty('position','fixed','important');
    header.style.setProperty('top','0','important');
    header.style.setProperty('left','0','important');
    header.style.setProperty('right','0','important');
    header.style.setProperty('width','100vw','important');
    header.style.setProperty('z-index','2147483647','important');
    header.style.setProperty('transform','translate3d(0,0,0)','important');
    header.style.setProperty('opacity','1','important');
    header.style.setProperty('visibility','visible','important');
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      initTheme();
      keepHeaderSticky();
      setInterval(keepHeaderSticky, 300);
    });
  }else{
    initTheme();
    keepHeaderSticky();
    setInterval(keepHeaderSticky, 300);
  }
  window.addEventListener('scroll', keepHeaderSticky, {passive:true});
  window.addEventListener('resize', keepHeaderSticky, {passive:true});
})();


/* =========================================================
   FINAL 2026 PATCH: force true light mode on all devices
   ========================================================= */
(function(){
  function setTheme(mode){
    var light = mode === 'light';
    var html = document.documentElement;
    var body = document.body;
    if(!body) return;
    html.classList.toggle('light', light);
    body.classList.toggle('light', light);
    body.classList.toggle('light-mode', light);
    html.setAttribute('data-theme', light ? 'light' : 'dark');
    body.setAttribute('data-theme', light ? 'light' : 'dark');
    localStorage.setItem('ohgsTheme', light ? 'light' : 'dark');
    localStorage.setItem('theme', light ? 'light' : 'dark');
    localStorage.setItem('siteTheme', light ? 'light' : 'dark');
  }

  function getSavedTheme(){
    return localStorage.getItem('ohgsTheme') || localStorage.getItem('theme') || localStorage.getItem('siteTheme') || 'dark';
  }

  window.toggleTheme = function(){
    var current = document.documentElement.getAttribute('data-theme') || getSavedTheme();
    setTheme(current === 'light' ? 'dark' : 'light');
  };

  function bindThemeButtons(){
    document.querySelectorAll('.theme-toggle,[data-theme-toggle],#themeToggle,.theme-btn').forEach(function(btn){
      if(btn.dataset.ohgsFinalThemeBound) return;
      btn.dataset.ohgsFinalThemeBound = 'true';
      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        window.toggleTheme();
      }, true);
    });
  }

  function bootForceTheme(){
    setTheme(getSavedTheme() === 'light' ? 'light' : 'dark');
    bindThemeButtons();
    setTimeout(function(){ setTheme(getSavedTheme() === 'light' ? 'light' : 'dark'); }, 50);
    setTimeout(function(){ setTheme(getSavedTheme() === 'light' ? 'light' : 'dark'); }, 220);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bootForceTheme);
  }else{
    bootForceTheme();
  }
  window.addEventListener('pageshow', bootForceTheme);
})();



/* =========================================================
   EMERGENCY FINAL THEME FIX: replaces old theme button listeners
   so light/dark works once, correctly, on PC and mobile.
   ========================================================= */
(function(){
  function setTheme(mode){
    var light = mode === 'light';
    var html = document.documentElement;
    var body = document.body;
    if(!body) return;

    html.classList.toggle('light', light);
    body.classList.toggle('light', light);
    body.classList.toggle('light-mode', light);
    html.classList.toggle('dark', !light);
    body.classList.toggle('dark', !light);

    html.setAttribute('data-theme', light ? 'light' : 'dark');
    body.setAttribute('data-theme', light ? 'light' : 'dark');

    localStorage.setItem('ohgsTheme', light ? 'light' : 'dark');
    localStorage.setItem('theme', light ? 'light' : 'dark');
    localStorage.setItem('siteTheme', light ? 'light' : 'dark');

    document.querySelectorAll('.theme-toggle,[data-theme-toggle],#themeToggle,.theme-btn').forEach(function(btn){
      btn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      if(!btn.dataset.keepText){ btn.textContent = light ? '☀️ / 🌙' : '🌙 / ☀️'; }
    });
  }

  function getTheme(){
    return localStorage.getItem('ohgsTheme') || localStorage.getItem('theme') || localStorage.getItem('siteTheme') || 'dark';
  }

  window.OHGSSetTheme = setTheme;
  window.toggleTheme = function(){
    var current = document.documentElement.getAttribute('data-theme') || getTheme();
    setTheme(current === 'light' ? 'dark' : 'light');
  };

  function replaceThemeButtons(){
    document.querySelectorAll('.theme-toggle,[data-theme-toggle],#themeToggle,.theme-btn').forEach(function(oldBtn){
      if(oldBtn.dataset.ohgsThemeFinalReady === 'yes') return;
      var btn = oldBtn.cloneNode(true);
      btn.removeAttribute('onclick');
      btn.dataset.ohgsThemeFinalReady = 'yes';
      btn.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        window.toggleTheme();
        return false;
      }, true);
      oldBtn.parentNode.replaceChild(btn, oldBtn);
    });
  }

  function boot(){
    var saved = getTheme();
    setTheme(saved === 'light' ? 'light' : 'dark');
    replaceThemeButtons();
    setTimeout(replaceThemeButtons, 200);
    setTimeout(function(){ setTheme(getTheme() === 'light' ? 'light' : 'dark'); }, 250);
    setTimeout(function(){ setTheme(getTheme() === 'light' ? 'light' : 'dark'); }, 900);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
  window.addEventListener('pageshow', boot);
  window.addEventListener('storage', function(e){
    if(['ohgsTheme','theme','siteTheme'].indexOf(e.key) !== -1) setTheme(getTheme() === 'light' ? 'light' : 'dark');
  });
})();


/* =========================================================
   FINAL PATCH: robust mobile menu close/open + compact header
   ========================================================= */
(function(){
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  ready(function(){
    var header=document.querySelector('.site-header, header.site-header');
    var btn=document.querySelector('.ohgs-menu-toggle, .menu-toggle');
    var nav=document.querySelector('#ohgsMainMenu, .site-header nav, header.site-header nav');
    function syncHeader(){
      if(!header) return;
      var compact=window.scrollY>8;
      header.classList.toggle('scrolled',compact);
      document.body.classList.toggle('ohgs-scrolled',compact);
      header.style.setProperty('position','fixed','important');
      header.style.setProperty('top','0','important');
      header.style.setProperty('left','0','important');
      header.style.setProperty('right','0','important');
      header.style.setProperty('z-index','99999','important');
    }
    function isOpen(){return nav&&(nav.classList.contains('ohgs-menu-open')||nav.classList.contains('open'));}
    function closeMenu(){if(!btn||!nav)return;nav.classList.remove('ohgs-menu-open','open');btn.classList.remove('is-open','open');btn.setAttribute('aria-expanded','false');document.body.classList.remove('ohgs-menu-open');}
    function openMenu(){if(!btn||!nav)return;nav.classList.add('ohgs-menu-open','open');btn.classList.add('is-open','open');btn.setAttribute('aria-expanded','true');document.body.classList.add('ohgs-menu-open');}
    function toggleMenu(e){if(e){e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();} if(isOpen())closeMenu();else openMenu();}
    if(btn&&nav){
      btn.setAttribute('aria-controls',nav.id||'ohgsMainMenu');
      btn.setAttribute('aria-expanded','false');
      btn.onclick=null;
      btn.addEventListener('click',toggleMenu,true);
      nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
      document.addEventListener('click',function(e){if(window.innerWidth<=900&&header&&!header.contains(e.target))closeMenu();},true);
      document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
      window.addEventListener('resize',function(){if(window.innerWidth>900)closeMenu();syncHeader();},{passive:true});
    }
    window.addEventListener('scroll',syncHeader,{passive:true});
    window.addEventListener('pageshow',syncHeader);
    syncHeader();
    setInterval(syncHeader,600);
  });
})();
