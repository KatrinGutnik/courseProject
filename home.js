document.getElementsByClassName('click_profile') [0].onclick = function (){
    window.location.href='profile.html';
};
document.getElementsByClassName('click_profiles2') [0].onclick = function (){
    window.location.href='profile.html';
};

document.getElementsByClassName('click_profiles3') [0].onclick = function (){
    window.location.href='profile.html';
};
document.getElementsByClassName('click_profiles4') [0].onclick = function (){
    window.location.href='profile.html';
};
function onClickButtonn(el){
    el.style.width = "200px";
    el.style.background = "rgba(91, 77, 255, 0.6)";
    setTimeout(onClickButton, 200);
}


function onClickButton(el){
    setTimeout(function () {
        window.location.href = 'signUpForm.html';
    }, 200)
}
