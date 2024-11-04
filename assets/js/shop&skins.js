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
    if (i.id == "transpSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/transpGhost/Flying.gif";
      prodName.innerHTML = "TranspGhost";
      prodValue.innerHTML = "300";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML =
        "Com essa poção de transparência, se torna muto mais difícil de ser localizado";
      actualShopItem = 1;
    } else if (i.id == "dogSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/dogGhost/Flying.gif";
      prodName.innerHTML = "Cachorro Fantasma";
      prodValue.innerHTML = "400";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML = "Cachorros também podem ir para o espaço";
      actualShopItem = 2;
    } else if (i.id == "catSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/catGhost/Flying.gif";
      prodName.innerHTML = "Gato Fantasma";
      prodValue.innerHTML = "350";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML = "Os gatos também podem ir para o espaço";
      actualShopItem = 3;
    } else if (i.id == "mechaSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/mechaGhost/Flying.gif";
      prodName.innerHTML = "Mecha";
      prodValue.innerHTML = "425";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML =
        "A maior criação da comunidade Ghost, o Mecha Ghost, que consegue facilmente se comportar como um Ghost";
      actualShopItem = 4;
    } else if (i.id == "wizardSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/wizardGhost/Flying.gif";
      prodName.innerHTML = "Mago";
      prodValue.innerHTML = "550";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML =
        "Um mago profissonal que consegue usar poderes mágicos únicos em sua jornada";
      actualShopItem = 5;
    } else if (i.id == "saraSkinPurchase") {
      prodImage.src = "assets/img/sprites/skins/saraGhost/Flying.gif";
      prodName.innerHTML = "Cosplay: Sara";
      prodValue.innerHTML = "620";
      prodType.innerHTML = "Aparência/Skin";
      prodDesc.innerHTML =
        "If you wanna party, oh you can Just Dance! <br> Os ghosts também curtem fazer cosplays, jogue com o cosplay da personagem Sara de Just Dance";
      actualShopItem = 6;
    }
    shopBackType = "back";
  });
});

//Shop Purchase and refund
document.getElementById("purchaseItem").addEventListener("click", () => {
  let stardusts = parseInt(localStorage.getItem("money"));
  if (actualShopItem == 1) {
    if (!skin1Buy) {
      if (stardusts < 300) {
        alert(
          "Você não tem os stardusts necessários para a compra desse item!"
        );
      } else {
        localStorage.setItem("purchased1", true);
        skin1Buy = true;
        let newStardustsValue = stardusts - 300;
        localStorage.setItem("money", newStardustsValue);
        alert("Item comprado!");
      }
    } else {
      alert("Esse item já foi adquirido!");
    }
  } else if (actualShopItem == 2) {
    if (!skin2Buy) {
      if (stardusts < 400) {
        alert(
          "Você não tem os stardusts necessários para a compra desse item!"
        );
      } else {
        localStorage.setItem("purchased2", true);
        skin2Buy = true;
        let newStardustsValue = stardusts - 400;
        localStorage.setItem("money", newStardustsValue);
        alert("Item comprado!");
      }
    } else {
      alert("Esse item já foi adquirido!");
    }
  } else if (actualShopItem == 3) {
    if (!skin3Buy) {
      if (stardusts < 350) {
        alert(
          "Você não tem os stardusts necessários para a compra desse item!"
        );
      } else {
        localStorage.setItem("purchased3", true);
        skin3Buy = true;
        let newStardustsValue = stardusts - 350;
        localStorage.setItem("money", newStardustsValue);
        alert("Item comprado!");
      }
    } else {
      alert("Esse item já foi adquirido!");
    }
  } else if (actualShopItem == 4) {
    if (!skin4Buy) {
      if (stardusts < 425) {
        alert(
          "Você não tem os stardusts necessários para a compra desse item!"
        );
      } else {
        localStorage.setItem("purchased4", true);
        skin4Buy = true;
        let newStardustsValue = stardusts - 425;
        localStorage.setItem("money", newStardustsValue);
        alert("Item comprado!");
      }
    } else {
      alert("Esse item já foi adquirido!");
    }
  } else if (actualShopItem == 5) {
    if (!skin5Buy) {
      if (stardusts < 550) {
        alert(
          "Você não tem os stardusts necessários para a compra desse item!"
        );
      } else {
        localStorage.setItem("purchased5", true);
        skin5Buy = true;
        let newStardustsValue = stardusts - 550;
        localStorage.setItem("money", newStardustsValue);
        alert("Item comprado!");
      }
    } else {
      alert("Esse item já foi adquirido!");
    }
  } else if (actualShopItem == 6) {
    if (!skin6Buy) {
      if (stardusts < 620) {
        alert(
          "Você não tem os stardusts necessários para a compra desse item!"
        );
      } else {
        localStorage.setItem("purchased6", true);
        skin6Buy = true;
        let newStardustsValue = stardusts - 620;
        localStorage.setItem("money", newStardustsValue);
        alert("Item comprado!");
      }
    } else {
      alert("Esse item já foi adquirido!");
    }
  }

  document.getElementById("itemDesc").style.display = "none";
  document.getElementById("shopItems").removeAttribute("style");
  document.getElementById("shopHome").className = "returnHome";
  actualShopItem = 0;
  shopBackType = "default";
});

