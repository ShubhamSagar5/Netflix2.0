import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {Toaster} from 'react-hot-toast'
import VideoDialog from './utils/VideoDialog';

function App() {
  return (
    <div className='bg-black'>
    <Toaster/>
      <Body/>
      <VideoDialog/>
    </div>
  );
}

export default App;
