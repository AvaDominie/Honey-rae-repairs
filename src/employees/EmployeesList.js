import { getStaffUsers } from "../services/userService"
import "./Employees.css"
import { useState, useEffect } from "react"
import { Employee } from "../users/User"


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
                <Employee employee={employeeObj}/>
            )
        })}
    </div>

}
















