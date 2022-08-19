import { useState } from 'react';
import './App.css';
import Information from './components/Information';
import InterfaceUi from './components/Interface';
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
        <InterfaceUi data={data}/>
        <FaceRekognition img={img} result={Result} count={count}/>
        <Information result={result}/>
      </header>
    </div>
  );
}

export default App;
