let more = document.querySelector('.more');
console.log(more.classList);
function seeMore(){
    if(more.classList.contains('more-show')){
        
        more.classList.remove('more-show');
    }
    else{
        more.classList.add('more-show');
    }
}

let coluna_matriz = document.getElementById('coluna-matriz');
let linha_matriz = document.getElementById('linha-matriz');
let result1 = document.getElementById('result-1');
let value1
let value2

coluna_matriz.addEventListener('input', function(e){
  value1 = e.target.value;
})

linha_matriz.addEventListener('input', function(e){
    
    value2= e.target.value;
  })
 setInterval(function(){
    if(value1 == 4 && value2 == 4){

        result1.textContent =  "Você acertou" 
    }
    else if(value1 && value2){
        result1.textContent =  "Errado" 
    }
    else{
        result1.textContent =  "Digite algum valor" 
    }
}, 10)

let type_matriz = document.getElementById('type-matriz');
let result2 = document.getElementById('result-2');
type_matriz.addEventListener('input', function(e){
    console.log(e.target.value)
    if (e.target.value == "identidade") {
        result2.textContent = "Você acertou"
    }

  })