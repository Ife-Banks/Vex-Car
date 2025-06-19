import Choose from '../components/Choose';
import Hero from '../components/Hero';
import Work from '../components/howItWorks';
import Logo from '../components/logo';
import Popular from '../components/popular';

const Home = () => {
    return ( 
        <>
            <Hero/>
            <Work/>
            <Logo/>
            <Choose/>
            <Popular/>
        </>
     );
}
 
export default Home;