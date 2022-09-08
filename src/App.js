import './App.css';
import Card from './Component/Card';
import Spinner from './Component/Spinner';
import { useEffect, useState } from 'react';
import CardBody from './Component/CardBody';
import CardBody1 from './Component/CardBody1';


function App() {
  const [imgUrl, setImgUrl] = useState([]);
  const [price, setPrice] = useState('0');
  const [rank, setRank] = useState('');
  const [volume, setVolume] = useState('');
  const [marketCap, setMarketCap] = useState('');
  const[title,setTitle] = useState('Hello');
  const [card, setCard] = useState(false);
  const [coinList, setCoinList] = useState([]);
  const [input, setInput] = useState('');


  

  

  


  useEffect(() => {
    const fetchCoinData = async () => {
      const request = await fetch('https://api.coinstats.app/public/v1/coins');
    
      const datacoin = await request.json();
      const datacoin1=datacoin.coins;
     
      let element=[...coinList];
      let img= [...imgUrl]
      for (let index = 0; index <10; index++) {

        element.push( datacoin1[index] );
     }
      setCoinList(element);
     
    };
    fetchCoinData();
  }, []);

  

  const op= async (e)=>{
    console.log(input)
    const request = await fetch(
      'https://api.coinstats.app/public/v1/coins/' + input
    );
    const data = await request.json();
    console.log(data)
    setPrice(data.coin.price);
    setTitle(data.coin.id)
    setRank(data.coin.id)
    setImgUrl(data.coin.icon)
    setMarketCap(data.coin.marketCap)
    setVolume(data.coin.volume)
    setCard(true);
   
  };
  




  return (
    <div >
    
    {card ? (
      <>
        <CardBody1 title={title} price={price} rank={rank} imgUrl={imgUrl} volume={volume} marketCap={marketCap} classname1={"col text-center m-5"}/>
        </>
      ) : (
        <>
    
       
      <h1 className='mb-5 mt-5 text-center'>cryptocurrency price</h1>
      <Card coinList={coinList} />
       
      <h1 className='mb-5 mt-5 text-center'>Search for cryptocurrency by it's name </h1>

      <div className="input-group mb-3">
      <input type="text" onChange={(e) => setInput(e.target.value)} className="form-control" placeholder="Enter a currency name"/>
      <button className="btn btn-outline-secondary" type="button" onClick={op}>search</button>
            </div>
      </>
      )}

      </div>
  );
}

export default App;
