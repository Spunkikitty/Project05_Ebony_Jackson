const uuid = require('uuid/v1');
const Product = require('../models/Product');

let url = window.location.href;
urlObj = new URL(url);
let id = urlObj.searchParams.get('id');

console.log(id);


fetch( 'http://localhost:3000/api/products/'+id)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);

          let productImg = document.getElementsByClassName('item_img')[0];

          productImg.innerHTML = `<img src="${data.imageUrl}" /`

          let title = document.getElementsByClassName('title');
          title.innerHTML = data.name;
          

          let colors = document.getElementById('colors');
          data.colors.forEach(color =>
            options +=`<option value"${color}"> Please, select a color --</option>`)

        
            let prices = document.getElementsByClassName('item__content__titlePrice')[0];
            title.innerHTML = data.price;

            let description = document.getElementsByClassName('item__content__description');
            title.innerHTML = data.description;

            
      });

      colors.innerHtml += options;


      
      
      productsDiv.innerHTML = products;
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
