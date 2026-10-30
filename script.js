(() => {
  "use strict";
  const scenarios = {
    contact: {
      ref:"TST / 001", variable:"LOAD / CONTACT", label:"CONTACT DYNAMICS",
      title:"When the object changes, does the grasp still hold?", symbol:"↔",
      perturb:"Vary payload, centre of mass, friction and object compliance.",
      fail:"Slip, unsuccessful grasp, excessive force, unintended object release.",
      evidence:"Success by condition · grasp force · intervention rate · recovery behaviour",
      path:"M60 140 C120 140 130 80 178 82 S260 120 315 65 S390 110 442 92 S520 30 565 52", marker:[442,92]
    },
    perception: {
      ref:"TST / 002", variable:"POSE / VISIBILITY", label:"PERCEPTION ROBUSTNESS",
      title:"Does the task survive when the scene is unfamiliar?", symbol:"◈",
      perturb:"Vary lighting, occlusion, object placement and background clutter.",
      fail:"Missed detections, incorrect pose estimates, inappropriate grasp selection.",
      evidence:"Success by scene · localisation error · retries · out-of-distribution cases",
      path:"M60 146 C110 142 153 132 185 98 S249 58 292 99 S357 144 399 90 S468 64 565 132", marker:[399,90]
    },
    control: {
      ref:"TST / 003", variable:"LATENCY / TIMING", label:"CONTROL & INTEGRATION",
      title:"What happens when timing and interfaces shift?", symbol:"⌁",
      perturb:"Vary control update rate, network delays, sensor timestamps and actuator response.",
      fail:"Overshoot, oscillation, timeouts, stale commands and unsafe recovery assumptions.",
      evidence:"Tracking error · response latency · timeouts · recovery and intervention logs",
      path:"M60 146 C116 144 136 81 184 81 S254 162 307 84 S379 151 420 87 S505 159 565 59", marker:[420,87]
    },
    drift: {
      ref:"TST / 004", variable:"WEAR / CHANGE", label:"LIFECYCLE ROBUSTNESS",
      title:"Will the next hardware or software change invalidate the result?", symbol:"⟳",
      perturb:"Compare calibrations, tool revisions, wear states, firmware versions and task changes.",
      fail:"Performance regressions, accumulating bias, brittle calibration and missing baselines.",
      evidence:"Versioned comparisons · drift trends · regression cases · traceable test configuration",
      path:"M60 139 C126 138 161 116 201 107 S280 113 327 95 S411 129 461 112 S510 130 565 157", marker:[461,112]
    }
  };
  const $=id=>document.getElementById(id);
  const tabs=[...document.querySelectorAll('[role="tab"][data-scenario]')];
  const fields={ref:'scenario-ref',variable:'scenario-variable',label:'scenario-label',title:'scenario-title',symbol:'scenario-symbol',perturb:'scenario-perturb',fail:'scenario-fail',evidence:'scenario-evidence'};
  function showScenario(key,focus){
    const item=scenarios[key]; if(!item)return;
    for(const tab of tabs){const selected=tab.dataset.scenario===key;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;if(selected&&focus)tab.focus();}
    const panel=$('scenario-panel');panel.setAttribute('aria-labelledby','tab-'+key);
    for(const [field,id] of Object.entries(fields)) $(id).textContent=item[field];
    $('response-path').setAttribute('d',item.path);
    $('response-marker').setAttribute('cx',item.marker[0]);$('response-marker').setAttribute('cy',item.marker[1]);
  }
  tabs.forEach((tab,i)=>{
    tab.addEventListener('click',()=>showScenario(tab.dataset.scenario,false));
    tab.addEventListener('keydown',event=>{
      let j;
      if(event.key==='ArrowRight'||event.key==='ArrowDown')j=(i+1)%tabs.length;
      else if(event.key==='ArrowLeft'||event.key==='ArrowUp')j=(i+tabs.length-1)%tabs.length;
      else if(event.key==='Home')j=0;
      else if(event.key==='End')j=tabs.length-1;
      else return;
      event.preventDefault();showScenario(tabs[j].dataset.scenario,true);
    });
  });
  const menuButton=$('menu-toggle'), mobileNav=$('mobile-nav');
  if(menuButton&&mobileNav){
    const closeMenu=()=>{mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');};
    menuButton.addEventListener('click',()=>{const opening=mobileNav.hidden;mobileNav.hidden=!opening;menuButton.setAttribute('aria-expanded',String(opening));menuButton.setAttribute('aria-label',opening?'Close navigation':'Open navigation');});
    mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  }
  if($('year'))$('year').textContent=String(new Date().getFullYear());
  const form=$('contact-form');
  const status=$('form-status');
  if(status && (location.protocol==='file:' || ['localhost','127.0.0.1'].includes(location.hostname))){status.textContent='Preview mode — inquiry submission becomes available after the site is configured and deployed on Netlify.';}
  if(form){
    form.addEventListener('submit',async event=>{
      // Only Netlify-hosted forms are handled here. On an unconfigured host,
      // do not silently pretend an inquiry was successfully collected.
      event.preventDefault();
      const status=$('form-status');
      if(!form.reportValidity())return;
      if(location.protocol==='file:'||['localhost','127.0.0.1'].includes(location.hostname)){
        status.dataset.kind='error';status.textContent='This is a local preview. Publish the site to Netlify and enable Forms before taking real inquiries.';return;
      }
      const submit=form.querySelector('[type="submit"]');submit.disabled=true;submit.textContent='Sending…';
      try{
        const body=new URLSearchParams(new FormData(form));
        const response=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()});
        if(!response.ok)throw new Error(`Form returned HTTP ${response.status}`);
        window.location.assign('/thank-you.html');
      }catch(err){
        status.dataset.kind='error';status.textContent='The inquiry could not be confirmed. Please try again, or contact us through a verified channel.';
        submit.disabled=false;submit.innerHTML='Send inquiry <span aria-hidden="true">↗</span>';
      }
    });
  }
})();
