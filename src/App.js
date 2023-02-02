
import './App.css';
import Item from './components/Item';

function App() {

  

  const Words = [
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


  ]

  return (
    <div className="wrapper">
      <center><h1>My dictionary for a day!</h1></center>
      <div className="parent">
        
        {Words.map((w) => {
          return <Item key={w.id} name={w.name} translation={w.translation} color={w.color} />
        })}

      </div>
    </div>
  );
}

export default App;
