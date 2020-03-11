;(function () {
  // convert a circle JavaScript object to an HTML string
  function buildCircleHTML (circle) {
    return `
      <div style="
        width: ${circle.radius*2}px;
        height: ${circle.radius*2}px;
        background-color: ${circle.color};
        border-radius: 50%;
        ">
      </div>
    `
  }

  // here we have four circles, each represented by a JavaScript Object,
  // all collected into an Array.
  const circlesData = [
      {
          radius: 50,
          color: "#FF00FF"
      },
      {
          radius: 30,
          color: "#FF99AA"
      },
      {
          radius: 60,
          color: "#0000FF"
      },
      {
          radius: 10,
          color: "#000000"
      },
  ]

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('circlesBtn')

  function clickCirclesBtn () {
    // using the buildCircleHTML function, create the HTML for the circlesData
    // Array and then put them into the <div id=content> element

    contentElement.innerHTML = circlesData.map(buildCircleHTML).join('')
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickCirclesBtn)
})()
