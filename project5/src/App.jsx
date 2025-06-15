
import Modal from './component/Modal';
import Route from './component/Route';
import Sidebar from './component/Sidebar';
import AccordionPage from './pages/AccordionPage';
import CounterPage from './pages/CounterPage';
import DropdownPage from './pages/DropdownPage';
import ImagePage from './pages/ImagePage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
function App() {
 


  return (
    <div className=' flex container mx-auto w-full gap-15 mt-4 '>
      
       <Sidebar/>
      
       <div className='col-span-5'>
        <Route path='/accordion'><AccordionPage/></Route>
        <Route path='/'><DropdownPage/></Route>
        <Route path='/images'><ImagePage/></Route>
        <Route path='/modal'><ModalPage/></Route>
        <Route path='/table'><TablePage/></Route>
        <Route path='/count'><CounterPage initialCount={5}/></Route>
       </div>
      
    </div>
  );
}

export default App;
