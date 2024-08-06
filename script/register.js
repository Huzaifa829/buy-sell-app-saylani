import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const from_dt = document.querySelector('#from_dt')
const Frist_Name = document.querySelector('#Frist_Name')
const Last_Name = document.querySelector('#Last_Name')
const Email_dt = document.querySelector('#Email_dt')
const password_dt = document.querySelector('#password_dt')



from_dt.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('working');
    console.log(Frist_Name);
    console.log(Last_Name);
    console.log(Email_dt);
    console.log(password_dt);
    
    

})