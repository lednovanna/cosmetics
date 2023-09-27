const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");

buttonOne.addEventListener("click", oilySkin);
buttonTwo.addEventListener("click", combinationSkin);
buttonThree.addEventListener("click", drySkin);
buttonFour.addEventListener("click", sensitiveSkin);

 function oilySkin() {
    image.setAttribute("src", "https://skin.ru/storage/articles/10970/conversions/Dp5bR8ueGdNHMVn6hMCN4Oz1XnikPZ2QU2qM4GGy-preview_3_2.jpg");
    text.innerHTML = "CHOOSE CURE";
    buttonOne.textContent = "CLEANSER";
    buttonTwo.textContent = "TONER";
    buttonThree.textContent = "CREAM";
    buttonFour.textContent = "SERUM";
    
    buttonOne.addEventListener("click", cleanser);
    buttonTwo.addEventListener("click", toner);
    buttonThree.addEventListener("click", cream);
    buttonFour.addEventListener("click", serum);
 }

 function cleanser() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1439366770.jpg");
    text.textContent = "PURIFYING CLEANSING MILK";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  toner() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447419371.jpg");
    text.textContent = "TONER FOR OILY SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  cream() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1110-anti-blemish-cream-50ml.jpg");
    text.innerHTML = "CREAM FOR OILY SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  serum() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447422709.jpg");
    text.innerHTML = "SERUM FOR OILY SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function combinationSkin() {
    image.setAttribute("src", "https://proyou-store.ru/upload/iblock/bb4/hii5dxtwxm7ed8pkqljmgaglxs8ae205.jpg");
    text.innerHTML = "CHOOSE CURE";
    buttonOne.textContent = "CLEANSER";
    buttonTwo.textContent = "TONER";
    buttonThree.textContent = "CREAM";
    buttonFour.textContent = "SERUM";
    
    buttonOne.addEventListener("click", cleansers);
    buttonTwo.addEventListener("click", toners);
    buttonThree.addEventListener("click", creams);
    buttonFour.addEventListener("click", serums);
 }

 function cleansers() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447419331.jpg");
    text.innerHTML = "CLEANSER FOR COMBINATION SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  toners() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447419371.jpg");
    text.innerHTML = "TONER FOR COMBINATION SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  creams() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447420040.jpg");
    text.innerHTML = "CREAM FOR COMBINATION SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  serums() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447422709.jpg");
    text.innerHTML = "SERUM FOR COMBINATION SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function drySkin() {
    image.setAttribute("src", "https://litus.com.ua/wp-content/uploads/2018/12/ochishhenie-kozhi.jpg");
    text.innerHTML = "CHOOSE CURE";
    buttonOne.textContent = "CLEANSER";
    buttonTwo.textContent = "TONER";
    buttonThree.textContent = "CREAM";
    buttonFour.textContent = "SERUM";
    
    buttonOne.addEventListener("click", cleanser);
    buttonTwo.addEventListener("click", toner);
    buttonThree.addEventListener("click", cream);
    buttonFour.addEventListener("click", serum);
 }

 function cleanserDry() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447419237.jpg");
    text.innerHTML = "CLEANSER FOR DRY SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  tonerDry() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447419405.jpg");
    text.innerHTML = "TONER FOR DRY SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  creamDry() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1115-calming-cream-50ml.jpg");
    text.innerHTML = "CREAM FOR DRY SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  serumDry() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447421100.jpg");
    text.innerHTML = "SERUM FOR DRY SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function sensitiveSkin() {
    image.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-MjkbxnZrmJ9zZ6-nbWC_0MA3M_hrkEPHWAE0zbvMKc9sPso1RaNAwxfZMU4X_3hOwc&usqp=CAU");
    text.innerHTML = "CHOOSE CURE";
    buttonOne.textContent = "CLEANSER";
    buttonTwo.textContent = "TONER";
    buttonThree.textContent = "CREAM";
    buttonFour.textContent = "SERUM";
    
    buttonOne.addEventListener("click", cleanser);
    buttonTwo.addEventListener("click", toner);
    buttonThree.addEventListener("click", cream);
    buttonFour.addEventListener("click", serum);
 }

 function cleanserSensitive() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447419237.jpg");
    text.innerHTML = "CLEANSER FOR SENSITIVE SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  tonerSensitive() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447419405.jpg");
    text.innerHTML = "TONER FOR SENSITIVE SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  creamSensitive() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1112-hydrating-cream-50ml.jpg");
    text.innerHTML = "CREAM FOR SENSITIVE SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }

 function  serumSensitive() {
    image.setAttribute("src", "https://en-images-shop.satellite-cms.com/10/org_1447421162.jpg");
    text.innerHTML = "SERUM FOR SENSITIVE SKIN";
    buttonOne.style = "display: none";
    buttonTwo.style = "display:none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";
 }


