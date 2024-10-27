setInterval(() => {
    document.getElementById("allStardusts").innerHTML =
  localStorage.getItem("money");
}, 1);

shopButtons.forEach((i) => {
  i.addEventListener("click", () => {
    document.getElementById("shopItems").style.display = "none";
    document.getElementById("itemDesc").removeAttribute("style");
    document.getElementById("shopHome").className = "backPage";

    let prodImage = document.getElementById("prodImage");
    let prodName = document.querySelector('[type="itemName"]');
    let prodType = document.querySelector('[type="itemType"]');
    let prodValue = document.getElementById("itemStardust");
    let prodDesc = document.querySelector('[type="itemDesc"]');
    if (i.id == "femaleSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/female/Flying.gif";
      prodName.innerHTML = "FemaleSkin Name";
      prodValue.innerHTML = "300";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML = "Female Desc";
      actualShopItem = 1;
    } else if (i.id == "transpSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/transpGhost/Flying.gif";
      prodName.innerHTML = "TranspGhost";
      prodValue.innerHTML = "300";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML =
        "Com essa poção de transparência, se torna muto mais difícil de ser localizado";
      actualShopItem = 2;
    } else if (i.id == "dogSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/dogGhost/Flying.gif";
      prodName.innerHTML = "Cachorro Fantasma";
      prodValue.innerHTML = "400";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML = "Cachorros também podem ir para o espaço";
      actualShopItem = 3;
    } else if (i.id == "catSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/catGhost/Flying.gif";
      prodName.innerHTML = "Gato Fantasma";
      prodValue.innerHTML = "350";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML = "Os gatos também podem ir para o espaço";
      actualShopItem = 4;
    } else if (i.id == "mechaSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/mechaGhost/Flying.gif";
      prodName.innerHTML = "Mecha";
      prodValue.innerHTML = "425";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML =
        "A maior criação da comunidade Ghost, o Mecha Ghost, que consegue facilmente se comportar como um Ghost";
      actualShopItem = 5;
    } else if (i.id == 'wizardSkinPurchase') {
        prodImage.src = 'assets/img/sprites/skins/wizardGhost/Flying.gif'
        prodName.innerHTML = "Mago";
        prodValue.innerHTML = "550";
        prodType.innerHTML = "Aparência/Skin";
        prodDesc.innerHTML =
          "Um mago profissonal que consegue usar poderes mágicos únicos em sua jornada";
        actualShopItem = 6;
    } else if (i.id == 'saraSkinPurchase') {
        prodImage.src = 'assets/img/sprites/skins/saraGhost/Flying.gif'
        prodName.innerHTML = "Cosplay: Sara";
        prodValue.innerHTML = "620";
        prodType.innerHTML = "Aparência/Skin";
        prodDesc.innerHTML =
          "If you wanna party, oh you can Just Dance! <br> Os ghosts também curtem fazer cosplays, jogue com o cosplay da personagem Sara de Just Dance";
        actualShopItem = 7;
    }
    shopBackType = "back";
  });
});

