console.log('hello world');
let count = 0;

const increase = () => {
    count++;
    element.innerText = count
}

const decrease = () => {
    count--;
    element.innerText = count
}

const reset = () => {
    count = 0;
    element.innerHTML = `<mark>${count}</mark>`
    console.log(count)
}

const element = document.getElementById('counter')

const buttons = document.getElementsByTagName('button')
const body = document.getElementsByTagName('body')
const main = document.getElementsByTagName('main')
console.log(body)

const selectTheme = (theme) => {
    body[0].className = `className: ${theme}`
    main[0].classname = `className: ${theme}`
    
    for (let i = 0; i < buttons.length; i++) {
        buttons.className = `className: ${theme}`
    }
}
