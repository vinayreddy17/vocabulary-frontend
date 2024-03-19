import React,{useEffect,useState} from 'react';
import axios from "axios";
import './App.css';
import Card from './Card';
import Backside from './Backside';
import Pagination from './components/Pagination';

function App() {

  const [cData, setCardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://words-gre.onrender.com/api/getwords');
        
        setCardData(response.data);
        console.log(cData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = cData.slice(firstPostIndex, lastPostIndex);

  
  return (
    <div className="App">
    <div>
      {currentPosts.map((card, index) => (
        <Card key={index} frontContent={card.Word} backContent={<Backside meaning={card.Meaning || card.Meanings} synonyms={card.Synonyms} examples={card.Examples}/>} />
      
  </div>
     <Pagination
                totalPosts={cData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </div>
  );
}

export default App;









// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import "./App.css";
// import CryptoList from "./components/CryptoList";
// import Pagination from "./components/Pagination";

// const App = () => {
//     const [coinsData, setCoinsData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage, setPostsPerPage] = useState(8);

//     useEffect(async () => {
//         const response = await axios.get(
//             "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//         );

//         setCoinsData(response.data);
//     }, []);

//     const lastPostIndex = currentPage * postsPerPage;
//     const firstPostIndex = lastPostIndex - postsPerPage;
//     const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

//     return (
//         <div className='app'>
//             <h1>Crypto Gallery</h1>
//             <CryptoList coinsData={currentPosts} />
//             <Pagination
//                 totalPosts={coinsData.length}
//                 postsPerPage={postsPerPage}
//                 setCurrentPage={setCurrentPage}
//                 currentPage={currentPage}
//             />
//         </div>
//     );
// };

// export default App;