document.getElementById("refundItem").addEventListener("click", () => {
  let stardusts = parseInt(localStorage.getItem("money"));
  if (actualShopItem == 1) {
    if (!skin1Buy) {
      alert("Esse item não foi adquirido!");
    } else {
      let canRefund = confirm(
        "Você tem certeza que quer reembolsar esse item?"
      );
      if (canRefund) {
        localStorage.removeItem('purchased1')
        skin1Buy = false;
        let newStardustsValue = stardusts + 300;
        localStorage.setItem("money", newStardustsValue);
        let p1Skin = localStorage.getItem("actualSkin");
        let isP2Defined = localStorage.getItem("actualP2Screen");
        if (p1Skin == "s1") {
          localStorage.removeItem("actualSkin");
          skinSpatialOne.removeAttribute("class");
          p1ScreenSpatial.removeAttribute("class");
          p1ScreenSpatial.className = "playerScreen";
          document.getElementById("hgh1").className = "homeGhost1";
          if (isP2Defined == undefined || isP2Defined == 's1') {
            p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
            document.getElementById("hgh2").className = "homeGhost2";
          }
        }
        if (isP2Defined == 's1') {
          p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
          document.getElementById("hgh2").className = "homeGhost2";
        }
        alert("Item reembolsado!");
      }
    }
  } else if (actualShopItem == 2) {
    if (!skin2Buy) {
      alert("Esse item não foi adquirido!");
    } else {
      let canRefund = confirm(
        "Você tem certeza que quer reembolsar esse item?"
      );
      if (canRefund) {
        localStorage.removeItem('purchased2')
        skin2Buy = false;
        let newStardustsValue = stardusts + 400;
        localStorage.setItem("money", newStardustsValue);
        let p1Skin = localStorage.getItem("actualSkin");
        let isP2Defined = localStorage.getItem("actualP2Screen");
        if (p1Skin == "s2") {
          localStorage.removeItem("actualSkin");
          skinSpatialOne.removeAttribute("class");
          p1ScreenSpatial.removeAttribute("class");
          document.getElementById("hgh1").className = "homeGhost1";
          p1ScreenSpatial.className = "playerScreen";
          if (isP2Defined == undefined || isP2Defined == 's2') {
            p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
            document.getElementById("hgh2").className = "homeGhost2";
          }
        }
        if (isP2Defined == 's2') {
          p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
          document.getElementById("hgh2").className = "homeGhost2";
        }
        alert("Item reembolsado!");
      }
    }
  } else if (actualShopItem == 3) {
    if (!skin3Buy) {
      alert("Esse item não foi adquirido!");
    } else {
      let canRefund = confirm(
        "Você tem certeza que quer reembolsar esse item?"
      );
      if (canRefund) {
        localStorage.removeItem('purchased3')
        skin3Buy = false;
        let newStardustsValue = stardusts + 350;
        localStorage.setItem("money", newStardustsValue);
        let p1Skin = localStorage.getItem("actualSkin");
        let isP2Defined = localStorage.getItem("actualP2Screen");
        if (p1Skin == "s3") {
          localStorage.removeItem("actualSkin");
          skinSpatialOne.removeAttribute("class");
          p1ScreenSpatial.removeAttribute("class");
          document.getElementById("hgh1").className = "homeGhost1";
          p1ScreenSpatial.className = "playerScreen";
          if (isP2Defined == undefined || isP2Defined == 's3') {
            p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
            document.getElementById("hgh2").className = "homeGhost2";
          }
        }
        if (isP2Defined == 's3') {
          p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
          document.getElementById("hgh2").className = "homeGhost2";
        }
        alert("Item reembolsado!");
      }
    }
  } else if (actualShopItem == 4) {
    if (!skin4Buy) {
      alert("Esse item não foi adquirido!");
    } else {
      let canRefund = confirm(
        "Você tem certeza que quer reembolsar esse item?"
      );
      if (canRefund) {
        localStorage.removeItem('purchased4')
        skin4Buy = false;
        let newStardustsValue = stardusts + 425;
        localStorage.setItem("money", newStardustsValue);
        let p1Skin = localStorage.getItem("actualSkin");
        let isP2Defined = localStorage.getItem("actualP2Screen");
        if (p1Skin == "s4") {
          localStorage.removeItem("actualSkin");
          skinSpatialOne.removeAttribute("class");
          p1ScreenSpatial.removeAttribute("class");
          document.getElementById("hgh1").className = "homeGhost1";
          p1ScreenSpatial.className = "playerScreen";
          if (isP2Defined == undefined || isP2Defined == 's4') {
            p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
            document.getElementById("hgh2").className = "homeGhost2";
          }
        }
        if (isP2Defined == 's4') {
          p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
          document.getElementById("hgh2").className = "homeGhost2";
        }
        alert("Item reembolsado!");
      }
    }
  } else if (actualShopItem == 5) {
    if (!skin5Buy) {
      alert("Esse item não foi adquirido!");
    } else {
      let canRefund = confirm(
        "Você tem certeza que quer reembolsar esse item?"
      );
      if (canRefund) {
        localStorage.removeItem('purchased5')
        skin5Buy = false;
        let newStardustsValue = stardusts + 550;
        localStorage.setItem("money", newStardustsValue);
        let p1Skin = localStorage.getItem("actualSkin");
        let isP2Defined = localStorage.getItem("actualP2Screen");
        if (p1Skin == "s5") {
          localStorage.removeItem("actualSkin");
          skinSpatialOne.removeAttribute("class");
          p1ScreenSpatial.removeAttribute("class");
          document.getElementById("hgh1").className = "homeGhost1";
          p1ScreenSpatial.className = "playerScreen";
          if (isP2Defined == undefined || isP2Defined == 's5') {
            p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
            document.getElementById("hgh2").className = "homeGhost2";
          }
        }
        if (isP2Defined == 's5') {
          p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
          document.getElementById("hgh2").className = "homeGhost2";
        }
        alert("Item reembolsado!");
      }
    }
  } else if (actualShopItem == 6) {
    if (!skin6Buy) {
      alert("Esse item não foi adquirido!");
    } else {
      let canRefund = confirm(
        "Você tem certeza que quer reembolsar esse item?"
      );
      if (canRefund) {
        localStorage.removeItem('purchased6')
        skin6Buy = false;
        let newStardustsValue = stardusts + 620;
        localStorage.setItem("money", newStardustsValue);
        let p1Skin = localStorage.getItem("actualSkin");
        let isP2Defined = localStorage.getItem("actualP2Screen");
        if (p1Skin == "s6") {
          localStorage.removeItem("actualSkin");
          skinSpatialOne.removeAttribute("class");
          p1ScreenSpatial.removeAttribute("class");
          document.getElementById("hgh1").className = "homeGhost1";
          p1ScreenSpatial.className = "playerScreen";
          if (isP2Defined == undefined || isP2Defined == 's6') {
            p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
            document.getElementById("hgh2").className = "homeGhost2";
          }
        }
        if (isP2Defined == 's6') {
          p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
          document.getElementById("hgh2").className = "homeGhost2";
        }
        alert("Item reembolsado!");
      }
    }
  }

  document.getElementById("itemDesc").style.display = "none";
  document.getElementById("shopItems").removeAttribute("style");
  document.getElementById("shopHome").className = "returnHome";
  actualShopItem = 0;
  shopBackType = "default";
});

