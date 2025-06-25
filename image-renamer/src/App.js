import React, {useState, useRef} from 'react';
import JSZip from 'jszip';

function App() {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelection = (event) => {
    const files = Array.from(event.target.files);
    console.log('Wybrane plików:', files);
    setSelectedFiles(files);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const downloadSingleFile = (originalFileName) => {
    const newFileName = createNewFileName(originalFileName.name);

    const link = document.createElement('a');
    link.href = URL.createObjectURL(originalFileName);
    link.download = newFileName;
    link.click();
  };
  const createNewFileName = (originalName) => {
    const indexOfDot = originalName.lastIndexOf('.');
    const nameWithoutExt = indexOfDot > 0 ? originalName.substring(0, indexOfDot) : originalName;
    const extension = indexOfDot > 0 ? originalName.substring(indexOfDot) : '';
    return `${prefix}${nameWithoutExt}${suffix}${extension}`;
  }

  const downloadAllFiles = async () => {
    for (let i=0; i<selectedFiles.length; i++) {
      await downloadSingleFile(selectedFiles[i]);
      await new Promise(resolve => setTimeout(resolve, 200)); // Delay to avoid browser issues
    }
  };
  
  const clearAllFiles = () => {
    setSelectedFiles([]);
    setPrefix('');
    setSuffix('');
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    selectedFiles.forEach(file => {
      const newFileName = createNewFileName(file.name);
      zip.file(newFileName, file);
    });
    const content = await zip.generateAsync({ type: 'blob' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = 'renamed_photos.zip';
    link.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const files = Array.from(event.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setSelectedFiles(prev => [...prev, ...imageFiles]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
  <div className="bg-gray-100 shadow-lg rounded-xl p-10 w-full max-w-2xl flex flex-col items-center">
    <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Change Photos Name</h1>
   
    <input
      ref={fileInputRef}
      type="file"
      multiple
      accept="image/*"
      onChange={handleFileSelection}
      className="hidden"
    />

    <div 
      className={`w-full border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${
      isDragging ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={openFileDialog}
    >
      <p className="text-lg text-gray-600 mb-4">Click or drop images here</p>
      <div className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow inline-block">
        Choose photos
      </div>
    </div>
            

        <div className="flex items-center w-full mt-4">
          <label className="text-sm font-medium text-gray-700 mr-2 w-20">Prefix:</label>
          <input
            type="text"
            placeholder="img_"
            className="flex-1 border rounded-lg p-2"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
          />
        </div>
        <div className="flex items-center w-full mt-4">
          <label className="text-sm font-medium text-gray-700 mr-2 w-20">Suffix:</label>
          <input
            type="text"
            placeholder="_00_"
            className="flex-1 border rounded-lg p-2"
            value={suffix}
            onChange={(e) => setSuffix(e.target.value)}
          />
        </div>
      
        {selectedFiles.length > 0 && (
          <div className="mt-6 w-full text-center py-4">
            <h3>Preview of new image titles:</h3>
            {selectedFiles.map((file, index) => (
              <div key={index} className='mt-2'>
                {createNewFileName(file.name)}
              </div>
            ))}
      </div>
        )}
        <div className="mt-6 w-full  space-x-2 flex items-center justify-center">
      
        <button
          onClick={downloadZip}
          className="mt-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
            Download Zip
        </button>
        </div>
        <br/>
        {selectedFiles.length > 0 && (
          <button
            onClick={clearAllFiles}
            className="mt-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow">
              Clear All
          </button>
        )}
    </div>
  
  </div>
  );
}
  


export default App;
