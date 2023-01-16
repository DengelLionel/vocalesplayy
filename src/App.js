
import { NavLink } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className='bg-blue-500  h-full w-full flex justify-center items-center md:w-[500px] md:h-[500px]'>
    <NavLink
    to="/registrarse"
     type="button"
     className="  bg-indigo-500 w-[300px] text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline outline-none"
   >Iniciar</NavLink>

 </div>
  );
}

export default App;
