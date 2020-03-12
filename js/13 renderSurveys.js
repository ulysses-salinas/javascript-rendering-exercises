;(function () {
  // convert a survey JavaScript object to an HTML string
  function buildSurveyHTML (survey) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(survey)}</code>
        </div>
    `
  }

  // here we have four surveys, each represented by a JavaScript Object,
  // all collected into an Array.
  const surveysData = [
    {
      title: 'Movie Goer Survey',
      fields: [
        {
          label: 'Have you gone to the movies in the last month?',
          type: 'radio',
          options: [
            'yes',
            'no'
          ]
        },
        {
          label: 'On a scale of 1 to 5, Did you enjoy your last theater experience?',
          type: 'radio',
          options: [
            1,
            2,
            3,
            4,
            5
          ]
        }
      ],
      submitButtonText: 'Submit Survey'
    },
    {
      title: 'DigitalCrafts Survey',
      fields: [
        {
          label: 'Are you currently enrolled in a DigitalCrafts class?',
          type: 'radio',
          options: [
            'yes',
            'no'
          ]
        },
        {
          label: "In 3000 words or more, explain what's so great about Adam?",
          type: 'text'
        }
      ],
      submitButtonText: "I'm Done"
    }
  ]

  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('surveysBtn')

  function clickSurveysBtn () {
    // using the buildSurveyHTML function, create the HTML for the surveysData
    // Array and then put them into the <div id=content> element

    // TODO: your code goes here
  }

  // attach an event handler for button click
  btnEl.addEventListener('click', clickSurveysBtn)
})()
