
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Summary } from './Components/Summary/Summary';
import BookingForm from './Components/Form/BookingForm';
import { Error404Page } from './Components/Error404Page/Error404Page';

function App() {



  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home />}></Route>
        <Route path="show/:id" element={<Summary/>}></Route>
        <Route path='show/:id/bookingTicket' element={<BookingForm/>}></Route>
        <Route path="/*" element={<Error404Page/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
