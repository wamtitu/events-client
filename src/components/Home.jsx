import '../styles/home.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [events, setEvents] = useState([]);
  // const[title, setTitle] = useState([])
  
  useEffect(()=>{
    const fetch5 = async()=>{
      try {
        const response = await axios.get('https://eventapi.azurewebsites.net/events/top5')
        setEvents([...response.data.recordset])
        // console.log(...response.data.recordset)
      } catch (error) {
        console.log('an error occured fetching events')
      }
    }
    fetch5()
  }, [])

  // console.log('events:',events)
  return (
    <div className="mainContent-landing">
      <div className="main">
      <h2>Welcome to hello Events</h2>
      <p>log in to explore more events and create events</p>
      <h3>top 5 events currently</h3>
        { events.map((event, index)=>(
          <div className="eventscard" key={index}>
            <div style={{marginLeft:'10%'}}>
            <h1>{event.name}</h1>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            </div>
          </div>
        ))

        }
      </div>
      <div className="aside">
      <h4>upcoming events</h4>
        <p>login to create and broadcast your event with us</p>
        <div className='asideElement'>
        { events.map((event, index)=>(
          <div className='asideNames' key={index}>
            <p>{event.name}</p>
          </div>
        ))

        }
        </div>
        
      </div>
     
    </div>
  )
}

export default Home