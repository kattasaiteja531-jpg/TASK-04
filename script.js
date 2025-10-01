(function(){
  const tabs = document.querySelectorAll('.tab');
  const panels = {
    about: document.getElementById('tab-about'),
    resume: document.getElementById('tab-resume'),
    portfolio: document.getElementById('tab-portfolio'),
    blog: document.getElementById('tab-blog'),
    contact: document.getElementById('tab-contact'),
  };

  function setActive(key){
    // Update tab buttons
    tabs.forEach(btn => {
      const active = btn.dataset.tab === key;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    // Update panels
    Object.entries(panels).forEach(([k, el])=>{
      const show = k === key;
      if (!el) return;
      el.hidden = !show;
      el.classList.toggle('is-visible', show);
    });
  }

  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=> setActive(btn.dataset.tab));
  });

  // Initialize
  setActive('about');
})();