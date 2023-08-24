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
    if (window.innerWidth > 800) //flex if screen is laptop
        main_landing.style.display = 'flex';
    else //block if screen is phone or others
        main_landing.style.display = 'inline-block';        
});
//Until Here

// Function to update sign-up form texts based on screen size
function updateSignUpText() {
    const signUp_email = document.querySelector('.sign-up-div > .EmailAndPassword > .Email > label');
    const signUp_password = document.querySelector('.sign-up-div > .EmailAndPassword > .Password > label');

    if (window.innerWidth < 800) {
        signUp_email.innerHTML = 'Email ID:';
        signUp_password.innerHTML = 'Password:';
    } else {
        signUp_email.innerHTML = 'char [] Email ID:';
        signUp_password.innerHTML = 'char [] Password:';
    }
}

// Initial call to set the text based on the current screen size
updateSignUpText();

// Adding an event listener to the window's resize event
window.addEventListener('resize', updateSignUpText);
// tejas was here