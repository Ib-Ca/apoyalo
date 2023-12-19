
import './App.css';
import Card  from "./componentes/Component.js"

function App() {
  return (
    <div>
      <Card  firstName="John" lastName="Doe" age={45} hairColor="Black" />
      <Card  firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <Card  firstName="Fillmore" lastName="Millard" age={50} hairColor="Brown" />
      <Card  firstName="Smith" lastName="Maria" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
