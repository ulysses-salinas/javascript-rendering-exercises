;(function () {

  function buildNametagHTML (nametag) {
    
    
   for (i = 0; i < nametagsData.length; i++){
  }
  return `
        <div class="d-flex flex-column align-items-center greeting">
          Hello, my name is: 
         </div>
        <div class="nametag d-flex flex-column align-items-center " >
            ${nametag.valueOf(nametagsData)}
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

  let contentElement = document.getElementById('content')
  let nametagsBtn = document.getElementById('nametagsBtn')
 
 function clickNametagsBtn () {

contentElement.innerHTML = `

      <div class="d-flex flex-column align-items-center ">
     ${nametagsData.map(buildNametagHTML).join('')}
</div>


`
}
 

nametagsBtn.addEventListener('click', clickNametagsBtn)
 

})()