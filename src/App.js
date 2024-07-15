import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';
import Header from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
import Error from './pages/Error/error'
import APropos from './pages/APropos/APropos';
import Logements from './pages/Logements/logements';

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element= {<Home/>}> </Route>
                <Route path='/apropos' element= {<APropos/>}> </Route>
                <Route path="/Logements/:id" element={<Logements />}></Route>
                <Route path='/error' element= {<Error/>}> </Route>              
                <Route path='*' element= {<Error/>}> </Route>
            </Routes>
            <Footer/>
        </div>
    );
}
export default App