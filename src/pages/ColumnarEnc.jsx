import { useState } from "react";
import Navbar from "../components/Navbar";

const ColumnarEnc = () => {
    const[element, setElement] = useState({
        key : '',
        plainText : '',
        cipherText : '',
        isEncrypted:false
    })

    function handleChange(e) {
        const {name, value} = e.target
        setElement(prevState=> {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    //logic
    function encryptMessage(e) {
        e.preventDefault()
        const {plainText, key} = element
        let cipher = "";
        let k_indx = 0;
        const msg_len = plainText.length;
        const msg_lst = plainText.split("");
        const key_lst = key.split("").sort();
        const col = key.length;
        const row = Math.ceil(msg_len / col);
        const fill_null = (row * col) - msg_len;
        msg_lst.push(...Array(fill_null).fill('_'));
        const matrix = [];
        for (let i = 0; i < msg_lst.length; i += col) {
            matrix.push(msg_lst.slice(i, i + col));
        }
    
        for (let _ = 0; _ < col; _++) {
            const curr_idx = key.indexOf(key_lst[k_indx]);
            cipher += matrix.map(row => row[curr_idx]).join("");
            k_indx += 1;
        }

        console.log(cipher)

        setElement(prevState=> {
            return {
                ...prevState,
                cipherText:cipher
            }
        })
    }


    return (
        <div id='encode' className="">
            <Navbar/>
            <div className="font-poppins text-shine flex flex-col gap-10 items-center justify-center text-xl py-10">
                <div className="title text-center flex flex-col gap-5">
                    <h2 className="text-4xl font-bold text-accent">Encrypt</h2>
                    <p className='text-2xl'>Encrypt your plain text into cipher text using columnar Transposition Algorithm.</p>
                </div>
                <form action="" className="encrypt flex flex-col gap-14" onSubmit={encryptMessage}>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="key">Insert your key here : </label>
                        <input type="text" placeholder="" name="key" className="input" value={element.key} onChange={handleChange} required/>
                    </div>
                    <div className="flex gap-14">
                        <div className="flex flex-col gap-5">
                            <label htmlFor="">Insert your plain text here : </label>
                            <textarea name="plainText" id="plainText" cols="30" rows="10" className="input" value={element.plainText} onChange={handleChange}></textarea>
                            <button className="btn-accent">Encrypt</button>
                        </div>
                        <div className="flex flex-col gap-5">
                            <label htmlFor="">Your cipher text are : </label>
                            <textarea name="cipherText" id="cipherText" cols="30" rows="10" className="input" value={element.cipherText} onChange={handleChange}></textarea>
                        </div>
                    </div>     
                </form>
            </div>
        </div>
    );
}
 
export default ColumnarEnc;