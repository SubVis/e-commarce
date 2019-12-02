
// preview the image 
var file = [...document.querySelectorAll('[data-get]')],
  preview = [...document.querySelectorAll('[data-preview]')];

file.forEach(input => {
  input.onchange = () => {
    let me = preview.filter(image => image.getAttribute('data-preview') == input.getAttribute('data-get'));

    me[0].src = URL.createObjectURL(input.files[0])
  };
});
