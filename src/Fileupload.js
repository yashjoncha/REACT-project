import React, { useEffect, useRef, useState } from 'react';
import useFileUpload from 'react-use-file-upload';

const Fileupload = () => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxCharCount = 100;

  const handleTextareaChange = (e) => {
    const inputText = e.target.value;
    setCharCount(inputText.length);
    setMessage(inputText);

    // Limit the message to 100 characters
    if (inputText.length > maxCharCount) {
      setMessage(inputText.slice(0, maxCharCount));
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      // submitLogin(toggleHome);
    }, 5000);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timerId);
  }, []);

  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    setData(files);
    e.preventDefault();

    const formData = createFormData();
    console.log(formData);
    // Add logic for handling file submission
  };

  const handleClear = () => {
    clearAllFiles();
    setData([]);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center p-5 dubai1">
      <form className="border p-3 dubaichild" action="https://formspree.io/f/xzblldqv" method="POST">
        <h2>TELL US YOUR QUERY</h2>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Name:</label>
          <input
            name='Name'
            className="form-control"
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div>
          <label htmlFor="message">Write About Your Query (Max 100 characters):</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleTextareaChange}
            style={{ width: '300px', height: '100px' }}  // Set specific width and height
            required
          />
          <p>Characters remaining: {maxCharCount - charCount}</p>
        </div>

        <h1>Upload Files </h1>

        <p>Please use the form to your right to upload any file(s) of your choosing.</p>

        <div className="form-container">
          <div css={""}>
            <ul>
              {fileNames.map((name) => (
                <li key={name}>
                  <span>{name}</span>

                  <span onClick={() => removeFile(name)}>
                    <i className="fa fa-times" />
                  </span>
                </li>
              ))}
            </ul>

            {files.length > 0 && (
              <ul>
                <li>File types found: {fileTypes.join(', ')}</li>
                <li>Total Size: {totalSize}</li>
                <li>Total Bytes: {totalSizeInBytes}</li>

                <li className="clear-all">
                  <button onClick={handleClear}>Clear All</button>
                </li>
              </ul>
            )}
          </div>

          <div
            onDragEnter={handleDragDropEvent}
            onDragOver={handleDragDropEvent}
            onDrop={(e) => {
              handleDragDropEvent(e);
              setFiles(e, 'a');
            }}
          >
            <p>Drag and drop files here</p>

            <button onClick={() => inputRef.current.click()}>Or select files to upload</button>

            <input
              ref={inputRef}
              type="file"
              multiple
              style={{ display: 'none' }}
              onChange={(e) => {
                setFiles(e, 'a');
                inputRef.current.value = null;
              }}
              placeholder="Dubaiii"
            />
          </div>
          {data.length > 0 && (
            <img src={URL.createObjectURL(files[0])} alt="Uploaded file" />
          )}
        </div>

        <button type="submit" className="btn btn-primary submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Fileupload;
