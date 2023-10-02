import { useEffect, useState } from "react"
import { getAllEmployees, getEmployeeById } from "../../services/employeeService"



export const Ticket = ({ ticket }) => {

    // const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState('')

    // useEffect(() => {
    //     getAllEmployees().then((employeesArray) => {
    //         setEmployees(employeesArray)
    //     })
    // }, [])

    // useEffect(() => {
    //     const foundEmployee = employees.find(
    //         (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    //     )
    //     setAssignedEmployee(foundEmployee)

    // }, [employees, ticket])

    useEffect(() => {
        if (ticket.employeeTickets.length) {
        getEmployeeById(ticket.employeeTickets[0].employeeId).then((employee) => {
            setAssignedEmployee(employee)
        })
        }
    }, [ticket])

    return (
        <section className="ticket">
            <header className="ticket-info">#{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
                <div>
                    <div className="ticket-info">Assignee</div>
                    <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}
                    </div>
                </div>
                <div>
                    <div className="ticket-info">Emergency</div>
                    <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
            </footer>
        </section>
    )
}