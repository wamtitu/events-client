import { useParams ,useNavigate, Link} from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState} from 'react';
import './../styles/eventPage.css'
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {FaEdit} from 'react-icons/fa'

function EventPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [event, setEvents]= useState([]);
    const fetchEventById = async()=>{
        try {
            const response = await axios.get(`http://127.0.0.1:3000/events/${id}`)
            setEvents([...response.data])            
        } catch (error) {
            alert('error occured fetching event ')
        }
    }
    const handleDelete = async()=>{
        try {
            await axios.delete(`http://127.0.0.1:3000/events/${id}`)
            console.log('delete succesfull')
            navigate('/events')
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        fetchEventById()
    }, [])
    const handleBuyTicket = ()=>{
        navigate('/buyTickets')
      }
      
  return (
    <div style={{marginTop:'15vh'}}>
        <h1>HELLO 🙌EVENTS</h1>
        {
            event.map((event, index)=>(
                <div className = 'singleEvent' key={index}>
                    <>
                    <h1>{event.name}</h1>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                    <button style={{border:'none'}} onClick={handleBuyTicket}><h2>get ticket</h2></button>
                    </>
                    <div className='buttons'>
                        <button style={{border:'none', color:'blue', width:'20px', height:'20px'}}><Link to={`/events/edit/${event.eventID}`} key={event.eventID}><FaEdit/></Link></button> 
                        <button style={{border:'none', color:'red'}} onClick={handleDelete}><RiDeleteBin6Fill/></button>
                    </div>
                    
                </div>
                
            ))
        }

       
    </div>
  )
}

export default EventPage