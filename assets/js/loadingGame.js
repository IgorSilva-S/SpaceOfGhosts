let isGameTotalLoad = false

window.onload = () => {
    if (canLoad) {
        console.log('Page Fully loaded, starting game')
        isGameTotalLoad = true
        document.getElementById('loadingPage').style.display = 'none'
        document.getElementById('disclaimer').removeAttribute('style')
        let errBox = document.getElementById('errorCont')
        let loadingBox = document.getElementById('lbCont')
    }

    //Game Version Catcher
    if (isPreview) {
        let publicVersion = `${previewType} ${gameVersion}`
        if (isDevBranch) {
            publicVersion = `${previewType} ${gameVersion} <br> Build date: ${lastDayOfChanges}`
        }
        document.getElementById('homeVersion').innerHTML = publicVersion
    } else {
        document.getElementById('homeVersion').innerHTML = gameVersion
    }

    try {
        organizeSound()
        enableOldControls()
        skinChanger()
        enableSoloSlots()
        organizeCursor()
        organizeColor()
        gameDevSys()
    } catch {
        disPage.style.display = 'none'
        soloPage.style.display = 'none'
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
    }
}