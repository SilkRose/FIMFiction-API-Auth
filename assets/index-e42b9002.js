!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();let e=document.getElementById("mane");function t(t){const o=document.createElement("div");o.className="content",o.innerHTML=`${t}`,e.appendChild(o),o.scrollIntoView()}window.onload=async function(){const o=document.URL.toString().split(/\/[#?]/)[1];if(o.includes("error")){let e;const n=o.split("&");for(let t=0;t<=n.length-1;t++)if(n[t].startsWith("error")){e=n[t].split("=")[1];break}const r='If the error persists, please <a href="mailto:silkrose@love-tolerance.com">contact</a> me.';t(`Encountered the following error: ${e}`),t(r)}else{const n=document.createElement("button");n.innerText="Copy to clipboard",n.id="copy",t(o),e.appendChild(n),n.addEventListener("click",(function(){navigator.clipboard.writeText(o)}))}};