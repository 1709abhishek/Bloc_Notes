import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        const currentYear = new Date().getFullYear()
        return (
            <div className='footer'>
                <p>Copyright ⓒ {currentYear}</p>
            </div>
        )
    }
}

export default Footer
