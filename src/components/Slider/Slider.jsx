import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider(props) {

    const {slides} = props

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== slides.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === slides.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(slides.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {slides.map((slide, index) =>
                 (
                    <div
                        key={slide.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={slide.img}
                        />
                    </div>
                )
            )}
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}