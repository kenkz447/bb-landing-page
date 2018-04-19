import './ImageWrapper.scss'
import React from 'react'
import classNames from 'classnames'

export class ImageWrapper extends React.Component {
    static defaultProps = {
        component: 'div'
    }

    render() {
        const props = { ...this.props }
        props.className = classNames(
            'image-wrapper',
            this.props.className,
            this.props.shape
        )

        const Component = this.props.component

        const style = {}

        if (props.ratioX) {
            const a = props.ratioX / props.ratioY
            const paddingBottom = 100 - (a * 100 - 100)
            style.paddingBottom = `${paddingBottom}%`
            props.className = classNames(props.className, 'use-ratio')
        }

        return (
            <Component {...props} style={style} />
        )
    }
}