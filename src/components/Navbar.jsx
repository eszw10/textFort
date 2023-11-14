import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    return (
        <div className="text-light flex py-4 items-center justify-between px-10 border-b border-b-accent">
            <div className="logo flex items-center gap-2">
                <img src='/assets/images/logo.png' alt="" className='h-10'/>
                <p className='font-bold text-accent'>TEXTFORT</p>
            </div>
            <div className="navigation flex font-bold gap-12">
                <HashLink className='hover-underline-animation text-shine' to={'/'}>Home</HashLink>
                <HashLink className='hover-underline-animation text-shine' to={'#encode'}>Encode</HashLink>
                <HashLink className='hover-underline-animation text-shine'to={'#decode'}>Decode</HashLink>
            </div>
        </div>
    );
}
 
export default Navbar;