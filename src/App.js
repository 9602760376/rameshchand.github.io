import logo from './logo.svg';
import './App.css';
import { Home } from './componets/Home';
import TopNav from './componets/TopNav';

function App() {
  return (<>
   <TopNav></TopNav>
   <Home></Home>
    <about></about>
  <contact></contact>
   </>
  );
}

export default App;
