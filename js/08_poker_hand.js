;(function () {
 
  function buildPokerHandHTML (pokerHand) {
    for (i = 0; i < pokerHandData.length; i++){
  }
    return `
        <div class="text-center mt-5 cards">
            <img src="images/cards/${pokerHand.value}${pokerHand.suit}.png">
        </div>
    `
  }

 
  const pokerHandData = [
    {
      value: 'K',
      suit: 'C'
    },
    {
      value: 'K',
      suit: 'D'
    },
    {
      value: '9',
      suit: 'S'
    },
    {
      value: '2',
      suit: 'H'
    },
    {
      value: '9',
      suit: 'H'
    }
  ]
 let contentElement = document.getElementById('content')
 let pokerHandsBtn = document.getElementById('pokerHandsBtn')

 function clickPokerHandsBtn () {

 contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center ">
      
      <div class="d-flex flex-row align-items-center hand">
      ${pokerHandData.map(buildPokerHandHTML).join(' ')}
      </div>
      </div>
      `
      
}

 
pokerHandsBtn.addEventListener('click', clickPokerHandsBtn)

 
  

})()