
import ChargingStations from './User/ChargeStaions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Sidebar from './User/Sidebar';
import Home from './Components/Home';
import Pricing from './User/Pricing';
import LoadScriptWrapper from './User/LoadScriptWrapper';
import Uhome from './User/Uhome';
import Login from './User/Login';
import Signup from './User/Signup';
import Alogin from './Admin/Alogin';
import Asignup from './Admin/Asingup';
import Users from './Admin/Users';
import Ahome from './Admin/Ahome';
import Achargepoints from './Admin/Achargepoints';
import Addchargestaion from './Admin/Addchargestation';
import Editchargestation from './Admin/Editchargestation';
import EditUser from './Admin/EditUser';
import BookSlot from './User/BookSlot';
import Mybookings from './User/Mybookings';


function App() {
  return (
    <div  >
      <LoadScriptWrapper>
    <BrowserRouter>
           <div>
          <Routes>
            <Route path='/' element={<Home/>} />

            {/* Admin */}
            <Route path='/alogin' element={<Alogin/>} />
            <Route path='/asignup' element={<Asignup/>} />
            <Route path='/ahome' element={<Ahome/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/edituser/:id' element={<EditUser />} />
            <Route path='/achargepoints' element={<Achargepoints/>} />
            <Route path='/addchargestation' element={<Addchargestaion/>} />
            <Route path='/editchargestation/:id' element={<Editchargestation />} />


            {/* User */}
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/uhome' element={<Uhome/>} />
            <Route path='/chargestation' element={<ChargingStations/>} />
            <Route path='/bookslot/:id' element={<BookSlot/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/mybookings' element={<Mybookings/>} />
            {/* <Route path='/favorities' element={<Favorities/>} />
            <Route path='/playlist' element={<Playlist/>} /> */}
           </Routes>
          </div>
        </BrowserRouter>
        </LoadScriptWrapper>
   </div>
  );
}

export default App;