//Skin Changer
s0b.addEventListener("click", () => {
  let isP2Defined = localStorage.getItem("actualP2Screen");
  skinSpatialOne.removeAttribute("class");
  p1ScreenSpatial.removeAttribute("class");
  p1ScreenSpatial.className = "playerScreen";
  document.getElementById("hgh1").className = "homeGhost1";
  if (isP2Defined == undefined) {
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen");
    document.getElementById("hgh2").className = "homeGhost2";
  }
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
  let isP2Defined = localStorage.getItem("actualP2Screen");
  skinSpatialOne.className = "sA";
  p1ScreenSpatial.className = "playerScreen";
  p1ScreenSpatial.classList.add("sA");
  document.getElementById("hgh1").className = "homeGhost1";
  document.getElementById("hgh1").classList.add("sA");
  if (isP2Defined == undefined) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen sA");
    document.getElementById("hgh2").className = "homeGhost2";
    document.getElementById("hgh2").classList.add("sA");
  }
  localStorage.setItem("actualSkin", "sA");
  s0b.className = "shopBlock";
  sAb.className = "ChoosedSkin";
  s1b.className = "shopBlock";
  s2b.className = "shopBlock";
  s3b.className = "shopBlock";
  s4b.className = "shopBlock";
  s5b.className = "shopBlock";
  s6b.className = "shopBlock";
});

