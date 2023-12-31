import { getStaffUsers } from "../services/userService"
import "./Employees.css"
import { useState, useEffect } from "react"
import { Employee } from "../users/User"
import { Link } from "react-router-dom"


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    return <div className="employees">
        {employees.map(employeeObj => {
            return (
                <Link to={`/employees/${employeeObj.id}`}>
                    <Employee employee={employeeObj} />
                </Link>
            )
        })}
    </div>

}


















