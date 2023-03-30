import './App.css';
import GOT from './bookSection'

function App() {

  const soviet = (title, characters) => {
    console.log(title,characters)
  }
  return (
    <div className="App">
      <GOT title="Game Of Thrones" 
      description="Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King's Landing. There Eddard Stark of Winterfell rules in Robert's name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season." 
      characters={['Daenerys Targaryen', 'Jaime Lannister', 'Catelyn Stark', 'Cersei Lannister', 'Tyrion Lannister', 'Jon Snow']} shxlup={soviet}/>
    </div>
  );
}

export default App;
