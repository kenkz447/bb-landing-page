import './MasterPage.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import { ImageWrapper, Image } from '../controls'

function MasterHeader(props) {
    return (
        <div className="master-page-header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ImageWrapper className="master-page-header-logo">
                            <Image src="/images/curator9102-logo.png"/>
                        </ImageWrapper>
                    </div>
                    <div className="col-6">
                        <div className="master-page-header-nav">
                            <ul className="master-page-header-nav-menu">
                                <li className="master-page-header-nav-menu-item">
                                    <Link className="master-page-header-nav-menu-item-link" to="/">Trang chủ</Link>
                                </li>
                                <li className="master-page-header-nav-menu-item">
                                    <Link className="master-page-header-nav-menu-item-link" to="/vi_VN/page/contactus">Liên hệ</Link>
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
                    <a href="https://youtube.com/curator9102"><img src="/images/icon-youtube.png" alt="youtute"/></a>
                    <a href="https://facebook.com/curator9102"><img src="/images/icon-facebook.png" alt="facebook"/></a>
                    <a href="https://instagram.com/curator9102"><img src="/images/icon-instagram.png" alt="instagram"/></a>
                    <a href="https://pinterest.com/curator9102"><img src="/images/icon-pinterest.png" alt="pinterest"/></a>
                </div>
            </div>
        </div>
    )
}