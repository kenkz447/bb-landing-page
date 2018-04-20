import './HomeDinnerRoom.scss'

import React from 'react'

import { Image, ImageWrapper } from '../../controls'

import { HomeProductSlider } from './HomeProductSlider'
import { HomeRoomLayout } from './HomeRoomLayout'

export class HomeDinnerRoom extends React.Component {
    products = [
        { image: '/images/dinnerroom/furniture-bench.jpg', icon: "/images/dinnerroom/icon-bench.png", name: 'Bench' },
        { image: '/images/dinnerroom/furniture-dinner-chair.jpg', icon: "/images/dinnerroom/icon-dinner-chair.png", name: 'Danner chair' },
        { image: '/images/dinnerroom/furniture-dinner-table.jpg', icon: "/images/dinnerroom/icon-dinner-table.png", name: 'Danner table' },
        { image: '/images/dinnerroom/furniture-side-table.jpg', icon: "/images/dinnerroom/icon-side-table.png", name: 'Side table' },
    ]
    gifts = [
        { image: '/images/dinnerroom/gift-01.jpg', name: 'gift-01' },
        { image: '/images/dinnerroom/gift-02.jpg', name: 'gift-02' }
    ]
    render() {
        return (
            <div className="home-dinnerroom">
                <div className="home-dinnerroom-banner">
                    <div className="row">
                        <div className="col-lg-8">
                            <ImageWrapper className="home-dinnerroom-banner-left">
                                <Image baseOn="width" src="/images/dinnerroom/banner-left.jpg" />
                                <div className="home-dinnerroom-banner-left-info">
                                    <label className="home-dinnerroom-banner-left-info-label">BỘ SƯU TẬP</label>
                                    <h1 className="home-dinnerroom-banner-left-info-collectionname">BB<br />2018</h1>
                                    <p className="home-dinnerroom-banner-left-info-description">Là sự ngẫu hứng đầy bất ngờ, có người ví những sản phẩm trong bộ sưu tập BB như những cậu nhóc lập dị, nhiều cá tính nhưng lại toát lên vẻ thanh thoát riêng.</p>
                                    <a className="home-dinnerroom-banner-left-info-viewmorebtn" href="https://www.curator9102.vn/shop/category/collections-bb-11">Xem thêm</a>
                                </div>
                            </ImageWrapper>
                        </div>
                        <div className="col-lg-4">
                            <ImageWrapper ratioX={1} ratioY={1} className="home-dinnerroom-banner-right">
                                <Image baseOn="height" src="/images/dinnerroom/banner-right.jpg" />
                                <div className="home-dinnerroom-banner-right-info">
                                    <label className="home-dinnerroom-banner-right-info-label">THE PITCHER CHAIR</label>
                                    <p className="home-dinnerroom-banner-right-info-description">Linguistics. a unit of connected speech or writing, especially.</p>
                                </div>
                            </ImageWrapper>
                        </div>
                    </div>
                </div>
                <div className="home-dinnerroom-product">
                    <div className="container">
                        <h2 className="home-dinnerroom-product-title">Sản phẩm bộ phòng ăn</h2>
                        <HomeProductSlider products={this.products} />
                    </div>
                </div>
                <div className="home-dinnerroom-layout">
                    <HomeRoomLayout
                        layoutImageSrc="/images/dinnerroom/layout.png"
                        title="Sơ đồ phòng ăn"
                        products={this.products}
                    />
                </div>
                <div className="home-dinnerroom-gifts">
                    <div className="container">
                        <h2 className="home-livingroom-product-title">Danh sách quà tặng</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ImageWrapper className="home-dinnerroom-gifts-left">
                                <Image baseOn="width" src="/images/dinnerroom/gift-01.jpg" />
                                <div className="home-dinnerroom-gifts-left-info">
                                    <span className="home-dinnerroom-gifts-left-info-label">3 GIỎ TRANG TRÍ</span>
                                    <label className="home-dinnerroom-gifts-left-info-name">CỎ</label>
                                </div>
                            </ImageWrapper>
                        </div>
                        <div className="col-lg-6">
                            <ImageWrapper className="home-dinnerroom-gifts-right">
                                <Image baseOn="width" src="/images/dinnerroom/gift-02.jpg" />
                                <div className="home-dinnerroom-gifts-right-info">
                                    <label className="home-dinnerroom-gifts-right-info-label">Bộ 6 miếng lót đĩa</label>
                                    <label className="home-dinnerroom-gifts-right-info-name">TADA</label>
                                    <span className="home-dinnerroom-gifts-right-info-sub">(Màu tự chọn theo bộ)</span>
                                </div>
                            </ImageWrapper>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}