import React, {Component} from 'react'
import kinvey from "../../API/ApiCalls";
import {connect} from "react-redux";

class ProfileHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: ''
        };
    }

    componentDidMount() {
        kinvey.get('user', `?query={"username":"${this.props.username}"}`, 'kinvey')
            .then((res) => {
                console.log(res)
                this.setState({
                    clicks: res[0].clicks
                })
            })
    }

    render() {
        return (
            <div className="text-center">
                <h3>You purchased <strong>{`${this.state.clicks}`}</strong> products from the shop.</h3>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    username: state.auth.user,
})

export default connect(mapStateToProps)(ProfileHistory)