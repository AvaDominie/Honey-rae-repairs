


import { useEffect, useState } from "react"
import "./Employees.css"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../services/employeeService"
import { getEmployeeTicketsByEmployeeId } from "../services/employeeService"





export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({})
    const [workingOnTicketsCount, setWorkingOnTicketsCount] = useState(0);
    const { employeeId } = useParams()
    // const []
    


    useEffect(() => {
        getEmployeeByUserId(employeeId).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })

        getEmployeeTicketsByEmployeeId(employeeId).then((tickets) => {
            console.log(tickets)
            // Calculate the count of tickets tickets.length;
            const count = ++tickets.length
            setWorkingOnTicketsCount(count);
        })

        } ,[employeeId])

    





    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-info">Email :</span>
                {employee.user?.email}
            </div>
            <div>
                <span className="employee-info">Specialty :</span>
                {employee.specialty}
            </div>
            <div>
                <span className="employee-info">Rate :</span>
                {employee.rate}
            </div>
            <div>
                <footer>Currently working on {workingOnTicketsCount} tickets</footer>
            </div>

        </section>
    )

    }



