import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestInsights from '../components/LatestInsights';
import HeroDevops from '../components/HeroDevops';

const DevopsServicesPage = () => {
    return (
        <div className="bg-gray-900 text-white overflow-x-hidden">
            <Header />
            <HeroDevops />
            <LatestInsights />
            <Footer />
        </div>
    );
}
export default DevopsServicesPage;