s1b.addEventListener("click", () => {
  if (skin1Buy) {
    let isP2Defined = localStorage.getItem("actualP2Screen");
    skinSpatialOne.className = "s1";
    p1ScreenSpatial.className = "playerScreen";
    p1ScreenSpatial.classList.add("s1");
    document.getElementById("hgh1").className = "homeGhost1";
    document.getElementById("hgh1").classList.add("s1");
    if (isP2Defined == undefined) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s1");
      document.getElementById("hgh2").className = "homeGhost2";
      document.getElementById("hgh2").classList.add("s1");
    }

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
    let isP2Defined = localStorage.getItem("actualP2Screen");
    skinSpatialOne.className = "s2";
    p1ScreenSpatial.className = "playerScreen";
    p1ScreenSpatial.classList.add("s2");
    document.getElementById("hgh1").className = "homeGhost1";
    document.getElementById("hgh1").classList.add("s2");
    if (isP2Defined == undefined) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s2");
      document.getElementById("hgh2").className = "homeGhost2";
      document.getElementById("hgh2").classList.add("s2");
    }

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
    let isP2Defined = localStorage.getItem("actualP2Screen");
    skinSpatialOne.className = "s3";
    p1ScreenSpatial.className = "playerScreen";
    p1ScreenSpatial.classList.add("s3");
    document.getElementById("hgh1").className = "homeGhost1";
    document.getElementById("hgh1").classList.add("s3");
    if (isP2Defined == undefined) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s3");
      document.getElementById("hgh2").className = "homeGhost2";
      document.getElementById("hgh2").classList.add("s3");
    }

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
    let isP2Defined = localStorage.getItem("actualP2Screen");
    skinSpatialOne.className = "s4";
    p1ScreenSpatial.className = "playerScreen";
    p1ScreenSpatial.classList.add("s4");
    document.getElementById("hgh1").className = "homeGhost1";
    document.getElementById("hgh1").classList.add("s4");
    if (isP2Defined == undefined) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s4");
      document.getElementById("hgh2").className = "homeGhost2";
      document.getElementById("hgh2").classList.add("s4");
    }

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
    let isP2Defined = localStorage.getItem("actualP2Screen");
    skinSpatialOne.className = "s5";
    p1ScreenSpatial.className = "playerScreen";
    p1ScreenSpatial.classList.add("s5");
    document.getElementById("hgh1").className = "homeGhost1";
    document.getElementById("hgh1").classList.add("s5");
    if (isP2Defined == undefined) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s5");
      document.getElementById("hgh2").className = "homeGhost2";
      document.getElementById("hgh2").classList.add("s5");
    }

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
    let isP2Defined = localStorage.getItem("actualP2Screen");
    skinSpatialOne.className = "s6";
    p1ScreenSpatial.className = "playerScreen";
    p1ScreenSpatial.classList.add("s6");
    document.getElementById("hgh1").className = "homeGhost1";
    document.getElementById("hgh1").classList.add("s6");
    if (isP2Defined == undefined) {
      p2ScreenSpatial.removeAttribute("class");
      p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s6");
      document.getElementById("hgh2").className = "homeGhost2";
      document.getElementById("hgh2").classList.add("s6");
    }

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
  document.getElementById("hgh2").className = "homeGhost2";
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
  document.getElementById("hgh2").className = "homeGhost2";
  document.getElementById("hgh2").classList.add("s0");
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
  p2ScreenSpatial.removeAttribute("class");
  p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen sA");
  document.getElementById("hgh2").className = "homeGhost2";
  document.getElementById("hgh2").classList.add("sA");
  localStorage.setItem("actualP2Screen", "sA");
  noneSkin2.className = "shopBlock";
  s0b2.className = "shopBlock";
  sAb2.className = "ChoosedSkin";
  s1b2.className = "shopBlock";
  s2b2.className = "shopBlock";
  s3b2.className = "shopBlock";
  s4b2.className = "shopBlock";
  s5b2.className = "shopBlock";
  s6b2.className = "shopBlock";
});

