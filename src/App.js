import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Headernav from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
import './styles/home.css';

const App = () => {
    return (
        <div>
            <Headernav/>
            <Routes>
                <Route path='/' element= {<Home/>}> 
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}
export default App