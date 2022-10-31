import React , { useEffect } from 'react';
import "./Slideshow.css";
import one from "../../assets/images/banner/1.jpg";
import two from "../../assets/images/banner/5.jpeg";
import three from "../../assets/images/banner/6.jpg";

const Slideshow = () => {
    useEffect(() => {
        let slides = document.querySelectorAll(".slide");
        let navBtns = document.querySelectorAll(".img-round-btn");
        let currentSlide = 1;

        const manualImgNav = function(manual){
            slides.forEach((slide)=>{
                slide.classList.remove("img-active");
            });

            navBtns.forEach((btns)=>{
                btns.classList.remove("navbtn-active");
            });

            slides[manual].classList.add("img-active");
            navBtns[manual].classList.add("navbtn-active");
        }
        // calling function for manual navigation
        navBtns.forEach((btn,i) => {
            btn.addEventListener("click", () => {
                manualImgNav(i);
                currentSlide = i;
            });
        })
    });

  return (
    <>
        <div className="slideshow-container">
            <div className="slide-container">
                <span className='slide' >
                    <img src={one} alt="" />
                </span>
                <span className='slide img-active'>
                    <img src={two} alt="" />
                </span>
                <span className='slide'>
                    <img src={three} alt="" />
                </span>
            </div>
            <div className="img-navigation">
                <div className="img-round-btn"></div>
                <div className="img-round-btn navbtn-active"></div>
                <div className="img-round-btn"></div>
            </div>
        </div>
    </>
  )
};

export default Slideshow;