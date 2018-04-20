import './HomeSlider.scss'

import React from 'react'
import Slider from 'react-slick'

import { Image, ImageWrapper } from '../../controls'

const sliderSetting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false
            }
        }]
}

export function HomeSlider(props) {
    return (
        <Slider
            className="home-slider"
            afterChange={props.afterChange}
            {...sliderSetting}
        >
            <ImageWrapper className="home-slider-slide">
                <div className="container">
                    <div className="home-slider-slide-details">
                        <span className="home-slider-slide-details-lighttext">MUA </span><span className="home-slider-slide-details-heavytext">PHÒNG KHÁCH</span><br />
                        <span className="home-slider-slide-details-lighttext">TẶNG </span><span className="home-slider-slide-details-heavytext">THẢM BỈ/ THỔ NHĨ KỲ</span><br />
                        <p className="home-slider-slide-details-description">
                            Linguistics. a unit of connected speech or writing, especially composed of more than one sentence, that forms a cohesive whole.
                        </p>
                        <a href="https://www.curator9102.vn/shop/category/collections-bb-28" className="home-slider-slide-details-viewmorebtn">Xem Thêm</a>
                    </div>
                </div>
                <Image src="/images/livingroom/slide.jpg" alt="Living room" />
            </ImageWrapper>
            <ImageWrapper className="home-slider-slide">
                <div className="container">
                    <div className="home-slider-slide-details text-right">
                        <span className="home-slider-slide-details-lighttext">MUA </span><span className="home-slider-slide-details-heavytext">PHÒNG ĂN</span><br />
                        <span className="home-slider-slide-details-lighttext">TẶNG </span><span className="home-slider-slide-details-heavytext">BỘ LÓT ĐĨA & 3 GIỎ</span><br />
                        <p className="home-slider-slide-details-description">
                            Linguistics. a unit of connected speech or writing, especially composed of more than one sentence, that forms a cohesive whole.
                        </p>
                        <a href="https://www.curator9102.vn/shop/category/collections-bb-28" className="home-slider-slide-details-viewmorebtn">Xem Thêm</a>
                    </div>
                </div>
                <Image src="/images/dinnerroom/slide.jpg" alt="Living room" />
            </ImageWrapper>
            <ImageWrapper className="home-slider-slide">
                <div className="container">
                    <div className="home-slider-slide-details">
                        <span className="home-slider-slide-details-lighttext">MUA </span><span className="home-slider-slide-details-heavytext">PHÒNG Ngủ</span><br />
                        <span className="home-slider-slide-details-lighttext">TẶNG </span><span className="home-slider-slide-details-heavytext">BỘ CHĂN GA GỐI</span><br />
                        <p className="home-slider-slide-details-description">
                            Linguistics. a unit of connected speech or writing, especially composed of more than one sentence, that forms a cohesive whole.
                    </p>
                        <a href="https://www.curator9102.vn/shop/category/collections-bb-28" className="home-slider-slide-details-viewmorebtn">Xem Thêm</a>
                    </div>
                </div>
                <Image src="/images/bedroom/slide.jpg" alt="Living room" />
            </ImageWrapper>
        </Slider>
    )
}