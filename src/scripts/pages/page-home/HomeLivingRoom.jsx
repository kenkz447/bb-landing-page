import './HomeLivingRoom.scss'

import React from 'react'

import { Image, ImageWrapper } from '../../controls'

import { HomeProductSlider } from './HomeProductSlider'
import { HomeRoomLayout } from './HomeRoomLayout'

export class HomeLivingRoom extends React.Component {
    products = [
        { image: '/images/livingroom/sofa.jpg', icon: "/images/livingroom/icon-sofa.jpg", name: 'Sofa' },
        { image: '/images/livingroom/armchair.jpg', icon: "/images/livingroom/icon-armchair.jpg", name: 'Armchair' },
        { image: '/images/livingroom/side-table.jpg', icon: "/images/livingroom/icon-side-table.jpg", name: 'Side table' },
        { image: '/images/livingroom/coffee-table.jpg', icon: "/images/livingroom/icon-coffee-table.jpg", name: 'Coffee table' },
        { image: '/images/livingroom/coffee-table.jpg', icon: "/images/livingroom/icon-coffee-table.jpg", name: 'Coffee table' },
    ]
    render() {
        return (
            <div className="home-livingroom">
                <div className="home-livingroom-banner">
                    <div className="row">
                        <div className="col-lg-8">
                            <ImageWrapper className="home-livingroom-banner-left">
                                <Image baseOn="height" src="/images/livingroom/banner-left.jpg" />
                            </ImageWrapper>
                        </div>
                        <div className="col-lg-4">
                            <ImageWrapper className="home-livingroom-banner-right">
                                <Image baseOn="height" src="/images/livingroom/banner-right.jpg" />
                            </ImageWrapper>
                        </div>
                    </div>
                </div>
                <div className="home-livingroom-product">
                    <div className="container">
                        <h2 className="home-livingroom-product-title">Sản phẩm bộ phòng khách</h2>
                        <HomeProductSlider products={this.products} />
                    </div>
                </div>
                <div className="home-livingroom-layout">
                    <HomeRoomLayout
                        layoutImageSrc="/images/livingroom/layout.png"
                        title="Sơ đồ phòng khách"
                        products={this.products}
                    />
                </div>
            </div>
        )
    }
}