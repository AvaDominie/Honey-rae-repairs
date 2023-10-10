import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket.js"
import { TicketBar } from "./TicketFilterBar"


export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAndSetTickets = () => {
        getAllTickets().then((ticketsArray) => {
            setAllTickets(ticketsArray)
        })
    }

    useEffect(() => {
        getAllTickets().then(ticketsArray => {
            setAllTickets(ticketsArray)
            console.log("tickets set!")
        })

    }, []) // ONLY runs on the initial render of component

    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter(
                (ticket) => ticket.emergency === true)
            setFilteredTickets(emergencyTickets)
        } else {
            setFilteredTickets(allTickets)
        }

    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
        const foundTickets = allTickets.filter((ticket) =>
        ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])


    return (
        <div className="tickets-container">
            <h2>Tickets</h2>
        <TicketBar setShowEmergencyOnly={setShowEmergencyOnly} 
        setSearchTerm={setSearchTerm} />
            <article className="tickets">
                {filteredTickets.map((ticketObj) => {
                    return <Ticket
                    ticket={ticketObj} 
                    currentUser={currentUser}
                    getAndSetTickets={getAndSetTickets}
                    key={(ticketObj.id)}/>
                    
                })}
            </article>


        </div>
    )
}





































    // {/* <div className="filter-bar">
    //     <button className="filter-btn btn-primary"
    //         onClick={() => {
    //             setShowEmergencyOnly(true)
    //         }}>Emergency</button>
    // </div>

    // <div>
    //     <button className="filter-btn btn-info"
    //         onClick={() => {
    //             setShowEmergencyOnly(false)
    //         }}>Show all</button>
    // </div>
    // <input 
    // onChange={(event) => {
    //     setSearchTerm(event.target.value)
    // }}
    // type="text"
    // placeholder="Search Tickets"
    // className="ticket-search"
    // /> */}