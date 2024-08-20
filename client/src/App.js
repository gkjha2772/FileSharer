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
    <div className=" bg-black m-16 p-8 ">
      <div className="flex-col bg-white justify-center text-center m-6 p-4 ">
        <h1 className="text-[64px] text-gray-400 ">File Sharer</h1>
        <h1 className="text-[32px] text-green-600 ">Insert Your File</h1>
        <button
          onClick={() => onUploadclick()}
          className="  border-8 border-gray-500 bg-gray-300 px-3 py-1 rounded m-3"
        >
          Upload
        </button>
        <input
          type="file"
          ref={fileInput}
          className=" hidden"
          onChange={(e) => setfile(e.target.files[0])}
        />
        <a href={result} target="blank" className="block">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
