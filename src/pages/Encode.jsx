import CryptoJS from 'crypto-js';
import { useState } from 'react';

const Encode = () => {
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

    function setCipherText(value) {
        setElement(prevState=> {
            return {
                ...prevState,
                cipherText : value
            }
        })
    }

    const handleEncrypt = (e) => {
        e.preventDefault()
        const encrypted = CryptoJS.AES.encrypt(element.plainText, element.key).toString();
        setCipherText(encrypted);
    };

    return (
        <div id='encode' className="font-poppins text-shine flex flex-col gap-10 h-[90vh] items-center justify-center text-xl">
            <div className="title text-center">
                <h2 className="text-4xl font-bold text-accent">Encode</h2>
                <p className='text-2xl'>Encode your plain text into cipher text.</p>
            </div>
            <form action="" className="flex-col flex gap-14" onSubmit={handleEncrypt}>
                <div className="flex flex-col gap-5">
                    <label htmlFor="key">input your key here : </label>
                    <input type='text' name="key" id="key" className="input" value={element.key} onChange={handleChange}/>
                </div>
                <div className="flex gap-14">
                    <div className="flex flex-col gap-5">
                        <label htmlFor="">Insert your plain text here : </label>
                        <textarea name="plainText" id="" cols="30" rows="10" className="input" value={element.plainText} onChange={handleChange}></textarea>
                        <button className="btn-accent">Encrypt</button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="">Your cipher text are : </label>
                        <textarea name="cipherText" id="" cols="30" rows="10" className="input" value={element.cipherText}></textarea>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default Encode;