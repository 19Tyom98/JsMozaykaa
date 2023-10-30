
























































let body = document.body


for(let i=0;i<1000;i++) {
    let divs = document.createElement('div')
    divs.className = 'block';
    divs.style = 'width:50px;height:50px;'
    body.append(divs)
}


const blocks = document.querySelectorAll('.block');



const blockArray = Array.from(blocks);

blockArray.forEach(item => {
    setInterval(()=> {
        let r = Math.round(Math.random() * 255)
        let g = Math.round(Math.random() * 255)
        let b = Math.round(Math.random() * 255)
        let colors = `rgb(${r} ${g} ${b})`
        item.style.background = colors
    },200)
})