document.querySelector("#btnClick").addEventListener("click", changeLogo)

function changeLogo() {

   document.querySelector("#googleLogo").childElementCount > 7 ?
      document.querySelector(".main_search").firstElementChild.innerHTML = `
      <span id="G">G</span>
      <span id="o">o</span>
      <span id="oo">o</span>
      <span id="G">g</span>
      <span id="l">l</span>
      <span id="o">e</span>
   `:
      document.querySelector(".main_search").firstElementChild.innerHTML = `
      <span>I</span>
      <span>L</span>
      <span>M</span>
      <span>A</span>
      <span>K</span>
      <span>I</span>
      <span>A</span>
      <span>G</span>
      <span>E</span>
      `
}





