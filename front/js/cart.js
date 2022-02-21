
const loadCart = () => {

    // retreive local storage array
   let products = JSON.parse(localStorage.getItem("cart"));
  
    products.forEach(product => {
      fetch(`http://localhost:3000/api/products/${product._id} `)
        .then(response => {
          response.json().then(p => {
            let cartItems = "";
            let cart = document.getElementById("cart__items");
            cartItems += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
              <div class="cart__item__img">
                <img src="${p.imageUrl}" alt="Photo of a sofa">
              </div>
              <div class="cart__item__content">
                <div class="cart__item__content__description">
                  <h2>${p.name}</h2>
                  <p>${product.color} </p>
                  <p> &euro; (${p.price})* ${product.quantity}</p>
                  <p> &euro;${product.price}</p>
                </div>
                <div class="cart__item__content__settings">
                  <div class="cart__item__content__settings__quantity">
                    <p>Q té:</p>
                    <input id='${p._id}-${product.color}' type="number" class="itemQuantity" onchange="updateCart('${p._id}','${product.color}')" name="itemQuantity" min="1" max="100" value="${product.quantity}">
                  </div>
                  <div class="cart__item__content__settings__delete">
                    <p class="deleteItem" onclick="myFunction('${p._id}','${product.color}')" >Delete</p>
                    
                  </div>
                </div>
              </div>
            </article>`;
            cart.innerHTML += cartItems;
  
          })
        });
    });
  };
  
  loadCart();
  
  
  const calculateTotal = () => {
    let products = JSON.parse(localStorage.getItem("cart"));
    // total number of articles
    let cart_quantity = 0;
    for (let i = 0; i < products.length; i++) {
      // console.log(cart_quantity);
      cart_quantity += parseInt(products[i].quantity);
    };
    let totalArticles = document.getElementById("totalQuantity");
    totalArticles.innerHTML = cart_quantity;
  
    // total price
    let cart_price = 0;
    for (let i = 0; i < products.length; i++) {
      // console.log(cart_quantity);
      cart_price += parseInt(products[i].price);
    };
    let totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = cart_price;
  }
  calculateTotal();
  
  const myFunction = (id, color) => {
  
    // retreive local storage array
    let products = JSON.parse(localStorage.getItem("cart"));
    // target id && color of item to be deleted
    let index = products.findIndex(entry => entry._id === id && entry.color===color);
    // remove item from array
    products.splice(index, 1);
  
    if (index != -1) {
      // store new array back to local storage
      localStorage.setItem('cart', JSON.stringify(products));
    }
    document.getElementById("cart__items").innerHTML = "";
    // reload element
    loadCart();
    calculateTotal();
  }
  
  const updateCart = (id, color) => {
    let quantity = parseInt(document.getElementById(`${id}-${color}`).value);
    // retrieve the products array
    let products = JSON.parse(localStorage.getItem("cart"));
    // find the index of the product
    let index = products.findIndex(entry => entry._id == id && entry.color==color);
    // update the quantity
    products[index].quantity = quantity;
    products[index].price = parseInt(products[index].uPrice)*quantity;
    // update local storage
    localStorage.setItem('cart', JSON.stringify(products));
    // clear the cart display
    document.getElementById("cart__items").innerHTML = "";
    // reload the cart and total
    loadCart();
    calculateTotal();
    
  };
  
  
  const validateData = () => {
  
  
      /* CONTACT INPUTS */
  let firstName = document.getElementById("firstName").value;
  let name = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  
      //Ensure all field are provided
  
      if(firstName =="" || name =="" || address =="" || city=="" ||  email ==""){
  
          return "EMPTY";
      }else{
  
          //verify the lenght 
          if(firstName.length <3 || name.length <3 || address <3 || city < 3 || email.length <3 ){
            return "LENGHT";
          }
          //verify email
          const re = /\S+@\S+\.\S+/g;
  
          if(!re.test(email)){
  
            return "EMAIL"
          }else{
            return "OK";
          }
          
  
    
      }
  
  }
  
  
  //Function that post the order 
  
  const postOrder = () =>{
  
    /* CONTACT INPUTS */
  let firstName = document.getElementById("firstName").value;
  let name = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  
    contact ={firstName:firstName,lastName:name,address:address,city:city,email:email};
  
  
    console.log(contact);
    //validate input
    switch(validateData()){
  
      case "EMPTY":
  
        alert("please kindly provide all field!");
  
      break;
  
      case "LENGHT":
  
        alert("please kindly ensure the lenght of your input is beyond 2 characters");
  
      break;
  
      case "EMAIL":
  
        alert("invalid email address");
  
      break;
  
      default:
  
  
      //POST 
  
      alert('ready to post');
  
      break;
  
    }
  
  
  
  }
  
  let orderBtn = document.getElementById("order");
  
  orderBtn.addEventListener("click", (e)=>{
  
     postOrder();
  
     console.log("post");
  })
  