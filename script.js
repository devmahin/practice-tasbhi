const element = document.querySelector("#element")
let HTML = element.children;
let array = Array.from(HTML);
// console.log(array)
array.forEach((val, index, array) => {
    // console.log(val.innerText)
})
let que = document.querySelector(".next-sibling");

// console.log(que.nextElementSibling)
// console.log(que.previousElementSibling)
// console.log(element.parentElement.previousElementSibling)


let inner = que.innerHTML = `
    <div>
    <select name="" id="selector">
    <option value="">1</option>
    <option value="">2</option>
    <option value="">3</option>
    <option value="">4</option>
    <option value="">5</option>
</select>
    </div>

`
const selector = document.querySelector("#selector")
console.log(selector.children)



let elem = element.nextElementSibling;
// console.log(elem)
elem.innerText = "I am inner text.";
elem.style.backgroundColor = "red";
// elem.style.marginBottom = "20px"