import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import axios from "axios";

function OnlineEvents() {
  const [eventonline ,setEventsOnline] = useState([]);

  const fetchOnlineEvents = async ()=>{
    try {
      const response = await axios.get('http://127.0.0.1:3000/eventsonline')

      setEventsOnline([eventonline, ...response.data.recordset])
      // console.log(eventonline)
    } catch (error) {
      console.log('error fetching events:', error)
    }
  }
  useEffect(()=>{
    fetchOnlineEvents()
  }, [])
  return (
    <>
    <div style={{marginTop:'15vh'}}>OnlineEvents</div>
    {eventonline&&eventonline.map((event, index)=>(
                <div className='event-instance' key={index} >
                  <div className='event-elements'>
                  <p>{event.images}</p>
                  <h3>{event.name}</h3>
                  <h3>{event.location}</h3>
                  <p>{event.description}</p>
                  <p>{event.eventdate}</p>
                  <p>{event.eventID}</p>
                </div>
                  <Link to={`/events/${event.eventID}`} key={event.eventID}>view event</Link>
                </div>
                
            ))}
    </>
  )
}

export default OnlineEvents