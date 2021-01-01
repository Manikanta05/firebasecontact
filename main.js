// Initialize Firebase (ADD YOUR OWN DATA)
 var firebaseConfig = {
    apiKey: "AIzaSyBWdj9K-G-RAJw-ETHqdiTGv-BrOugeqPc",
    authDomain: "contactform-de47d.firebaseapp.com",
    projectId: "contactform-de47d",
    storageBucket: "contactform-de47d.appspot.com",
    messagingSenderId: "406505935707",
    appId: "1:406505935707:web:142821a60d195cb88c807e",
    measurementId: "G-D5W9FK990Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
