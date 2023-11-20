import { useState } from "react";
import Navbar from "../components/Navbar";

const ColumnarDec = () => {
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
    function decryptMessage(e) {
        e.preventDefault();
        const { cipherText, key } = element;
        let msg = "";
        let k_indx = 0;
        let msg_indx = 0;
        const msg_len = cipherText.length;
        const msg_lst = cipherText.split("");
        const col = key.length;
        const row = Math.ceil(msg_len / col);
        const key_lst = key.split("").sort();
        const dec_cipher = Array.from({ length: row }, () => Array(col).fill(null));

        for (let _ = 0; _ < col; _++) {
            const curr_idx = key.indexOf(key_lst[k_indx]);

            for (let j = 0; j < row; j++) {
                dec_cipher[j][curr_idx] = msg_lst[msg_indx];
                msg_indx += 1;
            }
            k_indx += 1;
        }

        try {
            msg = dec_cipher.flat().join("");
        } catch (error) {
            console.error("Error during decryption:", error.message);
            // Display error message on UI or handle it appropriately
            return;
        }

        const null_count = (msg.match(/_/g) || []).length;

        if (null_count > 0) {
            msg = msg.slice(0, -null_count);
        }

        setElement(prevState => ({
            ...prevState,
            plainText: msg
        }));
    }

    return (
        <div id='encode' className="">
            <Navbar/>
            <div className="font-poppins text-shine flex flex-col gap-10 items-center justify-center text-xl py-10">
                <div className="title text-center flex flex-col gap-5">
                    <h2 className="text-4xl font-bold text-accent">Decrypt</h2>
                    <p className='text-2xl'>Decrypt your cipher text into plain text using columnar Transposition Algorithm.</p>
                </div>
                <form action="" className="encrypt flex flex-col gap-14" onSubmit={decryptMessage}>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="key">Insert your key here : </label>
                        <input type="text" placeholder="" name="key" className="input" value={element.key} onChange={handleChange} required/>
                    </div>
                    <div className="flex gap-14">
                        <div className="flex flex-col gap-5">
                            <label htmlFor="">Insert your cipher text here : </label>
                            <textarea name="cipherText" id="cipherText" cols="30" rows="10" className="input" value={element.cipherText} onChange={handleChange}></textarea>
                            <button className="btn-accent">Decrypt</button>
                        </div>
                        <div className="flex flex-col gap-5">
                            <label htmlFor="">Your plain text are : </label>
                            <textarea name="plainText" id="plainText" cols="30" rows="10" className="input" value={element.plainText} onChange={handleChange}>{element.plainText}</textarea>
                        </div>
                    </div>     
                </form>
            </div>
        </div>
    );
}
 
export default ColumnarDec;