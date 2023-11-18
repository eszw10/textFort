import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Encode from "./Encode";
import Decode from "./Decode";

const Home = () => {
    return (
        <div className="font-poppins">
            <Navbar/>
            <main className="container px-36">
                <Hero/>
                <Encode/>
                <Decode/>
            </main>
        </div>
    );
}
 
export default Home;