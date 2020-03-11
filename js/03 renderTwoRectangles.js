;(function () {
  // convert a rectangle JavaScript object to an HTML string
  function buildRectangleHTML (rectangle) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(rectangle)}</code>
        </div>
    `
  }

  // here we have two rectangles, each represented by a JavaScript Object
  const orangeRectangle = {
    width: 100,
    height: 200,
    color: '#ffa500'
  }

  const blueRectangle = {
    width: 200,
    height: 100,
    color: '#4731d9'
  }

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('twoRectanglesBtn')

  function clickRectanglesBtn () {
    // using the buildRectangleHTML function, create the HTML for the orangeRectangle and blueRectangle
    // and then put them into the <div id=content> element

    // TODO: your code goes here
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickRectanglesBtn)
})()
