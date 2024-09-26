import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin';


function App() {
  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('Bitcoin')
  useEffect(() => {
    axios.get('')
    .then(res=>{
       setCoins(res.data)
       console.log(res.data)
    }).catch(error=>console.log(error))
  }, [])
  const handleChange = e =>{
    setSearch(e.target.value)
    console.log(search)
    filteredCoins()
  }
  const filteredCoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className="coin-app">
      <div className="coin-search">
         <h1 className="coin-text">Search your desired coin</h1> 
        <form action="">
          
          <input type="text" name="s" className="coin-input" placeholder="Provide coin name"
        onChange={(e) => handleChange(e.target.value)} required/>
        </form>

      </div>
      {filteredCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
//           volume={coin.total_volume}
          />
        );
      })}


    </div>
  );
}

export default App;
