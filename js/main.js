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

// for loop to dynamically create <div .item> (i will not see them in html because they will not have the .show class).
for (i=0; i<imgArray.length; i++) {
    itemsDom.innerHTML += `<div class="item">
                            <img class="img_slide" src="${imgArray[i]}">
                            </div>`;
    // debug: used to check if 5 <div> are actually created.
    console.log(itemsDom);
}

