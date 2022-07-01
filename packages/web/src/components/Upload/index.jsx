import React from 'react';
import { types } from '../../utils/mediaFormats'
import { AiOutlineCloudUpload } from 'react-icons/ai';

function Upload({setFile, setFileType, setFilePreviewUrl}) {
  
  const handleFileChange = (e) => {
    const fileInputValue = e.target.files[0];
    if(!fileInputValue) return
  
    const urlObject = URL.createObjectURL(fileInputValue)
    
    setFile(fileInputValue);
    setFileType(types[fileInputValue.type]);
    setFilePreviewUrl(urlObject)
  }

  return (
    <div data-testid="upload-component" className="flex justify-center items-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-auto h-auto bg-gray-50 rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <AiOutlineCloudUpload  size={'50%'}/>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" onChange={handleFileChange} type="file" className="hidden mb-px"  />
        </label>
    </div>  
  );
}

export default Upload;