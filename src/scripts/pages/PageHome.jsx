import React from 'react'

import { MasterPage } from '../masters'
import { TrasitionSliderUp } from '../controls'

import { HomeSlider, HomeLivingRoom, HomeDinnerRoom, HomeBedRoom } from './page-home'

export class PageHome extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slideIndex: 0
        }
    }

    render() {
        const Component = this.roomSelect()
        return (
            <MasterPage>
                <div className="home">
                    <HomeSlider afterChange={(slideIndex) => this.setState({ slideIndex })} />
                    <TrasitionSliderUp key={this.state.slideIndex} >
                        <Component />
                    </TrasitionSliderUp>
                </div>
            </MasterPage>
        )
    }

    roomSelect() {
        switch (this.state.slideIndex) {
            case 0:
                return HomeLivingRoom
            case 1:
                return HomeDinnerRoom
            default:
                return HomeBedRoom
        }
    }
}