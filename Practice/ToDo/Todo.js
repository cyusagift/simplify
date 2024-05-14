let todo = document.getElementById("todo");
let btn = document.getElementById("addTodo");

const inputEl = document.querySelector("input");
inputEl.addEventListener("change",(event)=>{
    console.log(event.target.value)
})

const btnEl = document.querySelector("button");
document.querySelector('form').addEventListener("submit",(event)=>{
    event.preventDefault()
    liEl = document.createElement('li')
    liEl.innerText = todo.value;
    // pEl.write(`Your Username is ${Uname} and your Password is ${pwd}.`)
    document.querySelector('ul').appendChild(liEl)
});