import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpertisePage from './pages/ExpertisePage';
import TechnologiesPage from './pages/TechnologiesPage';
import OffshoreDeveloperPage from './pages/OffshoreDeveloperPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage';
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage';
import ApplicationModernizationPage from './pages/ApplicationModernizationPage';
import HireDedicatedDevelopersPage from './pages/HireDedicatedDevelopersPage';
import UIUXServicesPage from './pages/UIUXServicesPage';
import SaaSDevelopmentPage from './pages/SaaSDevelopmentPage';
import WebAppDevelopmentPage from './pages/WebAppDevelopmentPage';
import APIIntegrationPage from './pages/ApiIntegrationPage';
import PythonPage from './pages/PythonPage';
import PHPPage from './pages/PHPPage';
import Golang from './pages/Golang';
import JavaPage from './pages/JavaPage';
import DotNetPage from './pages/DotNetPage';
import SQLPage from './pages/SQLPage';
import ReactJSPage from './pages/ReactJSPage';
import AngularJSPage from './pages/AngularJSPage';
import VueJSPage from './pages/VueJSPage';
import JavaScriptPage from './pages/JavaScriptPage';
import TypeScriptPage from './pages/TypeScriptPage';
import NextJSPage from './pages/NextJSPage';
import DjangoPage from './pages/DjangoPage';
import SpringBootPage from './pages/SpringBootPage';
import ExpressJSPage from './pages/ExpressJSPage';
import FlutterPage from './pages/FlutterPage';
import JavaMobile from './pages/JavaMobile';
import ReactNativePage from './pages/ReactNativePage';
import AWSPage from './pages/AWSPage';
import GoogleCloudPage from './pages/GoogleCloudPage';
import AzurePage from './pages/AzurePage';
import SalesforcePage from './pages/SalesforcePage';
import SoftwareProductPage from './pages/SoftwareProductPage';
import StaffAugmentationPage from './pages/StaffAugmentationPage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import CloudConsultingPage from './pages/CloudConsultingPage';
import DevopsServicesPage from './pages/DevopsServicesPage';
import EnterPrise from './pages/EnterPrise';
import SoftwareOutsourcing from './pages/SoftwareOutsourcing';
import AIChatbot from './pages/AIChatbot'; 
import PredictiveAnalyticsPage from './pages/PredictiveAnalyticsPage';
import LLMDevPage from './pages/LLMDevPage'
import ComputerVisionDevPage from './pages/ComputerVisionDevPage';
import AIIntegration from './pages/AIIntegration';
import HireReactJSPage from './pages/HireReactJSPage';
import './App.css';
import PowerAppsPage from './pages/PowerAppsPage';
import MetaversePage from './pages/MetaversePage';
import GenAIDevelopmentPage from './pages/GenAIDevelopmentPage';
import GenAIConsultingPage from './pages/GenAIConsultingPage';
import AiDevelopmentPage from './pages/AiDevelopmentPage';
import AiAgentDevelopmentPage from './pages/AiAgentDevelopmentPage';
import AiAutomationPage from './pages/AiAutomationPage';
import AISoftwareDevPage from './pages/AISoftwareDevPage';
import AIDataAnnotationPage from './pages/AIDataAnnotationPage';
import AIConsultancyPage from './pages/AIConsultancyPage';
import LLMFineTuningPage from './pages/LLMFineTuningPage';
import NLPDevelopmentPage from './pages/NLPDevelopmentPage';
import ChatGPTIntegrationPage from './pages/ChatGPTIntegrationPage';
import MistralPage from './pages/MistralPage';
import LlamaPage from './pages/LlamaPage';
import FintechPage from './pages/FintechPage';
import RealEstatePage from './pages/RealEstatePage';
import TelecomPage from './pages/TelecomPage';
import InsurancePage from './pages/InsurancePage';
import RetailPage from './pages/RetailPage';
import AutomotivePage from './pages/AutomotivePage';
import FacilityManagementPage from './pages/FacilityManagementPage';
import HealthcarePage from './pages/HealthcarePage';
import TravelHospitalityPage from './pages/TravelHospitalityPage';
import HireNodeJSPage from './pages/HireNodeJSPage';
import HirePythonPage from './pages/HirePythonPage';
import HirePHPPage from './pages/HirePHPPage';
import HireGolangPage from './pages/HireGolangPage';
import HireJavaPage from './pages/HireJavaPage';
import HireSQLPage from './pages/HireSQLPage';
import HireDotNetPage from './pages/HireDotNetPage';
import HireDjangoPage from './pages/HireDjangoPage';
import HireExpressPage from './pages/HireExpressPage';
import HireSpringBootPage from './pages/HireSpringBootPage';
import HireAngularPage from './pages/HireAngularPage';
import HireVueJSPage from './pages/HireVueJSPage';
import HireJavaScriptPage from './pages/HireJavaScriptPage';
import HireTypeScriptPage from './pages/HireTypeScriptPage';
import HireNextJSPage from './pages/HireNextJSPage';
import HireReactNativePage from './pages/HireReactNativePage';
import HireFlutterPage from './pages/HireFlutterPage';
import HireFullStackPage from './pages/HireFullStackPage';
import HireAIDevelopmentPage from './pages/HireAIDevelopmentPage';
import HireGenerativeAIPage from './pages/HireGenerativeAIPage';
import HireAITeamAugmentationPage from './pages/HireAITeamAugmentationPage';
import HireComputerVisionPage from './pages/HireComputerVisionPage';
import HireNLPPage from './pages/HireNLPPage';
import HireLLMPage from './pages/HireLLMPage';
import HireAWSPage from './pages/HireAWSPage';
import HireAzurePage from './pages/HireAzurePage';
import HireGoogleCloudPage from './pages/HireGoogleCloudPage';
import HireSalesforcePage from './pages/HireSalesforcePage';
import HirePowerAppsPage from './pages/HirePowerAppsPage';
import HireMetaversePage from './pages/HireMetaversePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/offshore-developer" element={<OffshoreDeveloperPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentPage />} />
        <Route path="/services/application-modernization" element={<ApplicationModernizationPage />} />
        <Route path="/services/hire-dedicated-developers" element={<HireDedicatedDevelopersPage />} />
        <Route path="/services/ui-ux-services" element={<UIUXServicesPage />} />
        <Route path="/services/saas-development" element={<SaaSDevelopmentPage />} />
        <Route path="/services/web-app-development" element={<WebAppDevelopmentPage />} />
        <Route path="/services/api-integration" element={<APIIntegrationPage />} />
        <Route path="/services/software-product" element={<SoftwareProductPage />} />
        <Route path="/services/staff-augmentation" element={<StaffAugmentationPage />} />
        <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
        <Route path= "/services/cloud-consulting" element={<CloudConsultingPage />}/>
        <Route path="/services/devops-services" element={<DevopsServicesPage />} />
        <Route path="/services/enterprise-software" element={<EnterPrise />} />
        <Route path="/services/software-outsourcing" element={<SoftwareOutsourcing />} />
        <Route path="/tech/python" element={<PythonPage />} />
        <Route path="/tech/php" element={<PHPPage />} />
        <Route path="/tech/golang" element={<Golang />} />
        <Route path="/tech/dotnet" element={<DotNetPage />} />
        <Route path="/tech/java" element={<JavaPage />} />
        <Route path="/tech/sql" element={<SQLPage />} />
        <Route path="/tech/reactjs" element={<ReactJSPage />} />
        <Route path="/tech/angular" element={<AngularJSPage />} />
        <Route path="/tech/vuejs" element={<VueJSPage />} />
        <Route path="/tech/javascript" element={<JavaScriptPage />} />
        <Route path="/tech/typescript" element={<TypeScriptPage />} />
        <Route path="/tech/nextjs" element={<NextJSPage />} /> 
        <Route path="/tech/django" element={<DjangoPage />} /> 
        <Route path="/tech/express" element={<ExpressJSPage />} /> 
        <Route path="/tech/springboot" element={<SpringBootPage />} />
        <Route path="/tech/flutter" element={<FlutterPage />} />
        <Route path="/tech/java-mobile" element={<JavaMobile />} />
        <Route path="/tech/react-native" element={<ReactNativePage />} />
        <Route path="/tech/aws" element={<AWSPage />} />
        <Route path="/tech/gcp" element={<GoogleCloudPage />} />
        <Route path="/tech/azure" element={<AzurePage />} />
        <Route path="/tech/salesforce" element={<SalesforcePage />} /> 
        <Route path="/tech/powerapps" element={<PowerAppsPage />} /> 
        <Route path="/tech/metaverse" element={<MetaversePage />} /> 
        <Route path="/services/genai-development" element={<GenAIDevelopmentPage />} />
        <Route path="/services/genai-consulting" element={<GenAIConsultingPage />} />
        <Route path="/services/ai-development" element={<AiDevelopmentPage />} />
        <Route path="/services/ai-agent-development" element={<AiAgentDevelopmentPage />} />
        <Route path="/services/ai-automation-services" element={<AiAutomationPage />} />
        <Route path="/services/ai-software-development" element={<AISoftwareDevPage />} />
        <Route path="/services/ai-data-annotation" element={<AIDataAnnotationPage />} />
        <Route path="/services/ai-consulting-services" element={<AIConsultancyPage />} />
        <Route path="/services/ai-chatbot-development" element={<AIChatbot />} />
        <Route path="/services/predictive-analytics-development" element={<PredictiveAnalyticsPage />} />
        <Route path="/services/llms-development" element={<LLMDevPage />} />
        <Route path="/services/llm-fine-tuning" element={<LLMFineTuningPage />} />
        <Route path="/services/computer-vision-development" element={<ComputerVisionDevPage />} />
        <Route path="/services/nlp-development-services" element={<NLPDevelopmentPage />} />
        <Route path="/services/genai-integration" element={<AIIntegration />} />
        <Route path="/services/chatgpt-integration" element={<ChatGPTIntegrationPage />} />
        <Route path="/services/mistral-ai-integration" element={<MistralPage />} />
        <Route path="/services/llama-integration" element={<LlamaPage />} />
        <Route path="/industries/fintech" element={<FintechPage />} />
        <Route path="/industries/proptech" element={<RealEstatePage />} />
        <Route path="/industries/telecom" element={<TelecomPage />} />
        <Route path="/industries/insurtech" element={<InsurancePage />} />
        <Route path="/industries/retail" element={<RetailPage />} />
        <Route path="/industries/automotive" element={<AutomotivePage />} />
        <Route path="/industries/facility-management" element={<FacilityManagementPage />} />
        <Route path="/industries/healthcare" element={<HealthcarePage />} />
        <Route path="/industries/travel-hospitality" element={<TravelHospitalityPage />} />
        <Route path="/hire/nodejs" element={<HireNodeJSPage />} />
        <Route path="/hire/python" element={<HirePythonPage />} />
        <Route path="/hire/php" element={<HirePHPPage />} />
        <Route path="/hire/golang" element={<HireGolangPage />} />
        <Route path="/hire/java" element={<HireJavaPage />} />
        <Route path="/hire/sql" element={<HireSQLPage />} />
        <Route path="/hire/dotnet" element={<HireDotNetPage />} />
        <Route path="/hire/django" element={<HireDjangoPage />} />
        <Route path="/hire/expressjs" element={<HireExpressPage />} />
        <Route path="/hire/springboot" element={<HireSpringBootPage />} />
        <Route path="/hire/reactjs" element={<HireReactJSPage />} />
        <Route path="/hire/angular" element={<HireAngularPage />} />
        <Route path="/hire/vuejs" element={<HireVueJSPage />} />
        <Route path="/hire/javascript" element={<HireJavaScriptPage />} />
        <Route path="/hire/typescript" element={<HireTypeScriptPage />} />
        <Route path="/hire/nextjs" element={<HireNextJSPage />} />
        <Route path="/hire/react-native" element={<HireReactNativePage />} />
        <Route path="/hire/flutter" element={<HireFlutterPage />} />
        <Route path="/hire/java-app" element={<HireJavaPage />} />
        <Route path="/hire/fullstack" element={<HireFullStackPage />} />
        <Route path="/hire/ai-teams" element={<HireAIDevelopmentPage />} />
        <Route path="/hire/gen-ai" element={<HireGenerativeAIPage />} />
        <Route path="/hire/ai-augmentation" element={<HireAITeamAugmentationPage />} />
        <Route path="/hire/cv-engineers" element={<HireComputerVisionPage />} />
        <Route path="/hire/nlp-engineers" element={<HireNLPPage />} />
        <Route path="/hire/llm-engineers" element={<HireLLMPage />} /> 
        <Route path="/hire/aws-dev" element={<HireAWSPage />} />
        <Route path="/hire/azure-dev" element={<HireAzurePage />} />
        <Route path="/hire/gcp-dev" element={<HireGoogleCloudPage />} />
        <Route path="/hire/salesforce" element={<HireSalesforcePage />} />
        <Route path="/hire/powerapps" element={<HirePowerAppsPage />} />
        <Route path="/hire/metaverse" element={<HireMetaversePage />} />
      </Routes>
    </Router>
  );
}

export default App;
