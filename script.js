let currentCategory = "all";

// SCROLL
function scrollToProducts() {
  document.getElementById("products").scrollIntoView();
}

// CATEGORY FILTER
function filterProducts(category, element) {

  currentCategory = category;

  // active category button
  let buttons = document.querySelectorAll(".category-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  element.classList.add("active");

  // reset subcategory active
  let subBtns = document.querySelectorAll(".sub-btn");
  subBtns.forEach(btn => btn.classList.remove("active"));

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let categories = card.dataset.category.split(" ");

    if (category === "all" || categories.includes(category)) {
      card.style.display = "";   // ✅ grid safe
    } else {
      card.style.display = "none";
    }
  });

  // SUBCATEGORY SHOW/HIDE
  let subSection = document.getElementById("subcategories");
  let subs = document.querySelectorAll(".sub");

  if (category === "women") {
    subSection.style.display = "block";

    subs.forEach(item => item.style.display = "none");

    document.querySelectorAll(".sub.women").forEach(item => {
      item.style.display = "inline-block";
    });

  } else if (category === "men") {
    subSection.style.display = "block";

    subs.forEach(item => item.style.display = "none");

    document.querySelectorAll(".sub.men").forEach(item => {
      item.style.display = "inline-block";
    });

  } else {
    subSection.style.display = "none";
  }
}

// SUBCATEGORY FILTER
function filterSub(type, element) {

  // active sub button
  let subs = document.querySelectorAll(".sub-btn");
  subs.forEach(btn => btn.classList.remove("active"));

  element.classList.add("active");

  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let categories = card.dataset.category.split(" ");

    if (
      categories.includes(currentCategory) &&
      categories.includes(type)
    ) {
      card.style.display = "";   // ✅ grid safe
    } else {
      card.style.display = "none";
    }
  });
}

// FEEDBACK
function submitFeedback(e) {
  e.preventDefault();
  alert("Thank you for your feedback! 💖");
  document.querySelector(".feedback-form").reset();
}

// PRODUCT POPUP
function openProductDetails(name, price, description, material, sizes, image) {
  document.getElementById("productPopup").style.display = "flex";

  document.getElementById("popupName").innerText = name;
  document.getElementById("popupPrice").innerText = price;
  document.getElementById("popupDesc").innerText = description;

  document.getElementById("popupMaterial").innerHTML =
    "<b>Material:</b> " + material;

  document.getElementById("popupSizes").innerHTML =
    "<b>Sizes:</b> " + sizes;

  document.getElementById("popupImg").src = image;
}

function closeProduct() {
  document.getElementById("productPopup").style.display = "none";
}

// close popup when clicking outside
window.onclick = function(event) {
  let popup = document.getElementById("productPopup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

// WHATSAPP ORDER
function orderNow() {
  let product = document.getElementById("popupName").innerText;
  let price = document.getElementById("popupPrice").innerText;

  let baseURL = "https://your-website-name.vercel.app/"; // change after deploy

  let imgPath = document.getElementById("popupImg").getAttribute("src");
  let img = baseURL + imgPath;

  let message = `Hello, I want to order:

Product: ${product}
Price: ${price}

Image:
${img}

Please share more details.`;

  let phoneNumber = "918459403873";

  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}