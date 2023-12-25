function open_card() {
  document.getElementById('front').className = 'open-card';
  document.getElementById('inside').className = '';
}

function close_card() {
  document.getElementById('front').className = '';
  document.getElementById('inside').className = 'close-card';
}

var button=document.getElementById("front");
button.addEventListener("click", open_card, false);

var button=document.getElementById("inside");
button.addEventListener("click", close_card, false);