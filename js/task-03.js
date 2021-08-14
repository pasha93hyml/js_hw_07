import images from "./images.js";

let galleryRef = document.querySelector("#gallery");
let galleryElementsToPush = createGallery(images);
galleryElementsToPush.forEach((item) =>
  galleryRef.insertAdjacentHTML("afterbegin", item)
);

function createGallery(arr) {
  let galerryArrToPush = arr.reduce((arrOfElements, img) => {
    let li = `<li>
            <img src=${img.url} alt =${img.alt}
        </li>`;
    arrOfElements.push(li);
    return arrOfElements;
  }, []);
  return galerryArrToPush;
}

// ===========================================
// через массив

// let galleryElementsToPush = createGallery(images);
// galleryElementsToPush.forEach(item => galleryRef.append(item));

// function createGallery(arr) {

//     let galerryArrToPush = arr.reduce((arrOfElements, img)=>{
//         let li = document.createElement('li');
//         let image = document.createElement('img');
//         image.alt = img.alt;
//         image.src = img.url;
//         li.append(image);
//         arrOfElements.push(li);
//         return arrOfElements;
//     }, []);
//     return galerryArrToPush;

// }
