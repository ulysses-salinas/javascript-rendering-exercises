;(function () {
  // convert a restaurant JavaScript object to an HTML string
  function buildRestaurantHTML (restaurant) {
 for (let i = 0; i < restaurantsData.length; i++){
   if (restaurantsData[i].priceRating === 5){
     restaurantsData[i].priceRating = "$$$$$"
   }
   else if (restaurantsData[i].priceRating === 4){
     restaurantsData[i].priceRating = "$$$$"
   }
    else if (restaurantsData[i].priceRating === 3){
     restaurantsData[i].priceRating = "$$$"
   }
    else if (restaurantsData[i].priceRating === 2){
     restaurantsData[i].priceRating = "$$"
   }
    else if (restaurantsData[i].priceRating === 1){
     restaurantsData[i].priceRating = "$"
   }
 }
    return `
          <div class="move">
        <div class="d-flex flex-column align-items-left thumb">
            <div class="place">${restaurant.name}</div>
        
            <div class="type">${restaurant.type}</div>
       
            <div class="money">${restaurant.priceRating}</div>
       
        </div>
        </div>
    `
  }


  const restaurantsData = [
    {
      name: "McDonald's",
      type: 'Fast Food',
      priceRating: 1
    },
    {
      name: 'Gunshow',
      type: 'Date Night Dining',
      priceRating: 5
    },
    {
      name: 'Iron Age',
      type: 'Korean BBQ',
      priceRating: 4
    }
  ]
let contentElement = document.getElementById('content')
let restaurantsBtn = document.getElementById('restaurantsBtn')

function clickRestaurantsBtn () {

 contentElement.innerHTML = `
      
      
      <div class="d-flex flex-column align-items-center ">
      <div class="d-flex flex-row align-items-center review ">
      ${restaurantsData.map(buildRestaurantHTML).join(' ')}
      </div>
      </div>
      `
      
}

 
restaurantsBtn.addEventListener('click', clickRestaurantsBtn)

 
  



})()