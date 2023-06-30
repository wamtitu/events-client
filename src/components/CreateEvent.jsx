import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import '../styles/evenform.css'
import { useNavigate } from 'react-router-dom'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const schema = yup.object({
    name: yup.string().required(),
    location: yup.string().required(),
    description: yup.string().required(),
    images: yup.string(),
    date: yup.date().required(),
})

function CreateEvent() {
    const navigate = useNavigate()
    const onsubmit= async (data)=>{
        // event.preventDefault();
        const response = await axios.post('http://127.0.0.1:3000/events', data)
            console.log(response.data)
    }

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const handleClick = ()=>{
   navigate('/createTickets')
    }

  return (
    <div className="create-event-form-container">
    <form className='event-form' onSubmit={handleSubmit(onsubmit)}>
        <h2 className='fade-in' >Create Event Here</h2>
        <input placeholder="name" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
        <input placeholder="location" {...register('location')}/>
        {errors.location && <p>{errors.location.message}</p>}
        {/* <DatePicker id="dateInput" dateFormat="yyyy-MM-dd" placeholderText="YYYY-MM-DD"  {...register('date')}/> */}
        <input type='date' placeholder='YYYY-MM-DD'{...register('date')}/>
        {errors.date && <p>{errors.date.message}</p>}
        <textarea placeholder="description" {...register('description')}></textarea>
        {errors.description && <p>{errors.description.message}</p>}
        <input placeholder="images" {...register('images')}/>
        {errors.images && <p>{errors.images.message}</p>}
        <button>add event</button>
    </form>
    <button onClick={handleClick}>Creat tickets</button>
</div>
  )
}

export default CreateEvent