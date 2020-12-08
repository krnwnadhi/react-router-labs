import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export class Profile extends Component {

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                Profile
                <br /> <br />
                <Link to='/counter'> To Counter Page </Link> <br /> <br />
                <button onClick={() => this.goBack()}>Go Back</button>
            </div>
        )
    }
}

export default Profile
