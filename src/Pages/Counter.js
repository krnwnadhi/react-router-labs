import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div>
                Counter
                <br />
                <Link to='/home'> To Home Page </Link>
            </div>
        )
    }
}

export default Home