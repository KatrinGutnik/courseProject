function onClickButtonn(el){
    el.style.width = "200px";
    el.style.background = "rgba(91, 77, 255, 0.6)";
    setTimeout(onClickButton, 200);
}


function onClickButton(el){
    setTimeout(function () {
        window.location.href = 'modalForm.html';
    }, 200)
}

function viewDiv(){
    document.getElementById("box-image").style.display = "none";
}
function viewTitle(){
    document.getElementById("box-name").style.display = "none";
}


window.addEventListener('DOMContentLoaded', function (){
    let video = document.querySelector('.box-video');

    video.addEventListener('click', function (){
       if (video.classList.contains('ready')){
           return;
       }

        video.classList.add('ready');

       let src = video.dataset.src;

        video.insertAdjacentHTML('afterbegin', '<iframe width="560" height="315" src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
});