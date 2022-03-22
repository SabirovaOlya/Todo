
let input = document.querySelector('input'),
    add = document.querySelector('#add'),
    ul = document.querySelector('.ull');



add.addEventListener('click', (e)=>{
    e.preventDefault();

    const newFile = document.createElement('li');
    const newDiv = document.createElement('div');
    newDiv.classList.add('icons');

    const firstButton = document.createElement('button');
    firstButton.innerHTML = `<i class='bx bxs-check-square' id="done"></i>`;
    firstButton.classList.add('first');
    newDiv.appendChild(firstButton);

    const secondButton = document.createElement('button');
    secondButton.innerHTML = `<i class="far fa-trash-alt" id="minus"></i>`;
    secondButton.classList.add('second');
    newDiv.appendChild(secondButton);
    

    let newone = input.value;
    
    if(newone){
        newFile.innerHTML += newone;
        input.value=''
        newDiv.style.display = 'flex';
        newFile.appendChild(newDiv);
        ul.appendChild(newFile);
        
    }
    else{
        alert('Sorry, but there is not any information')
    }

    firstButton.addEventListener('click', clickfun)
    function clickfun(){
        newFile.style.textDecoration ='line-through';
        newFile.style.opacity = '0.6';
    }
 
    firstButton.addEventListener('dblclick', ()=>{
        newFile.style.textDecoration ='none';
        newFile.style.opacity = '1';
       
    })


    secondButton.addEventListener('click', ()=>{
        newFile.remove();
    })

})

