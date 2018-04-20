import './HomeRoomLayout.scss'

import React from 'react'
import { Image, ImageWrapper } from '../../controls'

export function HomeRoomLayout(props) {
    const { title, layoutImageSrc, products } = props
    return (
        <div className="home-room-layout">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ImageWrapper className="home-room-layout-image">
                            <Image src={layoutImageSrc} />
                        </ImageWrapper>
                    </div>
                    <div className="col-lg-4">
                        <label className="home-room-layout-label">{title}</label>
                        <ul className="home-room-layout-products">
                            {products.map((product, index) => {
                                return (
                                    <li className="home-room-layout-products-product">
                                        <div className="home-room-layout-products-product-index">
                                            {index + 1}
                                        </div>
                                        <div className="home-room-layout-products-product-icon">
                                            <ImageWrapper>
                                                <Image src={product.icon}/>
                                            </ImageWrapper>
                                        </div>
                                        <div className="home-room-layout-products-product-name">
                                            {product.name}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}