import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Navbarlanding from '../components/navbar-landing'
import Home from '../components/Home'
import Footer from '../components/Footer'
import Myevents from './Myevents'
import CreateEvent from '../components/CreateEvent'
import TicketsPage from './TicketsPage'
import EventPage from './EventPage'
import OnsightEvents from './onsightEvents'
import OnlineEvents from './onlineEvents'
import Updateevents from './updateEvent'
import CreateTickets from './CreateTickets'

function LandingPage() {
  return (
    <BrowserRouter>
    <Navbarlanding/>
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/events' element = {<Myevents/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='*' element = {<NotFound/>}></Route>
        <Route path='/createEvent' element = {<CreateEvent/>}></Route>
        <Route path='/buyTickets' element = {<TicketsPage/>}></Route>
        <Route path="/events/:id" element={<EventPage/>} />
        <Route path="/events/edit/:id" element={<Updateevents/>} />
        <Route path="/onlineevents" element={<OnlineEvents/>} />
        <Route path="/liveevents" element={<OnsightEvents/>} />
        <Route path="/createTickets" element={<CreateTickets/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default LandingPage