import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './../styles/register.css'
import axios from 'axios'

const schema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().required(),
    userPassword: yup.string().required(),
    confirmPassword: yup.string().required(),
})
function Signup() {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit= async (data)=>{
        // event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3000/users/register', data)
            console.log('user created:',response)
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