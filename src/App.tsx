import { useState } from 'react';
import './App.css';
import Interface from './components/Interface';
import FaceRekognition from './function/Rekognition';

interface Img {
  fileName: string;
  base64: string
}

function App() {
  const [convertFile, setConvertFile] = useState<Img>();
  const [result, setResult] = useState<any>();
  const [img, setImg] = useState<string>("");
  const [count, setCount] = useState(0);

  const data = (value: Img) => {
    setConvertFile(value);
  }

  const Result = (e:any) => {
    setResult(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Interface data={data}/>
        <FaceRekognition img={img} result={Result} count={count}/>
      </header>
    </div>
  );
}

export default App;
