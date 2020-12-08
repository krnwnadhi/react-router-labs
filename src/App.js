import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Counter from './Pages/Counter';
import { BrowserRouter as Router, Route } from 'react-router-dom'    //as untuk rename


function App() {
    return (
        <div className="App">
            <Router>
                <Route path='/home' component={Home} />
                <Route path='/profile' component={Profile} />
                <Route path='/counter' component={Counter} />
            </Router>
        </div >
    );
}

export default App;