const inputs = document.querySelectorAll('.form__body input');
const button = document.querySelector('.form__body button');

const handleChange = () => {
    for	(const input of inputs) {
        if (input.value === "") {
            button.setAttribute('disabled', '');
            return;
        }
    }
    button.removeAttribute('disabled');
}

for (const input of inputs) {
    input.onkeydown = input.onkeyup = input.onkeypress = input.change = handleChange;
}

function onClickButtonn(el){
    el.style.width = "217px";
    el.style.background = "rgba(91, 77, 255, 0.6)";
    setTimeout(onClickButton, 500);
}


function onClickButton(el){
    setTimeout(function () {
        window.location.href = 'profile.html';
    }, 500)
}




