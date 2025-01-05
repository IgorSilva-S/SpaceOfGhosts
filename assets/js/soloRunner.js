function checkSRLives() {
    if (soloRunnerLife == 100) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h100')
    }

    if (soloRunnerLife == 90 || soloRunnerLife == 95) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h90')
    }

    if (soloRunnerLife == 80 || soloRunnerLife == 85) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h80')
    }

    if (soloRunnerLife == 70 || soloRunnerLife == 75) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h70')
    }

    if (soloRunnerLife == 60 || soloRunnerLife == 65) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h60')
    }

    if (soloRunnerLife == 50 || soloRunnerLife == 55) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h50')
    }

    if (soloRunnerLife == 40 || soloRunnerLife == 45) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h40')
    }

    if (soloRunnerLife == 30 || soloRunnerLife == 35) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h30')
    }

    if (soloRunnerLife == 20 || soloRunnerLife == 25) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h20')
    }

    if (soloRunnerLife == 10 || soloRunnerLife == 15) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h10')
    }

    if (soloRunnerLife == 5) {
        soloRunnerHearts.removeAttribute('class')
        soloRunnerHearts.className = 'hearts'
        soloRunnerHearts.classList.add('h0')
    }
}