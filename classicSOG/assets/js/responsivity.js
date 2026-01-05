if (screenWidth <= 1000) {
            document.getElementById('gameName').src = 'assets/img/non-sprites/gameName/mobileVersion.png'
}

mobileSoundControl.addEventListener('click', () => {
    let volAlertCont = document.getElementById("volAlertCont");
      if (!allControlsAppeared) {
        document.getElementById("quickVolCont").style.bottom = "30px";
        document.getElementById("quickVolCont").style.right = "120px";
        volAlertCont.style.bottom = "30px";
        allControlsAppeared = true;
      } else {
        volAlertCont.removeAttribute("style");
        document.getElementById("quickVolCont").removeAttribute("style");
        allControlsAppeared = false;
      }
})

document.getElementById('settingsSoundControl').addEventListener('click', () => {
    let volAlertCont = document.getElementById("volAlertCont");
    if (!allControlsAppeared) {
      document.getElementById("quickVolCont").style.bottom = "30px";
      document.getElementById("quickVolCont").style.right = "120px";
      volAlertCont.style.bottom = "30px";
      allControlsAppeared = true;
    } else {
      volAlertCont.removeAttribute("style");
      document.getElementById("quickVolCont").removeAttribute("style");
      allControlsAppeared = false;
    }
})

document.getElementById('pauseGameSolo').addEventListener('click', () => {
  console.log('clicked')
  pauseGameSolo()
})