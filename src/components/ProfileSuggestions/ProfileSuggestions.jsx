import React, {Component} from 'react'

import './ProfileSuggestions.css'
import kinvey from "../../API/ApiCalls";
import Message from "../Message/Message";

class ProfileSuggestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            name: '',
            email: '',
            error: null,
            success: null,
        }
    }

    render() {

        const {success, error} = this.state

        return (
            <div className="suggestion-main row">
                <div className="m-auto text-center">
                    <h2>Suggest an amazing product</h2>
                    <p>
                        Please send your message below. We will get back to you at the earliest!
                    </p>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea className="form-control" name="message" id="message" maxLength="1000" rows="7"
                                      onChange={this.changeMessage}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" className="form-control" id="name" name="name" required
                                   onChange={this.changeName}/>
                        </div>
                        <div className="col-sm-6 form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" required
                                   onChange={this.changeEmail}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <button className="btn btn-lg btn-secondary btn-block w-25 m-auto" type="submit">Send →
                            </button>
                        </div>
                    </div>
                </form>
                <Message error={error} success={success}/>
            </div>
        )
    }

    changeMessage = e => {
        this.setState({message: e.target.value})
    }

    changeName = e => {
        this.setState({name: e.target.value})
    }

    changeEmail = e => {
        this.setState({email: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        const {message, name, email} = this.state
        kinvey.post('appdata', 'suggestions', 'kinvey', {
            message,
            name,
            email
        }).then(() => {
            this.setState({
                message : '',
                error: null,
                success: 'Your suggestion has been submitted!'
            })
        }).catch(() => {
            this.setState({
                error: 'Sorry your suggestion was NOT saved.',
                success: null
            })
        })

    }
}

export default ProfileSuggestions;