// GLOBAL VARIABLES
let title = document.getElementById('title')
let description = document.getElementById('description')
let code = document.getElementById('code')
let list = document.querySelectorAll('#list-view')
let btnTop = document.getElementById('btnTop')
let btnShow = document.getElementById('btnShow')
let solution = document.getElementById('solution')
let clack = document.getElementById('clack')
let zip = document.getElementById('zip')
let challenge = document.getElementById('challenge')

initialState()

// DISPLAY SOLUTION 
list.forEach(element => {
    element.addEventListener('click', e => {
        // scrollToTitle()
        clack.play()
        initCodeDisplay()
        let index = e.target.id
    })
})

// INITIAL STATE
function initialState() {
    btnShow.style.display = 'none'
}

// INITIAL CODE DISPLAY
function initCodeDisplay() {
    btnShow.disabled = false
    solution.style.display = "none"
    btnShow.style.display = 'block'
    btnShow.innerHTML = 'SHOW CODE'
}

// SCROLL TO TITLE
function scrollToTitle() {
    title.scrollIntoView({ behavior: 'smooth' })
}

// SCROLL TOP
btnTop.addEventListener('click', () => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }))

// TOGGLE CODE DISPLAY
btnShow.addEventListener('click', () => {
    if (btnShow.innerHTML == 'SHOW CODE') {
        solution.style.display = "block"
        btnShow.innerHTML = 'HIDE CODE'
        zip.play()
    } else {
        solution.style.display = "none"
        btnShow.innerHTML = 'SHOW CODE'
    }
})
