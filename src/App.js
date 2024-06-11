import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Headernav from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
// import './styles/home.css';
import Error from './pages/Error/error'

const App = () => {
    return (
        <div>
            <Headernav/>
            <Routes>
                {/* <Route path='/' element= {<Home/>}> </Route> */}
                <Route path='/' element= {<Error/>}> </Route>

            </Routes>
            <Footer/>
        </div>
    );
}
export default App