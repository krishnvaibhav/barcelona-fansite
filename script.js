document.querySelector('.nav').addEventListener('click',function(e){
    e.preventDefault()
    console.log(e.target);
    if(e.target.classList.contains('nav-link')){
        const link = e.target.getAttribute('href');
        document.querySelector(link).scrollIntoView({
            behavior : 'smooth'
        });
    }
});

const img = document.querySelector('.gallery-content');
const right = document.querySelector('.right-btn');
const left = document.querySelector('.left-btn');
const pic = document.querySelector('.pic');

let imgN = 2;
right.addEventListener('click',function(){
     pic.src = `img/image${imgN}.jpg`
     if(imgN <= 6){imgN++}
     else{imgN = 1}
     
})

const btn = document.querySelector('.btn');

btn.addEventListener('click',function(e){
    e.preventDefault()
    document.querySelector('#about').scrollIntoView({behavior : 'smooth'});
})

