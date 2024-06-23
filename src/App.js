import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Headernav from '../src/components/Header/header';
import Footer from '../src/components/Footer/footer';
import Error from './pages/Error/error'
import APropos from './pages/APropos/APropos';
import Logements from './pages/Logements/logements';
import appartements from "./assets/logements.json";

const App = () => {
    return (
        <div>
            <Headernav/>
            <Routes>
                <Route path='/' element= {<Home/>}> </Route>
                <Route path='/apropos' element= {<APropos/>}> </Route>
                {appartements.map( 
                    (appart) => {
                        return <Route key={appart.id} path={"/logements" + appart.id} element= {<Logements id={appart.id}/>}> </Route>;
                    }
                )}
                <Route path='*' element= {<Error/>}> </Route>
            </Routes>
            <Footer/>
        </div>
    );
}
export default App