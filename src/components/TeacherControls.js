import React from "react";

const TeacherRoom = ({ isClassActive, startClass, endClass }) => {
    return (
        <div>
            {isClassActive ? (
                ""
            ) : (
                <button onClick={startClass}>Start Class</button>
            )}

            {!isClassActive ? (
                ""
            ) : (
                <button onClick={endClass}>End Class</button>
            )}
        </div>
    );
};

export default TeacherRoom;
