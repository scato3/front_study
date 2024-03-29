const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));
if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createToDo(savedTodoList[i]);
  }
}

function createToDo(storageData) {
  let todoInputValue = todoInput.value;
  if (storageData) todoInputValue = storageData.contents;
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });

  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  newSpan.textContent = todoInputValue;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
}

function deleteAll() {
  const liList = document.querySelectorAll("li");

  for (let i = 0; i < liList.length; i++) {
    liList[i].remove();
  }
  saveItemsFn();
}

function checkInput() {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "")
    createToDo();
}

function saveItemsFn() {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
}

function weatherDataActive({ location, weather }) {
  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location;
  document.body.style.background = `url(./images/${weather}.jpg)`;

  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunder",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";

  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
}

function weatherSearch({ latitude, longitude }) {
  const openWeatherRes = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8bed72a4fb7e2f3588e7324b3c989d0b`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.error(err);
    });
}

function accessToGeo({ coords }) {
  const { latitude, longitude } = coords;
  const positionObj = {
    latitude,
    longitude,
  };

  weatherSearch(positionObj);
}

function askForLocation() {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
}

askForLocation();
