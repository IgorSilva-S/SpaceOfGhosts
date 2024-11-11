try {
  //Organize LocalStorage items
  if (localStorage.getItem("collisionView") != undefined) {
    if (localStorage.getItem("collisionView") == "true") {
      document.body.classList.add("totalCollision");
      document.getElementById("collisionView").checked = true;
      document.getElementById("collisionViewSettings").style.display = "flex";
    } else if (localStorage.getItem("collisionView") == "false") {
      document.getElementById("collisionViewSettings").style.display = "flex";
    } else if (localStorage.getItem("collisionView") == "settings") {
      document.body.classList.add("totalCollision");
    }
  }

  if (localStorage.getItem("money") == undefined) {
    localStorage.setItem("money", 0);
  }

  function rearrangeShop() {
    psA = localStorage.getItem("purchasedA");
    ps1 = localStorage.getItem("purchased1");
    ps2 = localStorage.getItem("purchased2");
    ps3 = localStorage.getItem("purchased3");
    ps4 = localStorage.getItem("purchased4");

    if (psA == "true") {
      skinABuy = true;
    } else {
      skinABuy = false;
    }
    if (ps1 == "true") {
      skin1Buy = true;
    } else {
      skin1Buy = false;
    }
    if (ps2 == "true") {
      skin2Buy = true;
    } else {
      skin2Buy = false;
    }
    if (ps3 == "true") {
      skin3Buy = true;
    } else {
      skin3Buy = false;
    }
    if (ps4 == "true") {
      skin4Buy = true;
    } else {
      skin4Buy = false;
    }
  }

  function organizeSound() {
    let gameVolume = localStorage.getItem("volume");
    if (gameVolume != undefined) {
      homeSong.volume = gameVolume;
      song.volume = gameVolume;
      soloXtremeSong.volume = gameVolume;
      duoRSong.volume = gameVolume;
      hSong.volume = gameVolume;
      shopSong.volume = gameVolume;
      settingsSong.volume = gameVolume;
      creditsSong.volume = gameVolume;
      soloClassicSong.volume = gameVolume;
      duoClassicSong.volume = gameVolume;
      devKeysCentralSong.volume = gameVolume;
      let volumePrintNum = `${Math.round(gameVolume * 100)}%`;
      document.getElementById("volumeNum").innerText = volumePrintNum;
      document.getElementById("quickVolNum").innerText = volumePrintNum;
      document.getElementById("vol").value = gameVolume * 100;
      document.getElementById("quickVol").value = gameVolume * 100;
    }
    if (gameVolume == 0) {
      muted = true;
      document.getElementById("volAlert").innerText = "volume_off";
    }
  }

  function enableOldControls() {
    let oldEnabled = localStorage.getItem("oldControls");
    if (oldEnabled != undefined) {
      if (oldEnabled == "true") {
        document.getElementById("oldControls").checked = true;
        type2Controls = true;
      } else {
        document.getElementById("oldControls").checked = false;
        type2Controls = false;
      }
    } else {
      document.getElementById("oldControls").checked = false;
      type2Controls = false;
    }
  }

  function skinChanger() {
    let skinTypo = localStorage.getItem("actualSkin");
    if (skinTypo != undefined) {
      let isP2Defined = localStorage.getItem("actualP2Screen");
      skinSpatialOne.className = skinTypo;
      p1ScreenSpatial.className = "playerScreen";
      p1ScreenSpatial.classList.add(skinTypo);
      document.getElementById("hgh1").className = "homeGhost1";
      document.getElementById("hgh1").classList.add(skinTypo);
      document.getElementById("hghX1").className = "homeGhost1";
      document.getElementById("hghX1").classList.add(skinTypo);
      if (isP2Defined == undefined) {
        p2ScreenSpatial.removeAttribute("class");
        p2ScreenSpatial.setAttribute(
          "class",
          `playerScreen player2Screen ${skinTypo}`
        );
        document.getElementById("hgh2").className = "homeGhost2";
        document.getElementById("hgh2").classList.add(skinTypo);
        document.getElementById("hghX2").className = "homeGhost2";
        document.getElementById("hghX2").classList.add(skinTypo);
      }

      if (skinTypo == "sA") {
        s0b.className = "shopBlock";
        sAb.className = "ChoosedSkin";
      } else if (skinTypo == "s1") {
        s0b.className = "shopBlock";
        s1b.className = "ChoosedSkin";
      } else if (skinTypo == "s2") {
        s0b.className = "shopBlock";
        s2b.className = "ChoosedSkin";
      } else if (skinTypo == "s3") {
        s0b.className = "shopBlock";
        s3b.className = "ChoosedSkin";
      } else if (skinTypo == "s4") {
        s0b.className = "shopBlock";
        s4b.className = "ChoosedSkin";
      } else if (skinTypo == "s5") {
        s0b.className = "shopBlock";
        s5b.className = "ChoosedSkin";
      } else if (skinTypo == "s6") {
        s0b.className = "shopBlock";
        s6b.className = "ChoosedSkin";
      }
    }
  }

  function skinChangerP2() {
    let skinTypo = localStorage.getItem("actualP2Screen");
    if (skinTypo != undefined) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute(
        "class",
        `playerScreen player2Screen ${skinTypo}`
      );
      document.getElementById("hgh2").className = "homeGhost2";
      document.getElementById("hgh2").classList.add(skinTypo);
      document.getElementById("hghX2").className = "homeGhost2";
      document.getElementById("hghX2").classList.add(skinTypo);
      if (skinTypo == "s0") {
        noneSkin2.className = "shopBlock";
        s0b2.className = "ChoosedSkin";
      } else if (skinTypo == "sA") {
        noneSkin2.className = "shopBlock";
        sAb2.className = "ChoosedSkin";
      } else if (skinTypo == "s1") {
        noneSkin2.className = "shopBlock";
        s1b2.className = "ChoosedSkin";
      } else if (skinTypo == "s2") {
        noneSkin2.className = "shopBlock";
        s2b2.className = "ChoosedSkin";
      } else if (skinTypo == "s3") {
        noneSkin2.className = "shopBlock";
        s3b2.className = "ChoosedSkin";
      } else if (skinTypo == "s4") {
        noneSkin2.className = "shopBlock";
        s4b2.className = "ChoosedSkin";
      } else if (skinTypo == "s5") {
        noneSkin2.className = "shopBlock";
        s5b2.className = "ChoosedSkin";
      } else if (skinTypo == "s6") {
        noneSkin2.className = "shopBlock";
        s6b2.className = "ChoosedSkin";
      }
    }
  }

  function enableSoloSlots() {
    let soloSlotsEnabled = localStorage.getItem("soloSlots");
    if (soloSlotsEnabled != undefined) {
      soloSlots = soloSlotsEnabled;
      if (soloSlotsEnabled) {
        document.getElementById("soloSlots").checked = true;
      } else {
        document.getElementById("soloSlots").checked = false;
      }
    } else {
      document.getElementById("soloSlots").checked = false;
    }
  }

  function organizeCursor() {
    let changeCursor = localStorage.getItem("changedCursor");
    if (changeCursor != undefined) {
      if (changeCursor == "true") {
        document.getElementById("mainCSS").href = "assets/css/styleLight.css";
        changedCursor = true;
        document.getElementById("invertCursor").checked = true;
      } else {
        document.getElementById("mainCSS").href = "assets/css/style.css";
        changedCursor = false;
        document.getElementById("invertCursor").checked = false;
      }
    } else {
      document.getElementById("mainCSS").href = "assets/css/style.css";
      changedCursor = false;
      document.getElementById("invertCursor").checked = false;
    }
  }

  function organizeColor() {
    let checker = document.getElementById("invertColor");
    let colorInverted = localStorage.getItem("invertedColor");
    if (colorInverted != undefined) {
      if (colorInverted == "true") {
        document.body.style.filter = "invert()";
        document.body.style.backgroundColor = "white";
        checker.checked = true;
      } else {
        document.body.removeAttribute("style");
        checker.checked = false;
      }
    } else {
      document.body.removeAttribute("style");

      checker.checked = false;
    }
  }

  function gameDevSys() {
    let devSys = localStorage.getItem("gameDevSys");
    let devModeOn = localStorage.getItem("devMode");
    if (devSys != undefined && devModeOn == 1) {
      if (devSys == "true") {
        document.getElementById("soloDevKeys").removeAttribute("style");
        document.getElementById("duoDevKeys").removeAttribute("style");
      }
    }
  }

  function useHDVersion() {
    let useHD = localStorage.getItem("useHD");
    if (useHD == "true") {
      document.body.classList.add("hd");
    }
  }

  function organizeTheme() {
    let isLightTheme = localStorage.getItem("lightTheme");
    if (isLightTheme == "true") {
      document.getElementById("html").classList.add("lightMode");
      document.getElementById("simpleLightMode").checked = true;
    }
  }

  organizeSound();
  enableOldControls();
  skinChanger();
  skinChangerP2();
  enableSoloSlots();
  organizeCursor();
  organizeColor();
  gameDevSys();
  useHDVersion();
  organizeTheme();
  //End Organize localStorage Items

  //Enable Preview
  if (canEnablePreviewItems) {
    //document.getElementById('classicModePurchase').removeAttribute('style')
  }

  //Navigations Functions
  disButton.addEventListener("click", () => {
    pageType = 1;
    disPage.style.display = "none";
    homePage.style.display = "flex";
    soloPage.style.display = "none";
    homeSong.play();
    song.pause();
    song.currentTime = 0;
  });

  playButton.addEventListener("click", () => {
    /*pageType = 1.1
        homePage.style.opacity = '0'
        setTimeout(() => {
            if (classicBuy == "true" && canEnablePreviewItems) {
                soloClassicButton.removeAttribute('style')
                soloClassicButton2.removeAttribute('style')
                duoClassicButton.removeAttribute('style')
                duoClassicButton2.removeAttribute('style')
                document.getElementById('gameModeDiv').removeAttribute('style')
            }
            homePage.removeAttribute('style')
            gameMPage.style.display = 'flex'
        }, 500);*/
    document.getElementById("homeButtons").style.marginLeft = "-40%";
    setTimeout(() => {
      document.getElementById("homeButtons").style.display = "none";
      document.getElementById("gameButtons").style.display = "flex";
      setTimeout(() => {
        document.getElementById("gameButtons").style.marginLeft = "0px";
      }, 100);
    }, 300);
  });

  document.getElementById("spatialMode").addEventListener("click", () => {
    document.getElementById("spatialModeAnimation").style.display = "none";
    document.getElementById("spatialXtremeModeAnimation").style.display = "none";
    document.getElementById("runnerModeAnimation").style.display = "none";
    document.getElementById("interferenceAnim").removeAttribute("style");
    document.getElementById("playPopup").style.bottom = "5%";
    selectedGameMode = 1;
    challengeType = null;
    setTimeout(() => {
      document.getElementById("spatialModeAnimation").removeAttribute("style");
      document.getElementById("spatialXtremeModeAnimation").style.display = "none";
      document.getElementById("runnerModeAnimation").style.display = "none";
      document.getElementById("interferenceAnim").style.display = "none";
    }, 200);
  });

  document.getElementById("spatialXtremeMode").addEventListener("click", () => {
    document.getElementById("spatialModeAnimation").style.display = "none";
    document.getElementById("spatialXtremeModeAnimation").style.display = "none";
    document.getElementById("runnerModeAnimation").style.display = "none";
    document.getElementById("interferenceAnim").removeAttribute("style");
    document.getElementById("playPopup").style.bottom = "5%";
    selectedGameMode = 1.1;
    challengeType = "extreme";
    setTimeout(() => {
      document.getElementById("spatialModeAnimation").style.display = "none";
      document.getElementById("spatialXtremeModeAnimation").removeAttribute("style");
      document.getElementById("runnerModeAnimation").style.display = "none";
      document.getElementById("interferenceAnim").style.display = "none";
    }, 200);
  });

  document.getElementById("runnerMode").addEventListener("click", () => {
    document.getElementById("spatialModeAnimation").style.display = "none";
    document.getElementById("spatialXtremeModeAnimation").style.display = "none";
    document.getElementById("runnerModeAnimation").style.display = "none";
    document.getElementById("interferenceAnim").removeAttribute("style");
    document.getElementById("playPopup").style.bottom = "5%";
    selectedGameMode = 2;
    challengeType = null;
    setTimeout(() => {
      document.getElementById("spatialModeAnimation").style.display = "none";
      document.getElementById("spatialXtremeModeAnimation").style.display = "none";
      document.getElementById("runnerModeAnimation").removeAttribute("style");
      document.getElementById("interferenceAnim").style.display = "none";
    }, 200);
  });

  shopButton.addEventListener("click", () => {
    pageType = 4;
    homePage.style.opacity = "0";
    setTimeout(() => {
      homePage.removeAttribute("style");
      shopPage.style.display = "block";
      homeSong.pause();
      homeSong.currentTime = 0;
      shopSong.play();
      //document.getElementById('moneyShopView').innerText = localStorage.getItem('money')
    }, 500);
  });

  document.getElementById("skins").addEventListener("click", () => {
    pageType = 4.1;
    shopPage.style.opacity = "0";
    modeToSkinChanger = "shop";
    setTimeout(() => {
      shopPage.removeAttribute("style");
      skinChangerPage.style.display = "block";
    }, 500);
  });

  document.getElementById("skinsGS").addEventListener("click", () => {
    pageType = 4.1;
    homePage.style.opacity = "0";
    modeToSkinChanger = "homePage";
    setTimeout(() => {
      homePage.removeAttribute("style");
      skinChangerPage.style.display = "block";
    }, 500);
  });

  settingsButton.addEventListener("click", () => {
    pageType = 5;
    homePage.style.opacity = "0";
    setTimeout(() => {
      homePage.removeAttribute("style");
      settingsPage.style.display = "block";
      homeSong.pause();
      homeSong.currentTime = 0;
      settingsSong.play();
    }, 500);
  });

  creditsButton.addEventListener("click", () => {
    pageType = 6;
    creditsPage.style.display = "flex";
    homeSong.pause();
    homeSong.currentTime = 0;
    creditsSong.play();
    setTimeout(() => {
      document.getElementById("gameName").style.display = "none";
      document.getElementById("homeButtons").style.display = "none";
      document.getElementById("homeAnimation").style.display = "none";
      document.getElementById("");
    }, 100);
  });

  devKeysCentralButton.addEventListener("click", () => {
    pageType = 7;
    homePage.style.opacity = "0";
    setTimeout(() => {
      refreshPane();
      homePage.removeAttribute("style");
      devKeysCentralPage.style.display = "block";
      homeSong.pause();
      homeSong.currentTime = 0;
      devKeysCentralSong.play();
    }, 500);
  });

  document.getElementById("b2bCredits").addEventListener("click", () => {
    creditsPage.style.opacity = "0";
    pageType = 1;
    document.getElementById("gameName").removeAttribute("style");
    document.getElementById("homeButtons").removeAttribute("style");
    document.getElementById("homeAnimation").removeAttribute("style");
    setTimeout(() => {
      creditsPage.removeAttribute("style");
      homePage.style.display = "flex";
      creditsSong.pause();
      creditsSong.currentTime = 0;
      homeSong.play();
    }, 500);
  });

  document.getElementById("GMRHome").addEventListener("click", () => {
    document.getElementById("gameButtons").style.marginLeft = "-40%";
    document.getElementById("playPopup").removeAttribute("style");
    setTimeout(() => {
      document.getElementById("gameButtons").style.display = "none";
      document.getElementById("homeButtons").style.display = "flex";
      setTimeout(() => {
        document.getElementById("homeButtons").style.marginLeft = "0px";
      }, 100);
    }, 300);
  });

  document.getElementById("shopHome").addEventListener("click", () => {
    if (shopBackType == "default") {
      pageType = 1;
      shopPage.style.opacity = "0";
      setTimeout(() => {
        shopPage.removeAttribute("style");
        homePage.style.display = "flex";
        shopSong.pause();
        shopSong.currentTime = 0;
        homeSong.play();
      }, 500);
    } else {
      document.getElementById("itemDesc").style.display = "none";
      document.getElementById("shopItems").removeAttribute("style");
      document.getElementById("shopHome").className = "returnHome";
      actualShopItem = 0;
      shopBackType = "default";
    }
  });

  document.getElementById("settingsHome").addEventListener("click", () => {
    if (lastPage == 2) {
      lastPage = undefined;
      pageType = 2;
      settingsPage.style.opacity = "0";
      setTimeout(() => {
        settingsPage.removeAttribute("style");
        soloPage.style.display = "block";
        settingsSong.pause();
        settingsSong.currentTime = 0;
        document.getElementById("settingsHome").className = "returnHome";
      }, 500);
    } else if (lastPage == 3) {
      lastPage = undefined;
      pageType = 3;
      settingsPage.style.opacity = "0";
      setTimeout(() => {
        settingsPage.removeAttribute("style");
        duoRunPage.style.display = "flex";
        settingsSong.pause();
        settingsSong.currentTime = 0;
        document.getElementById("settingsHome").className = "returnHome";
      }, 500);
    } else {
      pageType = 1;
      settingsPage.style.opacity = "0";
      setTimeout(() => {
        settingsPage.removeAttribute("style");
        homePage.style.display = "flex";
        settingsSong.pause();
        settingsSong.currentTime = 0;
        homeSong.play();
      }, 500);
    }
  });

  startGame.addEventListener("click", () => {
    let isOnePlayer = document.getElementById("onePlayer").checked;
    let isTwoPlayers = document.getElementById("twoPlayers").checked;
    if (!isOnePlayer && !isTwoPlayers) {
      document.getElementById('alertPlay').style.bottom = 'calc(6% + 120px)'
      setTimeout(() => {
        document.getElementById('alertPlay').removeAttribute('style')
      }, 3000);
    } else {
      if (selectedGameMode == 1) {
        if (isOnePlayer) {
          pageType = 2;
          lives1p = 100;
          checkLive1p();
          homePage.style.opacity = "0";
          setTimeout(() => {
            homePage.removeAttribute("style");
            soloPage.style.display = "block";
            homeSong.pause();
            song.play();
            soloPage.className = "";
            soloPage.className = "biome0";
            homeSong.currentTime = 0;
            acceleratorP1 = false;
            acceleratorTimer = 0;
            hurtShieldTimer = 0;
            displaySlotsSolo();
            scoreCounter = setInterval(() => {
              scoreNum++;
              sScore.innerText = scoreNum;
              if (scoreNum != 0 && scoreNum % 100 == 0) {
                let biomeType = Math.floor(Math.random() * 11);
                soloPage.className = "";
                soloPage.className = `biome${biomeType}`;
              }
            }, 500);
            addSpeed = setInterval(() => {
              if (scoreNum % 250 == 0 && scoreNum != 0) {
                plusSpeed = plusSpeed + 0.25;
                document.getElementById("plusSpeedAlert").innerText = `${
                  plusSpeed * 100
                }%`;
              }
            }, 501);
            playerPXPosi = parseInt(
              window.getComputedStyle(player).getPropertyValue("top")
            );
          }, 500);
        } else if (isTwoPlayers) {
          pageType = 3;
          homePage.style.opacity = "0";
          duoLiveP1 = 100;
          duoLiveP2 = 100;
          setTimeout(() => {
            homePage.removeAttribute("style");
            duoRunPage.style.display = "flex";
            homeSong.pause();
            duoRSong.play();
            checkLiveDRun1();
            checkLiveDRun2();
            duoRSortMeteors();
            duoBiomeChanger = setInterval(() => {
              let biomeType = Math.floor(Math.random() * 11);
              duoRunPage.className = "";
              duoRunPage.className = `biome${biomeType}`;
            }, 50000);
          }, 500);
        }
      }

      if (selectedGameMode == 1.1) {
        if (isOnePlayer) {
          pageType = 2;
          lives1p = 20;
          checkLive1p();
          homePage.style.opacity = "0";
          setTimeout(() => {
            homePage.removeAttribute("style");
            soloPage.style.display = "block";
            homeSong.pause();
            soloXtremeSong.play();
            soloPage.className = "";
            soloPage.className = "biome0";
            homeSong.currentTime = 0;
            acceleratorP1 = false;
            acceleratorTimer = 0;
            hurtShieldTimer = 0;
            displaySlotsSolo();
            scoreCounter = setInterval(() => {
              scoreNum++;
              sScore.innerText = scoreNum;
              if (scoreNum != 0 && scoreNum % 100 == 0) {
                let biomeType = Math.floor(Math.random() * 11);
                soloPage.className = "";
                soloPage.className = `biome${biomeType}`;
              }
            }, 500);
            plusSpeed = 0.5
            addSpeed = setInterval(() => {
              if (scoreNum % 100 == 0 && scoreNum != 0) {
                plusSpeed = plusSpeed + 0.5;
                document.getElementById("plusSpeedAlert").innerText = `${
                  plusSpeed * 100
                }%`;
              }
            }, 501);
            playerPXPosi = parseInt(
              window.getComputedStyle(player).getPropertyValue("top")
            );
          }, 500);
        } else if (isTwoPlayers) {
          pageType = 3;
          homePage.style.opacity = "0";
          duoLiveP1 = 10;
          duoLiveP2 = 10;
          setTimeout(() => {
            homePage.removeAttribute("style");
            duoRunPage.style.display = "flex";
            homeSong.pause();
            duoRSong.play();
            checkLiveDRun1();
            checkLiveDRun2();
            duoRSortMeteors();
            duoBiomeChanger = setInterval(() => {
              let biomeType = Math.floor(Math.random() * 11);
              duoRunPage.className = "";
              duoRunPage.className = `biome${biomeType}`;
            }, 50000);
          }, 500);
        }
      }

      if (selectedGameMode == 2) {
        if (isOnePlayer) {
          pageType = 2.1;
          homePage.style.opacity = "0";
          setTimeout(() => {
            homePage.removeAttribute("style");
            homeSong.pause();
            homeSong.currentTime = 0;
            soloClassicLive = 6;
            makeSCScoreCounter();
            checkLivesSoloClassic();
            soloRunnerPage.style.display = "block";
            soloClassicSong.play();
            removeEnd();
          }, 500);
        }
      }
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "F1" && isGameTotalLoad) {
      e.preventDefault();
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
    }
    if (
      (e.key == "m" || e.key == "M") &&
      !allControlsAppeared &&
      isGameTotalLoad
    ) {
      let volAlert = document.getElementById("volAlert");
      let volAlertCont = document.getElementById("volAlertCont");
      if (muted) {
        muted = false;
        localStorage.setItem("volume", 1);
        organizeSound();
        volAlert.innerText = "volume_up";
        volAlertCont.style.bottom = "30px";
        muteControlAppeared = true
        if (quickVolAppeared) {
          document.getElementById("quickVolCont").style.right = "120px";
        }
        setTimeout(() => {
          volAlertCont.removeAttribute("style");
          muteControlAppeared = false
          if (quickVolAppeared) {
            document.getElementById("quickVolCont").style.right = "10px";
          }
        }, 2000);
      } else {
        muted = true;
        localStorage.setItem("volume", 0);
        organizeSound();
        volAlert.innerText = "volume_off";
        volAlertCont.style.bottom = "30px";
        muteControlAppeared = true
        if (quickVolAppeared) {
          document.getElementById("quickVolCont").style.right = "120px";
        }
        setTimeout(() => {
          volAlertCont.removeAttribute("style");
          if (quickVolAppeared) {
            document.getElementById("quickVolCont").style.right = "10px";
          }
          muteControlAppeared = false
        }, 2000);
      }
    }
    if (
      (e.key == "v" || e.key == "V") &&
      !allControlsAppeared &&
      isGameTotalLoad
    ) {
      if (!quickVolAppeared) {
        quickVolAppeared = true;
        document.getElementById("quickVolCont").style.bottom = "30px";
        if (muteControlAppeared) {
          document.getElementById("quickVolCont").style.right = "120px";
        }
      } else {
        quickVolAppeared = false;
        document.getElementById("quickVolCont").removeAttribute("style");
      }
    }
    if (pageType == 0) {
      if (e.key == "Enter") {
        pageType = 1;
        disPage.style.display = "none";
        homePage.style.display = "flex";
        soloPage.style.display = "none";
        homeSong.play();
        song.pause();
        song.currentTime = 0;
      }
    }

    //Home - Ghost Player detection
    if (pageType == 1) {
      if (e.key == "1") {
        document.getElementById("hgh1").style.filter =
          "drop-shadow(0px 0px 10px #008dfe)";
        setTimeout(() => {
          document.getElementById("hgh1").removeAttribute("style");
        }, 1000);
        document.getElementById("hghX1").style.filter =
        "drop-shadow(0px 0px 10px #008dfe)";
      setTimeout(() => {
        document.getElementById("hghX1").style.filter = 'none'
      }, 1000);
      }
      if (e.key == "2") {
        document.getElementById("hgh2").style.filter =
          "drop-shadow(0px 0px 10px #fb3936)";
        setTimeout(() => {
          document.getElementById("hgh2").removeAttribute("style");
        }, 1000);
        document.getElementById("hghX2").style.filter =
        "drop-shadow(0px 0px 10px #fb3936)";
      setTimeout(() => {
        document.getElementById("hghX2").style.filter = 'none'
      }, 1000);
      }
    }

    //Solo Game Controls
    if (pageType == 2 && !gamePaused && !hurtAnim && !kill) {
      if (type2Controls) {
        if (e.key == "ArrowUp") {
          playerPosi--;
          if (playerPosi < 0) {
            playerPosi = 0;
          }
          player.style.top = `${playerPosi}%`;
          player.classList.add("upping");
          setTimeout(() => {
            playerPXPosi = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
        }, 1);
        }
        if (e.key == "ArrowDown") {
          playerPosi++;
          if (playerPosi >= 84) {
            playerPosi = 84;
          }
          player.style.top = `${playerPosi}%`;
          player.classList.add("falling");
          setTimeout(() => {
            playerPXPosi = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
        }, 1);
        }
      } else {
        soloKeyDown(e);
      }

      if (e.key == "b" && isDev) {
        let randBiome = Math.floor(Math.random() * 10 + 1);
        soloPage.className = "";
        soloPage.className = `biome${randBiome}`;
      }
      if (e.key == "1") {
        if (shieldSlot > 0 && !shieldActive) {
          player.classList.add("shield");
          shield = true;
          shieldActive = true;
          shieldSlot--;
          if (acceleratorP1 || relaxStts) {
            player.classList.remove("shield");
          }
        } else if (shieldSlot == 0) {
          document.getElementById("shieldAlert").classList.add("emptySlot");
          setTimeout(() => {
            document
              .getElementById("shieldAlert")
              .classList.remove("emptySlot");
          }, 1500);
        }
      }

      if (e.key == "2") {
        if (acceleratorSlot > 0 && !acceleratorP1) {
          acceleratorSlot--;
          invencible.style.display = "block";
          //trail.style.display = 'block'
        
            trail = setInterval(() => {
              let trailElm = document.createElement("div");
              trailElm.setAttribute("class", "trail");
              trailElm.setAttribute("style", `top: ${playerPosi}%`);
              trailElm.addEventListener("animationend", () => {
                trailElm.remove();
              });
              soloPage.insertAdjacentElement("beforeend", trailElm);
            }, 100);
          
          acceleratorP1 = true;
          document.getElementById("gameBckg").style.display = "none";
          document.getElementById("gameBckg").style.animationDuration = "7.5s";
          setTimeout(() => {
            document.getElementById("gameBckg").style.display = "block";
          }, 1);
          if (shieldActive) {
            player.classList.remove("shield");
          }

          clearInterval(scoreCounter);
          scoreCounter = setInterval(() => {
            scoreNum++;
            sScore.innerText = scoreNum;
            if (scoreNum != 0 && scoreNum % 100 == 0) {
              let biomeType = Math.floor(Math.random() * 11);
              soloPage.className = "";
              soloPage.className = `biome${biomeType}`;
            }
          }, 500);
          plusSpeed = plusSpeed + 0.25;
          document.getElementById("plusSpeedAlert").innerText = `${
            plusSpeed * 100
          }%`;
          acceleratorWaiter = setInterval(() => {
            acceleratorTimer++;
            if (acceleratorTimer >= 10 && acceleratorTimer < 15) {
              document.getElementById('acceleratorAlert').classList.add('almostEnd')
          }
          if (acceleratorTimer == 15) {
              clearInterval(acceleratorWaiter)
              acceleratorP1 = false
              acceleratorTimer = 0
              invencible.removeAttribute('style')
              //trail.removeAttribute('style')

              clearInterval(trail)

              if (shieldActive) {
                  player.classList.add('shield')
              }
              document.getElementById('gameBckg').style.display = 'none'
              setTimeout(() => {
                  document.getElementById('gameBckg').removeAttribute('style')
              }, 1);
              document.getElementById('acceleratorAlert').classList.remove('almostEnd')
          }
          }, 1000);
        } else if (acceleratorSlot == 0) {
          document
            .getElementById("acceleratorAlert")
            .classList.add("emptySlot");
          setTimeout(() => {
            document
              .getElementById("acceleratorAlert")
              .classList.remove("emptySlot");
          }, 1500);
        }
      }

      if (e.key == "3") {
        if (!acceleratorP1 && !relaxStts && relaxSlot > 0 && plusSpeed > 0) {
          relaxSlot--;
          player.classList.add("relaxing");
          relaxStts = true;
          meteor1.style.animationPlayState = "paused";
          meteor2.style.animationPlayState = "paused";
          meteor3.style.animationPlayState = "paused";
          meteor4.style.animationPlayState = "paused";
          meteor5.style.animationPlayState = "paused";
          meteor6.style.animationPlayState = "paused";
          meteor7.style.animationPlayState = "paused";
          boostItem.style.animationPlayState = "paused";
          document.getElementById("gameBckg").style.animationPlayState =
            "paused";
          setTimeout(() => {
            plusSpeed = plusSpeed - 0.25;
            document.getElementById("plusSpeedAlert").innerText = `${
              plusSpeed * 100
            }%`;
            player.classList.remove("relaxing");
            meteor1.style.animationPlayState = "running";
            meteor2.style.animationPlayState = "running";
            meteor3.style.animationPlayState = "running";
            meteor4.style.animationPlayState = "running";
            meteor5.style.animationPlayState = "running";
            meteor6.style.animationPlayState = "running";
            meteor7.style.animationPlayState = "running";
            boostItem.style.animationPlayState = "running";
            document.getElementById("gameBckg").style.animationPlayState =
              "running";
            relaxStts = false;

          }, 2000);
        } else if (relaxSlot == 0) {
          document.getElementById("relaxAlert").classList.add("emptySlot");
          setTimeout(() => {
            document.getElementById("relaxAlert").classList.remove("emptySlot");
          }, 1500);
        }
      }
      if (e.key == "4") {
        if (fullHealSlot > 0 && lives1p != 100) {
          fullHealSlot--;
          lives1p = 100;
          checkLive1p();
          
          if (challengeType == 'extreme') {
            lives1p = 20
            checkLive1p();
          }

        } else if (fullHealSlot == 0) {
          document.getElementById("FhealAlert").classList.add("emptySlot");
          setTimeout(() => {
            document.getElementById("FhealAlert").classList.remove("emptySlot");
          }, 1500);
        }
      }
      if (e.key == "5") {
        if (healSlot > 0 && lives1p < 100) {
          healSlot--;
          if (challengeType == null) {
            lives1p = lives1p + 20;
            if (lives1p > 100) {
              lives1p = 100;
            }
          } else {
            lives1p = lives1p + 5;
            if (lives1p > 20) {
              lives1p = 20;
            }
          }
          checkLive1p();
        } else if (healSlot == 0) {
          document.getElementById("healAlert").classList.add("emptySlot");
          setTimeout(() => {
            document.getElementById("healAlert").classList.remove("emptySlot");
          }, 1500);
        }
      }
      if (e.key == "k" && isDev) {
        lives1p = 5;
        checkLive1p(); 
      }
      if (e.key == "x" && isDev) {
        alert(playerPXPosi);
      }
      if (e.key == "p" && isDev) {
        plusSpeed = 1
      }
      displaySlotsSolo();
    }

    if (pageType == 2 && !kill) {
      if (e.key == "Enter") {
        pauseGameSolo();
      }
    }

    if (pageType == 2.1) {
      if (e.key == " " && !pausedClassicSolo) {
        playerClassic.classList.add("jump");
        playerClassic.addEventListener("animationend", () => {
          setTimeout(() => {
            playerClassic.className = "player";
            if (scHurted) {
              playerClassic.classList.add("hShield");
            }
          }, 200);
        });
      }

      if (e.key == "ArrowUp" && !pausedClassicSolo && canFly) {
        playerClassic.classList.add("fly");
        flyingNow = true;
        playerClassic.addEventListener("animationend", () => {
          flyingNow = false;
          canFly = false;
          makePlayerFlyAgain();
        });
      }

      if (e.key == "k" && isDev) {
        soloClassicLive = 1;
        checkLivesSoloClassic();
      }

      if (e.key == "Enter" && !soloClassicDied) {
        pauseSoloClassic();
      }
    }
    //End Solo Game Controls

    //Duo Game : Run! Controls
    if (pageType == 3 && !duoRunPaused) {
      duoRunKeyDown(e);

      if (e.key == "k" && isDev) {
        duoLiveP1 = 5;
        checkLiveDRun1();
      }
      if (e.key == "K" && isDev) {
        duoLiveP2 = 5;
        checkLiveDRun2();
      }
      if (e.key == "1") {
        if (!p1RSA && P1DRShieldSlot > 0) {
          P1DRShieldSlot--;
          p1Run.classList.add("shield");
          p1RunShield = true;
          p1RSA = true;
        }
        displaySlotsAllDuoR();
      }
      if (e.key == "6") {
        if (!p2RSA && P2DRShieldSlot > 0) {
          P2DRShieldSlot--;
          p2Run.classList.add("shield");
          p2RunShield = true;
          p2RSA = true;
        }
        displaySlotsAllDuoR();
      }

      if (e.key == "2") {
        if (!p2RHS && !p1RFire && P1DRGunSlot > 0) {
          P1DRGunSlot--;
          p1Run.classList.add("fire");
          p1RFire = true;
          p1Run.classList.remove("shield");
          p1Rm1.style.animationPlayState = "paused";
          p1Rm2.style.animationPlayState = "paused";
          p1Rm3.style.animationPlayState = "paused";
          p1Rm4.style.animationPlayState = "paused";
          p1Rm5.style.animationPlayState = "paused";
          p1RBoost.style.animationPlayState = "paused";
          setTimeout(() => {
            p1Run.style.display = "none";
            setTimeout(() => {
              p1Run.classList.remove("fire");
              p1Run.style.display = "block";
              p1RFire = false;
            }, 1);
            if (p1RunShield) {
              p1Run.classList.add("shield");
            }
            p2Run.removeAttribute("class");
            p2Run.className = "player";
            if (p2RSA) {
              p2Run.classList.remove("shield");
              p2RunShield = false;
              setTimeout(() => {
                p2RSA = false;
              }, 1000);
            } else {
              hSong.play();
              p2Run.classList.add("hurted");
              p2Run.classList.add("hShield");
              p2RHS = true;
              p2HurtAnim = true;
              if (duoLiveP2 > 10) {
                duoLiveP2 = duoLiveP2 - 10;
              } else {
                duoLiveP2 = duoLiveP2 - 5;
              }
              setTimeout(() => {
                p2HurtAnim = false;
              }, 1000);
              setTimeout(() => {
                p2RHS = false;
                p2Run.removeAttribute("class");
                p2Run.className = "player";
                if (duoRunPaused) {
                  p2Run.classList.add("playerPaused");
                }
              }, 5000);
            }
            checkLiveDRun2();
            p1Rm1.style.animationPlayState = "running";
            p1Rm2.style.animationPlayState = "running";
            p1Rm3.style.animationPlayState = "running";
            p1Rm4.style.animationPlayState = "running";
            p1Rm5.style.animationPlayState = "running";
            p1RBoost.style.animationPlayState = "running";
          }, 1400);
        }
        displaySlotsAllDuoR();
      }

      if (e.key == "7") {
        if (!p1RHS && !p2RFire && P2DRGunSlot > 0) {
          P2DRGunSlot--;
          p2Run.classList.add("fire");
          p2RFire = true;
          p2Run.classList.remove("shield");
          p2Rm1.style.animationPlayState = "paused";
          p2Rm2.style.animationPlayState = "paused";
          p2Rm3.style.animationPlayState = "paused";
          p2Rm4.style.animationPlayState = "paused";
          p2Rm5.style.animationPlayState = "paused";
          p1RBoost.style.animationPlayState = "running";
          setTimeout(() => {
            p2Run.style.display = "none";
            setTimeout(() => {
              p2Run.classList.remove("fire");
              p2Run.style.display = "block";
              p2RFire = false;
            }, 1);
            if (p2RunShield) {
              p2Run.classList.add("shield");
            }
            p1Run.removeAttribute("class");
            p1Run.className = "player";
            if (p1RSA) {
              p1Run.classList.remove("shield");
              p1RunShield = false;
              setTimeout(() => {
                p1RSA = false;
              }, 1000);
            } else {
              hSong.play();
              p1Run.classList.add("hurted");
              p1Run.classList.add("hShield");
              p1RHS = true;
              p1HurtAnim = true;
              if (duoLiveP1 > 10) {
                duoLiveP1 = duoLiveP1 - 10;
              } else {
                duoLiveP1 = duoLiveP1 - 5;
              }
              setTimeout(() => {
                p1HurtAnim = false;
              }, 1000);
              setTimeout(() => {
                p1RHS = false;
                p1Run.removeAttribute("class");
                p1Run.className = "player";
                if (duoRunPaused) {
                  p1Run.classList.add("playerPaused");
                }
              }, 5000);
            }
            checkLiveDRun1();
            p2Rm1.style.animationPlayState = "running";
            p2Rm2.style.animationPlayState = "running";
            p2Rm3.style.animationPlayState = "running";
            p2Rm4.style.animationPlayState = "running";
            p2Rm5.style.animationPlayState = "running";
            p1RBoost.style.animationPlayState = "running";
          }, 1400);
        }
        displaySlotsAllDuoR();
      }
      if (e.key == "3") {
        if (!duoRunP1Inv && P1DRInvSlot > 0) {
          P1DRInvSlot--;
          p1RInv.style.display = "block";
          duoRunP1Inv = true;
          p1Run.classList.remove("shield");
          p1RInvWaiter = setInterval(() => {
            p1RInvNum++;
            if (p1RInvNum == 30) {
              p1RInv.removeAttribute("style");
              duoRunP1Inv = false;
              clearInterval(p1RInvWaiter);
              p1RInvNum = 0;
              if (p1RunShield) {
                p1Run.classList.add("shield");
              }
            }
          }, 1000);
        }
        displaySlotsAllDuoR();
      }
      if (e.key == "8") {
        if (!duoRunP2Inv && P2DRInvSlot > 0) {
          P2DRInvSlot--;
          p2RInv.style.display = "block";
          duoRunP2Inv = true;
          p2Run.classList.remove("shield");
          p2RInvWaiter = setInterval(() => {
            p2RInvNum++;
            if (p2RInvNum == 30) {
              p2RInv.removeAttribute("style");
              duoRunP2Inv = false;
              clearInterval(p2RInvWaiter);
              p2RInvNum = 0;
              if (p2RunShield) {
                p2Run.classList.add("shield");
              }
            }
          }, 1000);
        }
        displaySlotsAllDuoR();
      }
      if (e.key == "4") {
        if (duoLiveP1 < 100 && P1DRHealSlot > 0) {
          P1DRHealSlot--;
          duoLiveP1 = duoLiveP1 + 10;
          if (duoLiveP1 > 100) {
            duoLiveP1 = 100;
          }
          checkLiveDRun1();
        }
        displaySlotsAllDuoR();
      }
      if (e.key == "9") {
        if (duoLiveP2 < 100 && P2DRHealSlot > 0) {
          P2DRHealSlot--;
          duoLiveP2 = duoLiveP2 + 10;
          if (duoLiveP2 > 100) {
            duoLiveP2 = 100;
          }
          checkLiveDRun2();
        }
        displaySlotsAllDuoR();
      }

      if (e.key == "b" || e.key == "B" && isDev) {
        let biomeType = Math.floor(Math.random() * 11);
        duoRunPage.className = "";
        duoRunPage.className = `biome${biomeType}`;
      }
    }

    if (pageType == 3) {
      if (e.key == "Enter") {
        pauseDuoRun();
      }
    }

    if (pageType == 3.2) {
      duoClassicKeyDown(e);
      if (e.key == "Enter") {
        pauseClassicDuo();
      }
    }

    if (pageType == 6) {
      if ((e.key == "l" || e.key == "L") && isDev == "1") {
        alert(
          `Last day of changes in SoG: ${lastDayOfChanges}\nDate Type: ${datetype}`
        );
      }
    }
  });

  document.addEventListener("keyup", function (e) {
    //Solo Game Restore
    if (!hurtAnim && !kill && pageType == 2) {
      if (!relaxStts) {
        player.removeAttribute("class");
        player.className = "player";
      }

      if (hurtShield) {
        player.classList.add("hShield");
      }
      if (shieldActive && acceleratorP1 == false && relaxStts == false) {
        player.classList.add("shield");
      }
      if (gamePaused) {
        player.classList.add("playerPaused");
      }
      soloKeyUp(e);
    }
    //End Solo Game Restore

    //Duo : Run! Restore
    if (pageType == 3) {
      if (!duoRunPaused && !duoRunK1 && !duoRunK2) {
        if (!p1HurtAnim && !p1RFire) {
          p1Run.removeAttribute("class");
          p1Run.className = "player";
        }
        if (!p2HurtAnim && !p2RFire) {
          p2Run.removeAttribute("class");
          p2Run.className = "player";
        }
        if (p1RHS) {
          p1Run.classList.add("hShield");
        }
        if (p2RHS) {
          p2Run.classList.add("hShield");
        }
        if (p1RunShield) {
          p1Run.classList.add("shield");
        }
        if (p2RunShield) {
          p2Run.classList.add("shield");
        }
      }
      duoRunKeyUp(e);
    }

    //End Duo : Run! Restore

    //Duo : Classic Restore
    if (pageType == 3.2) {
      duoClassicKeyUp(e);
    }
  });

  //Solo Score Nav Buttons
  document.getElementById("soloSHome").addEventListener("click", () => {
    soloScorePage.style.opacity = "0";
    scoreNum = 0;
    setTimeout(() => {
      lives1p = 100;
      soloScorePage.removeAttribute("style");
      soloScorePage.style.display = "none";
      homePage.style.display = "flex";
      song.currentTime = 0;
      soloXtremeSong.currentTime = 0
      acceleratorTimer = 0;
      hurtShieldTimer = 0;
      playerPosi = 45;
      player.removeAttribute("style");
      pageType = 1;
      if (acceleratorP1) {
        acceleratorP1 = false;
        clearInterval(trail);
        invencible.style.display = "none";
      } else {
        acceleratorP1 = false;
      }
      if (relaxStts) {
        relaxStts = false;
      } else {
        relaxStts = false;
      }
      if (hurtShield) {
        hurtShield = false;
        player.classList.remove("hShield");
      } else {
        hurtShield = false;
      }
      if (shieldActive) {
        shieldActive = false;
        shield = false;
        player.classList.remove("shield");
      } else {
        shieldActive = false;
        shield = false;
      }
      clearSlotSolo();
      clearInterval(scoreCounter);
      document.getElementById("soloHighAlert").removeAttribute("style");
    }, 500);
  });

  document.getElementById("soloSGame").addEventListener("click", () => {
    soloScorePage.style.opacity = "0";
    scoreNum = 0;
    setTimeout(() => {
      if (challengeType == null) {
        lives1p = 100;
        soloScorePage.removeAttribute("style");
        soloScorePage.style.display = "none";
        soloPage.style.display = "block";
        song.currentTime = 0;
        homeSong.currentTime = 0;
        homeSong.pause();
        song.play();
        acceleratorTimer = 0;
        hurtShieldTimer = 0;
        playerPosi = 45;
        player.removeAttribute("style");
        pageType = 2;
        plusSpeed = 0
        if (acceleratorP1) {
          acceleratorP1 = false;
          clearInterval(trail);
          invencible.style.display = "none";
        } else {
          acceleratorP1 = false;
        }
        if (relaxStts) {
          relaxStts = false;
        } else {
          relaxStts = false;
        }
        if (hurtShield) {
          hurtShield = false;
          player.classList.remove("hShield");
        } else {
          hurtShield = false;
        }
        if (shieldActive) {
          shieldActive = false;
          shield = false;
          player.classList.remove("shield");
        } else {
          shieldActive = false;
          shield = false;
        }
        clearSlotSolo();
        checkLive1p();
        clearInterval(scoreCounter);
        scoreCounter = setInterval(() => {
          scoreNum++;
          sScore.innerText = scoreNum;
          if (scoreNum != 0 && scoreNum % 100 == 0) {
            let biomeType = Math.floor(Math.random() * 11);
            soloPage.className = "";
            soloPage.className = `biome${biomeType}`;
          }
        }, 500);
        document.getElementById("soloHighAlert").removeAttribute("style");
      } else if (challengeType == "extreme") {
        lives1p = 20;
        soloScorePage.removeAttribute("style");
        soloScorePage.style.display = "none";
        soloPage.style.display = "block";
        soloXtremeSong.currentTime = 0;
        homeSong.currentTime = 0;
        homeSong.pause();
        soloXtremeSong.play();
        acceleratorTimer = 0;
        hurtShieldTimer = 0;
        playerPosi = 45;
        player.removeAttribute("style");
        pageType = 2;
        plusSpeed = 0.5
        if (acceleratorP1) {
          acceleratorP1 = false;
          clearInterval(trail);
          invencible.style.display = "none";
        } else {
          acceleratorP1 = false;
        }
        if (relaxStts) {
          relaxStts = false;
        } else {
          relaxStts = false;
        }
        if (hurtShield) {
          hurtShield = false;
          player.classList.remove("hShield");
        } else {
          hurtShield = false;
        }
        if (shieldActive) {
          shieldActive = false;
          shield = false;
          player.classList.remove("shield");
        } else {
          shieldActive = false;
          shield = false;
        }
        clearSlotSolo();
        checkLive1p();
        clearInterval(scoreCounter);
        scoreCounter = setInterval(() => {
          scoreNum++;
          sScore.innerText = scoreNum;
          if (scoreNum != 0 && scoreNum % 100 == 0) {
            let biomeType = Math.floor(Math.random() * 11);
            soloPage.className = "";
            soloPage.className = `biome${biomeType}`;
          }
        }, 500);
        document.getElementById("soloHighAlert").removeAttribute("style");
      }
    }, 500);
  });

  //Duo Run Score Nav Buttons

  document.getElementById("duoRSHome").addEventListener("click", () => {
    duoRunScorePage.style.opacity = "0";
    setTimeout(() => {
      duoRunScorePage.removeAttribute("style");
      homePage.style.display = "flex";
      duoRSong.currentTime = 0;
      P1DRShieldSlot = 0;
      P1DRGunSlot = 0;
      P1DRInvSlot = 0;
      P1DRHealSlot = 0;
      P2DRShieldSlot = 0;
      P2DRGunSlot = 0;
      P2DRInvSlot = 0;
      P2DRHealSlot = 0;
      displaySlotsAllDuoR();
      p1Run.classList.remove("shield");
      p2Run.classList.remove("shield");
      p1RInv.style.display = "none";
      p2RInv.style.display = "none";
      p1RSA = false;
      p2RSA = false;
      p1RInvNum = 0;
      p2RInvNum = 0;
      p1RHSTimer = 0;
      p2RHSTimer = 0;
      p1RHS = false;
      p2RHS = false;
      p1Posi = 45;
      p2Posi = 45;
      p1Run.style.top = `${p1Posi}%`;
      p2Run.style.top = `${p2Posi}%`;
      p1RHS = false;
      p2RHS = false;
    }, 500);
  });

  document.getElementById("duoRSGame").addEventListener("click", () => {
    duoRunScorePage.style.opacity = "0";
    setTimeout(() => {
      if (challengeType == null) {
        duoRunScorePage.removeAttribute("style");
        duoRunPage.style.display = "flex";
        homeSong.pause();
        homeSong.currentTime = 0;
        duoRSong.currentTime = 0;
        p1Posi = 45;
        p2Posi = 45;
        P1DRShieldSlot = 0;
        P1DRGunSlot = 0;
        P1DRInvSlot = 0;
        P1DRHealSlot = 0;
        P2DRShieldSlot = 0;
        P2DRGunSlot = 0;
        P2DRInvSlot = 0;
        P2DRHealSlot = 0;
        displaySlotsAllDuoR();
        p1Run.classList.remove("shield");
        p2Run.classList.remove("shield");
        p1RInv.style.display = "none";
        p2RInv.style.display = "none";
        p1RSA = false;
        p2RSA = false;
        p1RInvNum = 0;
        p2RInvNum = 0;
        p1RHSTimer = 0;
        p2RHSTimer = 0;
        p1RHS = false;
        p2RHS = false;
        p1Run.style.top = `${p1Posi}%`;
        p2Run.style.top = `${p2Posi}%`;
        duoRSong.play();
        duoLiveP1 = 100;
        duoLiveP2 = 100;
        checkLiveDRun1();
        checkLiveDRun2();
        p1Run.removeAttribute("class");
        p1Run.className = "player";
        p2Run.removeAttribute("class");
        p2Run.className = "player";
        duoBiomeChanger = setInterval(() => {
          let biomeType = Math.floor(Math.random() * 11)
          duoRunPage.className = ''
          duoRunPage.className = `biome${biomeType}`
      }, 50000);
        duoRSortMeteors();
      } else if (challengeType == 'extreme') {
        duoRunScorePage.removeAttribute("style");
        duoRunPage.style.display = "flex";
        homeSong.pause();
        homeSong.currentTime = 0;
        duoRSong.currentTime = 0;
        p1Posi = 45;
        p2Posi = 45;
        P1DRShieldSlot = 0;
        P1DRGunSlot = 0;
        P1DRInvSlot = 0;
        P1DRHealSlot = 0;
        P2DRShieldSlot = 0;
        P2DRGunSlot = 0;
        P2DRInvSlot = 0;
        P2DRHealSlot = 0;
        displaySlotsAllDuoR();
        p1Run.classList.remove("shield");
        p2Run.classList.remove("shield");
        p1RInv.style.display = "none";
        p2RInv.style.display = "none";
        p1RSA = false;
        p2RSA = false;
        p1RInvNum = 0;
        p2RInvNum = 0;
        p1RHSTimer = 0;
        p2RHSTimer = 0;
        p1RHS = false;
        p2RHS = false;
        p1Run.style.top = `${p1Posi}%`;
        p2Run.style.top = `${p2Posi}%`;
        duoRSong.play();
        duoLiveP1 = 10;
        duoLiveP2 = 10;
        checkLiveDRun1();
        checkLiveDRun2();
        p1Run.removeAttribute("class");
        p1Run.className = "player";
        p2Run.removeAttribute("class");
        p2Run.className = "player";
        duoBiomeChanger = setInterval(() => {
          let biomeType = Math.floor(Math.random() * 11)
          duoRunPage.className = ''
          duoRunPage.className = `biome${biomeType}`
      }, 50000);
        duoRSortMeteors();
      }
    }, 500);
  });
  //End Navigations Functions

  //Settings: Enable old Controls
  document.getElementById("oldControls").addEventListener("change", () => {
    if (document.getElementById("oldControls").checked) {
      type2Controls = true;
      localStorage.setItem("oldControls", type2Controls);
    } else {
      type2Controls = false;
      localStorage.setItem("oldControls", type2Controls);
    }
  });
  //End Settings: Enable old Controls

  //Settings Mute Game
  document.getElementById("muteGameSetting").addEventListener("click", () => {
    muted = true;
    localStorage.setItem("volume", 0);
    organizeSound();
  });

  //Settings volume Slider

  document.getElementById("vol").addEventListener("change", () => {
    let gameVolume = document.getElementById("vol").value / 100;
    document.getElementById("quickVol").value = gameVolume * 100;
    homeSong.volume = gameVolume;
    song.volume = gameVolume;
    soloXtremeSong.volume = gameVolume;
    duoRSong.volume = gameVolume;
    hSong.volume = gameVolume;
    shopSong.volume = gameVolume;
    settingsSong.volume = gameVolume;
    creditsSong.volume = gameVolume;
    soloClassicSong.volume = gameVolume;
    duoClassicSong.volume = gameVolume;
    devKeysCentralSong.volume = gameVolume;
    localStorage.setItem("volume", gameVolume);
    document.getElementById("volumeNum").innerText = volumePrintNum;
    document.getElementById("quickVolNum").innerText = volumePrintNum;
    if (gameVolume == 0) {
      muted = true;
      document.getElementById("volAlert").innerText = "volume_off";
    } else {
      muted = false;
      document.getElementById("volAlert").innerText = "volume_up";
    }
  });

  //Settings Solo Slots
  document.getElementById("soloSlots").addEventListener("change", () => {
    let soloSlotChecker = document.getElementById("soloSlots");
    if (soloSlotChecker.checked) {
      soloSlots = true;
      localStorage.setItem("soloSlots", soloSlots);
    } else {
      soloSlots = false;
      localStorage.setItem("soloSlots", soloSlots);
    }
  });

  //Settings Cursor Type
  document.getElementById("invertCursor").addEventListener("change", () => {
    if (!changedCursor) {
      document.getElementById("mainCSS").href = "assets/css/styleLight.css";
      changedCursor = true;
      localStorage.setItem("changedCursor", true);
    } else {
      document.getElementById("mainCSS").href = "assets/css/style.css";
      changedCursor = false;
      localStorage.setItem("changedCursor", false);
    }
  });

  //Settings Invert Colors
  document.getElementById("invertColor").addEventListener("change", () => {
    let checker = document.getElementById("invertColor");
    if (checker.checked) {
      document.body.style.filter = "invert()";
      document.body.style.backgroundColor = "white";
      localStorage.setItem("invertedColor", true);
    } else {
      document.body.removeAttribute("style");
      localStorage.setItem("invertedColor", false);
    }
  });

  //Settings light theme
  document.getElementById("simpleLightMode").addEventListener("change", () => {
    let checker = document.getElementById("simpleLightMode");
    if (checker.checked) {
      document.getElementById("html").classList.add("lightMode");
      localStorage.setItem("lightTheme", true);
    } else {
      document.getElementById("html").classList.remove("lightMode");
      localStorage.setItem("lightTheme", false);
    }
  });

  //Quick Volume Slider

  document.getElementById("quickVol").addEventListener("change", () => {
    let gameVolume = document.getElementById("quickVol").value / 100;
    document.getElementById("vol").value = gameVolume * 100;
    homeSong.volume = gameVolume;
    song.volume = gameVolume;
    soloXtremeSong.volume = gameVolume;
    duoRSong.volume = gameVolume;
    hSong.volume = gameVolume;
    shopSong.volume = gameVolume;
    settingsSong.volume = gameVolume;
    creditsSong.volume = gameVolume;
    soloClassicSong.volume = gameVolume;
    duoClassicSong.volume = gameVolume;
    devKeysCentralSong.volume = gameVolume;
    localStorage.setItem("volume", gameVolume);
    document.getElementById("volumeNum").innerText = volumePrintNum;
    document.getElementById("quickVolNum").innerText = volumePrintNum;
    if (gameVolume == 0) {
      muted = true;
      document.getElementById("volAlert").innerText = "volume_off";
    } else {
      muted = false;
      document.getElementById("volAlert").innerText = "volume_up";
    }
  });

  //Quick Mute Button
  document.getElementById("volAlertCont").addEventListener("click", () => {
    let volAlert = document.getElementById("volAlert");
    if (muted) {
      muted = false;
      localStorage.setItem("volume", 1);
      organizeSound();
      volAlert.innerText = "volume_up";
    } else {
      muted = true;
      localStorage.setItem("volume", 0);
      organizeSound();
      volAlert.innerText = "volume_off";
    }
  });

  //Easter Egg Home
  document.getElementById("hgh1").addEventListener("click", () => {
    document.getElementById("hgh1").classList.add("roundHome");
    setTimeout(() => {
      document.getElementById("hgh1").classList.remove("roundHome");
    }, 5000);
  });

  document.getElementById("hgh2").addEventListener("click", () => {
    document.getElementById("hgh2").classList.add("flipHome");
    setTimeout(() => {
      document.getElementById("hgh2").classList.remove("flipHome");
    }, 5000);
  });
  //End Easter Egg Home

  //Prevent Right Click with name
  document.getElementById("gameName").addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  //End prevent Right Click with name

  //Delete all button
  document.getElementById("deleteSave").addEventListener("click", () => {
    if (!muted) {
      settingsSong.volume = 0.1;
    }
    let confirmDel = confirm(
      "Deseja mesmo apagar tudo que há salvo? \n Não há volta!"
    );
    if (confirmDel) {
      alert("Dados apagados! Iremos reiniciar");
      window.location = "index.html";
      localStorage.clear();
    } else {
      if (!muted) {
        let gameVolume = document.getElementById("vol").value / 100;
        settingsSong.volume = gameVolume;
      }
    }
  });

  // DevKeys Central and DevKeys checkers in settings
  document.getElementById("DKCHome").addEventListener("click", () => {
    devKeysCentralPage.style.opacity = "0";
    if (lastPage == 2) {
      pageType = 2;
      lastPage = undefined;
      setTimeout(() => {
        devKeysCentralPage.removeAttribute("style");
        devKeysCentralSong.pause();
        devKeysCentralSong.currentTime = 0;
        soloPage.style.display = "block";
        document.getElementById("DKCHome").className = "returnHome";
      }, 500);
    } else if (lastPage == 3) {
      pageType = 3;
      lastPage = undefined;
      setTimeout(() => {
        devKeysCentralPage.removeAttribute("style");
        devKeysCentralSong.pause();
        devKeysCentralSong.currentTime = 0;
        duoRunPage.style.display = "flex";
        document.getElementById("DKCHome").className = "returnHome";
      }, 500);
    } else {
      pageType = 1;
      setTimeout(() => {
        devKeysCentralPage.removeAttribute("style");
        devKeysCentralSong.pause();
        devKeysCentralSong.currentTime = 0;
        homePage.style.display = "flex";
        homeSong.play();
      }, 500);
    }
  });

  shutdownDevKeys.addEventListener("click", () => {
    let confirmShutdown = confirm(
      "Deseja desligar o DevKeys? Você pode acessar a qualquer instante com o código inserido anteriormente no Sound Test"
    );
    if (confirmShutdown == true) {
      localStorage.removeItem("devMode");
      localStorage.removeItem("collisionView");
      localStorage.removeItem("gameDevSys");
      alert("DevKeys desligado, iremos reiniciar");
      window.location = "index.html";
    }
  });

  document.getElementById("collisionView").addEventListener("change", () => {
    let cvToggle = document.getElementById("collisionView");
    if (cvToggle.checked) {
      document.body.classList.add("totalCollision");
      localStorage.setItem("collisionView", "true");
    } else {
      document.body.classList.remove("totalCollision");
      localStorage.setItem("collisionView", "false");
    }
  });

  //Last Day Code - Alert
  console.log(`Last day of changes: ${lastDayOfChanges} - ${datetype}`);
} catch (err) {
  console.log("Error on Main Script!");
  mainAlertError();
  console.log(`Error: ${err}`);
}

function emergencialReset() {
  console.log("Emergencial reset... Expect a prompt");
  setTimeout(() => {
    let confirmDel = confirm(
      "DevKeys: Are you sure you want to delete ALL your data? \nThere's no turning back!"
    );
    if (confirmDel) {
      localStorage.clear();
      let isDevError = confirm(
        "You data are ereased, do you want to enable DevKeys again?"
      );
      if (isDevError) {
        alert("Game Reseted and DevKeys enabled, expect a page refresh");
        window.location = "index.html";
        localStorage.setItem("devMode", 1);
        localStorage.setItem("collisionView", "false");
      } else {
        alert("Game Reseted and DevKeys isn't enabled, expect a page refresh");
        window.location = "index.html";
      }
    }
  }, 500);
}
