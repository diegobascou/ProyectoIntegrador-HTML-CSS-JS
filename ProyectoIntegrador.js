// LOGIN //

let myLogin = document.getElementById("myLogin");
let popUp1 = document.getElementById("modal-container0");
let acceptModal1 = document.getElementById("flecha1");
let acceptModal2 = document.getElementById("flecha2");
let closeModal1 = document.getElementById("cruz");
let closeModal2 = document.getElementById("volver");

// Abrir popUp
var hola;
myLogin.onclick = function () {
  popUp1.style.visibility = "visible";
};

// Aceptar popUp

acceptModal1.onclick = function () {
  popUp1.style.visibility = "hidden";
};

acceptModal2.onclick = function () {
  popUp1.style.visibility = "hidden";
};

// Cerrar popUp

closeModal1.onclick = function () {
  popUp1.style.visibility = "hidden";
};

closeModal2.onclick = function () {
  popUp1.style.visibility = "hidden";
};

// LOGIN hamburguesa //

let myLogin1Hamb = document.getElementById("myLogin1");
let popUpHamb = document.getElementById("modal-container0");
let acceptModalHamb1 = document.getElementById("flecha1");
let acceptModalHamb2 = document.getElementById("flecha2");
let closeModalHamb1 = document.getElementById("cruz");
let closeModalHamb2 = document.getElementById("volver");

// Abrir popUp

myLogin1Hamb.onclick = function () {
  popUpHamb.style.visibility = "visible";
};

// Aceptar popUp

acceptModalHamb1.onclick = function () {
  popUpHamb.style.visibility = "hidden";
};

acceptModalHamb2.onclick = function () {
  popUpHamb.style.visibility = "hidden";
};

// Cerrar popUp

closeModalHamb1.onclick = function () {
  popUpHamb.style.visibility = "hidden";
};

closeModalHamb2.onclick = function () {
  popUpHamb.style.visibility = "hidden";
};

// CONTACTO //

let myButton = document.getElementById("myButton");
let popUp = document.getElementById("modal");
let acceptModal = document.getElementById("accept");
let closeModal = document.getElementById("close");

// Abrir popUp

myButton.onclick = function () {
  popUp.style.visibility = "visible";
};

// Aceptar popUp

acceptModal.onclick = function () {
  popUp.style.visibility = "hidden";
};

// Cerrar popUp

closeModal.onclick = function () {
  popUp.style.visibility = "hidden";
};

// CONTACTO RESPONSIVE //

let myButtonResp = document.getElementById("myButton1");
let popUpResp = document.getElementById("modal");
let acceptModalResp = document.getElementById("accept");
let closeModalResp = document.getElementById("close");

// Abrir popUp

myButtonResp.onclick = function () {
  popUpResp.style.visibility = "visible";
};

// Aceptar popUp

acceptModalResp.onclick = function () {
  popUpResp.style.visibility = "hidden";
};

// Cerrar popUp

closeModalResp.onclick = function () {
  popUpResp.style.visibility = "hidden";
};

/// Yazi Pupo Up

let myButtonYazi = document.getElementById("accept1");
let yaziPopUp = document.getElementById("yazi1-0");

myButtonYazi.onclick = function () {
  yaziPopUp.style.visibility = "visible";
};

// Valores Contacto

// document.getElementById("myButton").onclick = function(){

//     let Name = document.getElementById("myName").value;
//     let Email = document.getElementById("myEmail").value;
//     let Message = document.getElementById("myMessage").value;
//     console.log("hello" + " " + Name + " " + Email + " " + Message);
//     }

// CONTACTOS HAMBURGUESA //

// Burguer

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
