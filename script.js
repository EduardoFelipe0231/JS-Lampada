let btn = document.getElementById('btn');
let luz = document.getElementById('luz');
let onOf = document.getElementById('onOf');
 

btn.addEventListener('click', () =>{

 

    if(luz.classList.contains('on')){ 

        luz.classList.remove('on');

        luz.classList.add('off');

        document.body.style.backgroundColor = '#FFE5C2';

        onOf.style.backgroundColor = 'rgb(227, 227, 227)';       

    } else {

        luz.classList.remove('off');

        luz.classList.add('on');

        document.body.style.backgroundColor = '#333333';

        onOf.style.backgroundColor = '#00d42e';

    }

})