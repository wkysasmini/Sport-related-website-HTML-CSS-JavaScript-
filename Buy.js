let p1price;
let p2price;
let p3price;
let p4price;
let p5price;
let p6price;
const price = [];
const quantity = [];
const product = [];
const msg = [];

function order1() {
  p1price = document.getElementById("product1").value * 1500;
  window.alert(
    document.getElementById("product1").value +
      " Cricket Bat is added to your cart. Rs" +
      p1price
  );
  quantity.push(document.getElementById("product1").value);
  product.push("Cricket Bat");
  price.push(p1price);
}

function order2() {
  p2price = document.getElementById("product2").value * 1500;
  window.alert(
    document.getElementById("product2").value +
      " Rugby Ball is added to your cart. Rs" +
      p2price
  );
  quantity.push(document.getElementById("product2").value);
  product.push("Rugby Ball");
  price.push(p2price);
}

function order3() {
  p3price = document.getElementById("product3").value * 3500;
  window.alert(
    document.getElementById("product3").value +
      " Tennis Ball added to your cart. Rs" +
      p3price
  );
  quantity.push(document.getElementById("product3").value);
  product.push("Tennis Ball");
  price.push(p3price);
}

function order4() {
  p4price = document.getElementById("product4").value * 500;
  window.alert(
    document.getElementById("product4").value +
      " Basket Ball is added to your cart. Rs" +
      p4price
  );
  quantity.push(document.getElementById("product4").value);
  product.push("Basket Ball");
  price.push(p4price);
}

function order5() {
  p5price = document.getElementById("product5").value * 800;
  window.alert(
    document.getElementById("product5").value +
      " Hockey Stick is added to your cart. Rs" +
      p5price
  );
  quantity.push(document.getElementById("product5").value);
  product.push("Hockey Stick");
  price.push(p5price);
}

function order6() {
  p6price = document.getElementById("product6").value * 2500;
  window.alert(
    document.getElementById("product6").value +
      " Foot Ball is added to your cart. Rs" +
      p6price
  );
  quantity.push(document.getElementById("product6").value);
  product.push("Foot Ball");
  price.push(p6price);
}

function validate() {
  if (product.length === 0) {
    alert("Please add products to the Cart");
    return false;
  }

  const x = document.forms["form1"]["fullname"].value;
  const y = document.forms["form1"]["number"].value;
  const z = document.forms["form1"]["address"].value;
  const a = document.forms["form1"]["email"].value;

  if (x === "") {
    alert("Please enter your Name");
    return false;
  }
  if (y === "") {
    alert("Please enter your Phone Number");
    return false;
  }
  if (z === "") {
    alert("Please enter your Address");
    return false;
  }
  if (a === "") {
    alert("Please enter your Email");
    return false;
  }

  let total = 0;
  for (let i = 0; i < product.length; i++) {
    const x = quantity[i] + " x " + product[i] + " = Rs. " + price[i];
    msg.push(x);
    total += price[i];
  }
  window.alert(
    "Name : " +
      document.getElementById("name").value +
      "\nEmail : " +
      document.getElementById("email").value +
      "\n" +
      "\nYour order summary : \n" +
      msg.join("\n") +
      "\nYour total is Rs." +
      total.toString() +
      "\n" +
      "\nYour products will be delivered within 18 days.\nThank you for shopping with us."
  );
}
