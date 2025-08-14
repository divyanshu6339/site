import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestInsights from '../components/LatestInsights';
import HeroSoft from '../components/HeroSoft';

const EnterPrise = () => {
    return (
        <div className="bg-gray-900 text-white overflow-x-hidden">
            <Header />
            <HeroSoft />
            <LatestInsights />
            <Footer />
        </div>
    );
}
export default EnterPrise;