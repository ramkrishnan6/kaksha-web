import ClassUserLog from "./ClassUserLog";

function Report({ classLogs }) {
    console.log(classLogs);
    return (
        <>
            <h2>Class {classLogs.number}</h2>
            <p>
                -- Started at {new Date(classLogs.started_at).toLocaleString()}
            </p>
            <p>-- Ended at {new Date(classLogs.ended_at).toLocaleString()}</p>
            <p>-- {classLogs.is_active ? "In progress" : "Finished"}</p>
            <ClassUserLog userLogs={classLogs["logs"]} />
        </>
    );
}

export default Report;
