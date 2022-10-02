let more = document.querySelector('.more');
console.log(more.classList);
function seeMore(){
    if(more.classList.contains('more-show')){

        more.classList.remove('more-show');
    }
    else{
        more.classList.add('more-show');
    }
    console.log(more.classList);
}