//Shop Purchase and rebound
document.getElementById('purchaseItem').addEventListener('click', () => {
    let stardusts = parseInt(localStorage.getItem('money'))
    if (actualShopItem == 1) {
        if (!skinABuy) {
            if (stardusts < 300) {
                alert('Você não tem os stardusts necessários para a compra desse item!')
            } else {
                localStorage.setItem('purchasedA', true)
                skinABuy = true
                let newStardustsValue = stardusts - 300
                localStorage.setItem('money', newStardustsValue)
                alert('Item comprado!')
            }
        } else {
            alert('Esse item já foi adquirido!')
        }
    } else if (actualShopItem == 2) {
        if (!skin1Buy) {
            if (stardusts < 300) {
                alert('Você não tem os stardusts necessários para a compra desse item!')
            } else {
                localStorage.setItem('purchased1', true)
                skin1Buy = true
                let newStardustsValue = stardusts - 300
                localStorage.setItem('money', newStardustsValue)
                alert('Item comprado!')
            }
        } else {
            alert('Esse item já foi adquirido!')
        }
    } else if (actualShopItem == 3) {
        if (!skin2Buy) {
            if (stardusts < 400) {
                alert('Você não tem os stardusts necessários para a compra desse item!')
            } else {
                localStorage.setItem('purchased2', true)
                skin2Buy = true
                let newStardustsValue = stardusts - 400
                localStorage.setItem('money', newStardustsValue)
                alert('Item comprado!')
            }
        } else {
            alert('Esse item já foi adquirido!')
        }
    } else if (actualShopItem == 4) {
        if (!skin3Buy) {
            if (stardusts < 350) {
                alert('Você não tem os stardusts necessários para a compra desse item!')
            } else {
                localStorage.setItem('purchased3', true)
                skin3Buy = true
                let newStardustsValue = stardusts - 350
                localStorage.setItem('money', newStardustsValue)
                alert('Item comprado!')
            }
        } else {
            alert('Esse item já foi adquirido!')
        }
    } else  if (actualShopItem == 5) {
        if (!skin4Buy) {
            if (stardusts < 425) {
                alert('Você não tem os stardusts necessários para a compra desse item!')
            } else {
                localStorage.setItem('purchased4', true)
                skin4Buy = true
                let newStardustsValue = stardusts - 425
                localStorage.setItem('money', newStardustsValue)
                alert('Item comprado!')
            }
        } else {
            alert('Esse item já foi adquirido!')
        }
    } else  if (actualShopItem == 6) {
        if (!skin5Buy) {
            if (stardusts < 550) {
                alert('Você não tem os stardusts necessários para a compra desse item!')
            } else {
                localStorage.setItem('purchased5', true)
                skin5Buy = true
                let newStardustsValue = stardusts - 550
                localStorage.setItem('money', newStardustsValue)
                alert('Item comprado!')
            }
        } else {
            alert('Esse item já foi adquirido!')
        }
    } else  if (actualShopItem == 7) {
        if (!skin6Buy) {
            if (stardusts < 620) {
                alert('Você não tem os stardusts necessários para a compra desse item!')
            } else {
                localStorage.setItem('purchased6', true)
                skin6Buy = true
                let newStardustsValue = stardusts - 620
                localStorage.setItem('money', newStardustsValue)
                alert('Item comprado!')
            }
        } else {
            alert('Esse item já foi adquirido!')
        }
    }

    document.getElementById("itemDesc").style.display = "none";
    document.getElementById("shopItems").removeAttribute("style");
    document.getElementById("shopHome").className = "returnHome";
    actualShopItem = 0
    shopBackType = "default";
})

//Skin Changer
s0b.addEventListener("click", () => {
  document.body.removeAttribute("class");
  localStorage.removeItem("actualSkin");
  s0b.className = "ChoosedSkin";
  sAb.className = "shopBlock";
  s1b.className = "shopBlock";
  s2b.className = "shopBlock";
  s3b.className = "shopBlock";
  s4b.className = "shopBlock";
  s5b.className = "shopBlock";
  s6b.className = "shopBlock";
});

