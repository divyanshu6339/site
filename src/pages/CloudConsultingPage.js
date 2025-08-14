import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestInsights from '../components/LatestInsights';
import HeroCloud from '../components/HeroCloud';

const CloudConsultingPage = () => {
    return (
        <div className="bg-gray-900 text-white overflow-x-hidden">
            <Header />
            <HeroCloud />
            <LatestInsights />
            <Footer />
        </div>
    );
}
export default CloudConsultingPage;