document.querySelector('.themes').addEventListener('change', (event) => {
  if (event.target.nodeName === 'INPUT') {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(event.target.value);
  }
});




/* Устанавливаем стартовый индекс слайда по умолчанию: */
let categorIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showCategories(categorIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextCat() {
    showCategories(categorIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousCat() {
    showCategories(categorIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentCat(n) {
    showCategories(categorIndex = n);
}

/* Функция перелистывания: */
function showCategories(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let categories = document.getElementsByClassName("categor-item");

    /* Проверяем количество слайдов: */
    if (n > categories.length) {
      categorIndex = 1
    }
    if (n < 1) {
        categorIndex = categories.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let categor of categories) {
        categor.style.display = "none";
    }
    /* Делаем элемент блочным: */
    categories[categorIndex - 1].style.display = "block";
};


function showImg(event)
{
    event = event || window.event; // получаем объект события
    var iconImg = event.Target || event.srcElement; // определяем текущий объект
    if (iconImg.tagName == "IMG"){ // если тип элемента - изображение, то
        document.getElementById("bigImg").src = iconImg.getAttribute('src');  // меняем значение src у элемента с id="bigImg" на src текущего объекта 
    }
}; 

function toggleNumber() {
    var button = document.getElementById("number-button");
    if (button.innerHTML === "Show number") {
      button.innerHTML = "+7 (001) 001-01-01";
    } else {
      button.innerHTML = "Show number";
    }
  };

  function joinedGroup() {
    var button = document.getElementById("joinGroup");
    if (button.innerHTML === "Join the group") {
      button.innerHTML = "Joined";
      button.classList.add("joined-group_btn");
      button.classList.remove("join-group_btn");
    } else {
      button.innerHTML = "Join the group";
      button.classList.add("join-group_btn");
      button.classList.remove("joined-group_btn");
    }
  };
