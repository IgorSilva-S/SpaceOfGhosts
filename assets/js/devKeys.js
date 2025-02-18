// Developer Mode (DevMode or DevKeys) script
let isDev = localStorage.getItem('devMode')
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
    }
  }
  function clearRegKeys() {
    document.getElementById('keyNameRow').innerHTML = ''
    document.getElementById('keyValueRow').innerHTML = ''
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
  }
}