import {onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const nav_option_show = document.querySelector('#nav_option_show')
const main_card_container = document.querySelector('#main_card_container')
alertify.set('notifier', 'position', 'top-center');

let logout_btn ;
let arr = []
async function getDataFrom_db(){
  const querySnapshot = await getDocs(collection(db, "addPost"));
  querySnapshot.forEach((doc) => {
      console.log(doc.data());
      arr.push(doc.data())
      
  });
  render()
}
getDataFrom_db()

async function render(){
  arr.map((item,index)=>{

    // console.log(item.text);
    main_card_container.innerHTML +=`
   <div class="card bg-base-100 shadow-xl">
      <figure>
        <img
          class="object-cover w-full h-48"
          src="${item.productImgUrl}"
          alt="${item.productTitle}" />
      </figure>
      <div class="card-body h-100 flex flex-col justify-between">
        <div>
          <h2 class="card-title">${item.productTitle}</h2>
          <p class="text-sm overflow-hidden text-ellipsis">
         ${item.productDescription}
          </p>
        </div>
        <div class="card-actions flex justify-between items-center">
          <span class="text-lg font-semibold text-gray-700">RS ${item.productPrice}</span>
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    `
})
}
function check_ononAuthStateChanged(){

    onAuthStateChanged(auth,async  (user) => {
        if (user) {
          const uid = user.uid;
          try {
              const q = query(collection(db, "users"), where("uid", "==", uid));
        
              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                const item = doc.data()
                nav_option_show.innerHTML = `
                <div class="dropdown dropdown-end">
                  <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="${item.imgUrl}" />
                    </div>
                  </div>
                  <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                      <a href="addPost.html" class="justify-between">
                        add post
                      </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li id="logout_btn"><a>Logout</a></li>
                  </ul>
                </div>
             `
             logout_btn = document.querySelector('#logout_btn')
             logout_btn.addEventListener('click',()=>{
                signOut(auth).then(() => {
                    // Sign-out successful.
                    check_ononAuthStateChanged()
                  }).catch((error) => {
                    // An error happened.
                  })
              })
    
              });
            
          } catch (error) {
            
          }
          
          // ...
        } else {
          // User is signed out
          // ...
          nav_option_show.innerHTML = `
             <a href="./login.html"  class="btn bg-green-500 btn-ghost rounded-btn">Login</a>
          `
        }
      });
}
check_ononAuthStateChanged()
