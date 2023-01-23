let allButton = document.querySelector('#allButtons');
let counter = document.querySelector('.counter');

allButton.addEventListener('click', element);

let value = 0 ; 

function element(e){
    let buttonId = e.target.id;
    if(buttonId === 'Remove'){
        value -= 1;

        if(value < 0){
            value = 0;
        }
        
    }else if(buttonId === 'Add'){
        value += 1 ;
    }else {
        value = 0 
    }
        counter.textContent = value;
}