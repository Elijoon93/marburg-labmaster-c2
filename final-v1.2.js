(()=>{
  if(document.body.dataset.finalRelease==='1.2.0')return;
  document.body.dataset.finalRelease='1.2.0';
  const style=document.createElement('style');
  style.id='final-v1-2-fixes';
  style.textContent=`
    .g4{grid-template-columns:repeat(4,minmax(0,1fr))!important}
    .g3{grid-template-columns:repeat(3,minmax(0,1fr))!important}
    .g2{grid-template-columns:repeat(2,minmax(0,1fr))!important}
    .grid>*{min-width:0}.calc .row>*{min-width:0;width:100%}.calc{overflow:hidden}
    #knownN,#moduleN,#quizScore{direction:ltr;unicode-bidi:isolate;text-align:right}
    .nav-item:focus-visible,.dock-item:focus-visible,.sheet-item:focus-visible,.icon-button:focus-visible,.quick-search:focus-visible,.profile-chip:focus-visible,.side-utility:focus-visible{outline:3px solid rgba(25,179,157,.38);outline-offset:2px}
  `;
  document.head.appendChild(style);
  const menu=document.getElementById('menuBtn');
  const more=document.getElementById('moreBtn');
  const overlay=document.getElementById('shellOverlay');
  const sheet=document.getElementById('moreSheet');
  menu?.setAttribute('aria-controls','sidebar');
  menu?.setAttribute('aria-expanded',String(document.body.classList.contains('nav-open')));
  more?.setAttribute('aria-controls','moreSheet');
  more?.setAttribute('aria-expanded',String(document.body.classList.contains('more-open')));
  const sync=()=>{
    menu?.setAttribute('aria-expanded',String(document.body.classList.contains('nav-open')));
    overlay?.setAttribute('aria-hidden',String(!document.body.classList.contains('nav-open')));
    more?.setAttribute('aria-expanded',String(document.body.classList.contains('more-open')));
    sheet?.setAttribute('aria-hidden',String(!document.body.classList.contains('more-open')));
  };
  [menu,more,overlay,document.getElementById('closeMoreBtn'),document.getElementById('sheetBackdrop')].forEach(el=>el?.addEventListener('click',()=>queueMicrotask(sync)));
  addEventListener('keydown',()=>queueMicrotask(sync));
  addEventListener('resize',()=>queueMicrotask(sync));
  const build=document.querySelector('.build-chip span');
  if(build)build.textContent='Final v1.2';
  document.documentElement.dataset.release='1.2.0-final';
  sync();
})();
