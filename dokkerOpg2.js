// de fleste DOMelementer er gjort globale av bekvemmelighetshensyn
//  --------------------------------------------------------------
const specialContainerElm = document.getElementById("specialcontainer-elm")
const clickmeBtn = document.getElementById("clickme-btn")
const errorTestBtn = document.getElementById("errorTest-btn")
const errorMsg = document.getElementById("errMsg")
const content01Msg = document.getElementById("content01-msg")
const mini01Msg = document.getElementById("mini01-msg")
const seasonInput = document.getElementById("season-inp")
const shoecolorElm = document.getElementById("shoecolor-elm")

const iDebugFlag = parseInt(document.getElementById("debug-flg").textContent)

// konstanter knyttet til oppgaveløsing er gjort globale
const conversionTable = [
  ["length-id", " meters ", " feet ", 3.2809, 0.3048],
  ["volume-id", " litres ", " gallons ", 0.22, 4.5459],
  ["mass-id"  , " kilograms ", " pounds ", 2.2046, 0.45359237],
];

const iRoundFactor = 100 // Faktor for avrunding til 2 desimaler
const iValueConversionBase = 2 // hardkodet tall til konvertering

const dividend = 40
const divisor = 6
const kvotient = Math.round((dividend / divisor) * iRoundFactor) / iRoundFactor;
const intKvotient = Math.floor(dividend/divisor)
const remainder = dividend % divisor 

// Programdel - her påkalles eventuell magi
//  --------------------------------------------------------------
mini01Msg.innerHTML=`<strong>Note:</strong> ...and no! Vivaldi would not choose shoe color based on season.`

errorMsg.innerHTML = `ERROR for Christ's sake!!!!  <span class="subText">
  pretty stupid reference for an atheist, but nevertheless..</span><br><br> Not if (but when) shit happens, the error message will display itself here. This line is extended to see what happens when line breaks have to be used. This dodgy text is found in the bible of the Nonsensical, a guide to the outer space of mental activities.`

// ...and some controlled rubbish(ish)
content01Msg.innerHTML = `<br><br>
Dividend: ${dividend} <br>
Divisor: ${divisor}<br>
<br>
Kvotient: ${kvotient}<br>
Heltallskvotient: ${intKvotient}<br>
Rest: ${remainder}<br>`

iterateArray()

//  --------------------------------------------------------------



// Eventlisteners finner man her
//  --------------------------------------------------------------
errorTestBtn.addEventListener("click", function() {
  toggleVisibility(errorMsg, false,'inline')
})

clickmeBtn.addEventListener("click", function() {
  toggleVisibility(shoecolorElm, false,'inline')
})

seasonInput.addEventListener("focus", function() {
  seasonInput.value=""
})

seasonInput.addEventListener("change", function() {
  const colorVar = decideShoeColor(seasonInput.value)
  printLog("chosen season", seasonInput.value)
  printLog("color deducted",colorVar)
  seasonInput.blur()
  shoecolorElm.innerHTML = `<style type="text/css">.fuckingshoes {color: ${colorVar};}</style> Shoe color for ${seasonInput.value} is reflected in this text.`  
})
//  --------------------------------------------------------------

// Varierende funksjoner er definert nedenfor
//  --------------------------------------------------------------


function decideShoeColor(season) {
  switch(season){
    case "Winter":
      return "var(--crispyWhite)"
      // the ubiquitous break will never be reached hence it i dropped
      case "Spring":
        return "var(--springGreen)"
      case "Summer":
        return "var(--goldenSummer)"
      case "Fall":
        return "var(--brownish)"
      default:
        return "var(--theDarkside)"
  }
}

// This function uses the ternary operator
function toggleVisibility(sDOMelement, bForceClose, attributeValue) {
    let displaySetting = sDOMelement.style.display // get current display setting for given element
    // Ternary expression
    displaySetting = (bForceClose) ? attributeValue : displaySetting
    
    // now handle the navigation element depending on current state
    if (displaySetting != attributeValue) {
      // Navigation frame is hidden. show it
      sDOMelement.style.display = attributeValue
    } else {
        // Navigation frame is visible. hide it
        sDOMelement.style.display = "none"
    }
}


function iterateArray() {
    // loop the outer array
    for (let i = 0; i < conversionTable.length; i++) {
      // create the DOMelements dynamically
      var outerElement = document.getElementById(conversionTable[i][0])
      
      // fill in the actual data
      outerElement.innerHTML = `
        ${iValueConversionBase} ${conversionTable[i][1]} = ${convertValue(iValueConversionBase, conversionTable[i][3])} ${conversionTable[i][2]} | ${iValueConversionBase} ${conversionTable[i][2]} = ${convertValue(iValueConversionBase, conversionTable[i][4])} ${conversionTable[i][1]}`
      }
}

function convertValue(baseValue, conversionFactor) {
  return Math.round(baseValue * conversionFactor * iRoundFactor) / iRoundFactor
}

function printLog(leadText, valueOfInterest) {
  if (iDebugFlag) {
    console.log(leadText + ":  ", valueOfInterest)
  }
}
