import './HomeLivingRoom.scss'

import React from 'react'

import { Image, ImageWrapper } from '../../controls'

import { HomeProductSlider } from './HomeProductSlider'
import { HomeRoomLayout } from './HomeRoomLayout'

export class HomeLivingRoom extends React.Component {
    products = [
        { image: '/images/livingroom/sofa.jpg', icon: "/images/livingroom/icon-sofa.png", name: 'Sofa' },
        { image: '/images/livingroom/armchair.jpg', icon: "/images/livingroom/icon-armchair.png", name: 'Armchair' },
        { image: '/images/livingroom/side-table.jpg', icon: "/images/livingroom/icon-side-table.png", name: 'Side table' },
        { image: '/images/livingroom/coffee-table.jpg', icon: "/images/livingroom/icon-coffee-table.png", name: 'Coffee table' },
        { image: '/images/livingroom/coffee-table.jpg', icon: "/images/livingroom/icon-coffee-table.png", name: 'Coffee table' },
    ]
    gifts = [
        { image: '/images/livingroom/gift-01.jpg', name: 'gift-01' },
        { image: '/images/livingroom/gift-02.jpg', name: 'gift-02' },
        { image: '/images/livingroom/gift-03.jpg',  name: 'gift-03' },
        { image: '/images/livingroom/gift-04.jpg', name: 'gift-04' },
        { image: '/images/livingroom/gift-05.jpg', name: 'gift-05' },
    ]
    render() {
        return (
            <div className="home-livingroom">
                <div className="home-livingroom-banner">
                    <div className="row">
                        <div className="col-lg-8">
                            <ImageWrapper className="home-livingroom-banner-left">
                                <Image className="w-100 h-100" src="/images/livingroom/banner-left.jpg" />
                                <div className="home-livingroom-banner-left-info">
                                    <label className="home-livingroom-banner-left-info-label">BỘ SƯU TẬP</label>
                                    <h1 className="home-livingroom-banner-left-info-collectionname">BB<br />2018</h1>
                                    <p className="home-livingroom-banner-left-info-description">Là sự ngẫu hứng đầy bất ngờ, có người ví những sản phẩm trong bộ sưu tập BB như những cậu nhóc lập dị, nhiều cá tính nhưng lại toát lên vẻ thanh thoát riêng.</p>
                                    <a className="home-livingroom-banner-left-info-viewmorebtn" href="https://www.curator9102.vn/shop/category/collections-bb-11">Xem thêm</a>
                                </div>
                            </ImageWrapper>
                        </div>
                        <div className="col-lg-4">
                            <ImageWrapper className="home-livingroom-banner-right">
                                <Image baseOn="height" src="/images/livingroom/banner-right.jpg" />
                                <div className="home-livingroom-banner-right-info">
                                    <label className="home-livingroom-banner-right-info-label">THE STRIKE ARMCHAIR</label>
                                    <p className="home-livingroom-banner-right-info-description">Linguistics. a unit of connected speech or writing, especially.</p>
                                </div>
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
                <div className="home-livingroom-product">
                    <div className="container">
                        <h2 className="home-livingroom-product-title">Danh sách quà tặng</h2>
                        <HomeProductSlider products={this.gifts} />
                    </div>
                </div>
            </div>
        )
    }
}