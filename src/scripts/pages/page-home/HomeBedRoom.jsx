import './HomeBedRoom.scss'

import React from 'react'

import { Image, ImageWrapper } from '../../controls'

import { HomeProductSlider } from './HomeProductSlider'
import { HomeRoomLayout } from './HomeRoomLayout'

export class HomeBedRoom extends React.Component {
    products = [
        { image: '/images/bedroom/furniture-bed.jpg', icon: "/images/bedroom/icon-bed.png", name: 'Giường ngủ' },
        { image: '/images/bedroom/furniture-makeup-chair.jpg', icon: "/images/bedroom/icon-makeup-chair.png", name: 'Ghế trang điểm' },
        { image: '/images/bedroom/furniture-makeup-table.jpg', icon: "/images/bedroom/icon-makeup-table.png", name: 'Bàn trang điểm' },
        { image: '/images/bedroom/furniture-side-table.jpg', icon: "/images/bedroom/icon-side-table.png", name: 'Tủ đầu giường' }
    ]
    gifts = [
        { image: '/images/bedroom/gift-01.jpg', name: 'gift-01' },
        { image: '/images/bedroom/gift-02.jpg', name: 'gift-02' },
        { image: '/images/bedroom/gift-03.jpg',  name: 'gift-03' },
        { image: '/images/bedroom/gift-04.jpg', name: 'gift-04' },
        { image: '/images/bedroom/gift-05.jpg', name: 'gift-05' }
    ]
    render() {
        return (
            <div className="home-bedroom">
                <div className="home-bedroom-banner">
                    <div className="row">
                        <div className="col-lg-8">
                            <ImageWrapper className="home-bedroom-banner-left">
                                <Image baseOn="width" src="/images/bedroom/banner-left.jpg" />
                                <div className="home-bedroom-banner-left-info">
                                    <label className="home-bedroom-banner-left-info-label">BỘ SƯU TẬP</label>
                                    <h1 className="home-bedroom-banner-left-info-collectionname">BB<br />2018</h1>
                                    <p className="home-bedroom-banner-left-info-description">Là sự ngẫu hứng đầy bất ngờ, có người ví những sản phẩm trong bộ sưu tập BB như những cậu nhóc lập dị, nhiều cá tính nhưng lại toát lên vẻ thanh thoát riêng.</p>
                                    <a className="home-bedroom-banner-left-info-viewmorebtn" href="https://www.curator9102.vn/shop/category/collections-bb-28">Xem thêm</a>
                                </div>
                            </ImageWrapper>
                        </div>
                        <div className="col-lg-4">
                            <ImageWrapper ratioX={1} ratioY={1} className="home-bedroom-banner-right">
                                <Image baseOn="height" src="/images/bedroom/banner-right.jpg" />
                            </ImageWrapper>
                        </div>
                    </div>
                </div>
                <div className="home-bedroom-product">
                    <div className="container">
                        <h2 className="home-bedroom-product-title">Sản phẩm bộ phòng ngủ</h2>
                        <HomeProductSlider products={this.products} />
                    </div>
                </div>
                <div className="home-bedroom-layout">
                    <HomeRoomLayout
                        layoutImageSrc="/images/bedroom/layout.png"
                        title="Thành phần"
                        products={this.products}
                    />
                </div>
                <div className="home-bedroom-product">
                    <div className="container">
                        <h2 className="home-bedroom-product-title">Danh sách quà tặng</h2>
                        <HomeProductSlider products={this.gifts} />
                    </div>
                </div>
            </div>
        )
    }
}