import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import '../App.css'

export class Home extends Component {

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                Counter
                <br /> <br />
                <button onClick={() => this.goBack()}>Go Back</button>

                {/* <button>
                    <Link
                        className='home'
                        to='/profile'>
                        Back To Profile Page
                    </Link>
                </button> */}
            </div>
        )
    }
}

export default Home