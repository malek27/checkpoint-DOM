// documents
let plusBtn = document.getElementsByClassName("plusBtn");
let minusBtn = document.getElementsByClassName("minusBtn");
let qte = document.querySelectorAll(".qnt");

// documents event
for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    plusBtn[i].nextElementSibling.innerHTML++;
    sum();
  });
}

for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      minusBtn[i].previousElementSibling.innerHTML--;
      sum();
    }
  });
}

function sum() {
  let qte = document.querySelectorAll(".qnt");
  let price = document.querySelectorAll(".price");
  let totalPrice = 0;
  for (let i = 0; i < qte.length; i++) {
    totalPrice += qte[i].innerHTML * price[i].innerHTML.replace("$", "");
  }
  document.getElementById("totale").innerHTML = totalPrice;
}

let like = document.querySelectorAll(".like");

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    if (like[i].firstChild.style.color == "black") {
      like[i].firstChild.style.color = "red";
    } else {
      like[i].firstChild.style.color = "black";
    }
  });
}
let delet = document.querySelectorAll(".delete");
for (let i = 0; i < delet.length; i++) {
  delet[i].addEventListener("click", function () {
    delet[i].parentElement.parentElement.remove();
    sum();
  });
}
