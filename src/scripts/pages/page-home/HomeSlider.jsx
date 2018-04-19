import './HomeSlider.scss'

import React from 'react'
import Slider from 'react-slick'

import { Image, ImageWrapper } from '../../controls'

const sliderSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

export function HomeSlider(props) {
    return (
        <Slider className="home-slider" {...sliderSetting}>
            <ImageWrapper className="home-slider-slide">
                <div className="container">
                    <div className="home-slider-details">
                        xasdasdasda
                    </div>
                </div>
                <Image src="/images/livingroom/slide.jpg" alt="Living room" />

            </ImageWrapper>
            <ImageWrapper className="home-slider-slide">
                <Image src="/images/dinnerroom/slide.jpg" alt="Living room" />
            </ImageWrapper>
            <ImageWrapper className="home-slider-slide">
                <Image src="/images/bedroom/slide.jpg" alt="Living room" />
            </ImageWrapper>
        </Slider>
    )
}