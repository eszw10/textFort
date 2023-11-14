import { useState } from "react";
import CryptoJS from 'crypto-js';

const Decode = () => {
    const [plainText,setPlainText] = useState('')
    const [cipherText,setCipherText] = useState('')
    
    const handleDecrypt = (e) => {
        e.preventDefault()
        const decrypted = CryptoJS.AES.decrypt(cipherText, 'secret-key').toString(CryptoJS.enc.Utf8);
        setPlainText(decrypted);
    };

    return (
        <div id="decode" className="font-poppins text-shine flex flex-col gap-10 h-[90vh] items-center justify-center text-xl">
            <div className="title text-center">
                <h2 className="text-4xl  font-bold text-accent">Decode</h2>
                <p className="text-2xl">Decode your cipher text into plain text.</p>
            </div>
            <form action="" className="flex gap-14" onSubmit={handleDecrypt}>
                <div className="flex flex-col gap-5">
                    <label htmlFor="">Insert your cipher text here : </label>
                    <textarea name="cipherText" id="" cols="30" rows="10" className="input" value={cipherText} onChange={(e)=>setCipherText(e.target.value)}></textarea>
                    <button className="btn-accent">Decrypt</button>
                </div>
                <div className="flex flex-col gap-5">
                    <label htmlFor="">Your plain text are : </label>
                    <textarea name="plainText" id="" cols="30" rows="10" className="input" value={plainText}></textarea>
                </div>
            </form>
        </div>
    );
}
 
export default Decode;