import { useEffect, useState } from "react"
// import { getEmployeeById } from "../../services/employeeService"
import { assignTicket, updateTicket } from "../../services/ticketService"
import { getAllEmployees } from "../../services/employeeService"



export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {

    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState('')

    useEffect(() => {
        getAllEmployees().then((employeesArray) => {
            setEmployees(employeesArray)
        })
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find(
            (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
        )
        setAssignedEmployee(foundEmployee)

    }, [employees, ticket])

    // useEffect(() => {
    //     if (ticket.employeeTickets.length) {
    //         getEmployeeById(ticket.employeeTickets[0].employeeId).then((employee) => {
    //             setAssignedEmployee(employee)
    //         })
    //     }
    // }, [ticket])


    const handleClaim = () => {
        const currentEmployees = employees.find(
            (employee) => employee.userId === currentUser.id
        )

        const newEmployeeTicket = {
            employeeId: currentEmployees.id,
            serviceTicketId: ticket.id,
        }

        assignTicket(newEmployeeTicket).then(() => {
            getAndSetTickets()
        })
    }


    const handleClose = () => {
        const closedTicket = {
            id: ticket.id,
            userId: ticket.userId,
            description: ticket.description,
            emergency: ticket.emergency,
            dataCompleted: new Date(),
        }
        updateTicket(closedTicket).then(() => {
            getAndSetTickets()
        })
    }


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
                <div className="btn-container">
                    {/* If employee and no employee ticket associated with the service ticket,
                    then button to claim ticket display */}
                    {currentUser.isStaff && !assignedEmployee ? (
                        <button className="btn btn-secondary"
                            onClick={handleClaim}>Claim</button>
                    ) : (
                        ""
                    )
                    }
                    {/* If logged in user is assigned employee for ticket and no dataCompleted, 
                    then button to close ticket display */}
                    {assignedEmployee?.userId === currentUser.id && !ticket.dataCompleted ? (
                        <button className="btn btn-warning"
                            onClick={handleClose}>Close</button>
                    ) : (
                        ""
                    )}
                </div>
            </footer>
        </section>
    )
}