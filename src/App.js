import './App.css';
import ChairGrid from './components/chairs/ChairGrid';
import Header from './components/ui/Header';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChairDetail from './components/chairs/ChairDetail';

const App = () => {

    return (
      
    <Router>
        <div className={"App"}>
            <Header />
            <Routes>
                <Route exact path="/" element={<ChairGrid />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/:id" element={<ChairDetail />}/>
            </Routes>
        </div>
    </Router>
        
    );
}

export default App;