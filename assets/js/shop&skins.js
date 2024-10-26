document.getElementById('allStardusts').innerHTML = localStorage.getItem("money")

shopButtons.forEach((i) => {
    i.addEventListener('click', () => {
        document.getElementById('shopItems').style.display = 'none'
        document.getElementById('itemDesc').removeAttribute('style')
        document.getElementById('shopHome').className = 'backPage'

        let prodImage = document.getElementById('prodImage')
        let prodName = document.querySelector('[type="itemName"]')
        let prodType = document.querySelector('[type="itemType"]')
        let prodValue = document.getElementById('itemStardust')
        let prodDesc = document.querySelector('[type="itemDesc"]')
        if (i.id == "femaleSkinPurchase") {
           prodImage.src = 'assets/img/sprites/skins/female/Flying.gif'
           prodName.innerHTML = 'FemaleSkin Name'
           prodValue.innerHTML = "300"
           prodType.innerHTML = 'Aparência/Skin'
           prodDesc.innerHTML = 'Female Desc'
           actualShopItem = 1
        } else if (i.id == "transpSkinPurchase") {
            prodImage.src = 'assets/img/sprites/skins/transpGhost/Flying.gif'
            prodName.innerHTML = 'TranspGhost'
            prodValue.innerHTML = "300"
            prodType.innerHTML = 'Aparência/Skin'
            prodDesc.innerHTML = 'Com essa poção de transparência, se torna muto mais difícil de ser localizado'
            actualShopItem = 2
        } else if (i.id == "dogSkinPurchase") {
            prodImage.src = 'assets/img/sprites/skins/dogGhost/Flying.gif'
            prodName.innerHTML = 'Cachorro Fantasma'
            prodValue.innerHTML = "400"
            prodType.innerHTML = 'Aparência/Skin'
            prodDesc.innerHTML = 'Cachorros também podem ir para o espaço'
            actualShopItem = 3
        } else if (i.id == "catSkinPurchase") {
            prodImage.src = 'assets/img/sprites/skins/catGhost/Flying.gif'
            prodName.innerHTML = 'Gato Fantasma'
            prodValue.innerHTML = "350"
            prodType.innerHTML = 'Aparência/Skin'
            prodDesc.innerHTML = 'Os gatos também podem ir para o espaço'
            actualShopItem = 4
        } else if (i.id == "mechaSkinPurchase") {
            prodImage.src = 'assets/img/sprites/skins/mechaGhost/Flying.gif'
            prodName.innerHTML = 'Mecha'
            prodValue.innerHTML = "425"
            prodType.innerHTML = 'Aparência/Skin'
            prodDesc.innerHTML = 'A maior criação da comunidade Ghost, o Mecha Ghost, que consegue facilmente se comportar como um Ghost'
            actualShopItem = 5
        }
        shopBackType = 'back'
    })
})

//Skin Changer
s0b.addEventListener("click", () => {
    document.body.removeAttribute('class')
    localStorage.removeItem('actualSkin')
    s0b.className = 'ChoosedSkin'
    sAb.className = 'shopBlock'
    s1b.className = 'shopBlock'
    s2b.className = 'shopBlock'
    s3b.className = 'shopBlock'
    s4b.className = 'shopBlock'
})

sAb.addEventListener("click", () => {
    if (skinABuy) {
        document.body.className = 'sA'
        localStorage.setItem('actualSkin', 'sA')
        s0b.className = 'shopBlock'
        sAb.className = 'ChoosedSkin'
        s1b.className = 'shopBlock'
        s2b.className = 'shopBlock'
        s3b.className = 'shopBlock'
        s4b.className = 'shopBlock'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s1b.addEventListener("click", () => {
    if (skin1Buy) {
        document.body.className = 's1'
        localStorage.setItem('actualSkin', 's1')
        s0b.className = 'shopBlock'
        sAb.className = 'shopBlock'
        s1b.className = 'ChoosedSkin'
        s2b.className = 'shopBlock'
        s3b.className = 'shopBlock'
        s4b.className = 'shopBlock'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s2b.addEventListener("click", () => {
    if (skin2Buy) {
        document.body.className = 's2'
        localStorage.setItem('actualSkin', 's2')
        s0b.className = 'shopBlock'
        sAb.className = 'shopBlock'
        s1b.className = 'shopBlock'
        s2b.className = 'ChoosedSkin'
        s3b.className = 'shopBlock'
        s4b.className = 'shopBlock'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s3b.addEventListener("click", () => {
    if (skin3Buy) {
        document.body.className = 's3'
        localStorage.setItem('actualSkin', 's3')
        s0b.className = 'shopBlock'
        sAb.className = 'shopBlock'
        s1b.className = 'shopBlock'
        s2b.className = 'shopBlock'
        s3b.className = 'ChoosedSkin'
        s4b.className = 'shopBlock'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s4b.addEventListener("click", () => {
    if (skin4Buy) {
        document.body.className = 's4'
        localStorage.setItem('actualSkin', 's4')
        s0b.className = 'shopBlock'
        sAb.className = 'shopBlock'
        s1b.className = 'shopBlock'
        s2b.className = 'shopBlock'
        s3b.className = 'shopBlock'
        s4b.className = 'ChoosedSkin'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

document.getElementById('returnShop').addEventListener("click", () => {
    skinChangerPage.style.opacity = '0'
    if (modeToSkinChanger == 'shop') {
        pageType = 4
        setTimeout(() => {
            skinChangerPage.removeAttribute('style')
            shopPage.style.display = 'block'
        }, 500);
    } else if (modeToSkinChanger == 'homePage') {
        pageType = 1.1
        setTimeout(() => {
            skinChangerPage.removeAttribute('style')
            homePage.style.display = 'flex'
        }, 500);
    }
})