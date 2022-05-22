import React from "react";
import "./Slider.css";
import leftArrow from '../../assets/images/slider/arrow_left.svg'
import rightArrow from "../../assets/images/slider/arrow_right.svg";

export default function BtnSlider({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}