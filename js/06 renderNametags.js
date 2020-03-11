;(function () {
  // convert a nametag JavaScript object to an HTML string
  function buildNametagHTML (nametag) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(nametag)}</code>
        </div>
    `
  }

  // here we have five nametags, each represented by a JavaScript String,
  // all collected into an Array.
  const nametagsData = [
    'Kamilah',
    'Kim',
    'Stuart',
    'Ron',
    'Krissy'
  ]

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('nametagsBtn')

  function clickNametagsBtn () {
    // using the buildNametagHTML function, create the HTML for the nametagsData
    // Array and then put them into the <div id=content> element

    // TODO: your code goes here
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickNametagsBtn)
})()
