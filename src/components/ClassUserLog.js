import { Table } from "react-bootstrap";

function Report({ userLogs }) {
    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {userLogs.map((userLog, i) => (
                        <tr key={i}>
                            <td>{userLog.user.first_name}</td>
                            <td>{userLog.user.last_name}</td>
                            <td>{userLog.type}</td>
                            <td>{userLog.user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default Report;
