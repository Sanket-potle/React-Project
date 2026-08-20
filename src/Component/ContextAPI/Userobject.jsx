import { Table } from "react-bootstrap";
const Userobject = () => {
    const Userdata = [
        {
            name: "Sanket",
            age: '24',
            email: 'Sanket@test.com',
            id: '1'
        },
        {
            name: "Potle",
            age: '30',
            email: 'Sanketp@test.com',
            id: '2'
        },
        {
            name: "Test",
            age: '33',
            email: 'Sanketp@test.com',
            id: '3'
        }
    ]
    return (
        <>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Userdata.map((user) => (
                            <tr key={user}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Userobject;