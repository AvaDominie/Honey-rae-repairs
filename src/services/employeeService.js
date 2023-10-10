import { Employee } from "../users/User"



export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=user`).then((res) =>
        res.json())
}


export const getEmployeeById = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}?_expand=user`
    ).then((res) => res.json())
}


export const getEmployeeByUserId = (userId) => {
    return fetch(
        `http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${userId}`
    ).then((res) => res.json())
}

// `http://localhost:8088/employees?userId=${userId}&_expand=user`

// Create a function to fetch tickets assigned to an employee by their employeeId
export const getEmployeeTicketsByEmployeeId = (employeeId) => {
    return fetch(`http://localhost:8088/employeeTickets?employeeId=${employeeId}&_expand=employee`)
        .then((res) => res.json())
}


export const updateEmployee = (employee) => {
    return fetch(`http://localhost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    })
}