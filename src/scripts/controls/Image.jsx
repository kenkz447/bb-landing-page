import React from 'react'
import classNames from 'classnames'

export class Image extends React.Component {
    static defaultProps = {
        src: '/images/empty.png',
        baseOn: 'width'
    }

    componentDidMount() {
        if (this.props.onLoad) {
            this.image = new Image()
            this.image.onload = this.props.onLoad
            this.image.src = this.props.src
        }
    }

    render() {
        const props = { ...this.props }

        props.className = classNames(
            { 'w-100': this.props.baseOn === 'width' },
            { 'h-100': this.props.baseOn === 'height' },
            { 'h-100 w-100': this.props.baseOn === 'both' }
        )

        return (
            <img {...props} alt={props.alt} />
        )
    }
}