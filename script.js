const body = document.querySelector('body');
const bg_ball = document.querySelector('.background-ball');
const title = document.querySelectorAll('.title');
const box = document.querySelectorAll('.box');
const bottom_box = document.querySelectorAll('.box-mini');
const follows = document.querySelectorAll('.follows');
const footer = document.querySelector('footer')

const button = document.querySelector('.ball');


button.addEventListener('click', () => {
    button.classList.toggle('dark-mode');


    if (button.classList == 'ball dark-mode') {
        body.classList.add('dark-mode');
        bg_ball.classList.add('dark-mode');
        footer.classList.add('dark-mode');

        for(let i = 0; i < title.length; i++){
            title[i].classList.add('dark-mode');
        }

        for(let i = 0; i < box.length; i++){
            box[i].classList.add('dark-mode');
        }

        for(let i = 0; i < bottom_box.length; i++){
            bottom_box[i].classList.add('dark-mode');
        }

        for(let i = 0; i < follows.length; i++){
            follows[i].classList.add('dark-mode');
        }
        
    } else if (button.classList == 'ball') {
        body.classList.remove('dark-mode');
        bg_ball.classList.remove('dark-mode');
        footer.classList.remove('dark-mode');

        for(let i = 0; i < title.length; i++){
            title[i].classList.remove('dark-mode');
        }

        for(let i = 0; i < bottom_box.length; i++){
            bottom_box[i].classList.remove('dark-mode');
        }

        for(let i = 0; i < box.length; i++){
            box[i].classList.remove('dark-mode');
        }

        for(let i = 0; i < follows.length; i++){
            follows[i].classList.remove('dark-mode');
        }
        
    }
})