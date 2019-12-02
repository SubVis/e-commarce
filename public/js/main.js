window.onload = function () {
  // Animate();    
  // ScrollOut();
}

let nav = document.getElementById('collapse'),
    btn = document.getElementById('closeNavbtn');

btn.onclick = function () {
  if(nav.style.display == 'none')
    nav.style.display = "block"
  else
    nav.style.display = "none"
}

let Select = [...document.querySelectorAll('.js-choice')];

Select.forEach(inpt => {
  new Choices(inpt, {
    searchEnabled: true,
    searchChoices: true,
    noResultsText: 'لا توجد نتيجة',
    noChoicesText: 'لا يوجد',
    itemSelectText: 'اضغط لتختار',
    renderChoiceLimit: 1000,
  });
});

var file = [...document.querySelectorAll('[data-get]')],
  preview = [...document.querySelectorAll('[data-preview]')];

file.forEach(input => {
  input.onchange = () => {
    let me = preview.filter(image => image.getAttribute('data-preview') == input.getAttribute('data-get'));

    me[0].src = URL.createObjectURL(input.files[0])
  };
});

var productOverlay = document.querySelector('#sellerNumber .overlay');
var productOwner = document.querySelector('#sellerNumber .number');

productOverlay.addEventListener('click', () => {
  productOverlay.style.display = 'none';
  productOwner.style.display = 'block' 
});