import reactImg from './assets/react-core-concepts.png';                   // reactImg is used for fetching the image from this location and then later on used below,
                                                                           // also we can give any name of our choice like reactImg etc.
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (<header>
    <img src={reactImg} alt="Stylized atom" />                             // here we have used the above image import.
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>);
}

function App() {
  return (
    <div>
      <Header />                          // here we are using the upper Header component, we can also use the syntax <Header></Header> and <Header /> this is called self closing tag.
      <main>                                    
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;







                                                                    

