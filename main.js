let form = document.querySelector('form')
let input = document.querySelector('input')
let image =document.querySelector('img')
let size  = document.querySelector('#size') 
async function getQr(e){
    e.preventDefault()
    
    let response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`)
    let qrImage = response.url
    image.setAttribute('src' , qrImage)
    form.reset()
}

form.addEventListener('submit', getQr)