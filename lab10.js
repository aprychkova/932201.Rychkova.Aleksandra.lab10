const lampimg = document.querySelector('.lampimg');
const girl = document.querySelector('.girlimg');
const hat = document.querySelector('.hatimg');
const rabbit = document.getElementById('rabbitimg');
const bird = document.querySelector('.birdimg');
const curtain = document.getElementById('curtain');
const curtainImage = document.getElementById('curtainimg');

// Занавес приподнимается
curtain.addEventListener('mouseenter', () => {
    curtain.classList.add('hovered');
});

// Занавес опускается
curtain.addEventListener('mouseleave', () => {
    if (!curtain.classList.contains('clicked')) {
        curtain.classList.remove('hovered');
    }
});

// занавес поднимается полностью
curtain.addEventListener('mousedown', () => {
    curtain.classList.add('clicked');
    curtain.style.pointerEvents = "none";
});

// Включается свет
lampimg.addEventListener('click', function() {
    light.classList.toggle('show');
    hat.classList.toggle('show');
    girl.classList.toggle('show');
    rabbit.classList.toggle('show');
    bird.classList.toggle('show');
});

let rabbitmoved = false;
let birdmoved = false;

// Функция для перемещения картинки
function moverabbit() {
    if (!rabbitmoved) {
        rabbit.style.transform = 'translateY(60px)'; 
        rabbitmoved = true; 
    }
}

function movebird() {
     if(birdmoved){
        bird.style.transform = 'translateY(50px)'; // Сдвигаем вниз на 50px
        birdmoved = false; // Отмечаем, что картинка перемещена
    }
}

function hatclick(){
    if (rabbitmoved && !birdmoved) {
        bird.style.transform = 'translateY(-60px)';
        birdmoved = true;
        rabbitmoved = false;
    }
    else if(!birdmoved && !rabbitmoved){
        rabbit.style.transform = 'translateY(-30px)';
        rabbitmoved = false;
        birdmoved = false; 
    }
}

// Добавляем обработчик события клика
rabbit.addEventListener('click', moverabbit);
hat.addEventListener('click', hatclick);
bird.addEventListener('click', movebird);