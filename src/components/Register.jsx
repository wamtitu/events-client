import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './../styles/register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const schema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().required(),
    userPassword: yup.string().required(),
    confirmPassword: yup.string().required(),
})
function Signup() {
    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit= async (data)=>{
        // event.preventDefault();
        try {
            const response = await axios.post('https://eventapi.azurewebsites.net/users/register', data)
            navigate('/login')
            // console.log('user created:',response)
        } catch (error) {
            console.log(error, ':user already exists')
        }
    }
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit(onsubmit)}>
            <h6>fill the form to register</h6>
            <input placeholder="fullname" {...register('fullname')} />
            {errors.fullname && <p>{errors.fullname.message}</p>}
            <input placeholder="email" {...register('email')}/>
            {errors.email && <p>{errors.email.message}</p>}
            <input placeholder="userPassword" {...register('userPassword')}/>
            {errors.userPassword && <p>{errors.userPassword.message}</p>}
            <input placeholder="confirmPassword" {...register('confirmPassword')}/>
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Signup