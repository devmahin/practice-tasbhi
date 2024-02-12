const element = document.querySelector("#element")
let HTML  = element.children;
let array = Array.from(HTML);
// console.log(array)
array.forEach((val,index,array)=>{
    // console.log(val.innerText)
})
let que = document.querySelector(".next-sibling");

console.log(que.nextElementSibling)
console.log(que.previousElementSibling)
