let shopButtons = document.querySelectorAll('[shopButton]')
shopButtons.forEach((i) => {
    i.addEventListener('click', () => {
        document.getElementById('shopItems').style.display = 'none'
        document.getElementById('itemDesc').removeAttribute('style')

        let prodImage = document.getElementById('prodImage')
        let prodName = document.querySelector('[type="itemName"]')
        let prodType = document.querySelector('[type="itemType"]')
        let prodDesc = document.querySelector('[type="itemDesc"]')
        if (i.id == "femaleSkinPurchase") {
           prodImage.src = 'assets/img/sprites/skins/female/Flying.gif'
           prodName.innerHTML = 'Feminina'
           prodType.innerHTML = 'Aparência/Skin'
           prodDesc.innerHTML = 'As mulheres estão na área agora! Use seu gênero favorito para voar no espaço com essa skin'
        }
    })
})

//Old Skin Changer
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
    } else if (modeToSkinChanger == 'gameMode') {
        pageType = 1.1
        setTimeout(() => {
            skinChangerPage.removeAttribute('style')
            gameMPage.style.display = 'flex'
        }, 500);
    }
})