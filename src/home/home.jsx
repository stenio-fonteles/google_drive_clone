import { AiOutlineCloudUpload } from "react-icons/ai"
import { useEffect, useState } from "react";

function Home(){
    const [ file, setFile ] = useState('');
    const [ filePreviewUrl, setFilePreviewUrl ] = useState('');

    useEffect(() => {
        if(!file) return;
    
        const urlObject = URL.createObjectURL(file)
        setFilePreviewUrl(urlObject)
    }, [file]);


    function submit() {
        const formData = new FormData();
    }

    return(
        <>
            <section className="flex">
                <section className=" w-1/3 h-screen bg-leftScreen text-center ">
                    <img src={filePreviewUrl} />
                </section>
                    <section className="bg-rightScreen h-screen w-2/3 border-l-border flex justify-center items-center">
                        <div className="flex justify-center items-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-auto h-auto bg-gray-50 rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                    <AiOutlineCloudUpload  size={'50%'}/>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" onChange={(e) => setFile(e.target.files[0])} type="file" className="hidden mb-px"  />
                            </label>
                        </div>     
                </section>
            </section>
        </>
    )
}

export default Home