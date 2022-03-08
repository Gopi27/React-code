import React, {useState, useEffect } from "react";
import data from "../slider-data.json";
import ImageOne from "../assets/1.jpg";
import ImageTwo from "../assets/2.jpg";
import ImageThree from "../assets/3.jpg";
import ImageFour from "../assets/4.jpg";
import ImageFive from "../assets/5.jpg";

import "./Carousel.scss";

const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  },[]);


function plusSlides(n) {
  setSlideIndex(slideIndex + n);
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  setSlideIndex(n);
  showSlides(n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { n = 1; 
    setSlideIndex(1);
  }
  if (n < 1) {n = slides.length;
    setSlideIndex(slides.length);
  }
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let j = 0; j < dots.length; j++) {
      dots[j].className = dots[j].className.replace(" active", "");
  }
  console.log(n);
  slides[n-1].style.display = "block";
  dots[n-1].className += " active";
}

const openPopup = () => {
  var modal = document.getElementById("modalPopup");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
    modalImg.src = ImageOne;
}

const closeModal = () => {
  var modal = document.getElementById("modalPopup");
  modal.style.display = "none";
}

  return (
    <div>
    <div className="slideshow-container">
  <div className="mySlides fade" onClick={openPopup}>
    <img src={ImageOne} style={{width:'100%'}} alt={data[0].alt} />
  </div>

  <div className="mySlides fade">
    <img src={ImageTwo} style={{width:'100%'}} alt={data[1].alt} />
  </div>

  <div className="mySlides fade">
    <img src={ImageThree} style={{width:'100%'}} alt={data[2].alt} />
  </div>

  <div className="mySlides fade">
    <img src={ImageFour} style={{width:'100%'}} alt={data[3].alt} />
  </div>
  <div className="mySlides fade">
    <img src={ImageFive} style={{width:'100%'}} alt={data[4].alt} />
  </div>

  <a className="prev" onClick={() =>plusSlides(-1)}>&#10094;</a>
  <a className="next" onClick={()=> plusSlides(1)}>&#10095;</a>
</div>
<br />

<div style={{textAlign:"center"}}>
  <span className="dot" onClick={() => currentSlide(1)}></span>
  <span className="dot" onClick={() => currentSlide(2)}></span>
  <span className="dot" onClick={() => currentSlide(3)}></span>
  <span className="dot" onClick={() => currentSlide(4)}></span>
  <span className="dot" onClick={() => currentSlide(5)}></span>
</div>
<div id="modalPopup" class="modal">
  <span class="close" onClick={closeModal}>&times;</span>
  <img class="modal-content" id="modalImage" alt={data[0].alt} />
</div>
</div>
  );
};

export default Carousel;
