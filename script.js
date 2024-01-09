const item = document.querySelector('.item')
const body = document.querySelector('body')
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
    return `  linear-gradient(deg(), rgba(${r}, ${g}, ${b}, ${a}) ${p}%, rgba(${r}, ${g}, ${b}, ${a}) ${p}%)`   
}




for (let i = 0; i < card_2.length; i++) {
    
    card_2[i].addEventListener('click', function () {
        
        card_2[i].style.background = randGradient()
    })
        
}
