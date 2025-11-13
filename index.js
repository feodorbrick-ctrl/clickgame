let goldNum = 0
let goldNumTotring = null
let purchaseBadButton = false
let purchaseOkButton = false
let purchaseGoodButton = false
let purchaseBestButton  = false

let lokalcost = {
    purchaseBadButtonSafe: false,
    purchaseOkButtonSafe: false,
    purchaseGoodButtonSafe: false,
    purchaseBestButtonSafe: false,
    moneyNumBerSafe: '0'
}
let userJSON = JSON.stringify(lokalcost,null,2)

async function safe () {
    localStorage.setItem('goldSave', document.getElementById('gold').textContent)
    localStorage.setItem('SafeBadButton', purchaseBadButton)
    localStorage.setItem('SafeOkButton', purchaseOkButton)
    localStorage.setItem('SafeGoodButton',purchaseGoodButton)
    localStorage.setItem('SafeBestButton', purchaseBestButton)
}

function UnSafe() {
    document.getElementById('gold').textContent = localStorage.getItem('goldSave')
    lokalcost.purchaseBadButtonSafe = localStorage.getItem('SafeBadButton')
    lokalcost.purchaseOkButtonSafe = localStorage.getItem('SafeOkButton')
    lokalcost.purchaseGoodButtonSafe = localStorage.getItem('SafeGoodButton')
    lokalcost.purchaseBestButtonSafe = localStorage.getItem('SafeBestButton')
    // JSON.parse(localStorage.getItem('Safe'))

    lokalcost = userJSON
    // purchaseBadButton = userJSON.purchaseBadButtonSafe
    // purchaseOkButton = userJSON.purchaseOkButtonSafe
    // purchaseGoodButton = userJSON.purchaseGoodButtonSafe
    // purchaseBestButton = userJSON.purchaseBestButtonSafe

    if (lokalcost.purchaseBadButtonSafe) {
        displayOnCoociesFive()
    }
    if (lokalcost.purchaseOkButtonSafe) {
        displayOnCoociesTen()
    }
    if (lokalcost.purchaseGoodButtonSafe) {
        displayOnCoociesFifty()
    }
    if (lokalcost.purchaseBestButtonSafe) {
        displayOnCoociesHyndryate()
    }
    console.log(lokalcost.purchaseBadButtonSafe, lokalcost.purchaseOkButtonSafe, lokalcost.purchaseGoodButtonSafe, lokalcost.purchaseBestButtonSafe)
}

function purchaseBadClicer () {
    console.log(goldNum)
    if (goldNum >= 50) {
        purchaseBadButton = true
        goldNum = goldNum - 50
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton').style.display = 'none'
        document.getElementById('lockBtn').style.display = 'none'
        lokalcost.purchaseBadButtonSafe = true
    }
}

function purchaseOkClicer () {
    if (goldNum >= 500) {
        purchaseOkButton = true
        goldNum = goldNum - 500
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton2').style.display = 'none'
        document.getElementById('lockBtn2').style.display = 'none'
        lokalcost.purchaseOkButtonSafe = true
    }
}

function purchaseGoodClicer () {
    if (goldNum >= 2000) {
        goldNum = goldNum - 2000
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        purchaseGoodButton = true
        document.getElementById('BlokingOfLevelButton3').style.display = 'none'
        document.getElementById('lockBtn3').style.display = 'none'
        lokalcost.purchaseGoodButtonSafe = true
    }
}

function purchaseBestClicer () {
    if (goldNum >= 10000) {
        purchaseBestButton = true
        goldNum = goldNum - 10000
        document.getElementById('gold').textContent = goldNum.toString() + '$'
        document.getElementById('BlokingOfLevelButton4').style.display = 'none'
        document.getElementById('lockBtn4').style.display = 'none'
        lokalcost.purchaseBestButtonSafe = true
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