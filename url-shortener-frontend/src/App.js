import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import logo from "./logo.png"; // Ensure you have logo.png in the src folder

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    setError("");
    try {
      const response = await axios.post("http://localhost:4000/shortner", {
        URL: url,
      });
      setShortUrl(response.data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
  };

  const resetForm = () => {
    setUrl("");
    setShortUrl("");
  };

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Puny Url</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {shortUrl ? (
          <div className="result-container">
            <a
              className="short-url"
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <input type="url" value={shortUrl} readOnly />
            </a>
            <button type="button" onClick={copyToClipboard}>
              Copy
            </button>
            <button type="button" onClick={resetForm} className="new-url-btn">
              Shorten a new URL
            </button>
          </div>
        ) : (
          <div className="input-container">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste your URL here to shorten"
              className={error ? "error" : ""}
              required
            />
            <button type="submit">Shorten URL</button>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import axios from "axios";
// import logo from "./logo.png"; // Ensure you have logo2.png in the src folder

// function App() {
//   const [url, setUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!url) {
//       setError("Please enter a URL");
//       return;
//     }
//     setError("");
//     try {
//       const response = await axios.post("http://localhost:4000/shortner", {
//         URL: url,
//       });
//       setShortUrl(response.data);
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(shortUrl);
//     alert("Short URL copied to clipboard");
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <img src={logo} alt="Logo" className="logo" />
//         <h1>Puny Url</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           placeholder="Paste your URL here to shorten"
//           className={error ? "error" : ""}
//           required
//         />
//         <button type="submit" className={error ? "move-button" : ""}>
//           Shorten URL
//         </button>
//         {error && <p className="error">{error}</p>}
//       </form>
//       {shortUrl && (
//         <div className="result">
//           <a
//             className="short-url"
//             href={shortUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <input type="url" value={shortUrl} readOnly />
//           </a>
//           <button onClick={copyToClipboard}>Copy</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
