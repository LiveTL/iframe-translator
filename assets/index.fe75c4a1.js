const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}};f();let i=null,u=null,g=!1;const p=()=>Array.from(u?u.querySelectorAll(".goog-te-menu2 a .text"):[]);window.googleTranslateElementInit=async()=>{setInterval(()=>{try{document.body.scrollTop=document.body.scrollHeight*2;const e=document.querySelector(".goog-te-banner-frame").contentWindow.document.querySelector(".goog-te-button");if(e.parentElement.parentElement.style.display==="none")return;e.querySelector("button").click()}catch{}},1e3),i=document.createElement("div"),i.id="parent-wrapper",document.body.appendChild(i),window.addEventListener("message",w),await d({type:"request",messageID:"init",text:"",targetLanguage:"unset"}),setTimeout(()=>{u=document.querySelector(".goog-te-menu-frame").contentWindow.document,window.parent.postMessage(JSON.stringify({type:"loaded"}),"*")},500)};function y(e){try{const n=window.google.translate.TranslateElement.getInstance().B,r=Object.keys(n).find(t=>n[t]===e);p()[Object.keys(n).indexOf(r)].click()}catch{}}function d(e){return new Promise(n=>{y(e.targetLanguage);const r=document.createElement("div");r.innerText=e.text;const a=e.messageID.replace(/[^a-zA-Z0-9]/g,"");r.id=a,i.appendChild(r);const t=()=>{var s;o.disconnect(),r.remove(),(s=document.querySelectorAll(`#${a}`))==null||s.forEach(l=>l.remove())};g||(setTimeout(()=>{const s=document.querySelector(".goog-te-combo");s&&(s.value=e.targetLanguage,s.dispatchEvent(new Event("change")))},500),g=!0);const o=new MutationObserver(()=>{const s=r.querySelector("font");if(s&&s.textContent!==e.text){const l={targetLanguage:e.targetLanguage,text:s.textContent,type:"response",messageID:e.messageID};n(l),t(),clearTimeout(m)}}),c=()=>{t(),n({type:"response",targetLanguage:e.targetLanguage,text:e.text,messageID:e.messageID})},m=setTimeout(c,5e3);o.observe(r,{attributes:!0,childList:!0,characterData:!0}),setTimeout(()=>{window.google.translate.TranslateElement({},r.id),e.text||c()},0)})}async function w(e){const n=JSON.parse(e.data),r=await d(n);window.parent.postMessage(JSON.stringify(r),"*")}
