const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedData = localStorage.getItem("saved-dated");
const intervalIdArr = [];

function dateMaker() {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  const dateForm = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateForm;
}

function counterMaker(data) {
  if (data !== savedData) {
    localStorage.setItem("saved-dated", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
    container.style = "display: none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style = "display:flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    container.style = "display: none;";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style = "display:flex;";
    setClearInterval();
    return;
  }

  const remainObj = {
    remainDate: Math.floor(remaining / 3600 / 24),
    remainHours: Math.floor((remaining / 3600) % 24),
    remainMin: Math.floor((remaining / 60) % 60),
    remainSec: Math.floor(remaining % 60),
  };

  const docArr = ["days", "hours", "min", "sec"];
  const timeKeys = Object.keys(remainObj);

  function format(time) {
    if (time < 10) {
      return "0" + time;
    } else return time;
  }

  let i = 0;
  for (let tag of docArr) {
    const remainTime = format(remainObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainTime;
    i++;
  }
}

function starter(data) {
  if (!data) data = dateMaker();
  container.style = "display: flex;";
  messageContainer.style = "display: none";
  setClearInterval();
  counterMaker(data);

  const intervalId = setInterval(() => {
    counterMaker(data);
  }, 1000);

  intervalIdArr.push(intervalId);
}

function setClearInterval() {
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
}

function resetTimer() {
  container.style = "display:none;";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
  messageContainer.style = "display: flex;";

  localStorage.removeItem("saved-dated");
  setClearInterval();
}

if (savedData) {
  starter(savedData);
} else {
  container.style = "display:none;";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
}

// style.display:none, flex를 통해서 분기마다 보여주는 txt 변경
// innerHTML은 기존에 있는 html 속성을 지우고 새로운 html을 만듦
// localStorage을 통해서 웹을 끄더라도 활용 가능
// setInterval을 통해서 자연스럽게 타이머가 작동하게 만들고, setClearInterval 함수를 만들어서 이전의 타이머가 멈춰야 할 땐 지워주기, 이를 위해서 전역적으로 intervalIdArr을 만듦
// 일, 시간, 분, 초를 다룰 떈 객체로 묶어서 데이터를 관리하고, html에서 변경시켜야 하는 days, hours, min, sec과 Object.keys를 활용하여 매칭시켜 변경시킨다.
