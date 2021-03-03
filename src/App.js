import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Player from './Components/Player/Player';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://api.mocki.io/v1/715bc63b')
      .then(resp => resp.json())
      .then(data => setPlayers(data))
      .catch(error => console.log(error))
  }, []);

  const handleSelectBtn = (players) => {
    const newCart = [...cart, players];
    setCart(newCart);
  };

  

  return (
    <div className="container app-container">
      <div className="player-container">
        {
          players.map(player => <Player playersInfo={player} handleSelectBtn={handleSelectBtn}></Player>)
        }
      </div>
      <div className="cart-container">
          <h1>Player Added: {cart.length}</h1>
          <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
