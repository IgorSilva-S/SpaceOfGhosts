//Shop
CB1.addEventListener("click", () => {
    let buttonType = CB1.value
    if (buttonType == 'B2B') {
        bckgPop.removeAttribute('style')
        PUShop.removeAttribute('style')
        CB1.removeAttribute('style')
        CB2.removeAttribute('style')
    }
    else if (buttonType == 'P:SA') {
        let money = localStorage.getItem('money')
        let itemValue = 300
        if (money >= itemValue) {
            skinABuy = true
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchasedA', true)
            bckgPop.removeAttribute('style')
            PUShop.removeAttribute('style')
            CB1.removeAttribute('style')
            CB2.removeAttribute('style')
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem stardusts suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
    else if (buttonType == 'P:S1') {
        let money = localStorage.getItem('money')
        let itemValue = 300
        if (money >= itemValue) {
            skin1Buy = true
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchased1', true)
            bckgPop.removeAttribute('style')
            PUShop.removeAttribute('style')
            CB1.removeAttribute('style')
            CB2.removeAttribute('style')
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem stardusts suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
    else if (buttonType == 'P:S2') {
        let money = localStorage.getItem('money')
        let itemValue = 400
        if (money >= itemValue) {
            skin2Buy = true
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchased2', true)
            bckgPop.removeAttribute('style')
            PUShop.removeAttribute('style')
            CB1.removeAttribute('style')
            CB2.removeAttribute('style')
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem stardusts suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
    else if (buttonType == 'P:S3') {
        let money = localStorage.getItem('money')
        let itemValue = 350
        if (money >= itemValue) {
            skin3Buy = true
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchased3', true)
            bckgPop.removeAttribute('style')
            PUShop.removeAttribute('style')
            CB1.removeAttribute('style')
            CB2.removeAttribute('style')
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem stardusts suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }

    else if (buttonType == 'P:GM1') {
        let money = localStorage.getItem('money')
        let itemValue = 2000
        if (money >= itemValue) {
            classicBuy = true
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('classicPurchased', true)
            bckgPop.removeAttribute('style')
            PUShop.removeAttribute('style')
            CB1.removeAttribute('style')
            CB2.removeAttribute('style')
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem stardusts suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
    else if (buttonType == 'P:S4') {
        let money = localStorage.getItem('money')
        let itemValue = 425
        if (money >= itemValue) {
            skin4Buy = true
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchased4', true)
            bckgPop.removeAttribute('style')
            PUShop.removeAttribute('style')
            CB1.removeAttribute('style')
            CB2.removeAttribute('style')
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem stardusts suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
    document.getElementById('moneyShopView').innerText = localStorage.getItem('money')
})

CB2.addEventListener("click", () => {
    let buttonType = CB2.value
    let money = localStorage.getItem('money')
    let skinActive = document.body.className
    money = parseInt(money)
    if (buttonType == "B2B") {
        bckgPop.removeAttribute('style')
        PUShop.removeAttribute('style')
        CB1.removeAttribute('style')
        CB2.removeAttribute('style')
    } else if (buttonType == "R:SA") {
        CB1.className = 'justOkayShop'
        CB1.value = 'B2B'
        aDesc.innerText = 'Item Reembolsado'
        localStorage.removeItem('purchasedA')
        skinABuy = false
        money = money + 300
        localStorage.setItem('money', money)
        aMoney.innerText = localStorage.getItem('money')
        CB2.style.display = 'none'
        CB1.innerText = 'Ok'
        if (skinActive == 'sA') {
            document.body.removeAttribute('class')
            localStorage.setItem('actualSkin', undefined)
        }
    } else if (buttonType == "R:S1") {
        CB1.className = 'justOkayShop'
        CB1.value = 'B2B'
        aDesc.innerText = 'Item Reembolsado'
        localStorage.removeItem('purchased1')
        skin1Buy = false
        money = money + 300
        localStorage.setItem('money', money)
        aMoney.innerText = localStorage.getItem('money')
        CB2.style.display = 'none'
        CB1.innerText = 'Ok'
        if (skinActive == 's1') {
            document.body.removeAttribute('class')
            localStorage.setItem('actualSkin', undefined)
        }
    } else if (buttonType == "R:S2") {
        CB1.className = 'justOkayShop'
        CB1.value = 'B2B'
        aDesc.innerText = 'Item Reembolsado'
        localStorage.removeItem('purchased2')
        skin2Buy = false
        money = money + 400
        localStorage.setItem('money', money)
        aMoney.innerText = localStorage.getItem('money')
        CB2.style.display = 'none'
        CB1.innerText = 'Ok'
        if (skinActive == 's2') {
            document.body.removeAttribute('class')
            localStorage.setItem('actualSkin', undefined)
        }
    } else if (buttonType == "R:S3") {
        CB1.className = 'justOkayShop'
        CB1.value = 'B2B'
        aDesc.innerText = 'Item Reembolsado'
        localStorage.removeItem('purchased3')
        skin3Buy = false
        money = money + 350
        localStorage.setItem('money', money)
        aMoney.innerText = localStorage.getItem('money')
        CB2.style.display = 'none'
        CB1.innerText = 'Ok'
        if (skinActive == 's3') {
            document.body.removeAttribute('class')
            localStorage.setItem('actualSkin', undefined)
        }
    } else if (buttonType == "R:S4") {
        CB1.className = 'justOkayShop'
        CB1.value = 'B2B'
        aDesc.innerText = 'Item Reembolsado'
        localStorage.removeItem('purchased4')
        skin4Buy = false
        money = money + 425
        localStorage.setItem('money', money)
        aMoney.innerText = localStorage.getItem('money')
        CB2.style.display = 'none'
        CB1.innerText = 'Ok'
        if (skinActive == 's4') {
            document.body.removeAttribute('class')
            localStorage.setItem('actualSkin', undefined)
        }
    }
})

document.getElementById('femaleSkinPurchase').addEventListener("click", () => {
    /*prodImg.className = 'prodImage'
    prodImg.classList.add('prodSA')
    //Old Script
    /*if (!skinABuy) {
        let true = confirm('Deseja comprar esse item?')
        if (true) {
            let money = localStorage.getItem('money')
            let itemValue = 300
            if (money >= itemValue) {
                skinABuy = true
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchasedA', true)
            } else {
                alert('Você não tem stardusts suficientes para adquirir esse produto!')
            }
        }
    } else {
        alert('Esse item já foi comprado')
    }

    //New Script
    if (!skinABuy) {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Feminina'
        aDesc.innerText = 'Deseja comprar esse item?'
        iValue.innerText = '300'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'normalButtonShop'
        CB1.innerText = 'Sim, desejo adquirir'
        CB2.innerText = 'Não, deixa para a próxima'
        CB1.value = 'P:SA'
        CB2.value = 'B2B'
    } else {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Feminina'
        aDesc.innerText = 'Esse item já foi comprado'
        iValue.innerText = '300'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'rembShop'
        CB1.innerText = 'Ok'
        CB2.innerText = 'Desejo Reembolsar'
        CB1.value = 'B2B'
        CB2.value = 'R:SA'
    }*/

    let barName = document.getElementById('itemName')
    let barType = document.getElementById('itemType')
    barName.innerText = 'Ghost Fêmea'
    barType.innerText = 'Skin'
    actualShopItem = 1
    document.getElementById('femaleSkinPurchase').classList.add('selSitem')
})

document.getElementById('transpSkinPurchase').addEventListener("click", () => {
    prodImg.className = 'prodImage'
    prodImg.classList.add('prodS1')
    //Old Script
    /*if (!skin1Buy) {
        let true = confirm('Deseja comprar esse item?')
        if (true) {
            let money = localStorage.getItem('money')
            let itemValue = 300
            if (money >= itemValue) {
                skin1Buy = true
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchased1', true)
            } else {
                alert('Você não tem stardusts suficientes para adquirir esse produto!')
            }
        }
    } else {
        alert('Esse item já foi comprado')
    }*/

    //New Script
    if (!skin1Buy) {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: TranspGhost'
        aDesc.innerText = 'Deseja comprar esse item?'
        iValue.innerText = '300'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'normalButtonShop'
        CB1.innerText = 'Sim, desejo adquirir'
        CB2.innerText = 'Não, deixa para a próxima'
        CB1.value = 'P:S1'
        CB2.value = 'B2B'
    } else {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: TranspGhost'
        aDesc.innerText = 'Esse item já foi comprado'
        iValue.innerText = '300'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'rembShop'
        CB1.innerText = 'Ok'
        CB2.innerText = 'Desejo Reembolsar'
        CB1.value = 'B2B'
        CB2.value = 'R:S1'
    }
})

document.getElementById('dogSkinPurchase').addEventListener("click", () => {
    prodImg.className = 'prodImage'
    prodImg.classList.add('prodS2')
    /*if (!skin2Buy) {
        let true = confirm('Deseja comprar esse item?')
        if (true) {
            skin2Buy = true
            let money = localStorage.getItem('money')
            let itemValue = 400
            if (money >= itemValue) {
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchased2', true)
            } else {
                alert('Você não tem stardusts suficientes para adquirir esse produto!')
            }
        }
    } else {
        alert('Esse item já foi comprado')
    }*/
    if (!skin2Buy) {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Fantasma Cachorro'
        aDesc.innerText = 'Deseja comprar esse item?'
        iValue.innerText = '400'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'normalButtonShop'
        CB1.innerText = 'Sim, desejo adquirir'
        CB2.innerText = 'Não, deixa para a próxima'
        CB1.value = 'P:S2'
        CB2.value = 'B2B'
    } else {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Fantasma Cachorro'
        aDesc.innerText = 'Esse item já foi comprado'
        iValue.innerText = '400'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'rembShop'
        CB1.innerText = 'Ok'
        CB2.innerText = 'Desejo Reembolsar'
        CB1.value = 'B2B'
        CB2.value = 'R:S2'
    }
})

document.getElementById('catSkinPurchase').addEventListener("click", () => {
    prodImg.className = 'prodImage'
    prodImg.classList.add('prodS3')
    /*if (!skin3Buy) {
        let true = confirm('Deseja comprar esse item?')
        if (true) {
            let money = localStorage.getItem('money')
            let itemValue = 350
            if (money >= itemValue) {
                skin3Buy = true
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchased3', true)
            } else {
                alert('Você não tem stardusts suficientes para adquirir esse produto!')
            }
        }
    } else {
        alert('Esse item já foi comprado')
    }*/
    if (!skin3Buy) {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Fantasma Gato'
        aDesc.innerText = 'Deseja comprar esse item?'
        iValue.innerText = '350'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'normalButtonShop'
        CB1.innerText = 'Sim, desejo adquirir'
        CB2.innerText = 'Não, deixa para a próxima'
        CB1.value = 'P:S3'
        CB2.value = 'B2B'
    } else {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Fantasma Gato'
        aDesc.innerText = 'Esse item já foi comprado'
        iValue.innerText = '350'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'rembShop'
        CB1.innerText = 'Ok'
        CB2.innerText = 'Desejo Reembolsar'
        CB1.value = 'B2B'
        CB2.value = 'R:S3'
    }
})

document.getElementById('classicModePurchase').addEventListener('click', () => {
    prodImg.className = 'prodImage'
    prodImg.classList.add('prodGM1')
    if (!classicBuy) {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Modo de jogo: Clássico'
        aDesc.innerText = 'Deseja comprar esse item? (Instável: Em Desenvolvimento)'
        iValue.innerText = '2000'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'normalButtonShop'
        CB1.innerText = 'Sim, desejo adquirir'
        CB2.innerText = 'Não, deixa para a próxima'
        CB1.value = 'P:GM1'
        CB2.value = 'B2B'
    } else {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Modo de jogo: Clássico'
        aDesc.innerText = 'Esse item já foi comprado. Não há reembolso para modos de jogo.'
        iValue.innerText = '2000'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'justOkayShop'
        CB2.style.display = 'none'
        CB1.innerText = 'Ok'
        CB1.value = 'B2B'
    }
})

document.getElementById('mechaSkinPurchase').addEventListener('click', () => {
    prodImg.className = 'prodImage'
    prodImg.classList.add('prodS4')
    if (!skin4Buy) {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Mecha'
        aDesc.innerText = 'Deseja comprar esse item?'
        iValue.innerText = '425'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'normalButtonShop'
        CB1.innerText = 'Sim, desejo adquirir'
        CB2.innerText = 'Não, deixa para a próxima'
        CB1.value = 'P:S4'
        CB2.value = 'B2B'
    } else {
        bckgPop.style.transform = 'scale(1)'
        PUShop.style.opacity = '1'
        iName.innerText = 'Skin: Mecha'
        aDesc.innerText = 'Esse item já foi comprado.'
        iValue.innerText = '425'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'okayShop'
        CB2.className = 'rembShop'
        CB1.innerText = 'Ok'
        CB2.innerText = 'Desejo Reembolsar'
        CB1.value = 'B2B'
        CB2.value = 'R:S4'
    }
})

//Skin Changer
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

s0b.addEventListener("click", () => {
    document.body.removeAttribute('class')
    localStorage.removeItem('actualSkin')
    s0b.className = 'ChoosedSkin'
    sAb.className = 'Sitem'
    s1b.className = 'Sitem'
    s2b.className = 'Sitem'
    s3b.className = 'Sitem'
    s4b.className = 'Sitem'
})

sAb.addEventListener("click", () => {
    if (skinABuy) {
        document.body.className = 'sA'
        localStorage.setItem('actualSkin', 'sA')
        s0b.className = 'Sitem'
        sAb.className = 'ChoosedSkin'
        s1b.className = 'Sitem'
        s2b.className = 'Sitem'
        s3b.className = 'Sitem'
        s4b.className = 'Sitem'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s1b.addEventListener("click", () => {
    if (skin1Buy) {
        document.body.className = 's1'
        localStorage.setItem('actualSkin', 's1')
        s0b.className = 'Sitem'
        sAb.className = 'Sitem'
        s1b.className = 'ChoosedSkin'
        s2b.className = 'Sitem'
        s3b.className = 'Sitem'
        s4b.className = 'Sitem'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s2b.addEventListener("click", () => {
    if (skin2Buy) {
        document.body.className = 's2'
        localStorage.setItem('actualSkin', 's2')
        s0b.className = 'Sitem'
        sAb.className = 'Sitem'
        s1b.className = 'Sitem'
        s2b.className = 'ChoosedSkin'
        s3b.className = 'Sitem'
        s4b.className = 'Sitem'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s3b.addEventListener("click", () => {
    if (skin3Buy) {
        document.body.className = 's3'
        localStorage.setItem('actualSkin', 's3')
        s0b.className = 'Sitem'
        sAb.className = 'Sitem'
        s1b.className = 'Sitem'
        s2b.className = 'Sitem'
        s3b.className = 'ChoosedSkin'
        s4b.className = 'Sitem'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s4b.addEventListener("click", () => {
    if (skin4Buy) {
        document.body.className = 's4'
        localStorage.setItem('actualSkin', 's4')
        s0b.className = 'Sitem'
        sAb.className = 'Sitem'
        s1b.className = 'Sitem'
        s2b.className = 'Sitem'
        s3b.className = 'Sitem'
        s4b.className = 'ChoosedSkin'
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})