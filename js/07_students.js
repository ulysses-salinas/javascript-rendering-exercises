;(function () {
  // convert a student JavaScript object to an HTML string
  function buildStudentHTML (student) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(student)}</code>
        </div>
    `
  }

  // here we have five students, each represented by a JavaScript Object,
  // all collected into an Array.
  const studentsData = [
    {
      name: 'Kamilah',
      isPresent: true
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('studentsBtn')

  function clickStudentsBtn () {
    // using the buildStudentHTML function, create the HTML for the studentsData
    // Array and then put them into the <div id=content> element

    // TODO: your code goes here
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickStudentsBtn)
})()
