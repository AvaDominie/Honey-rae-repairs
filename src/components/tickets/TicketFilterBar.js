

export const TicketBar = ({ setShowEmergencyOnly, setSearchTerm }) => {

    return (<div className="filter-bar">
        <button className="filter-btn btn-primary"
            onClick={() => {
                setShowEmergencyOnly(true)
            }}>Emergency</button>



        <button className="filter-btn btn-info"
            onClick={() => {
                setShowEmergencyOnly(false)
            }}>Show all</button>


        <input
            onChange={(event) => {
                setSearchTerm(event.target.value)
            }}
            type="text"
            placeholder="Search Tickets"
            className="ticket-search"
        />
    </div>
    )
}
