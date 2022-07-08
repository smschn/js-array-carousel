// create an array for the images.
const imgArray = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];

// create variabile to be used in the for loop to tell where the created <div> should be put in the html file.
const itemsDom = document.querySelector('.items');

// create a for loop to dynamically create <div .item> (i will not see them in html because they will not have the .show class).
for (i=0; i<imgArray.length; i++) {
    itemsDom.innerHTML += `<div class="item">
                            <img class="img_slide" src="${imgArray[i]}">
                            </div>`;
    // debug: used to check if 5 <div> are actually created.
    console.log(itemsDom);
}

// create a variable to specify which item inside the imgArray will have the .show class.
let activeImg = 0;

// create a variable which refers to every .item (this is an array).
const itemList = document.getElementsByClassName('item');

// being an array, we can tell to the first item in itemList to have the class .show
itemList[activeImg].classList.add('show');

// debug: check if itemList is an array (if done correctly, it will be an array with 5 elements within) and if the .show class is given to the first <div> only.
console.log(itemList);