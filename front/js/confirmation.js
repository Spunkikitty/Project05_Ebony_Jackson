const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const orderId = urlParams.get('orderId');
  let orderSpan = document.getElementById('orderId');
      orderSpan.innerHTML = orderId;



      //clear the cart local storage
      localStorage.clear();