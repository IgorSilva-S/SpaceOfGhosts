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
                skinABuy = confirmPurchase
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchasedA', confirmPurchase)
                bckgPop.removeAttribute('style')
                PUShop.removeAttribute('style')
            } else {
                CB1.className = 'justOkayShop'
                CB1.value = 'B2B'
                aDesc.innerText = 'Você não tem moedas suficientes para adquirir esse item!'
                CB2.style.display = 'none'
                CB1.innerText = 'Ok'
            }
    }
    else if (buttonType == 'P:S1') {
        let money = localStorage.getItem('money')
        let itemValue = 300
        if (money >= itemValue) {
            skin1Buy = confirmPurchase
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchased1', confirmPurchase)
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem moedas suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
    else if (buttonType == 'P:S2') {
        let money = localStorage.getItem('money')
        let itemValue = 400
        if (money >= itemValue) {
            skin2Buy = confirmPurchase
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchased2', confirmPurchase)
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem moedas suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
    else if (buttonType == 'P:S3') {
        let money = localStorage.getItem('money')
        let itemValue = 350
        if (money >= itemValue) {
            skin3Buy = confirmPurchase
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('purchased3', confirmPurchase)
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem moedas suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }

    else if (buttonType == 'P:GM1') {
        let money = localStorage.getItem('money')
        let itemValue = 2000
        if (money >= itemValue) {
            classicBuy = confirmPurchase
            money = money - itemValue
            localStorage.setItem('money', money)
            document.getElementById('moneyShopView').innerText = money
            localStorage.setItem('classicPurchased', confirmPurchase)
        } else {
            CB1.className = 'justOkayShop'
            CB1.value = 'B2B'
            aDesc.innerText = 'Você não tem moedas suficientes para adquirir esse item!'
            CB2.style.display = 'none'
            CB1.innerText = 'Ok'
        }
    }
})

document.getElementById('femaleSkinPurchase').addEventListener("click", () => {
    prodImg.className = 'prodImage'
    prodImg.classList.add('prodSA')
    //Old Script
    /*if (!skinABuy) {
        let confirmPurchase = confirm('Deseja comprar esse item?')
        if (confirmPurchase) {
            let money = localStorage.getItem('money')
            let itemValue = 300
            if (money >= itemValue) {
                skinABuy = confirmPurchase
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchasedA', confirmPurchase)
            } else {
                alert('Você não tem moedas suficientes para adquirir esse produto!')
            }
        }
    } else {
        alert('Esse item já foi comprado')
    }*/

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
    }
})

document.getElementById('transpSkinPurchase').addEventListener("click", () => {
    prodImg.className = 'prodImage'
    prodImg.classList.add('prodS1')
    //Old Script
    /*if (!skin1Buy) {
        let confirmPurchase = confirm('Deseja comprar esse item?')
        if (confirmPurchase) {
            let money = localStorage.getItem('money')
            let itemValue = 300
            if (money >= itemValue) {
                skin1Buy = confirmPurchase
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchased1', confirmPurchase)
            } else {
                alert('Você não tem moedas suficientes para adquirir esse produto!')
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
        let confirmPurchase = confirm('Deseja comprar esse item?')
        if (confirmPurchase) {
            skin2Buy = confirmPurchase
            let money = localStorage.getItem('money')
            let itemValue = 400
            if (money >= itemValue) {
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchased2', confirmPurchase)
            } else {
                alert('Você não tem moedas suficientes para adquirir esse produto!')
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
        let confirmPurchase = confirm('Deseja comprar esse item?')
        if (confirmPurchase) {
            let money = localStorage.getItem('money')
            let itemValue = 350
            if (money >= itemValue) {
                skin3Buy = confirmPurchase
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('purchased3', confirmPurchase)
            } else {
                alert('Você não tem moedas suficientes para adquirir esse produto!')
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
    /*if (!classicBuy) {
        let confirmPurchase = confirm('Deseja comprar esse item? Esse modo de jogo está em teste, e pode estar instável.')
        if (confirmPurchase) {
            let money = localStorage.getItem('money')
            let itemValue = 2000
            if (money >= itemValue) {
                classicBuy = confirmPurchase
                money = money - itemValue
                localStorage.setItem('money', money)
                document.getElementById('moneyShopView').innerText = money
                localStorage.setItem('classicPurchased', confirmPurchase)
            } else {
                alert('Você não tem moedas suficientes para adquirir esse produto!')
            }
        }
    } else {
        alert('Esse item já foi comprado')
    }*/
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
        iValue.innerText = '350'
        aMoney.innerText = localStorage.getItem('money')
        CB1.className = 'justOkayShop'
        CB2.style.display = 'none'
        CB1.innerText = 'Ok'
        CB1.value = 'B2B'
    }
})

//Skin Changer
document.getElementById('returnShop').addEventListener("click", () => {
    skinChangerPage.style.opacity = '0'
    pageType = 4
    setTimeout(() => {
        skinChangerPage.removeAttribute('style')
        shopPage.style.display = 'block'
    }, 500);
})

s0b.addEventListener("click", () => {
    document.body.removeAttribute('class')
    localStorage.removeItem('actualSkin')
})

sAb.addEventListener("click", () => {
    if (skinABuy) {
        document.body.className = 'sA'
        localStorage.setItem('actualSkin', 'sA')
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s1b.addEventListener("click", () => {
    if (skin1Buy) {
        document.body.className = 's1'
        localStorage.setItem('actualSkin', 's1')
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s2b.addEventListener("click", () => {
    if (skin2Buy) {
        document.body.className = 's2'
        localStorage.setItem('actualSkin', 's2')
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})

s3b.addEventListener("click", () => {
    if (skin3Buy) {
        document.body.className = 's3'
        localStorage.setItem('actualSkin', 's3')
    } else {
        alert('É necessário comprar a skin antes de utilizar')
    }
})