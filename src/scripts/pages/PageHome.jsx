import React from 'react'

import { MasterPage } from '../masters'
import { HomeSlider, HomeLivingRoom } from './page-home'

export class PageHome extends React.Component {
    render() {
        return (
            <MasterPage>
                <div className="home">
                    <HomeSlider />
                    <HomeLivingRoom/>
                </div>
            </MasterPage>
        )
    }
}