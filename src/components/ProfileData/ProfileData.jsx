import React, {Component} from 'react'

class ProfileData extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="username" className="col-4 col-form-label">User
                                Name*</label>
                            <div className="col-8">
                                <input id="username" name="username" placeholder="Username"
                                       className="form-control here" required="required"
                                       type="text"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-4 col-8">
                                <button name="submit" type="submit"
                                        className="btn btn-primary">Update My Profile
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProfileData;