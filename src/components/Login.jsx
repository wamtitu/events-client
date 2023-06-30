import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Context } from '../context/usercontext'
import { useContext } from 'react'
const schema = yup.object({
    email: yup.string().required('email is required'),
    password: yup.string().required('password is required'),
})

function Login() {
    const {user, dispatch} = useContext(Context)
    console.log(user)

     const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onsubmit= async (data)=>{
        // console.log(data)
        axios.post('http://127.0.0.1:3000/users/login', data)
            .then(({data}) => {
                if(data.token){
                    console.log(data.token)
                    dispatch({type: "login success", payload: data})
                    alert('loggin success')
                    navigate('/events')
                }
            })
            .catch(({response}) => {
                alert(response.data.error)
            })

            // const token = response.data.token;
            // token ?localStorage.setItem('authToken', token) :alert('invalid credentials')
            // console.log('user loggedin:',response)
    }
  return (
    <div>
    <div className="form-container">
        <form onSubmit={handleSubmit(onsubmit)}>
            <h6>enter email and password to login</h6>
            <input placeholder="email" {...register('email')}/>
            {errors.email && <p>{errors.email.message}</p>}
            <input placeholder="password" {...register('password')}/>
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit"/>
        </form>
    </div>
    </div>
  )
}

export default Login