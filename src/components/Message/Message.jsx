import React from "react";

function Message(props) {
    return <>
        {
            props.error ?
                (
                    <div className="text-center alert alert-danger m-auto font-weight-bold">
                        {props.error}
                    </div>
                ) : null
        }

        {
            props.success ?
                (
                    <div className="text-center alert-success m-auto font-weight-bold">
                        {props.success}
                    </div>
                ) : null
        }
    </>;
}

export default Message