sAb.addEventListener("click", () => {
  if (skinABuy) {
    document.body.className = "sA";
    localStorage.setItem("actualSkin", "sA");
    s0b.className = "shopBlock";
    sAb.className = "ChoosedSkin";
    s1b.className = "shopBlock";
    s2b.className = "shopBlock";
    s3b.className = "shopBlock";
    s4b.className = "shopBlock";
    s5b.className = "shopBlock";
    s6b.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s1b.addEventListener("click", () => {
  if (skin1Buy) {
    document.body.className = "s1";
    localStorage.setItem("actualSkin", "s1");
    s0b.className = "shopBlock";
    sAb.className = "shopBlock";
    s1b.className = "ChoosedSkin";
    s2b.className = "shopBlock";
    s3b.className = "shopBlock";
    s4b.className = "shopBlock";
    s5b.className = "shopBlock";
    s6b.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s2b.addEventListener("click", () => {
  if (skin2Buy) {
    document.body.className = "s2";
    localStorage.setItem("actualSkin", "s2");
    s0b.className = "shopBlock";
    sAb.className = "shopBlock";
    s1b.className = "shopBlock";
    s2b.className = "ChoosedSkin";
    s3b.className = "shopBlock";
    s4b.className = "shopBlock";
    s5b.className = "shopBlock";
    s6b.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s3b.addEventListener("click", () => {
  if (skin3Buy) {
    document.body.className = "s3";
    localStorage.setItem("actualSkin", "s3");
    s0b.className = "shopBlock";
    sAb.className = "shopBlock";
    s1b.className = "shopBlock";
    s2b.className = "shopBlock";
    s3b.className = "ChoosedSkin";
    s4b.className = "shopBlock";
    s5b.className = "shopBlock";
    s6b.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s4b.addEventListener("click", () => {
  if (skin4Buy) {
    document.body.className = "s4";
    localStorage.setItem("actualSkin", "s4");
    s0b.className = "shopBlock";
    sAb.className = "shopBlock";
    s1b.className = "shopBlock";
    s2b.className = "shopBlock";
    s3b.className = "shopBlock";
    s4b.className = "ChoosedSkin";
    s5b.className = "shopBlock";
    s6b.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s5b.addEventListener("click", () => {
  if (skin5Buy) {
    document.body.className = "s5";
    localStorage.setItem("actualSkin", "s5");
    s0b.className = "shopBlock";
    sAb.className = "shopBlock";
    s1b.className = "shopBlock";
    s2b.className = "shopBlock";
    s3b.className = "shopBlock";
    s4b.className = "shopBlock";
    s5b.className = "ChoosedSkin";
    s6b.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});


s6b.addEventListener("click", () => {
    if (skin6Buy) {
      document.body.className = "s6";
      localStorage.setItem("actualSkin", "s6");
      s0b.className = "shopBlock";
      sAb.className = "shopBlock";
      s1b.className = "shopBlock";
      s2b.className = "shopBlock";
      s3b.className = "shopBlock";
      s4b.className = "shopBlock";
      s5b.className = "shopBlock";
      s6b.className = "ChoosedSkin";
    } else {
      alert("É necessário comprar a skin antes de utilizar");
    }
  });

//Skin Changer - Player 2
noneSkin2.addEventListener("click", () => {
  p2ScreenSpatial.removeAttribute("class");
  p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
  localStorage.removeItem("actualP2Screen");
  noneSkin2.className = "ChoosedSkin";
  s0b2.className = "shopBlock";
  sAb2.className = "shopBlock";
  s1b2.className = "shopBlock";
  s2b2.className = "shopBlock";
  s3b2.className = "shopBlock";
  s4b2.className = "shopBlock";
  s5b2.className = "shopBlock";
  s6b2.className = "shopBlock";
});

s0b2.addEventListener("click", () => {
  p2ScreenSpatial.removeAttribute("class");
  p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s0");
  localStorage.setItem("actualP2Screen", "s0");
  noneSkin2.className = "shopBlock";
  s0b2.className = "ChoosedSkin";
  sAb2.className = "shopBlock";
  s1b2.className = "shopBlock";
  s2b2.className = "shopBlock";
  s3b2.className = "shopBlock";
  s4b2.className = "shopBlock";
  s5b2.className = "shopBlock";
  s6b2.className = "shopBlock";
});

sAb2.addEventListener("click", () => {
  if (skinABuy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen sA");
    localStorage.setItem("actualP2Screen", "sA");
    noneSkin2.className = "shopBlock";
    s0b2.className = "ChoosedSkin";
    sAb2.className = "shopBlock";
    s1b2.className = "shopBlock";
    s2b2.className = "shopBlock";
    s3b2.className = "shopBlock";
    s4b2.className = "shopBlock";
    s5b2.className = "shopBlock";
    s6b2.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s1b2.addEventListener("click", () => {
  if (skin1Buy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s1");
    localStorage.setItem("actualP2Screen", "s1");
    noneSkin2.className = "shopBlock";
    s0b2.className = "shopBlock";
    sAb2.className = "ChoosedSkin";
    s1b2.className = "shopBlock";
    s2b2.className = "shopBlock";
    s3b2.className = "shopBlock";
    s4b2.className = "shopBlock";
    s5b2.className = "shopBlock";
    s6b2.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s2b2.addEventListener("click", () => {
  if (skin2Buy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s2");
    localStorage.setItem("actualP2Screen", "s2");
    noneSkin2.className = "shopBlock";
    s0b2.className = "shopBlock";
    sAb2.className = "shopBlock";
    s1b2.className = "ChoosedSkin";
    s2b2.className = "shopBlock";
    s3b2.className = "shopBlock";
    s4b2.className = "shopBlock";
    s5b2.className = "shopBlock";
    s6b2.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s3b2.addEventListener("click", () => {
  if (skin3Buy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s3");
    localStorage.setItem("actualP2Screen", "s3");
    noneSkin2.className = "shopBlock";
    s0b2.className = "shopBlock";
    sAb2.className = "shopBlock";
    s1b2.className = "shopBlock";
    s2b2.className = "shopBlock";
    s3b2.className = "ChoosedSkin";
    s4b2.className = "shopBlock";
    s5b2.className = "shopBlock";
    s6b2.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s4b2.addEventListener("click", () => {
  if (skin4Buy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s4");
    localStorage.setItem("actualP2Screen", "s4");
    noneSkin2.className = "shopBlock";
    s0b2.className = "shopBlock";
    sAb2.className = "shopBlock";
    s1b2.className = "shopBlock";
    s2b2.className = "shopBlock";
    s3b2.className = "shopBlock";
    s4b2.className = "ChoosedSkin";
    s5b2.className = "shopBlock";
    s6b2.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s5b2.addEventListener("click", () => {
  if (skin5Buy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s5");
    localStorage.setItem("actualP2Screen", "s5");
    noneSkin2.className = "shopBlock";
    s0b2.className = "shopBlock";
    sAb2.className = "shopBlock";
    s1b2.className = "shopBlock";
    s2b2.className = "shopBlock";
    s3b2.className = "shopBlock";
    s4b2.className = "shopBlock";
    s5b2.className = "ChoosedSkin";
    s6b2.className = "shopBlock";
  } else {
    alert("É necessário comprar a skin antes de utilizar");
  }
});

s6b2.addEventListener("click", () => {
    if (skin6Buy) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s6");
      localStorage.setItem("actualP2Screen", "s6");
      noneSkin2.className = "shopBlock";
      s0b2.className = "shopBlock";
      sAb2.className = "shopBlock";
      s1b2.className = "shopBlock";
      s2b2.className = "shopBlock";
      s3b2.className = "shopBlock";
      s4b2.className = "shopBlock";
      s5b2.className = "shopBlock";
      s6b2.className = "ChoosedSkin";
    } else {
      alert("É necessário comprar a skin antes de utilizar");
    }
  });

document.getElementById("returnShop").addEventListener("click", () => {
  skinChangerPage.style.opacity = "0";
  if (modeToSkinChanger == "shop") {
    pageType = 4;
    setTimeout(() => {
      skinChangerPage.removeAttribute("style");
      shopPage.style.display = "block";
    }, 500);
  } else if (modeToSkinChanger == "homePage") {
    pageType = 1;
    setTimeout(() => {
      skinChangerPage.removeAttribute("style");
      homePage.style.display = "flex";
    }, 500);
  }
});

/*Skin Changer nav*/
document.getElementById("defaultSkinChanger").addEventListener("click", () => {
  document.getElementById("skinTitle").innerText =
    "Todos os Jogadores / Jogador 1";
  document.getElementById("allPlayersChanger").removeAttribute("style");
  document.getElementById("secondPlayerChanger").style.display = "none";
});

document
  .getElementById("secondPlayerSkinChanger")
  .addEventListener("click", () => {
    document.getElementById("skinTitle").innerText = "Jogador 2";
    document.getElementById("allPlayersChanger").style.display = "none";
    document.getElementById("secondPlayerChanger").removeAttribute("style");
  });

document.getElementById("goShopbySkin").addEventListener("click", () => {
  pageType = 4;
  skinChangerPage.style.opacity = "0";
  setTimeout(() => {
    skinChangerPage.removeAttribute("style");
    shopPage.style.display = "block";
    if (modeToSkinChanger == "homePage") {
      homeSong.pause();
      homeSong.currentTime = 0;
      shopSong.play();
    }
    //document.getElementById('moneyShopView').innerText = localStorage.getItem('money')
  }, 500);
});

/* skinChangerPage.style.opacity = '0'
    if (modeToSkinChanger == 'shop') {
        pageType = 4
        setTimeout(() => {
            skinChangerPage.removeAttribute('style')
            shopPage.style.display = 'block'
        }, 500);
    } else if (modeToSkinChanger == 'homePage') {
        pageType = 1
        setTimeout(() => {
            skinChangerPage.removeAttribute('style')
            homePage.style.display = 'flex'
        }, 500);
    }*/
