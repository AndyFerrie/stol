import './App.css'
import ChairGrid from './components/chairs/ChairGrid';
import Header from './components/ui/Header';

const App = () => {

    return (
      
        <div className={"App"}>
            <Header />
            <ChairGrid />
        </div>
    );
}

export default App;