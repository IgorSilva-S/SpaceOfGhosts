let isGameTotalLoad = false

window.onload = () => {
    console.log('Page Fully loaded, starting game')
    isGameTotalLoad = true
    document.getElementById('loadingPage').style.display = 'none'
    document.getElementById('disclaimer').removeAttribute('style')
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
        console.log('Page with error!')
    }
}