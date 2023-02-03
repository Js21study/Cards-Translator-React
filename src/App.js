
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Item from './components/Item';

function App() {

  //додала local storage

  const [words, setWords] = useState(localStorage.getItem('words')? JSON.parse(localStorage.getItem('words')) : [
    {id:1, name: "Firmament", translation: "Небовид", color: "#7FFFD4"},
    {id:2, name: "Ranting", translation: "Висловлювання", color: "#40E0D0"},
    {id:3, name: "Skedaddle", translation: "Втеча", color: "#48D1CC"},
    {id:4, name: "Porcupine", translation: "Дикобраз", color: "#00CED1"},
    {id:5, name: "Gabbled", translation: "Бурмотати", color: "#5F9EA0"},
    {id:6, name: "Blister", translation: "Пухир", color: "#4682B4"},
    {id:7, name: "Altered", translation: "Змінено", color: "#B0C4DE"},
    {id:8, name: "Relentless", translation: "Невблаганний", color: "#B0E0E6"},
    {id:9, name: "Pounce", translation: "Накинутися", color: "#ADD8E6"},
    {id:10, name: "Revelation", translation: "Одкровення", color: "#87CEEB"},
    {id:11, name: "Imposter", translation: "Самозванець", color: "#87CEFA"},
    {id:12, name: "Splinter", translation: "Уламок", color: "#00BFFF"},
    {id:13, name: "Sappy", translation: "Соковитий", color: "#1E90FF"},
    {id:14, name: "Eligibility", translation: "Прийнятність", color: "#6495ED"},
    {id:15, name: "Prawns", translation: "Креветки", color: "#7B68EE"},
    {id:16, name: "Acquitted", translation: "Виправданий", color: "#4169E1"}
  ])

  const [inputValueName, setInputValueName] = useState('')

  const [error, setError] = useState('')
  const [inputValueTranslation, setInputValueTranslation] = useState('')

  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  const randomColorReady = "#" + randomColor;
  const isMounted = useRef(false)


  useEffect(() => {
    if (isMounted.current) {
      const jsonItems = JSON.stringify(words)
      localStorage.setItem('words', jsonItems)
    }
    isMounted.current = true
    
  }, [words])





  const onButtonAdd = () => {
    if (inputValueName && inputValueTranslation) {
      setWords([...words, {
        id:Math.random(), name: inputValueName, translation: inputValueTranslation, color: randomColorReady
      }]) 
    } else {
      return setError("Please, fill both fields!")
    }
    setError('')
    setInputValueName('')
    setInputValueTranslation('')
    console.log(words)
  }

  const onDelete = (id) => {
    setError('')
    setWords([...words].filter(el => el.id !== id))
  }


  return (
    <div className="wrapper">
      <center><h1>My dictionary for a day!</h1>
      <label htmlFor="valueName">For a word: </label>
      <input type="text" id='valueName' value={inputValueName} onFocus={() => {setError('')}} onChange={(e) => {setInputValueName(e.target.value)}} />
      <label htmlFor="valueTranslation">For a traslation: </label>
      <input type="text" id='valueTranslation'  value={inputValueTranslation} onFocus={() => {setError('')}} onChange={(e) => {setInputValueTranslation(e.target.value)}} />
      <button onClick={()=> onButtonAdd()}>+ add new word</button>
      <p className='error'>{error}</p>
      </center>
      {!words.length
      ?(<center className='blank-page'><h1>You don't have any words yet&#128528;</h1></center>)
      :(<div className="parent">
        
        {words.map((w) => {
          return <Item key={w.id} id={w.id} name={w.name} translation={w.translation} color={w.color} onDelete={onDelete}/>
        })}

      </div>
      )}
        <center>
          <hr />
        <p>© 2023 React</p>
    </center>
    </div>
  );
}

export default App;
