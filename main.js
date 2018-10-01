var input = document.getElementById('input');
document.getElementById('dollarSign').style.visibility = 'hidden';
document.getElementById('dollarSign1').style.visibility = 'hidden';
document.getElementById('dollarSign2').style.visibility = 'hidden';


input.addEventListener('input', showCart)
function showCart(){
    // console.log('works');
    document.getElementById('dollarSign').style.visibility = 'visible';
    document.getElementById('dollarSign1').style.visibility = 'visible';
    document.getElementById('dollarSign2').style.visibility = 'visible';


    
    var input = parseInt(document.getElementById('input').value);
    var totalValue = document.getElementById('totalValue');
    var price = parseInt(document.getElementById('priceUsd').innerHTML);

    var totalAmt = document.getElementById('totalAmt');
    var payable = document.getElementById('lastPrice');

    var gst = parseInt(document.getElementById('gst').innerHTML);
    var shipping = parseInt(document.getElementById('shipping').innerHTML);

    


    var total = price * input;
    totalValue.innerHTML = total;

    totalAmt.innerHTML = total;
    

    payable.innerHTML = total+shipping+(gst*input);

}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}