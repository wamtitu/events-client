import { useReducer, useEffect, createContext } from "react"

const reducer = (state, action)=>{
    switch (action.type) {
        case "login success":
            return{
                user: action.payload
            }
        case "login failed":
            return{
                user: null
            }
        case "logout":
            return{
                user: null
            }           
        default:
            return state;
    }
}

const initial_state = {
    user: JSON.parse(localStorage.getItem( 'user' )) || null
  
}

export const Context = createContext(initial_state)

export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initial_state)

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user)) 
        console.log(state.user)
    },[state.user])

    return(
        <Context.Provider value={{user: state.user, dispatch}}>
            {children}
        </Context.Provider>
    )
}