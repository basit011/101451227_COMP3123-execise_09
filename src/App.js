import logo from './logo.svg';
import './App.css';
import Student from './Student.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Student name="Basit Ali" 
        studentID={101451227} 
        college="George Brown College, Toronto" />


      </header>
    </div>
  );
}

export default App;
