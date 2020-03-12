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

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

})()
