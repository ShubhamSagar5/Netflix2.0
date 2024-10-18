import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div>
    <Toaster/>
      <Body/>
    </div>
  );
}

export default App;
