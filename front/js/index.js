//  1- use fetch communicate with API to retireve 
fetch( 'http://localhost:3000/api/products/')
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

          let productsDiv = document.getElementById('items');

          let products = '';

        data.forEach(product => {
          products += `
          
          <a href="./product.html?id=${product._id}">
            <article>
               <img src="${product.imageUrl}" alt="${product.name}"> 
              <h3 class="productName">${product.name} </h3>
              <p class="productDescription">${product.description}</p>
            </article>
          </a> 
          `;

        } )
        productsDiv.innerHTML = products;
      });
      
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  
  // const { foo, bar }  = await iAmAPromise.then(result => result.data);

  //  3- use for each function to look through data
  
  


// 4- modify the html DOM 

