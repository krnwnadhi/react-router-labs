import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                Home
                <br /> <br />
                <Link to='/profile'> To Profile Page </Link>
            </div>
        )
    }
}

export default Home