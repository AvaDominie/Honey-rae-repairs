
import "./User.css"

export const User = ({user}) => {
    return (
        <div className="user">
            <div>
                <div className="user-info">Name</div>
                <div>{user.fullName}</div>
            </div>
            <div>
                <div className="user-info">Email</div>
                <div>{user.email}</div>
            </div>
        </div>
    )
}



export const Employee = ({employee}) => {
    return (
        <div className="user">
            <div>
                <div className="user-info">Name</div>
                <div>{employee.fullName}</div>
            </div>
            <div>
                <div className="user-info">Email</div>
                <div>{employee.email}</div>
            </div>


        </div>
    )
}






