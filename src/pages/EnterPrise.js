import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestInsights from '../components/LatestInsights';
import HeroEnterprise from '../components/HeroEnterprise';

const EnterPrise = () => {
    return (
        <div className="bg-gray-900 text-white overflow-x-hidden">
            <Header />
            <HeroEnterprise />
            <LatestInsights />
            <Footer />
        </div>
    );
}
export default EnterPrise;