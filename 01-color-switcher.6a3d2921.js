const t={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;const o=()=>{e=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.body.style.backgroundColor=e}),1e3),t.startButton.setAttribute("disabled","disabled"),t.stopButton.removeAttribute("disabled")};t.startButton.addEventListener("click",o),t.stopButton.addEventListener("click",(()=>{clearInterval(e),t.stopButton.setAttribute("disabled","disabled"),t.startButton.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.6a3d2921.js.map