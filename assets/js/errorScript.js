let errBox = document.getElementById('errorCont')
let loadingBox = document.getElementById('lbCont')

    try {
        organizeSound()
        enableOldControls()
        skinChanger()
        enableSoloSlots()
        organizeCursor()
        organizeColor()
    } catch {
        document.getElementById('disclaimer').style.display = 'none'
        document.getElementById('loadingPage').removeAttribute('style')
        errBox.style.display = 'flex'
        loadingBox.style.display = 'none'
    }


function errorReset() {
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

function errorIssue() {
    window.location = 'https://github.com/IgorSilva-S/SpaceOfGhosts/issues'
}

document.getElementById('errGit').addEventListener('click', errorIssue)
document.getElementById('errReset').addEventListener('click', errorReset)