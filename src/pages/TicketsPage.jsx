import axios from "axios" 
import '../styles/tickets.css'
import { useState } from "react"

function TicketsPage() {
    const [tickets, setTickets] = useState([])
    const [showticket, setShowTicket] = useState(false)

    const handleTicket = async ()=>{
      
      try {
        const response = await axios.get('http://127.0.0.1:3000/events/tickets')
          console.log(response.data)
          setTickets([...tickets, response.data])
          // console.log(tickets)
          console.log('clicked')
          setShowTicket(true)
      } catch (error) {
        console.log('error occured:', error)
      }
        
    }
  return (
    <div className="ticket-page">
        <h2>buy tickets here</h2>
        <button onClick={()=>handleTicket()}>get ticket</button>
        <div className="ticket">
        {tickets && showticket&&
            tickets.map((ticket, index)=>(
                <div className='ticket-items' key={index}>
                    <p>here is your ticket</p>
                    <h3>ticketNumber:{ticket.ticketID}</h3>
                    <p>Price:{ticket.price}</p>
                    <p>eventID:{ticket.eventID}</p>
                </div>
            )
        )
        }
        </div>
        
    </div>
  )
}

export default TicketsPage