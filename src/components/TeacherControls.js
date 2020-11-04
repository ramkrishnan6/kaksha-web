import React from "react";
import { Button } from "react-bootstrap";

const TeacherRoom = ({ isClassActive, startClass, endClass }) => {
    return (
        <div>
            {isClassActive ? (
                ""
            ) : (
                <Button variant="success" onClick={startClass} className="ml-3">
                    Start Class
                </Button>
            )}

            {!isClassActive ? (
                ""
            ) : (
                <Button variant="danger" onClick={endClass} className="ml-3">
                    End Class
                </Button>
            )}
        </div>
    );
};

export default TeacherRoom;
