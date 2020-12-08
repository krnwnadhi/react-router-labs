import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Profile extends Component {
    render() {
        return (
            <div>
                Profile
                <br />
                <Link to='/counter'> To Counter Page </Link>
            </div>
        )
    }
}

export default Profile
