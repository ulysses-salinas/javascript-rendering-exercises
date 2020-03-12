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

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

})()
