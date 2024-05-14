const alertMsg = () =>{
    const element = document.createElement('div')
    const alert = document.createElement('div')
    const text = document.createElement('h1')
    text.innerHTML = 'em breve'
    element.setAttribute('class','msg-alert w-full h-40 fixed top-full flex items-center justify-center z-30')
    alert.setAttribute('class','bg-white w-1/2 text-center font-bold text-2xl py-8 rounded-xl')
    alert.append(text)
    element.append(alert)
    document.querySelector('main').appendChild(element) 
}

export default alertMsg;