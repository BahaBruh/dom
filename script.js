const item = document.querySelectorAll('.item')
const body = document.querySelector('body')
const img = document.querySelector('img') 
// item.addEventListener('click', function () {
//     // item.style.background = 'red'


//     if (item.style.background == 'red') {
//         item.style.background = 'white'
//     }else{

//     item.style.background = 'red'

//     }
// })




// item.addEventListener('mouseover', function () {


//     body.style.background = 'orange'
    
// })
// item.addEventListener('mouseout', function () {


//     body.style.background = 'white'
    
// })





// item.addEventListener('click', function () {
//     img.setAttribute("src", 'drag.jpeg')
//     img.style.height = '500px'
// })


// let lem = true
// item.addEventListener('click', function () {
//     if (lem) {
//         img.setAttribute("src", 'drag.jpeg')
//     img.style.height = '500px'
//     lem = false
//     } else {
//         img.style.height = '0'
//         lem = true
//     }
// })




// console.log(item.removeAttribute(' class'));
// console.log(item.getAttribute('class'));

for (let i = 0; i < item.length; i++) {
    item[i].style.background = item[i].getAttribute('data-bg')

    item[i].addEventListener('click', function () {
        body.style.background = item[i].getAttribute('data-bg')
    })
}



const card = document.querySelectorAll('.card')

function randColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`   
}

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click' , function () {
        card[i].style.background = randColor()
   })
    
}


const card_2  = document.querySelector('.card_2')

    function deg() {
        
        let d = Math.floor(Math.random() * 181)
        return ` ${d}deg `
    }



function randGradient() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let a = 1
    let p = Math.floor(Math.random() * 101)
    return `rgba(${r}, ${g}, ${b}, ${a}) ${p}%`   
}




for (let i = 0; i < card_2.length; i++) {
    
    card_2[i].addEventListener('click', function () {
        
        card_2[i].style.background = (  'linear-gradient' + (deg(), + randGradient(), + randGradient()))  
    })
        console.log(card_2[i]);
}