document.querySelector("#btnClick").addEventListener("click", changeLogo)

const maxWordLength = 7
const googleLogo = document.querySelector("#googleLogo").childElementCount
const searchInput = document.querySelector(".main_search")
function changeLogo() {

   googleLogo > maxWordLength ?
      searchInput.firstElementChild.innerHTML = `
      <span id="G">G</span>
      <span id="o">o</span>
      <span id="oo">o</span>
      <span id="G">g</span>
      <span id="l">l</span>
      <span id="o">e</span>
   `:
      searchInput.firstElementChild.innerHTML = `
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





