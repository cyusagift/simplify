// function enterFunctionality(event){
//     if (event.key === 'Enter')
// }
// function afterSubmiting(){
//     document.body.innerHTML = '<h1>Thank you for the submition of your form</h1>';

// }


function displayText(){
    const text1 = document.querySelector('#fname').value;
    const text2 = document.querySelector('#lname').value;
    document.querySelector('.js-para').innerHTML = `Your name is: ${text1} ${text2}`
}
function reset() {
    document.querySelector('.js-para').innerHTML = '';
    document.querySelector('#fname').value = '';
    document.querySelector('#lname').value = '';
}

document.querySelector("#submitbtn").addEventListener('click', (event)=>{
    const fnamaValue = document.querySelector('#fname').value;
    const lnameValue = document.querySelector('#lname').value;

    const myParagraph = docment.createElement("p");
    myParagraph.innerHTML = "Your name is " + fnamaValue + " " + lnameValue;
    document.querySelector(".container")
})
