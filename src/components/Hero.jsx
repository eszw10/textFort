import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
    return (
        <div className="flex h-[90vh] items-center justify-center gap-4">    
            <div className="text-4xl flex flex-col gap-4">
                <p className=" text-accent font-bold">We provide</p>
                <p className="text-accent font-bold text-6xl w-3/4">Text-Encryption Services.</p>
                <p className="text-shine text-xl w-3/4">TextFort is a project created by team 11 that implement encryption using <span className="text-accent">AES algorithm</span> and <span className="text-accent">Columnar Transposition Algorithm</span>.</p>
                <div className="action flex gap-5 text-base mt-10">
                    <Link to={'#encode'} className="btn-accent ">
                        <p className="text-primary shadow-primary font-bold">Encode</p>
                    </Link>
                    <Link to={'#decode'} className="btn-secondary">
                        <p className="text-accent font-bold">Decode</p>
                    </Link>
                </div>
            </div>
            <img src="/assets/images/hacker.jpg" alt="" className="h-96"/>
        </div>
    );
}
 
export default Hero;