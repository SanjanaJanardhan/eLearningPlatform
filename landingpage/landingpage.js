// This section is to toggle between the signup and login page

const spans = document.getElementsByTagName("span");
const login = spans[0];
const signup = spans[1];

const main_landing = document.querySelector('.mainlanding');
const signup_div = document.querySelector('.sign-up-div');

login.addEventListener("click",()=>{
    signup_div.style.display = 'block';
    main_landing.style.display = 'none';
});

signup.addEventListener("click",()=>{
    signup_div.style.display = 'none';
    main_landing.style.display = 'flex';
});

// Until here
