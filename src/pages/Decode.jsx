import { useState } from "react";
import CryptoJS from 'crypto-js';

const Decode = () => {
    const [element,setElement] = useState({
        plainText: '',
        cipherText:'',
        key:''
    })

    function handleChange(e) {
        const {name,value} = e.target
        setElement(prevState=> {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    function setPlainText(value) {
        setElement(prevState=> {
            return {
                ...prevState,
                plainText : value
            }
        })
    }
    
    const handleEncrypt = (e) => {
        e.preventDefault()
        const decrypted = CryptoJS.AES.decrypt(element.cipherText, element.key).toString(CryptoJS.enc.Utf8);
        setPlainText(decrypted);
    };

    return (
        <div id="decode" className="font-poppins text-shine flex flex-col gap-10 h-[100vh] items-center justify-center text-xl mt-20">
            <div className="title text-center">
                <h2 className="text-4xl  font-bold text-accent">Decode</h2>
                <p className="text-2xl">Decode your cipher text into plain text.</p>
            </div>
            <form action="" className="flex-col flex gap-14" onSubmit={handleEncrypt}>
                <div className="flex flex-col gap-5">
                    <label htmlFor="key">input your key here : </label>
                    <input type='text' name="key" id="key" className="input" value={element.key} onChange={handleChange}/>
                </div>
                <div className="flex gap-14">
                    <div className="flex flex-col gap-5">
                        <label htmlFor="">Insert your cipher text here : </label>
                        <textarea name="cipherText" id="" cols="30" rows="10" className="input" value={element.cipherText} onChange={handleChange}></textarea>
                        <button className="btn-accent">Decrypt</button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="">Your plain text are : </label>
                        <textarea name="plainText" id="" cols="30" rows="10" className="input" value={element.plainText}></textarea>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default Decode;