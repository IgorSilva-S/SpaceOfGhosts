let errBox = document.getElementById('errorCont')
let loadingBox = document.getElementById('lbCont')

function mainAlertError() {
    canLoad = false
    disPage.style.display = 'none'
    soloPage.style.display = 'none'
    soloScorePage.style.display = 'none'
    homePage.style.display = 'none'
    duoRunPage.style.display = 'none'
    duoRunScorePage.style.display = 'none'
    shopPage.style.display = 'none'
    skinChangerPage.style.display = 'none'
    settingsPage.style.display = 'none'
    creditsPage.style.display = 'none'
    devKeysCentralPage.style.display = 'none'
    document.getElementById('loadingPage').removeAttribute('style')
    errBox.style.display = 'flex'
    loadingBox.style.display = 'none'
    console.log('Page with error!')

    homeSong.pause()
    song.pause()
    duoRSong.pause()
    hSong.pause()
    shopSong.pause()
    settingsSong.pause()
    creditsSong.pause()
    soloClassicSong.pause()
    duoClassicSong.pause()
    devKeysCentralSong.pause()
    document.getElementById('errorText').innerText = 'Houve um erro inesperado no jogo, estamos corrigindo a situação!'
}

setInterval(() => {
    try {
        organizeSound()
    } catch {
        disPage.style.display = 'none'
        soloPage.style.display = 'none'
        soloScorePage.style.display = 'none'
        homePage.style.display = 'none'
        duoRunPage.style.display = 'none'
        duoRunScorePage.style.display = 'none'
        shopPage.style.display = 'none'
        skinChangerPage.style.display = 'none'
        settingsPage.style.display = 'none'
        creditsPage.style.display = 'none'
        devKeysCentralPage.style.display = 'none'
        document.getElementById('loadingPage').removeAttribute('style')
        errBox.style.display = 'flex'
        loadingBox.style.display = 'none'
        console.log('Page with error!')

        homeSong.pause()
        song.pause()
        duoRSong.pause()
        hSong.pause()
        shopSong.pause()
        settingsSong.pause()
        creditsSong.pause()
        soloClassicSong.pause()
        duoClassicSong.pause()
        devKeysCentralSong.pause()
    }
}, 1000);

function errorReset() {
    let isDev = localStorage.getItem('devMode');
    if (isDev == 1) {
        emergencialReset()
    } else {
        let confirmDel = confirm('Deseja mesmo apagar tudo que há salvo? \n Não há volta!')
        if (confirmDel) {
            alert('Dados apagados! Iremos reiniciar')
            window.location = 'index.html'
            localStorage.clear()
        }
        else {
            alert('Os dados não foram apagados... Caso seu problema não seja resolvido, tente apagar os dados!')
        }
    }
}

function errorIssue() {
    window.location = 'https://github.com/IgorSilva-S/SpaceOfGhosts_Releases/issues'
}

document.getElementById('errGit').addEventListener('click', errorIssue)
document.getElementById('errReset').addEventListener('click', errorReset)
document.getElementById('errReload').addEventListener('click', () => {
    let vol = localStorage.getItem('volume')
    if (vol < 0 || vol > 1 || typeof vol !== 'number') {
        localStorage.setItem('volume', 1)
    }
    window.location = 'index.html'
})