s1b2.addEventListener("click", () => {
  if (skin1Buy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s1");
    document.getElementById("hgh2").className = "homeGhost2";
    document.getElementById("hgh2").classList.add("s1");
    localStorage.setItem("actualP2Screen", "s1");
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

s2b2.addEventListener("click", () => {
  if (skin2Buy) {
    p2ScreenSpatial.removeAttribute("class");
    p2ScreenSpatial.setAttribute("class", "playerScreen player2Screen s2");
    document.getElementById("hgh2").className = "homeGhost2";
    document.getElementById("hgh2").classList.add("s2");
    localStorage.setItem("actualP2Screen", "s2");
    noneSkin2.className = "shopBlock";
    s0b2.className = "shopBlock";
    sAb2.className = "shopBlock";
    s1b2.className = "shopBlock";
    s2b2.className = "ChoosedSkin";
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
    document.getElementById("hgh2").className = "homeGhost2";
    document.getElementById("hgh2").classList.add("s3");
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
    document.getElementById("hgh2").className = "homeGhost2";
    document.getElementById("hgh2").classList.add("s4");
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
    document.getElementById("hgh2").className = "homeGhost2";
    document.getElementById("hgh2").classList.add("s5");
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
    document.getElementById("hgh2").className = "homeGhost2";
    document.getElementById("hgh2").classList.add("s6");
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
