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
            publicVersion = `${previewType} ${gameVersion} - Build date: ${lastDayOfChanges}`
        }
        document.getElementById('homeVersion').innerText = publicVersion
        document.getElementById('gameModeVersion').innerText = publicVersion
    } else {
        document.getElementById('homeVersion').innerText = gameVersion
        document.getElementById('gameModeVersion').innerText = gameVersion
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
        soloScorePage.style.display = 'none'
        homePage.style.display = 'none'
        gameMPage.style.display = 'none'
        duoRunPage.style.display = 'none'
        duoRunScorePage.style.display = 'none'
        shopPage.style.display = 'none'
        skinChangerPage.style.display = 'none'
        settingsPage.style.display = 'none'
        creditsPage.style.display = 'none'
        classicSoloPage.style.display = 'none'
        classicDuoPage.style.display = 'none'
        devKeysCentralPage.style.display = 'none'
        document.getElementById('loadingPage').removeAttribute('style')
        errBox.style.display = 'flex'
        loadingBox.style.display = 'none'
        console.log('Page with error!')
    }
}