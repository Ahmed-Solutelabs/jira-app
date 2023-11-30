import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <p>Ahmed kazi</p>
        <button onClick={() => fetch('https://mocki.io/v1/a91f45fd-e5b6-45c6-abfb-82654f28a56e')
                 .then(response => response.json())
                  .then(data => console.log(data))
                  .catch(error => console.error(error))}>Add+</button>
    </div>
  );
}

export default App;
