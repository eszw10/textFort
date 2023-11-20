import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-light flex py-4 items-center justify-between px-10 border-b border-b-accent">
            <div className="logo flex items-center gap-2">
                <img src='/assets/images/logo.png' alt="" className='h-10'/>
                <p className='font-bold text-accent'>TEXTFORT</p>
            </div>
            <div className="navigation flex font-bold gap-12">
                <Link className='hover-underline-animation text-shine' to={'/'}>Home</Link>
                <Link className='hover-underline-animation text-shine' to={'/columnarEnc'}>Encrypt</Link>
                <Link className='hover-underline-animation text-shine'to={'/columnarDec'}>Decrypt</Link>
            </div>
        </div>
    );
}
 
export default Navbar;