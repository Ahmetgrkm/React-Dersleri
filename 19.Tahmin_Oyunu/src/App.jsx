import { useState, useEffect } from 'react'
import './App.css'
import { Card } from './components/Card';

function App() {

  const defaultCards = [
    {

      path: "/img/ananas.jpeg",
      matched: false,
    },
    {

      path: "/img/çilek.jpeg",
      matched: false,
    },
    {

      path: "/img/elma.jpeg",
      matched: false,
    },
    {

      path: "/img/karpuz.jpeg",
      matched: false,
    },
    {

      path: "/img/kiraz.jpeg",
      matched: false,
    },
    {

      path: "/img/muz.jpeg",
      matched: false,
    },
  ];

  const [cards, setCards] = useState([]);
  const [SelectedOne, setSelectedOne] = useState(null);
  const [SelectedTwo, setSelectedTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);


  const prepareCards = () => {
    const sortedCards = [...defaultCards, ...defaultCards].sort(
      () => 0.5 - Math.random()).map(card => ({ ...card, id: Math.random() }));


    setCards(sortedCards);
    resetState();
  };

  const handleSelected = (card) => {
    if (disabled) return true;
    SelectedOne ? setSelectedTwo(card) : setSelectedOne(card);
  }

  useEffect(() => {
    prepareCards();
  }, []);

  useEffect(() => {
    if (SelectedOne && SelectedTwo) {
      setDisabled(true);

      if (SelectedOne.path == SelectedTwo.path) {
        setCards(prev => {
          return prev.map(card => {
            if (card.path == SelectedOne.path) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          });
        });
        resetState();
      } else {
        setTimeout(() => {
          resetState();
        }, 1000);
      }
    }
  }, [SelectedOne, SelectedTwo]);

  const resetState = () => {
    setSelectedOne(null);
    setSelectedTwo(null);
    setDisabled(false);
  }


  return (
    <div style={{ marginTop: '-30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'cursive', fontSize: '30px', textAlign: 'center' }}>Kart Tahmin Oyunu</h1>

      <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', padding: '0px' }}>
        <button onClick={() => prepareCards()} className='button'>Oyunu Başlat</button>
      </div>

      <div className='cards'>
        {
          cards.map((card, ind) => (
            <Card
              card={card}
              key={ind}
              handleSelected={handleSelected}
              disabled={disabled}
              rotated={card == SelectedOne || card == SelectedTwo || card.matched} />
          ))
        }

      </div>
    </div >
  )
}

export default App
