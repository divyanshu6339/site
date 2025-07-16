import React, { useState } from 'react';

const guideData = [
    {
      title: 'Top Mobile App Development Frameworks',
      content: (
        <div>
          <p className="mb-4">of your app. Here are some of the top mobile app development frameworks:</p>
          <ul className="space-y-4">
            <li>
              <h4 className="font-bold text-xl text-white">React Native:</h4>
              <p>React Native is a popular framework for building cross-platform apps using JavaScript. It uses native platform components, offering a familiar experience to users on both iOS and Android. Popular apps built with React Native include Facebook, Instagram, and Bloomberg.</p>
            </li>
            <li>
              <h4 className="font-bold text-xl text-white">Flutter:</h4>
              <p>Developed by Google, Flutter is a relatively new framework that has gained rapid traction in recent years. It uses a single codebase to build native apps for iOS and Android, making it a highly efficient option. Popular apps built with Flutter include Google Ads, Stadia, and BMW Connected.</p>
            </li>
            <li>
              <h4 className="font-bold text-xl text-white">Ionic:</h4>
              <p>It is a popular framework for building hybrid apps using web technologies like HTML, CSS, and JavaScript. It offers a wide range of built-in components and UI elements, making it easy to create visually appealing apps. Popular apps built with Ionic include Sworkit, McDonald's app, and Pokemon GO.</p>
            </li>
            <li>
              <h4 className="font-bold text-xl text-white">Xamarin:</h4>
              <p>Owned by Microsoft, Xamarin uses C# to build native apps for iOS, Android, and Windows. It provides access to native APIs and offers excellent performance. Popular apps built with Xamarin include Slack, Pinterest, and Storyo.</p>
            </li>
            <li>
              <h4 className="font-bold text-xl text-white">NativeScript:</h4>
              <p>NativeScript is another framework that uses JavaScript to build native apps for iOS and Android. It offers a native-like user experience and access to native APIs. Popular apps built with NativeScript include Telerik Platform, Everis, and 9GAG.</p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Trends and Technologies in Mobile App Development',
      content: (
        <div>
          <p className="mb-4">The mobile app development industry is constantly transforming with new tech. To stay ahead of the curve, developers need to be aware of these trends and incorporate them into their work. Here are some of the top trends and technologies in mobile app development today:</p>
          <ul className="space-y-4">
            <li><h4 className="font-bold text-xl text-white">Artificial Intelligence (AI) and machine learning (ML):</h4><p>AI and ML are being used in a variety of ways to improve mobile apps. By integrating AI & ML in mobile apps, businesses build cutting-edge solutions that offer enhanced UX.</p></li>
            <li><h4 className="font-bold text-xl text-white">Augmented reality (AR), Virtual Reality (VR), and Extended Reality (XR):</h4><p>AR and VR are creating new and immersive experiences for mobile app users. Major enterprises have also started utilizing XR for virtual training and onboarding processes. As per the Statista prediction, the revenue in the Extended Reality market might reach up to $52 billion by 2027.</p></li>
            <li><h4 className="font-bold text-xl text-white">Internet of Things (IoT):</h4><p>This is creating new opportunities for mobile app developers to create apps that can interact with these devices.</p></li>
            <li><h4 className="font-bold text-xl text-white">Wearable devices:</h4><p>Wearable devices like smartwatches and fitness trackers are becoming increasingly popular. This creates new opportunities for mobile app developers to create apps that can work with these devices.</p></li>
            <li><h4 className="font-bold text-xl text-white">5G technology:</h4><p>5G is the next generation of mobile network technology. It offers higher data speeds, lower latency, and increased network capacity. This makes it possible for developers to make more complex and engaging app experiences.</p></li>
          </ul>
        </div>
      ),
    },
    {
        title: 'Key Facts About Outsourcing Mobile App Development',
        content: (
          <div>
            <p className="mb-4">Here are some key facts about outsourcing mobile app development:</p>
            <ul className="space-y-4 list-disc list-inside">
              <li>The global mobile app outsourcing market is expected to reach $64.3 billion by 2027.</li>
              <li>The most popular countries for outsourcing mobile app development are India, China, and Eastern Europe.</li>
              <li>The average cost of outsourcing mobile app development is $15,000-$50,000.</li>
              <li>The average time to develop a mobile app is 3-6 months.</li>
              <li>The use of AI and machine learning in mobile app development is increasing.</li>
              <li>The rise of cloud-based development is making it easier to collaborate with developers from all over the world.</li>
              <li>The mobile app market is expected to continue to grow in the coming years.</li>
              <li>If you are considering outsourcing your mobile app development, it is important to do your research and choose a reputable vendor.</li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Best Practices for App Development',
        content: (
          <div>
            <p className="mb-4">Developing successful mobile apps requires careful planning, execution, and continuous improvement. Here are some best practices to consider:</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-xl text-white">Planning and Strategy:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Define a clear target audience and value proposition. Conduct market research to analyze competitors.</li>
                  <li>Develop a definitive app development roadmap.</li>
                  <li>Consider Agile development methodology for iterative development and rapid feedback.</li>
                  <li>Utilize Scrum or Kanban boards for project management and task organization.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl text-white">Development and Design:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Always design for user experience (UX) that is user-friendly, intuitive, and if at all possible, enjoyable. Identify any user pain points.</li>
                  <li>Utilize unit tests, integration tests, and automated UI tests for quality assurance. This helps identify and fix bugs early in the development process.</li>
                  <li>Select a technology stack that aligns with your app's features and target platforms. Consider cross-platform frameworks like React Native or Flutter for efficient development.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl text-white">Deployment and Maintenance:</h4>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Ensure the app runs smoothly across various devices and network conditions.</li>
                  <li>Perform thorough quality assurance and security checks on your mobile app and your development process throughout the effort.</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'What is Custom Mobile App Development',
        content: (
          <div>
            <p className="mb-4">Custom mobile app development is the process of creating a mobile application specifically designed for the needs of various businesses and verticals such as healthcare, insurtech, proptech, media and entertainment, fintech, supply chain and logistics, and many more.</p>
            <p className="mb-4">Here are some of the key benefits of custom mobile app development:</p>
            <ul className="space-y-4">
              <li><h4 className="font-bold text-xl text-white">Tailored to your unique needs:</h4><p>Custom apps are created to solve specific business problems as well as to meet the needs of your target audience.</p></li>
              <li><h4 className="font-bold text-xl text-white">Improved user experience:</h4><p>Custom apps can be designed to provide a seamless and intuitive user experience. This can lead to increased engagement and retention among app users.</p></li>
              <li><h4 className="font-bold text-xl text-white">Enhanced brand identity:</h4><p>A custom app can help you build a strong brand identity and differentiate yourself from your competitors.</p></li>
              <li><h4 className="font-bold text-xl text-white">Increased ROI:</h4><p>A well-designed custom app can help you improve your business efficiency, productivity, and revenue.</p></li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Benefits of Hiring Mobile App Development Services in India',
        content: (
          <div>
            <p className="mb-4">India has emerged as a global leader in mobile technology, making it a prime destination for businesses seeking mobile app development services. Whether you're a startup or an enterprise, partnering with a reliable mobile app development company in India offers numerous advantages.</p>
            <ol className="space-y-4 list-decimal list-inside">
              <li><h4 className="font-bold text-xl text-white inline">Cost-Effective Solutions Without Compromising Quality:</h4><p className='inline'> Hiring a mobile app development company in India provides access to top-tier talent at highly competitive rates. Indian firms can deliver scalable and feature-rich apps at a fraction of the cost charged by Western counterparts without compromising on quality or innovation.</p></li>
              <li><h4 className="font-bold text-xl text-white inline">Vast Talent Pool and Technical Expertise:</h4><p className='inline'> India boasts a deep pool of skilled developers proficient in all major platforms—Android, iOS, cross-platform frameworks like React Native and Flutter, and emerging technologies like AI and IoT. A seasoned mobile software development company in India can assemble a team that matches your exact project needs.</p></li>
              <li><h4 className="font-bold text-xl text-white inline">End-to-End Development and Support:</h4><p className='inline'> A full-service mobile application development company in India offers everything from initial strategy, UI/UX design, development, testing, deployment, and post-launch support. You get a single point of accountability throughout the development cycle.</p></li>
              <li><h4 className="font-bold text-xl text-white inline">Access to the Latest Technologies:</h4><p className='inline'> Being a tech-savvy country, India's mobile application development services include integration with the latest technologies like AI, ML, AR/VR, cloud computing, blockchain, and more. This ensures that your mobile solution is future-ready and competitive.</p></li>
              <li><h4 className="font-bold text-xl text-white inline">Strong Communication and Time Zone Advantage:</h4><p className='inline'> Many Indian app development companies have teams that align their work hours with international clients. As a result, </p></li>
            </ol>
          </div>
        ),
      },
      {
        title: 'Choosing the Right Mobile App Development Company in India',
        content: (
          <div>
            <p className="mb-4">Selecting the right partner is critical for the success of your app. Here's what to look for in a trusted app development company.</p>
            <ul className="space-y-4">
              <li><h4 className="font-bold text-xl text-white">Portfolio & Case Studies:</h4><p>A reputable mobile applications development company will have a rich portfolio showcasing successful projects in your industry.</p></li>
              <li><h4 className="font-bold text-xl text-white">Client Reviews & References:</h4><p>Check client testimonials on platforms like Clutch or GoodFirms.</p></li>
              <li><h4 className="font-bold text-xl text-white">Tech Stack & Tools:</h4><p>Ensure the company uses up-to-date tools and frameworks aligned with your project.</p></li>
              <li><h4 className="font-bold text-xl text-white">Post-Launch Support:</h4><p>The right mobile applications development partner will offer ongoing maintenance and support services.</p></li>
              <li><h4 className="font-bold text-xl text-white">Transparent Communication:</h4><p>Opt for a company with clear communication processes and a collaborative approach.</p></li>
            </ul>
          </div>
        ),
      },
  ];
  

const DevelopmentGuide = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-black text-gray-300 py-12 sm:py-20 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">
          An Essential Guide to Mobile App Development Services
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <ul className="space-y-2">
              {guideData.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 text-lg ${
                      activeTab === index
                        ? 'bg-gray-800 text-white font-semibold shadow-lg'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-3/4 bg-gray-900 p-6 sm:p-8 rounded-lg shadow-2xl relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-lg"
              style={{ transition: 'all 0.3s ease' }}
            ></div>
            <div className="text-lg leading-relaxed">
                {guideData[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentGuide; 