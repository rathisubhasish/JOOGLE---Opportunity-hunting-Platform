import React, { useEffect } from 'react';
import "./Slideshow.css";

const Slideshow = ({ slideShowImg }) => {
    useEffect(() => {
        let slides = document.querySelectorAll(".slide");
        let navBtns = document.querySelectorAll(".img-round-btn");
        let currentSlide = 1;

        const manualImgNav = function (manual) {
            slides.forEach((slide) => {
                slide.classList.remove("img-active");
            });

            navBtns.forEach((btns) => {
                btns.classList.remove("navbtn-active");
            });

            slides[manual].classList.add("img-active");
            navBtns[manual].classList.add("navbtn-active");
        }
        // calling function for manual navigation
        navBtns.forEach((btn, i) => {
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
                    {
                        slideShowImg.map((val, i) => {
                            return (
                                <div className={i === 0 ? "slide img-active" : "slide"} key={val.ImgName}>
                                    <img src={require(`../../assets/images/joogle/slideshow/${val.slideImg}`)} alt={val.ImgName} />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="img-navigation">
                    {
                        slideShowImg.map((val, key) => {
                            return (
                                <div className={key === 0 ? "img-round-btn navbtn-active" : "img-round-btn"} key={key}></div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
};

export default Slideshow;