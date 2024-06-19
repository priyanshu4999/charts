import './App.css'; 


import LineChart from './components/Chart';
import { useRef , useState , useEffect} from 'react';


function App() {

    
  return (
    <div className="App">
      <h1>{useRenderCount()}</h1>
      <LineChart/>

    </div>
  );
}

export default App;

function useRenderCount(){
  const renderCount = useRef(0)
  useEffect(()=>{
    renderCount.current++
  })
  return renderCount.current
}