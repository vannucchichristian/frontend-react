//import logo from './logo.svg';
//import EtichettaSaluto from "./EtichettaSaluto";
import Box from './Box';
import './esFlexbox.css';

function App() {
  return (
    <div className="flex-container">
      <div className="row">
          <Box bg_color="orchid" />
          <Box bg_color="mediumvioletred" />
          <Box bg_color="orchid" />
      </div>
      <div className="row">
          <Box bg_color="white" />
      </div>
      <div className="row">
          <Box bg_color="green" />
          <Box bg_color="peru" />
      </div>
  </div>
  );
}

export default App;
