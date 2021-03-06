import './MasterPage.scss'

import React from 'react'
import { ImageWrapper, Image } from '../controls'

function MasterHeader(props) {
    return (
        <div className="master-page-header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ImageWrapper className="master-page-header-logo">
                            <a href="https://www.curator9102.vn/">
                                <Image src="/images/curator9102-logo.png" />
                            </a>
                        </ImageWrapper>
                    </div>
                    <div className="col-6">
                        <div className="master-page-header-nav">
                            <ul className="master-page-header-nav-menu">
                                <li className="master-page-header-nav-menu-item">
                                    <a className="master-page-header-nav-menu-item-link" href="https://www.curator9102.vn/">Trang chủ</a>
                                </li>
                                <li className="master-page-header-nav-menu-item">
                                    <a className="master-page-header-nav-menu-item-link" href="https://www.curator9102.vn/vi_VN/page/contactus">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function MasterPage(props) {
    return (
        <div className="master-page">
            <MasterHeader />
            {props.children}
            <div className="master-page-footer">
                <div className="master-page-footer-social">
                    <a href="https://facebook.com/curator9102"><img src="/images/icon-facebook.png" alt="facebook" /></a>
                    <a href="https://instagram.com/curator9102"><img src="/images/icon-instagram.png" alt="instagram" /></a>
                    <a href="https://pinterest.com/curator9102"><img src="/images/icon-pinterest.png" alt="pinterest" /></a>
                </div>
            </div>
        </div>
    )
}