// Your code goes here

// creating variables for the navigation items 
const navItems = document.querySelectorAll('.nav-link');

//creating function for the nav bar event listener that underlines when the mouse is over the text
function underline(event){
event.target.style.textDecoration = 'underline';
event.preventDefault();
}

//loops through the nav items to invoke the event listener
navItems.forEach(item => {
    item.addEventListener('mouseover', underline)
})

//creating a function for when the mouse leaves the text 
function removeUnderline(event){
event.target.style.textDecoration = 'none';
event.preventDefault();
}

//adding an event listener for when you leave the nav items so they dont stay underlined
navItems.forEach(item => {
    item.addEventListener('mouseleave', removeUnderline)
})

//creating a submit button 
const submitButton = document.createElement('button');

//assign text content to the submit button 
submitButton.textContent = 'Sign Up'; 
submitButton.style.backgroundColor = '#17A2B8';
submitButton.style.color = 'white';
submitButton.style.borderRadius = '10px';
submitButton.style.width ='100px';

//creating necessary labels for sign up forms 
const nameLabel = document.createElement('label');
const emailLabel = document.createElement('label');

//creating input variables for the labels 
const inputName = document.createElement('input');
const inputEmail = document.createElement('input');

//declearing what type/ placeholders the inputs are 
inputName.type = 'text';
inputEmail.type = 'text';
inputName.placeholder = 'Kobe Byrant'
inputEmail.placeholder = 'kobe@bryant.com'

//giving the labels text content 
nameLabel.textContent = 'Full Name';
emailLabel.textContent = 'E-mail';

//assign the input to the correct labels 
nameLabel.append(inputName);
emailLabel.append(inputEmail);

//creating a field set/ legend for for the labels 
const signUpField = document.createElement('fieldset');
const legendSignUp = document.createElement('legend');
 
//putting everything inside of the fieldset
signUpField.append(legendSignUp);
signUpField.append(nameLabel);
signUpField.append(emailLabel);
signUpField.append(submitButton);

//setting text content for field set
legendSignUp.textContent = 'Sign Up';

//creating variables of the bottom buttons
const buttons = document.querySelectorAll('.btn');

//creeting a variable that i want to prepend the varibles too
const containerHome = document.querySelector('.content-pick');

//creating the sign up function
function signUp(event){
containerHome.append(signUpField);
containerHome.style.flexWrap = 'wrap';
signUpField.style.fontSize = '1.8rem';
signUpField.style.padding =' 1rem';
signUpField.style.margin = '1rem';
signUpField.style.border = '#17A2B8 3px solid';
signUpField.style.width = '100%';
inputName.style.width = '20rem';
inputEmail.style.width = '30rem';
event.stopPropagation();
}

//creating a loop to go through the buttons
buttons.forEach( item => {
    item.addEventListener('click', signUp)
})

//creating a thank you function for the event listener
function thankYou(event){
signUpField.textContent= 'Thank you for signing up, check your email for confirmation';
signUpField.style.textAlign = 'center';
}

//created an event listener for the thank you message on double click. 
submitButton.addEventListener('click', thankYou)

//creating a function for focus
function turnsBlue(event){
event.target.style.backgroundColor = '#17A2B8';
}

//creating function to blur to turn it back 
function turnsBack(event){
event.target.style.backgroundColor = '';
}

//adding an event listener for the inputName and inputEmail called focus 
inputName.addEventListener('focus', turnsBlue)
inputEmail.addEventListener('focus', turnsBlue)

////adding an event listener for the inputName and inputEmail called blur 
inputName.addEventListener('blur', turnsBack)
inputEmail.addEventListener('blur', turnsBack)

//created a functon for sign up field to make the text go away 
function goesBlank(){
    signUpField.style.display = 'none' 
}

//add an event listener to make that makes the text go away on a double click
signUpField.addEventListener('dblclick', goesBlank);

//made the top picture of the small bus a variable
const topBus = document.querySelector('img');

//creating a function to change the source
function changePhoto(){
topBus.src = 'img/gary-tou-SW6sDxV27CA-unsplash.jpg';
}

//created the event listener for the picture change
topBus.addEventListener('click', changePhoto);