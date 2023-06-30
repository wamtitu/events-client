import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import '../styles/evenform.css'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const schema = yup.object({
    price: yup.string().required(),
    eventID: yup.string().required(),
    availabilitystatus: yup.string().required()
})

function CreateTickets() {
    const onsubmit= async (data)=>{
        // event.preventDefault();
        const response = await axios.post('http://127.0.0.1:3000/events/tickets', data)
            console.log(response.data)
    }

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });
  return (
    <div style={{marginTop:'15vh'}}>
        <div className="create-event-form-container">
        <form className='event-form' onSubmit={handleSubmit(onsubmit)}>
            <h2 className='fade-in' >Create tickets</h2>
            <input placeholder="eventID" {...register('eventID')} />
            {errors.eventID && <p>{errors.eventID.message}</p>}
            <input placeholder="price" {...register('price')} />
            {errors.price && <p>{errors.price.message}</p>}
            <input placeholder="availabilitystatus" {...register('availabilitystatus')}/>
            {errors.availabilitystatus && <p>{errors.availabilitystatus.message}</p>}
            <button>add ticket</button>
        </form>
        </div>
    </div>

  )
}

export default CreateTickets