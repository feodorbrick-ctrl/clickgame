let goldNum = 0
let goldNumTotring = null
let purchaseBadButton = false
let purchaseOkButton = false
let purchaseGoodButton = false
let purchaseBestButton  = false


async function safe () {
    localStorage.setItem('goldSave', document.getElementById('gold').textContent)
    localStorage.setItem('SafeBadButton', purchaseBadButton.toString())
    localStorage.setItem('SafeOkButton', purchaseOkButton.toString())
    localStorage.setItem('SafeGoodButton',purchaseGoodButton.toString())
    localStorage.setItem('SafeBestButton', purchaseBestButton.toString())

    console.log(`purchaseBadButton ${localStorage.getItem('SafeBadButton')}`)
    console.log(`purchaseOkButton ${localStorage.getItem('SafeOkButton')}`)
    console.log(`purchaseGoodButton ${localStorage.getItem('SafeGoodButton')}`)
    console.log(`purchaseBestButton ${localStorage.getItem('SafeBestButton')}`)
}

function UnSafe() {
    document.getElementById('gold').textContent = localStorage.getItem('goldSave')

    console.log(`purchaseBadButton ${localStorage.getItem('SafeBadButton')==='true'}`)
    console.log(`purchaseOkButton ${localStorage.getItem('SafeOkButton')==='true'}`)
    console.log(`purchaseGoodButton ${localStorage.getItem('SafeGoodButton')==='true'}`)
    console.log(`purchaseBestButton ${localStorage.getItem('SafeBestButton')==='true'}`)

    purchaseBadButton = localStorage.getItem('SafeBadButton')==='true'
    purchaseOkButton = localStorage.getItem('SafeOkButton')==='true'
    purchaseGoodButton = localStorage.getItem('SafeGoodButton')==='true'
    purchaseBestButton = localStorage.getItem('SafeBestButton')==='true'

    if (purchaseBadButton) {
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton').style.display = 'none'
        document.getElementById('lockBtn').style.display = 'none'
        document.getElementById('pLock').style.display = 'none'
        displayOnCoociesFive()
    }
    if (purchaseOkButton) {
        displayOnCoociesTen()
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton2').style.display = 'none'
        document.getElementById('lockBtn2').style.display = 'none'
        document.getElementById('pLock2').style.display = 'none'
    }
    if (purchaseGoodButton) {
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton3').style.display = 'none'
        document.getElementById('lockBtn3').style.display = 'none'
        document.getElementById('pLock3').style.display = 'none'
        displayOnCoociesFifty()
    }
    if (purchaseBestButton) {
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton4').style.display = 'none'
        document.getElementById('lockBtn4').style.display = 'none'
        document.getElementById('pLock4').style.display = 'none'
        displayOnCoociesHyndryate()
    }
}

function purchaseBadClicer () {
    console.log(goldNum)
    if (goldNum >= 50) {
        purchaseBadButton = true
        goldNum = goldNum - 50
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton').style.display = 'none'
        document.getElementById('lockBtn').style.display = 'none'
        document.getElementById('pLock').style.display = 'none'
    }
}

function purchaseOkClicer () {
    if (goldNum >= 500) {
        purchaseOkButton = true
        goldNum = goldNum - 500
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton2').style.display = 'none'
        document.getElementById('lockBtn2').style.display = 'none'
        document.getElementById('pLock2').style.display = 'none'
    }
}

function purchaseGoodClicer () {
    if (goldNum >= 1000) {
        goldNum = goldNum - 1000
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        purchaseGoodButton = true
        document.getElementById('BlokingOfLevelButton3').style.display = 'none'
        document.getElementById('lockBtn3').style.display = 'none'
        document.getElementById('pLock3').style.display = 'none'
    }
}

function purchaseBestClicer () {
    if (goldNum >= 5000) {
        purchaseBestButton = true
        goldNum = goldNum - 5000
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton4').style.display = 'none'
        document.getElementById('lockBtn4').style.display = 'none'
        document.getElementById('pLock4').style.display = 'none'
    }
}

function start () {
    if (confirm('Are you sure?')) {
        document.getElementById('gold').textContent = '0'
    }

}

function displayOnCoociesOne () {
    document.getElementById('coocke5').style.display = 'none'
    document.getElementById('coocke10').style.display = 'none'
    document.getElementById('coocke50').style.display = 'none'
    document.getElementById('coocke100').style.display = 'none'

    document.getElementById('coocke1').style.display = 'block'
}

function displayOnCoociesFive () {
    if (purchaseBadButton === true) {
        document.getElementById('coocke10').style.display = 'none'
        document.getElementById('coocke50').style.display = 'none'
        document.getElementById('coocke100').style.display = 'none'
        document.getElementById('coocke1').style.display = 'none'

        document.getElementById('coocke5').style.display = 'block'

        document.getElementById('lock').style.display = 'none'
    }
}

function displayOnCoociesTen () {
    if (purchaseOkButton === true) {
        document.getElementById('coocke50').style.display = 'none'
        document.getElementById('coocke100').style.display = 'none'
        document.getElementById('coocke1').style.display = 'none'
        document.getElementById('coocke5').style.display = 'none'

        document.getElementById('coocke10').style.display = 'block'
        document.getElementById('lock2').style.display = 'none'
    }
}

function displayOnCoociesFifty () {
    if (purchaseGoodButton === true) {
        document.getElementById('coocke100').style.display = 'none'
        document.getElementById('coocke1').style.display = 'none'
        document.getElementById('coocke5').style.display = 'none'
        document.getElementById('coocke10').style.display = 'none'

        document.getElementById('coocke50').style.display = 'block'
        document.getElementById('lock3').style.display = 'none'
    }
}

function displayOnCoociesHyndryate () {
    if (purchaseBestButton === true) {
        document.getElementById('coocke1').style.display = 'none'
        document.getElementById('coocke5').style.display = 'none'
        document.getElementById('coocke10').style.display = 'none'
        document.getElementById('coocke50').style.display = 'none'

        document.getElementById('coocke100').style.display = 'block'
        document.getElementById('lock4').style.display = 'none'
    }
}

function buttonLevelOne (goldNumber = document.getElementById('gold').textContent) {
        goldNumber = parseInt(goldNumber)
        goldNumTotring = goldNumber + 10 + '$'
        document.getElementById('gold').textContent = goldNumTotring.toString() ;
        goldNum = goldNum + 10
    }




function buttonLevelTwo (goldNumber = document.getElementById('gold').textContent) {
    goldNumber = parseInt(goldNumber)
    goldNumTotring = goldNumber + 5 + '$'
    document.getElementById('gold').textContent = goldNumTotring.toString();
    goldNum = goldNumber + 5


}

function buttonLevelTrhee (goldNumber = document.getElementById('gold').textContent) {
    goldNumber = parseInt(goldNumber)
    goldNumTotring = goldNumber + 10 + '$'
    document.getElementById('gold').textContent = goldNumTotring.toString();
    goldNum = goldNumber + 10

}

function buttonLevelFour (goldNumber = document.getElementById('gold').textContent) {
    goldNumber = parseInt(goldNumber)
    goldNumTotring = goldNumber + 50 + '$'
    document.getElementById('gold').textContent = goldNumTotring.toString();
    goldNum = goldNum + 50

}

function buttonLevelFive (goldNumber = document.getElementById('gold').textContent) {
    goldNumber = parseInt(goldNumber)
    goldNumTotring = goldNumber + 100 + '$'
    document.getElementById('gold').textContent = goldNumTotring.toString();
    goldNum = goldNum + 100

}