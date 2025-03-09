
var menu = document.querySelector('#navr i')
var fullmenu = document.querySelector('#fullnav')
var flag = 0;

menu.addEventListener('click', function () {
    if (flag == 0) {

        fullmenu.style.top = '0%'
        document.querySelector('nav h2').style.color = '#222'
        document.querySelector('#navr h2').style.color = '#222'
        document.querySelector('#navr i').style.color = '#222'
        document.querySelector('#page1').style.opacity=0
        flag = 1
    }
    else {

        fullmenu.style.top = '-100%'
        document.querySelector('nav h2').style.color = '#dadada'
        document.querySelector('#navr h2').style.color = '#dadada'
        document.querySelector('#navr i').style.color = '#dadada'
        document.querySelector('#page1').style.opacity=1
        flag = 0;


    }
})

var tl = gsap.timeline()
gsap.set('#page2 img', { scale: .9 })


tl.from('#page1 h1', {
    x: -40,
    duration: 1,
    opacity: 0
})
    .from('#page1 h3', {
        y: 40,
        delay: '-.7',
        duration: 1,
        opacity: 0
    })
    .from('#page1 h4', {
        y: 40,
        delay: '-.7',
        duration: 1,
        opacity: 0
    })

    .to('#page2 img', {
        scale: 0.98,
        scrollTrigger: {
            trigger: '#page2 img',
            scroller: 'body',
            // markers:true,
            start: "top 70%",
            scrub: 3
        }
    })

    .from('#page2 h1', {
        y: 40,
        delay: '-.5',
        duration: 1,
        opacity: 0,
        scrollTrigger: {
            trigger: '#h11',
            scroller: 'body',
            // markers:true,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 3
        }
    })
    
    .to('#line', {
        width:'100%',
        scrollTrigger: {
            trigger: '#line',
            scroller: 'body',
            // markers:true,
            scrub: 3
        }
    })
    


    var slides = document.querySelectorAll('#page6 .slide1of-h1 h1');

    slides.forEach(function (elem) {
        gsap.to(elem, {
            transform:'translateX(-100%)',
            duration: 4,
            scrollTrigger: {
                trigger: '#page6',
                scroller: 'body',
                // start: 'top center', 
                scrub: 3,
                // markers: true, 
            }
        });
    });
    var slides2 = document.querySelectorAll('#page6 .slide2of-h1 h1');

    slides2.forEach(function (elem) {
        gsap.to(elem, {
        x:'0%',     
            duration: 4,

            scrollTrigger: {
                trigger: '#page6',
                scroller: 'body',
                // start: 'top center', 
                scrub: 3,
                // markers: true, 
            }
        });
    });
    
    
    document.querySelector('#element1 ').addEventListener('mousemove',function (dets) {
        document.querySelector('#element1 img').style.opacity=1
        document.querySelector('#element1 img').style.left=`${dets.x-130}px`
        document.querySelector('#element1 img').style.top=`${dets.y-360}px`
    })
    document.querySelector('#element1 ').addEventListener('mouseleave',function (dets){
        document.querySelector('#element1 img').style.opacity=0
    })

    document.querySelector('#element2').addEventListener('mousemove',function (dets) {
        document.querySelector('#element2 img').style.opacity=1
        document.querySelector('#element2 img').style.left=`${dets.x-850}px`
        document.querySelector('#element2 img').style.top=`${dets.y-370}px`
    })
    document.querySelector('#element2').addEventListener('mouseleave',function (dets){
        document.querySelector('#element2 img').style.opacity=0;
    })
  
    
const textImgIds = ['#textimg1', '#textimg2', '#textimg3', '#textimg4'];

textImgIds.forEach(id => {
    const container = document.querySelector(id);
    const h1 = container.querySelector('h1');
    const img = container.querySelector('img');
    
    h1.addEventListener('mousemove', function(dets) {
        img.style.opacity = 1;
        img.style.left = `${dets.clientX - 200}px`;
        img.style.top = `${dets.clientY - 220}px`;
    });

    h1.addEventListener('mouseleave', function() {
        img.style.opacity = 0;
    });
});
