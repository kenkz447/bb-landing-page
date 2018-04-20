import './TrasitionSliderUp.scss'

import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export function TrasitionSliderUp(props) {
    if (!props.children)
        return null

    return (
        <TransitionGroup>
            <CSSTransition classNames="slideup" appear enter exit timeout={{ appear: 400, enter: 400, exit: 1000 }} >
                {props.children}
            </CSSTransition>
        </TransitionGroup>
    )
}