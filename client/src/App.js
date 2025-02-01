import { useRef, useState, useEffect } from "react";
import "./App.css";
import { UploadFile } from "./service/api";

function App() {
  const [file, setfile] = useState("");
  const [result, setresult] = useState("");
  const fileInput = useRef();
  const onUploadclick = () => {
    fileInput.current.click();
  };
  useEffect(() => {
    const getFile = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await UploadFile(data);
        setresult(response.path);
      }
    };
    getFile();
  }, [file]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 to-black p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[500px] text-center">
        <h1 className="text-5xl font-bold text-gray-700">File Sharer</h1>
        <p className="text-xl text-green-600 mt-2">Insert Your File</p>

        <div className="mt-6">
          <button
            onClick={() => onUploadclick()}
            className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md 
                   hover:bg-green-600 transition-all duration-300"
          >
            Upload File
          </button>

          <input
            type="file"
            ref={fileInput}
            className="hidden"
            onChange={(e) => setfile(e.target.files[0])}
          />
        </div>

        {/* Show selected file name */}
        {file && (
          <p className="text-gray-500 mt-3 text-sm">Selected: {file.name}</p>
        )}

        {/* Download link */}
        {result && (
          <a
            href={result}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Download File
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
