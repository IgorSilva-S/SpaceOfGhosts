let player = document.getElementById('ghost')
let playerPosi = 45
let testMeteor = document.getElementById('tstMeteor')

document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowUp") {
        playerPosi--
        if (playerPosi < 0) {
            playerPosi = 0
        }
        player.style.top = `${playerPosi}%`
        player.classList.add('upping')
    } if (e.key == "ArrowDown") {
        playerPosi++
        if (playerPosi >= 84) {
            playerPosi = 84
        }
        player.style.top = `${playerPosi}%`
        player.classList.add('dowing')
    }
})

document.addEventListener("keyup", function() {
    player.removeAttribute('class')
    player.className = 'player'
})

/*setInterval(() => {
    let meteorTop = testMeteor.style.top
    meteorTop = parseInt(meteorTop)
    let meteorLeft = parseInt(
        window.getComputedStyle(testMeteor).getPropertyValue("left")
    );
    if (meteorTop >= playerPosi && meteorTop < playerPosi + 16 && meteorLeft == 10) {
        player.style.backgroundImage = 'url(../img/sprites/NTSGhostJump/Death.png)'
    } 
}, 1000);*/