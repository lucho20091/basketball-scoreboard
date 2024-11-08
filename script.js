let homeScore = 0
let guestScore = 0

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
        if (button.id === 'reset'){
            resetScore()
            return
        }
        const team = event.target.closest('.home') ? 'home' : 'guest'
        const score = Number(event.target.textContent[1])
        addScore(team, score)
    })
})

function addScore(team, score){
    const pEl = document.getElementById(`${team}-score`)
    team === 'home' ? homeScore+= score : guestScore+= score
    pEl.textContent = team === 'home' ? homeScore : guestScore
}

function resetScore(){
    homeScore = 0
    guestScore = 0
    document.getElementById('home-score').textContent = homeScore
    document.getElementById('guest-score').textContent = guestScore
}