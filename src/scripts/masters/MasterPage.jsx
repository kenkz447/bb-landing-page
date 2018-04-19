import './MasterPage.scss'

import React from 'react'
import { Link } from 'react-router-dom'

function MasterHeader(props) {
    return (
        <div className="master-page-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        LOGO HERE
                    </div>
                    <div className="col-lg-6">
                        <div className="master-page-header-nav">
                            <ul className="master-page-header-nav-menu">
                                <li className="master-page-header-nav-menu-item">
                                    <Link className="master-page-header-nav-menu-item-link" to="/">Trang chủ</Link>
                                </li>
                                <li className="master-page-header-nav-menu-item">
                                    <Link className="master-page-header-nav-menu-item-link" to="/">Liên hệ</Link>
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
        </div>
    )
}