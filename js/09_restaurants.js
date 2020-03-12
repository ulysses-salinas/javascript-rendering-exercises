;(function () {
  // convert a restaurant JavaScript object to an HTML string
  function buildRestaurantHTML (restaurant) {
    // TODO: Your code goes here.
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(restaurant)}</code>
        </div>
    `
  }

  // here we have four restaurants, each represented by a JavaScript Object,
  // all collected into an Array.
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

  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.

})()
