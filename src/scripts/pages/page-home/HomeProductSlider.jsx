import './HomeProductSlider.scss'

import React from 'react'
import Slider from 'react-slick'

import { Image, ImageWrapper } from '../../controls'

const sliderSetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        }]
}

export function HomeProductSlider(props) {
    const { products } = props

    return (
        <Slider className="home-products-slider" {...sliderSetting}>
            {products.map((product) => {
                return (
                    <ImageWrapper>
                        <Image src={product.image} />
                    </ImageWrapper>
                )
            })}
        </Slider>
    )
}