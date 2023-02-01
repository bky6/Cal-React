import './App.css';
import Add from './components/Add';
import Sub from './components/Sub';
import Mul from './components/Mul';
import Div from './components/Div';
// import User from './components/User';
// import UsersListing from './components/UsersListing';

function App() {
  return ( 
    <>
      <Add />
      <Sub />
      <Mul />
      <Div />
      {/* <User user={{name:"khushal",age:19,city:"ahmedabad"}} /> */}
      {/* <UsersListing /> */}

      <center><h3> designed by: khushal</h3></center>
    </>
  );
}
export default App;