import Choose from '../components/Choose';
import Download from '../components/download';
import Footer from '../components/footer';
import Hero from '../components/Hero';
import Work from '../components/howItWorks';
import Logo from '../components/logo';
import Popular from '../components/popular';
import Testimony from '../components/Testimonies';

const Home = () => {
    return ( 
        <>
            <Hero/>
            <Work/>
            <Logo/>
            <Choose/>
            <Popular/>
            <Testimony/>
            <Download/>
            <Footer/>
        </>
     );
}
 
export default Home;