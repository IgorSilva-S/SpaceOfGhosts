//Shop
document.getElementById('femaleSkinPurchase').addEventListener("click", () => {
    if (!skinABuy) {
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
    }
})

document.getElementById('transpSkinPurchase').addEventListener("click", () => {
    if (!skin1Buy) {
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
    }
})

document.getElementById('dogSkinPurchase').addEventListener("click", () => {
    if (!skin2Buy) {
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
    }
})

document.getElementById('catSkinPurchase').addEventListener("click", () => {
    if (!skin3Buy) {
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
    }
})

document.getElementById('classicModePurchase').addEventListener('click', () => {
    if (!classicBuy) {
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