System.register([],(function(t){"use strict";return{execute:function(){var e=t("f",(function(t){var e=t.getAttribute("href");if("accessibility"===t.getAttribute("href")){e="https://www2.gov.bc.ca/gov/content/home/accessibility";t.setAttribute("href",e)}if(t.hasAttribute("aria")){t.setAttribute("aria-label",t.textContent);t.removeAttribute("aria")}return t}));var r=t("b",(function(t){var r=t.nodeName.toLowerCase();if(("a"===r||"span"===r)&&"li"!==t.parentNode.nodeName.toLowerCase()){e(t);t.setAttribute("itemprop","item");if("a"===r){var i=document.createElement("span");i.setAttribute("itemprop","name");i.textContent=t.textContent;t.innerHTML="";t.appendChild(i)}else if("span"===r){t.setAttribute("itemprop","name");t.setAttribute("aria-current","page");t.setAttribute("tabindex",0)}var a=document.createElement("li");a.setAttribute("aria-label",t.textContent);a.setAttribute("itemscope","");a.setAttribute("itemprop","itemListElement");a.setAttribute("itemtype","http://schema.org/ListItem");a.appendChild(t.cloneNode(true));t.parentNode.replaceChild(a,t)}}));var i=t("m",(function(t){var r=t.nodeName.toLowerCase();if("a"===r&&"li"!==t.parentNode.nodeName.toLowerCase()){e(t);t.setAttribute("tabindex","-1");t.setAttribute("aria-hidden","true");var i=document.createElement("li");if(t.hasAttribute("active")){i.classList.add("active")}i.setAttribute("role","menuitem");i.setAttribute("tabindex","-1");i.setAttribute("aria-label",t.textContent);i.appendChild(t.cloneNode(true));t.parentNode.replaceChild(i,t)}}));var a=t("a",(function(t,e){while((t=t.parentElement)&&!(t.matches||t.matchesSelector).call(t,e));return t}));var n=t("k",{tab:9,enter:13,esc:27,space:32,left:37,up:38,right:39,down:40})}}}));