function changePhone1() {
    const phone1 = document.getElementById("phone1").value
    if (phone1.length === 3) document.getElementById("phone2").focus()
}

function changePhone2() {
    const phone2 = document.getElementById("phone2").value
    if (phone2.length === 4) document.getElementById("phone3").focus()
}

function changePhone3() {
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value

    if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {

        document.getElementById("token__button").style = "background-color:#0068ff; color: #ffffff; cursor: pointer"
        document.getElementById("token__button").disabled = false;
    }
}

function getToken() {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("token").innerText = token;

    document.getElementById("token__timer__button").style = "background-color: #0068ff; color: #ffffff; cursor: pointer"
    document.getElementById("token__timer__button").removeAttribute("disabled")
    getTokenTimer()
}

function getTokenTimer() {
    let timer = 179
    interval = setInterval(() => {
        if (timer >= 0) {
            const minutes = Math.floor(timer / 60)
            const seconds = timer % 60

            document.getElementById("token__timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("token").innerText = '000000'
            document.getElementById("token__button").style = 'background-color: #ffffff; color: #0068ff; cursor: pointer;'

            clearInterval(interval)
        }
    }, 1000)
}

function tokenTimerConfirm() {
    clearInterval(interval)

    document.getElementById("token__button").style = "background-color:#ffffff; color: #0068ff; cursor:default;"
    document.getElementById("token__button").setAttribute("disabled", "true")

    document.getElementById("token__timer__button").style = "background-color:#ffffff; color: #0068ff; cursor:default;"
    document.getElementById("token__timer__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__button").innerText = '인증 완료'
    alert("인증이 완료 되었습니다.")

    document.getElementById("signup__button").style = "background-color: #0068ff; color: #ffffff; cursor: pointer;"
    document.getElementById("signup__button").removeAttribute("disabled")
}

function signup() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const location = document.getElementById("location").value;
    const woman = document.getElementById("gender__woman").checked;
    const man = document.getElementById("gender__man").checked;

    let isValid = true;
    let regex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if(!regex.test(email)) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다";
        isValid = false
    } else document.getElementById('error__email').innerText = ''

    if(name==='') {
        document.getElementById("error__name").innerText = '이름을 입력해주세요';
        isValid = false
    } else document.getElementById("error__name").innerText = ''

    if(password==='') {
        document.getElementById("error__password").innerText = '비밀번호를 입력해주세요';
        isValid = false
    } else document.getElementById("error__password").innerText = ''

    if(password2==='') {
        document.getElementById("error__password2").innerText = '비밀번호를 입력해주세요';
        isValid = false
    } else document.getElementById("error__password2").innerText = ''

    if(password != password2) {
        document.getElementById("error__password").innerText = '비밀번호가 일치하지 않습니다.';
        document.getElementById("error__password2").innerText = '비밀번호가 일치하지 않습니다.';
        isValid = false
    }

    if(location !== '서울' && location !== '경기' && location !== '인천') {
        document.getElementById('error__location').innerText = '지역을 선택해주세요.'
        isValid = false
    } else document.getElementById("error__location").innerText = ''

    if(woman === false && man === false) {
        document.getElementById('error__gender').innerText = '성별을 선택해 주세요.'
        isValid = false
    } else document.getElementById('error__gender').innerText = ''

    if(isValid == true) alert('가입을 축하합니다.')
}