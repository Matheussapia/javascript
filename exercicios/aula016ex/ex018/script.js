let num = document.querySelector('input#num')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = {}

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adicionar() {
    if(isnumero(num.Value) && !inlista(num.Value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    } 
    num.value = ''
    num.focus()
}

