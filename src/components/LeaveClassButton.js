import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const LeaveClassButton = ({ leaveClass }) => {
    const history = useHistory();

    const leave = () => {
        leaveClass.disconnect();
        history.push("/dashboard");
    };

    return (
        <div>
            <Button variant="danger" onClick={leave} className="ml-3">
                Leave Class
            </Button>
        </div>
    );
};

export default LeaveClassButton;
