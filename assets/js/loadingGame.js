let isGameTotalLoad = false

window.onload = () => {
    console.log('Page Fully loaded, starting game')
    isGameTotalLoad = true
    document.getElementById('loadingPage').style.display = 'none'
    document.getElementById('disclaimer').removeAttribute('style')
}