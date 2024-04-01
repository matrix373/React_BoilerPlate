// We can import assets and React functionality up here
// Oh, and I'm a JavaScript comment. You'll see
import {useState} from 'react';
import './App.css';


// - Here we have an array of objects
// - We might see this when we have multiple rows of results from our database or API
const beans = [
  { id: 1, title: 'Arabica', origin: 'Native to Ethiopia', flavor: 'Varaible-distinctly not bitter', bestuse: 'Brewed coffee', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Starr_070308-5472_Coffea_arabica.jpg/1280px-Starr_070308-5472_Coffea_arabica.jpg', isBrewedCoffe: true },
  { id: 2, title: 'Robusta', origin: 'Native to sub-Saharan Africa', flavor: 'Bitter, woody or nutty', bestuse: 'Coffee blends and espresso', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ripe_Seeds_Coffee_Robusta_Coorg_Karnataka_India_Feb24_D72_25688.jpg/800px-Ripe_Seeds_Coffee_Robusta_Coorg_Karnataka_India_Feb24_D72_25688.jpg', isBrewedCoffe: false  },
  { id: 3, title: 'Excelsa', origin: 'South Asia', flavor: 'Complex, tart, fruity and dark', bestuse: 'Brewed coffee and blends', image: 'https://perfectdailygrind.com/wp-content/uploads/2021/04/Excelsa-Coffee-3.jpg', isBrewedCoffe: true },
  { id: 4, title: 'Liberica', origin: 'South Asia', flavor: 'Unusual, nutty and woody', bestuse: 'Brewed coffee and desserts', image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Liberica_coffee_beans%2C_roasted.jpg', isBrewedCoffe: true  },
];


function CoffeTypes() {
  return (
    <div>
      {beans.map(bean => <BeanDetail key={bean.id} bean={bean} />)}
    </div>
  );
}

function BeanDetail({bean}) {
  return (
    <div>
      <BeanTitle bean={bean} />
      <ul>
        <li>Origin: {bean.origin}</li>
        <li>Flavor: {bean.flavor}</li>
        <li>Best Used By: {bean.bestuse}</li>
      </ul>
      {bean.image && (
        <img
          src={bean.image}
          alt={bean.title}
          style={{ 
            width: 'auto', height: 'auto'
          }}
        />
      )}
    </div>
  );
}

function BeanTitle({bean}) {
  return (
    <>
      <h2 style={{
        color: bean.isBrewedCoffe ? 'brown' : 'red'
      }}>{bean.title}</h2>
      
    </>
  );
}



function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
    alert('Are you not entertained?');
  }

  return (
    <button onClick={doMagic}>
      Magic {count} times
    </button>
  );
}

// This is the main component in the file
// It's called below using the 'export default' keywords
function App() {
  return (
    // Use className for CSS and HTML classes
    <div className="App">
      <CoffeTypes />
    </div>
  );
}

// The export default keywords specifiy the main component in the file
export default App;