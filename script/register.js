import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, storage } from "./config.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const from_dt = document.querySelector('#from_dt')
const Frist_Name = document.querySelector('#Frist_Name')
const Last_Name = document.querySelector('#Last_Name')
const Email_dt = document.querySelector('#Email_dt')
const password_dt = document.querySelector('#password_dt')
const profile_pic = document.querySelector('#profile_pic')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex = /^.{6,}$/;

const nameRegex = /^.{3,}$/;


from_dt.addEventListener('submit', async (e) => {
    e.preventDefault()
    // console.log('working');
    // console.log(Frist_Name);
    // console.log(Last_Name);
    // console.log(Email_dt);
    // console.log(password_dt);
    if (!nameRegex.test(Frist_Name.value)) {
        console.error('First name must be at least 3 characters long');
        return;
    }
    if (!nameRegex.test(Last_Name.value)) {
        console.error('Last name must be at least 3 characters long');
        return;
    }
    if (!emailRegex.test(Email_dt.value)) {
        console.error('Invalid email format');
        return;
    }
    if (!passwordRegex.test(password_dt.value)) {
        console.error('Password must be at least 6 characters long');
        return;
    }

    if (profile_pic.files.length > 0) {
        const file = profile_pic.files[0];
        try {
            const urlCreated = await UploadFileLink(file);
            console.log('File uploaded successfully:', urlCreated);
        } catch (error) {
            console.error('File upload failed:', error);
        }
    } else {
        console.log('No file selected');
        return;
    }

        createUserWithEmailAndPassword(auth, Email_dt.value, password_dt.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
    
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    
    
})


async function UploadFileLink(files) {
    const storageRef = ref(storage, Email_dt.value)
    try {
        const uploadImg = await uploadBytes(storageRef, files)
        const url = await getDownloadURL(storageRef)
        return url
    } catch (error) {
        return error
    }
}