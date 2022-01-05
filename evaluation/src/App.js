import { useSelector } from 'react-redux';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

function App() {

  const {isAuth} = useSelector((state)=>state.auth)

  return isAuth?(
    <div className="App">
      <Home/>
    </div>
  ):(
    <Login/>
  )
}

export default App;
