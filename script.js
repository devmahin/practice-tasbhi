// const element = document.querySelector("#element")
// let HTML = element.children;
// let array = Array.from(HTML);
// // console.log(array)
// array.forEach((val, index, array) => {
//     // console.log(val.innerText)
// })
// let que = document.querySelector(".next-sibling");

// // console.log(que.nextElementSibling)
// // console.log(que.previousElementSibling)
// // console.log(element.parentElement.previousElementSibling)


// let inner = que.innerHTML = `
//     <div>
//     <select name="" id="selector">
//     <option value="">1</option>
//     <option value="">2</option>
//     <option value="">3</option>
//     <option value="">4</option>
//     <option value="">5</option>
// </select>
//     </div>

// `
// const selector = document.querySelector("#selector")
// console.log(selector.children)



// let elem = element.nextElementSibling;
// // console.log(elem)
// elem.innerText = "I am inner text.";
// elem.style.backgroundColor = "red";
// // elem.style.marginBottom = "20px"


// // setAttribute() || getAttribute()  || removeAttribute()
// elem.setAttribute("class", " mahin alu")
// elem.removeAttribute("class")

// // Creating an element and append




// // Add class name  || classList[add(),remove()]
// elem.classList.add("hello")
// elem.classList.remove("hello")
// console.log(elem.getAttribute("class"))





// append Child or insert before
// console.log(child.children);
// for(let childs of child){
//     // console.log(child[childs])
//     console.log(childs)
// }


// const div = document.querySelector("#child");

// let li = document.createElement("li")
// li.innerText = "alui";

// let div2 = div.children[2];

// div.insertBefore(li, div2)




// event propagation

// const parent = document.querySelector(".parent")
// // console.log(parent)
// const form = document.querySelector(".form")
// const button = document.querySelector(".button")

// parent.addEventListener("click", listaner, );
// form.addEventListener("click", listaner,{capture : true});
// button.addEventListener("click", listaner,);
// function listaner (event){
//     event.preventDefault()
//     console.log(event.currentTarget.tagName)    
// }




const increment = document.querySelectorAll(".increment");
// console.log(increment)
const decrement = document.querySelectorAll(".decrement");
const count = document.querySelector(".count");

    let countPlus = 0; 
    let alham = 0; 
    let subhan = 0; 
    // let countSubstraction = 0;
const alhamdulilah = document.querySelector(".Alhamdulilah")
    for(let inc of increment){
        // console.log(in)
        inc.addEventListener("click", function(event){
            if(countPlus === 0){
                countPlus += 1; 
               return alert("Please value is unstabel")
            }
            countPlus--;
            count.innerText = countPlus;
        
        })
    }


    for(let dec of decrement){
        dec.addEventListener("click", function(event){
            if(countPlus === 33){
                alhamdulilah.innerText = "completed"
              return  alert("Complete allhamdulilah")
            }
            countPlus++;
            count.innerText = countPlus;
        
        })
        
    }


const reset = document.getElementById("reset");
console.log(reset)
reset.addEventListener("click", function(event){
    count.innerText = 0;
    countPlus = 0;
})