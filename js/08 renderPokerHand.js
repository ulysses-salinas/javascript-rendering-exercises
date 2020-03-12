;(function () {
  // convert a pokerhand JavaScript object to an HTML string
  function buildPokerHandHTML (pokerHand) {
    // TODO: Your code goes here.
    // HINT: utilize the (conveniently named) images in the ./images/cards/
    //       directory to render each card in the hand.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(pokerHand)}</code>
        </div>
    `
  }

  // here we have a pokerHand, represented by a JavaScript Array,
  // each card represented by an Object.
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

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('pokerHandsBtn')

  function clickPokerHandsBtn () {
    // using the buildPokerHandHTML function, create the HTML for the pokerHandData
    // Array and then put them into the <div id=content> element

    // TODO: your code goes here
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickPokerHandsBtn)
})()
