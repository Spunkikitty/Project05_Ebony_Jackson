Promise.resolve()
  .then(() => setTimeout(() => callback(null, 'data'), 0))
  .catch((err) => setTimeout(() => callback(err.message, null), 0))

  function myValidation() {
    let confirmation;
    if (confirm("Thank you for your purchase!")) {
      confirmNumber = "Your confirmation number is";
    } else {
      txt = "Your order did not go through !";
    }
    document.getElementById("orderId").innerHTML = txt;
  }