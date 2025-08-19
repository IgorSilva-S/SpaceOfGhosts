// Developer Mode (DevMode or DevKeys) script
let isDev = localStorage.getItem('devMode')
let actualLSVar = 0

if (isDev == '1') {
  function delKey() {
    alert(`A chave ${keyName} foi deletada`)
    context.removeAttribute('style')
    localStorage.removeItem(keyName)
    refreshPane()
  }

  function renKey() {
    let newKeyName = prompt(`Digite o novo nome da chave ${keyName}`)
    let oldKey = localStorage.getItem(keyName)
    localStorage.setItem(newKeyName, oldKey)
    localStorage.removeItem(keyName)
    alert(`Chave renomeade de ${keyName} para ${newKeyName}`)
    context.removeAttribute('style')
    refreshPane()
  }

  let noDevTitle = localStorage.getItem('noDevTitle')
  if (noDevTitle != undefined) {
    if (noDevTitle == "false") {
      document.getElementById('gameName').src = 'assets/img/non-sprites/gameName/devKeys.png'
    }
  }
  document.getElementById('devKeysEnter').removeAttribute('style')
  document.getElementById('devKeysDisclaimer').removeAttribute('style')
  document.getElementById('reloadGame').addEventListener('click', () => {
    let canReload = confirm('Tem certeza que quer recarregar o jogo?')
    if (canReload) {
      window.location.reload()
    }
  })
  function regeditDevKeys() {
    for (var i = 0, len = localStorage.length; i < len; i++) {
      var key = localStorage.key(i);
      var value = localStorage[key];
      let keyId = `KID${i}`
      let nameId = `NID${i}`
      let cardId = `CID${i}`
      let nameTable = document.createElement('div')
      nameTable.className = 'cellDiv'
      nameTable.id = nameId
      nameTable.innerText = key
      let nameColumn = document.getElementById('keyNameRow')
      nameColumn.insertAdjacentElement('beforeend', nameTable)
      let valueTable = document.createElement('div')
      valueTable.className = 'cellDivVal'
      valueTable.id = keyId
      valueTable.innerText = value
      let valueColumn = document.getElementById('keyValueRow')
      valueColumn.insertAdjacentElement('beforeend', valueTable)
      let keyCard = document.createElement('div')
      keyCard.className = 'miniCard'
      keyCard.id = cardId
      keyCard.title = `Variável ${localStorage.key(i)}`
      let mcCont = document.getElementById('mcCont')
      mcCont.insertAdjacentElement('beforeend', keyCard)
    }
  }
  function clearRegKeys() {
    document.getElementById('keyNameRow').innerHTML = ''
    document.getElementById('keyValueRow').innerHTML = ''
    document.getElementById('mcCont').innerHTML = ''
  }
  regeditDevKeys()
  makeButtonsWork()
  function refreshPane() {
    clearRegKeys()
    organizeSound()
    enableOldControls()
    skinChanger()
    enableSoloSlots()
    organizeCursor()
    organizeColor()
    rearrangeShop()
    gameDevSys()
    setTimeout(() => {
      regeditDevKeys()
      makeButtonsWork()
    }, 1);
    try {
      document.getElementById('delKey').removeEventListener('click', delKey)
      document.getElementById('renKey').removeEventListener('click', renKey)
    } catch {
      console.log('AAA')
    }

  }

  function addNewKey() {
    let nkName = prompt('Insira o nome da nova chave')
    if (nkName == null, nkName == '') {
      alert('Inserção de valor cancelada')
    } else {
      let nkValue = prompt(`Insira o valor da nova chave ${nkName} \n Caso não insira, o valor será como undefined`)
      localStorage.setItem(nkName, nkValue)
    }
    refreshPane()
  }

  document.getElementById('addKey').addEventListener('click', () => {
    addNewKey()
  })

  document.getElementById('refreshData').addEventListener('click', () => {
    refreshPane()
  })

  let isCardView = false
  document.getElementById('changeType').addEventListener('click', () => {
    if (!isCardView) {
      document.getElementById('regView').style.display = 'none'
      document.getElementById('cardView').removeAttribute('style')
      document.getElementById('changeType').style.rotate = '360deg'
      isCardView = true
    } else {
      document.getElementById('cardView').style.display = 'none'
      document.getElementById('regView').removeAttribute('style')
      document.getElementById('changeType').removeAttribute('style')
      isCardView = false
    }
  })

  function makeButtonsWork() {
    let valueCells = document.querySelectorAll('.cellDivVal')
    valueCells.forEach((i) => {
      i.addEventListener('click', () => {
        let valueKey = i.id
        valueKey = valueKey.replace('KID', '')
        let valueName = localStorage.key(valueKey)
        let newValue = prompt(`Digite o valor da chave ${valueName}: \nPalavras-chaves: \nnotChange - Não altera o valor da chave`)
        if (newValue == null || newValue == "") {
          alert('Sem valor inserido, o valor não será alterado')
          /*localStorage.setItem(valueName, 0)
          if (valueName == 'devMode') {
            document.getElementById('devKeysTitle').innerHTML = 'DevKeys Central <br> Alerta: Chave devMode alterada, o devKeys será desligado ao recarregar'
          }*/
          refreshPane()
        } else if (newValue == 'notChange') {
          alert(`O valor da chave ${valueName} não foi alterado`)
        } else {
          alert(`O valor da chave ${valueName} foi trocado para ${newValue}`)
          localStorage.setItem(valueName, newValue)
          setTimeout(() => {
            refreshPane()
            if (valueName == 'devMode') {
              if (newValue != '1') {
                document.getElementById('devKeysTitle').innerHTML = 'DevKeys Central <br> Alerta: Chave devMode alterada, o devKeys será desligado ao recarregar'
              } else {
                document.getElementById('devKeysTitle').innerHTML = 'DevKeys Central'
              }
            }
          }, 1);
        }
      })
    })

    let nameCells = document.querySelectorAll('.cellDiv')
    nameCells.forEach((n) => {
      n.addEventListener('click', (mouse) => {
        let keyId = n.id
        keyId = keyId.replace('NID', '')
        let keyName = localStorage.key(keyId);
        let mouseX = mouse.clientX;
        let mouseY = mouse.clientY;
        let context = document.getElementById('contextMenu')
        let contextOptions = document.getElementById('contextOptions')
        contextOptions.innerHTML = ''
        context.removeAttribute('style')
        setTimeout(() => {
          context.style.top = `${mouseY}px`
          context.style.left = `${mouseX}px`
          context.style.display = "flex"
        }, 10);
        document.getElementById('kn').innerText = keyName
        context.addEventListener('click', () => {
          context.removeAttribute('style')
        })
        let dkcm = document.createElement('div')
        dkcm.className = 'CMOption'
        dkcm.innerHTML = 'Deletar'
        dkcm.addEventListener('click', () => {
          alert(`A chave ${keyName} foi deletada`)
          context.removeAttribute('style')
          localStorage.removeItem(keyName)
          refreshPane()
        })
        contextOptions.insertAdjacentElement('beforeend', dkcm)
        let rkcm = document.createElement('div')
        rkcm.className = 'CMOption'
        rkcm.innerHTML = 'Renomear'
        rkcm.addEventListener('click', () => {
          let newKeyName = prompt(`Digite o novo nome da chave ${keyName}`)
          let oldKey = localStorage.getItem(keyName)
          localStorage.setItem(newKeyName, oldKey)
          localStorage.removeItem(keyName)
          alert(`Chave renomeade de ${keyName} para ${newKeyName}`)
          context.removeAttribute('style')
          refreshPane()
        })
        contextOptions.insertAdjacentElement('beforeend', rkcm)


        /*let makeSomething = prompt(`O que deseja fazer com a chave ${keyName}? \nDeletar a chave - delKey \nRenomear a chave - renKey \nNada - notChange ou qualquer coisa`)
        if (makeSomething == 'delKey') {
          let confirmDelKey = confirm(`Deseja deletar a chave ${keyName}?`)
          if (confirmDelKey) {
            alert("Chave deletada")
            localStorage.removeItem(keyName)
          }
        } else if (makeSomething == 'renKey') {
          let newKeyName = prompt(`Digite o novo nome da chave ${keyName}`)
          let oldKey = localStorage.getItem(keyName)
          localStorage.setItem(newKeyName, oldKey)
          localStorage.removeItem(keyName)
          alert(`Chave renomeade de ${keyName} para ${newKeyName}`)
        } else {
          alert('Nada foi alterado')
        }
        refreshPane()*/
      })
    })

    let cards = document.querySelectorAll('.miniCard')
    cards.forEach((c) => {
      c.addEventListener('click', () => {
        let cardId = c.id
        cardId = cardId.replace('CID', '')
        actualLSVar = cardId

        let valueName = localStorage.key(cardId)

        let cType = 'Custom'
        let cDesc = 'Essa é uma variável de jogo customizada, não se sabe os valores dessa variável e, possivelmente, ela não tem relevância para o sistema do jogo.'
        if (valueName == 'devMode') {
          cDesc = 'Variável que verifica se o DevKeys vai estar ativado e visível ou não. Ela pode conter os valores 0 e 1, sendo 0 como inativo e 1 como ativo'
          cType = 'DK Essential'
        } else if (valueName == 'money') {
          cDesc = 'Essa variável define a quantidade de Stardusts que o usuário tem no momento. O valor dessa vairável pode ser qualquer número inteiro'
          cType = 'Jogo'
        } else if (valueName == 'volume') {
          cDesc = 'Essa variável guarda o volume atual do SoG. O valor dessa variável pode ser qualquer número real de 0 a 1'
          cType = 'Ambiente'
        } else if (valueName == 'oldControls') {
          cDesc = 'Habilita ou desabilita a configuração "Controle no formato de teclas". O valor dessa variável pode ser true ou false'
          cType = 'Controles'
        } else if (valueName == 'soloSlots') {
          cDesc = 'Habilita ou desabilita a configuração "Solo: Guardar boosts ao invés de usar". O valor dessa variável pode ser true ou false'
          cType = 'Mecânicas'
        } else if (valueName == 'invertedColor') {
          cDesc = 'Habilita ou desabilita a configuração "Inverter Cores". O valor dessa variável pode ser true ou false'
          cType = 'Ambiente'
        } else if (valueName == 'purchased1') {
          cDesc = 'Verifica se a skin 1 (TranspGhost) foi comprada ou não. O valor dessa variável pode ser true ou false'
          cType = 'Skins'
        } else if (valueName == 'purchased2') {
          cDesc = 'Verifica se a skin 2 (Cachorro Fantasma) foi comprada ou não. O valor dessa variável pode ser true ou false'
          cType = 'Skins'
        } else if (valueName == 'purchased3') {
          cDesc = 'Verifica se a skin 3 (Gato Fantasma) foi comprada ou não. O valor dessa variável pode ser true ou false'
          cType = 'Skins'
        } else if (valueName == 'purchased4') {
          cDesc = 'Verifica se a skin 4 (Mecha) foi comprada ou não. O valor dessa variável pode ser true ou false'
          cType = 'Skins'
        } else if (valueName == 'purchased5') {
          cDesc = 'Verifica se a skin 5 (Mago) foi comprada ou não. O valor dessa variável pode ser true ou false'
          cType = 'Skins'
        } else if (valueName == 'purchased6') {
          cDesc = 'Verifica se a skin 6 (Cosplay: Sara) foi comprada ou não. O valor dessa variável pode ser true ou false'
          cType = 'Skins'
        } else if (valueName == 'actualSkin') {
          cDesc = 'Valor de qual skin está sendo utilizada no momento (jogador 1/ambos). O valor dessa variável é definido com o número da skin e a letra s antes do número'
          cType = 'Customização'
        } else if (valueName == 'actualP2Screen') {
          cDesc = 'Valor de qual skin está sendo utilizada no momento (jogador 2 apenas). O valor dessa variável é definido com o número da skin e a letra s antes do número'
          cType = 'Customização'
        } else if (valueName == 'highScore') {
          cDesc = 'Maior pontuação do modo de jogo Espacial de um jogador (e suas variações). O valor dessa variável pode ser qualquer número inteiro'
          cType = 'Jogo'
        } else if (valueName == 'classicBestScore') {
          cDesc = 'Maior pontuação do modo de jogo Corredor de um jogador (e suas variações). O valor dessa variável pode ser qualquer número inteiro'
          cType = 'Jogo'
        } else if (valueName == 'noLife') {
          cDesc = 'Habilita ou desabilita o modo de jogo sem vidas. O valor dessa variável pode ser 0 e 1, sendo 0 como inativo e 1 como ativo. Antes de funcionar, ela verifica se o DevKeys está ativo ou não'
          cType = 'DK Tools'
        } else if (valueName == 'collisionView') {
          cDesc = 'Habilita ou desabilita a visão das colisões do jogo. O valor dessa variável pode ser true, false ou settings, sendo o último utilizado para habilitar sem modificar nas configurações'
          cType = 'DK Tools'
        } else if (valueName == 'gameDevSys') {
          cDesc = 'Habilita ou desabilita o botão "DevKeys" do pause dos jogos. O valor dessa variável pode ser true ou false'
          cType = 'DK Tools'
        } else if (valueName == 'noDevTitle') {
          cDesc = 'Habilita ou desabilita a frase "DevKeys Enabled" no título do jogo no início. O valor dessa variável pode ser true ou false'
          cType = 'DK Custom'
        } else if (valueName == 'useHD') {
          cDesc = 'Usa o filtro HD no jogo. O valor dessa variável pode ser true ou false'
          cType = 'Customização'
        } else if (valueName == 'lightTheme') {
          cDesc = 'Habilita ou desabilita a configuração "Tema Claro". O valor dessa variável pode ser true ou false'
          cType = 'Customização'
        }


        document.getElementById('dkCard').style.transform = 'scaleX(0)'
        setTimeout(() => {
          document.getElementById('bCard').style.display = 'block'
          document.getElementById('bCard').addEventListener('animationend', () => {
            document.getElementById('cTitle').innerText = valueName
            document.getElementById('cType').innerText = cType
            document.getElementById('cDesc').innerText = cDesc

            document.getElementById('bCard').removeAttribute('style')
            document.getElementById('dkCard').removeAttribute('style')
          })
        }, 300);
      })
    })
  }

  document.getElementById('cardSeeValue').addEventListener('click', () => {
    let varName = localStorage.key(actualLSVar)
    let varValue = localStorage.getItem(varName)
    alert(`O valor da variável ${varName} é ${varValue}`)
  })

  document.getElementById('cardEdit').addEventListener('click', () => {
    let valueName = localStorage.key(actualLSVar)
    let newValue = prompt(`Digite o valor da chave ${valueName}: \nPalavras-chaves: \nnotChange - Não altera o valor da chave`)
    if (newValue == null || newValue == "") {
      alert('Sem valor inserido, o valor não será alterado')
      /*localStorage.setItem(valueName, 0)
      if (valueName == 'devMode') {
        document.getElementById('devKeysTitle').innerHTML = 'DevKeys Central <br> Alerta: Chave devMode alterada, o devKeys será desligado ao recarregar'
      }*/
      refreshPane()
    } else if (newValue == 'notChange') {
      alert(`O valor da chave ${valueName} não foi alterado`)
    } else {
      alert(`O valor da chave ${valueName} foi trocado para ${newValue}`)
      localStorage.setItem(valueName, newValue)
      setTimeout(() => {
        refreshPane()
        if (valueName == 'devMode') {
          if (newValue != '1') {
            document.getElementById('devKeysTitle').innerHTML = 'DevKeys Central <br> Alerta: Chave devMode alterada, o devKeys será desligado ao recarregar'
          } else {
            document.getElementById('devKeysTitle').innerHTML = 'DevKeys Central'
          }
        }
      }, 1);
    }
  })

  document.getElementById('cardDelVar').addEventListener('click', () => {
    let varName = localStorage.key(actualLSVar)
    let canDel = confirm(`Certeza que deseja deletar a variável ${varName}?`)
    
    if (canDel) {
      alert(`A chave ${varName} foi deletada`)
      localStorage.removeItem(varName)
      refreshPane()
    }
  })

  document.getElementById('cTitle').addEventListener('dblclick', () => {
    let varName = localStorage.key(actualLSVar)
    let canRen = confirm(`Deseja renomear a variável ${varName}?`)
    if (canRen) {
      let newKeyName = prompt(`Digite o novo nome da chave ${varName}`)
      let oldKey = localStorage.getItem(varName)
      localStorage.setItem(newKeyName, oldKey)
      localStorage.removeItem(varName)
      alert(`Chave renomeade de ${varName} para ${newKeyName}`)
      refreshPane()
    }
  })

  document.getElementById('cType').addEventListener('dblclick', () => {
    let cType = 'Custom'
    let valueName = localStorage.key(actualLSVar)
    if (valueName == 'devMode') {
      cType = 'DK Essential'
    } else if (valueName == 'money') {
      cType = 'Jogo'
    } else if (valueName == 'volume') {
      cType = 'Ambiente'
    } else if (valueName == 'oldControls') {
      cType = 'Controles'
    } else if (valueName == 'soloSlots') {
      cType = 'Mecânicas'
    } else if (valueName == 'invertedColor') {
      cType = 'Ambiente'
    } else if (valueName == 'purchased1') {
      cType = 'Skins'
    } else if (valueName == 'purchased2') {
      cType = 'Skins'
    } else if (valueName == 'purchased3') {
      cType = 'Skins'
    } else if (valueName == 'purchased4') {
      cType = 'Skins'
    } else if (valueName == 'purchased5') {
      cType = 'Skins'
    } else if (valueName == 'purchased6') {
      cType = 'Skins'
    } else if (valueName == 'actualSkin') {
      cType = 'Customização'
    } else if (valueName == 'actualP2Screen') {
      cType = 'Customização'
    } else if (valueName == 'highScore') {
      cType = 'Jogo'
    } else if (valueName == 'classicBestScore') {
      cType = 'Jogo'
    } else if (valueName == 'noLife') {
      cType = 'DK Tools'
    } else if (valueName == 'collisionView') {
      cType = 'DK Tools'
    } else if (valueName == 'gameDevSys') {
      cType = 'DK Tools'
    } else if (valueName == 'noDevTitle') {
      cType = 'DK Custom'
    } else if (valueName == 'useHD') {
      cType = 'Customização'
    } else if (valueName == 'lightTheme') {
      cType = 'Customização'
    }

    vVal = localStorage.getItem(valueName)
    document.getElementById('cType').innerText = `Val: ${vVal}`
    setTimeout(() => {
      document.getElementById('cType').innerText = cType
    }, 2000);
  })
}