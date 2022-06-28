import { useState } from "react";
import Upload from "../../components/Upload";

function Home(){
    const [ , setFile ] = useState('');
    const [ fileType, setFileType ] = useState('');
    const [ filePreviewUrl, setFilePreviewUrl ] = useState('');

    return(
        <>
            <section className="flex">
                <section className=" w-1/3 h-screen bg-leftScreen text-center">
                    {fileType === "image" && (
                        <img src={filePreviewUrl} alt="preview"/>
                    )}
                    {fileType === "video" && (
                        <video src={filePreviewUrl} controls alt="preview"/>
                    )}
                </section>
                <section className="bg-rightScreen h-screen w-2/3 border-l-border flex justify-center items-center">
                    <Upload 
                        setFile={setFile} 
                        setFileType={setFileType} 
                        setFilePreviewUrl={setFilePreviewUrl} 
                    />
                </section>
            </section>
        </>
    )
}

export default Home