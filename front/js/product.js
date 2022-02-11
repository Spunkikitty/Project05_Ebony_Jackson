// Retrieve the product id
let url = window.location.href;
urlObj = new URL(url);
let id = urlObj.searchParams.get('id');

console.log(id);

//retrieve the single product from the api
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
        //modify the DOM
        let productImg = document.getElementsByClassName('item__img')[0];

        productImg.innerHTML = `<img src="${data.imageUrl}"/>`;

        let title = document.getElementById('title');
        title.innerHTML = data.name;


        let colors = document.getElementById('colors');

        let options ='';
        data.colors.forEach(color => {
            options +=` <option value="${color}">${color}</option>`;
        });
    
        colors.innerHTML += options;

        let prices = document.getElementById('price');
         prices.innerHTML = data.price;

        let description = document.getElementById('description');
         description.innerHTML = data.description;

        });

 }
  )  
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


//  if (sessionStorage.clickcount) {
  //  sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
  //} else {
    //sessionStorage.clickcount = 1;
  //}
  //document.getElementById("result").innerHTML = "You have clicked the button " +
  //sessionStorage.clickcount + " time(s) in this session.";



  document.getElementById("addToCart").addEventListener("click", () => {
  
    alert("adding product");
  });

  // cart can be made as an array  containing 3 things product Id, quanity of product, 
  //  -color of the product 

  //check if there is no existing value 

  let cart = localStorage.getItem('cart');
  color = document.getElementById('colors').value; 
  let quantity = document.getElementById("quantity").value

  if(color == ""){
     alert("please select a color")
  }else{
    let products = [];
    if(cart==null){
  
      products.push({_id:id, quantity:parseInt(quantity), color:'blue'})
      localStorage.setItem('cart',JSON.stringify(products));
    }
    
    else{
      //item is already existing in the cart
      cart = JSON.parse(localStorage.getItem('cart'));   
      //Y- retrieve array and specific item then, check color then 
      let index = cart.findIndex(object => object._id == id && object.color == color); 
  
      if(index != -1){
        //product is in the cart 
        //check if color is the same
        cart[index].quantity += parseInt(quantity); 
        }else{
        //check if color is the same
        //check if color is the same
        cart.push({_id:id,quantity: parseInt(quantity), color:color})
      };
  
      //product not in cart 
     //else{
       //cart.push({_id:id,quantity:1, color:color})
     }

    
//add item to the array
localStorage.setItem('cart',JSON.stringify(cart));

    alert('cart existing');
  }

  //then store


