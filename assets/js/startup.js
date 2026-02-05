let canStart = false

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loading').style.display = 'none'
    document.getElementById('loaded').removeAttribute('style')
    canStart = true
})

document.getElementById('loadingPage').addEventListener('click', () => {
    if (canStart) {
        navToMainMenu()
    }
})