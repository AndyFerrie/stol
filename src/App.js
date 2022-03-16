import './App.css'
import chairData from './db.json'
import Header from './components/ui/Header';

const App = () => {

    return (
      
        <div className={"App"}>
            <Header />
            {chairData.results.map(chair => 
            <>
              <img src={chair.urls.small} alt="" ></img>
              <p>{chair.productName}</p>
            </>
            )}
        </div>
    );
}

export default App;