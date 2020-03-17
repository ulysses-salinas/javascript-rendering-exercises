;(function () {

  function buildStudentHTML (student) {
   
    
    
     
    for (i = 0; i < studentsData.length; i++){
      if (studentsData[i].isPresent === true)
      {
       
      studentsData[i].isPresent = "Present";
      
      
     }
      if (studentsData[i].isPresent === false){
     studentsData[i].isPresent = "Absent";
     
     
    }

    }
    
 
    return `
            <div class =" d-flex flex-column align-items-center boxes
             ${student.isPresent === "Present" ? 'trues' : ''}
             ${student.isPresent === "Absent" ? 'falses' : ''} ">
              <div  class="study" >
              ${student.name} 
              </div>
              <div  class="status" >
              ${student.isPresent}
             
              </div>
              </div>
              
          `
        
  }


  let studentsData = [
    {
      name: 'Kamilah',
      isPresent: true,
      
    },
    {
      name: 'Kim',
      isPresent: true,
      
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
  

let contentElement = document.getElementById('content')
let btnEl = document.getElementById('studentsBtn')

function clickStudentsBtn () {
 
  contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center attendance ">
      ROLL CALL!
      </div>
      <div class="d-flex flex-column align-items-center attendance ">
      ${studentsData.map(buildStudentHTML).join('')}
      </div>
      `
      
}

 
btnEl.addEventListener('click', clickStudentsBtn)





})()