import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import '../styles/evenform.css'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const schema = yup.object({
    name: yup.string().required(),
    location: yup.string().required(),
    description: yup.string().required(),
    images: yup.string(),
    date: yup.date().required(),
})

function Updateevents() {
    const navigate = useNavigate()
    const {id} = useParams();
    const [eventUpdate, setEventUpdate] = useState({})

    const fetchEvent = async ()=>{
        const event = await axios.get(`http://127.0.0.1:3000/events/${id}`)
        setEventUpdate(...event.data)
    }

    useEffect(()=>{
        fetchEvent()
    },[])

    const onsubmit= async (data)=>{
        await axios.put(`http://127.0.0.1:3000/events/update/${id}`, data)
        navigate(`/events/${id}`)
        
    }

    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });
    const handleChange = (e) => {
        setEventUpdate((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

  return (
    <div className="create-event-form-container">
    <form className='event-form' onSubmit={handleSubmit(onsubmit)}>
        <h2 className='fade-in' >Update Your Event Here</h2>
        <input placeholder="name" {...register('name')}  value={eventUpdate.name}  onChange={handleChange} />
        <input placeholder="location" {...register('location')}  value={eventUpdate.location}  onChange={handleChange} />
        <input type='date' placeholder='YYYY-MM-DD'{...register('date')} value={eventUpdate.date}  onChange={handleChange} />
        <textarea placeholder="description" {...register('description')}  value={eventUpdate.description}  onChange={handleChange}/>
        <input placeholder="images" {...register('images')} value={eventUpdate.images}   onChange={handleChange}/>
        <button>Update</button>
    </form>
</div>
  )
}

export default Updateevents