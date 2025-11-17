import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  
  const handleSubmit=(e) => {
    e.preventDefault();
    const cleaned = text.trim();

    if (!cleaned) return;
    setQrCode(cleaned);
  }
  return (
    <div className ="app">
      <div className="card">
        <h1 className="title">QR Code Generator</h1>
        <p className="subtitle">
          Enter text or URL to generate QR code
          <span className= "highlight"> One click QR Code Generator</span>
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Enter text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="button" type="submit">Generate QR Code</button>
        </form>
        {qrCode && (
          <div className="qr-wrapper">
            <div className="qr-box">
              <QRCode value={qrCode} />
            </div>
            <p className="qr-caption">{qrCode}</p>
          </div>
        )}
      </div>
    </div>

  )
}
export default App;