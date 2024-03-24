import { useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function App() {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const handleClear = () =>{
    sign.clear();
  };

  const handleSave = () => {
    const imageData = sign.getTrimmedCanvas().toDataURL('image/png');
    setUrl(imageData);
    downloadImage(imageData, 'signature.png');
  };

  const downloadImage = (data, filename) => {
    const link = document.createElement('a');
    link.href = data;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div style={{border:"2px solid black"}}>
        <SignatureCanvas 
          canvasProps={{width:1000, height: 500, className:"sigCanvas"}}
          ref={data => setSign(data)}
          penColor='black'
        />
      </div>
      <div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <img src={url} alt="Signature" />
      </div>
    </>
  );
}

export default App;
