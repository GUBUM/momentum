const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todo = document.querySelector("#todo");
const h1 = greeting.querySelector("h1");
const signOut = greeting.querySelector("input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onSingoutSubmit(){
    localStorage.clear(USERNAME_KEY);
    location.reload(true);
}
signOut.addEventListener("click",onSingoutSubmit);
function onLoginSubmit(event){
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
function paintGreetings(username){
    h1.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}