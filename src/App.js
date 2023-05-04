
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Summary } from './Components/Summary/Summary';
import BookingForm from './Components/Form/BookingForm';

function App() {



  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />}></Route>
        <Route path="show/:id" element={<Summary/>}></Route>
        <Route path='show/:id/bookingTicket' element={<BookingForm/>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
