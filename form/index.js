
// const submitBtn = document.querySelector('#submit');

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     //const body = document.querySelector('body');

//     //body.style.background = "#fff";

//     const name = document.querySelector('#name');
//     const email = document.querySelector('#email');

//     const error = document.querySelector(".error");

//     if(name.value() === "" || email.value() === "") {

//     }
// })

// const msg = document.querySelector('#msg');
// const name = document.querySelector('#name');
// const email = document.querySelector('#email');
// const myForm = document.querySelector('#login-form');
// const usersList = document.querySelector('#users');

// const users = [
//     {userName: name, UserEmail: email}
// ]

// localStorage.setItem("object", JSON.stringify(users))

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(name.value === "" || email.value === "") {
//         msg.classList.add("error");
//         msg.innerHTML = "Please fill all fields";

//         setTimeout( function() {
//             msg.remove();
//         }, 2000)
//     }else{
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));

//         usersList.appendChild(li);

//         name.value = "";
//         email.value = "";
//     }

// }

const msg = document.querySelector('#msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const amountInput = document.querySelector('#amount');
const myForm = document.querySelector('#login-form');
const usersList = document.querySelector('#users');

// Load users from localStorage or initialize an empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const amount = amountInput.value.trim();

    if(name === "" || email === "" || amount === "") {
        showError("Please fill all fields");
    } else {
        const user = { userName: name, userEmail: email, userAmount:amount };
        users.push(user);

        // Update users in localStorage
        localStorage.setItem("users", JSON.stringify(users));

        renderUser(user);

        // Clear input fields
        nameInput.value = "";
        emailInput.value = "";
        amountInput.value = "";
    }
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = "error";
    errorDiv.appendChild(document.createTextNode(message));
    msg.appendChild(errorDiv);

    // Remove error message after 2 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 2000);
}

function renderUser(user) {
    const li = document.createElement('li');
    li.textContent = `${user.userName} : ${user.userEmail} : ${user.userAmount}`;
    usersList.appendChild(li);
}

// Initial rendering of existing users from localStorage
users.forEach(renderUser);

function searchTransactions(searchTerm) {
    let transactions = JSON.parse(localStorage.getItem('transactions'));
  
    for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      let matchFound = false;
  
      if (transaction.name.includes(searchTerm) || 
          transaction.amount.includes(searchTerm) || 
          transaction.payment.includes(searchTerm) || 
          transaction.date.includes(searchTerm) || 
          transaction.id.includes(searchTerm)) {
        matchFound = true;
      }
  
      const row = document.getElementById('transactionTable').rows[i + 1]; // Assuming the table has a header row
  
      if (!matchFound) {
        row.style.display = 'none';
      } else {
        row.style.display = '';
      }
    }
}