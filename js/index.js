btnClick.addEventListener('click', changeLogo);

const searchInput = document.querySelector('.main_search');
function changeLogo() {
  if (btnClick.hasAttribute('data-change')) {
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
    `;
    btnClick.removeAttribute('data-change');
  } else {
    searchInput.firstElementChild.innerHTML = `
  <span id="G">G</span>
  <span id="o">o</span>
  <span id="oo">o</span>
  <span id="G">g</span>
  <span id="l">l</span>
  <span id="o">e</span>
`;
    btnClick.setAttribute('data-change', 'google');
  }
}

// const foo = num => {
//   let res = 1;
//   for (let i = 1; i < num; i++) {
//     res += i;
//   }
//   return res;
// };
// console.log(foo(10));
// // Написати функцію getStep, яка отримує число і повертає сходинку, на якій це число буде знаходитись
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // Create an array with three elements:
// const points1 = new Array(40, 100, 1);

// // Create an array with two elements:
// const points2 = new Array(40, 100);

// //what will it do ???
// const points3 = new Array(3);

// console.log(points1);
// console.log(points2);
// console.log(points3);
// console.log(40 % 10 == 0);

// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value) {
//   return value > 18;
// }

// let a = { x: 5, y: 2 };
// let b = a;
// a = { ...b };
// b.z = 9;

// console.log('result : ', b.z);
// function fun() {
//   console.log('JavaScript');
//   function fun(a) {
//     console.log(a);
//   }
// }

// fun(fun(1));
