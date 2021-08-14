const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

let ingredientsRef = document.querySelector('#ingredients');

let arrOfLi = createLiElements(ingredients);
pushLiElements(ingredientsRef, arrOfLi);


function createLiElements(arr) {
    return arr.reduce((arrToPush, item)=>{
        let li = document.createElement('li');
        li.innerText = item;
        arrToPush.push(li);
        return arrToPush;
    }, []);
}

function pushLiElements(parent, arr) {
    return arr.forEach(item => {
        parent.append(item);
    })
}
