import React, { Component } from 'react'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'


export class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>
                    <PlaylistAddIcon />
                    Bloc Notes
                </h1>
            </div>
        )
    }
}

export default Header
