const state = {
    current_page: 0,
    transitioning: false
}

const transitions = [
    [1, 1],
    [1, 2],
    [1, 3, 5],
    [1, 4],
    [1, 3],
    [1, 6, 7],
    [1, 7],
    [1, 7]
]

function next(transition) {
    if (state.transitioning) {
        return
    }
    state.transitioning = true
    from = state.current_page
    to = transitions[from][transition]
    state.current_page = to
    switchPage(from, to)
}

function switchPage(from, to) {
    const fromElt = document.getElementById(from)
    const toElt = document.getElementById(to)
    fromElt.classList.toggle('active')
    toElt.classList.toggle('active')
    state.transitioning = false
}

document.addEventListener('DOMContentLoaded', function(){
    next(1)
}, false)