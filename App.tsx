import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReadersView from './views/ReadersView';
import NarratorsView from './views/NarratorsView';

type Section = 'readers' | 'narrators';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>('readers');

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'readers':
                return <ReadersView />;
            case 'narrators':
                return <NarratorsView />;
            default:
                return <ReadersView />;
        }
    };

    return (
        <div className="bg-[#f5f5f5] text-[#333] min-h-screen" dir="rtl">
            <div className="container mx-auto max-w-6xl p-4 sm:p-6">
                <Header />
                <nav className="flex justify-center gap-4 sm:gap-6 my-8 flex-wrap">
                    <button
                        onClick={() => setActiveSection('readers')}
                        className={`transition-all duration-300 ease-in-out py-3 px-8 text-base sm:text-lg rounded-full shadow-lg transform hover:-translate-y-1 ${
                            activeSection === 'readers'
                                ? 'bg-[#97bc62] text-white ring-2 ring-offset-2 ring-[#97bc62]'
                                : 'bg-[#2c5f2d] text-white'
                        }`}
                    >
                        القراء العشرة
                    </button>
                    <button
                        onClick={() => setActiveSection('narrators')}
                        className={`transition-all duration-300 ease-in-out py-3 px-8 text-base sm:text-lg rounded-full shadow-lg transform hover:-translate-y-1 ${
                            activeSection === 'narrators'
                                ? 'bg-[#97bc62] text-white ring-2 ring-offset-2 ring-[#97bc62]'
                                : 'bg-[#2c5f2d] text-white'
                        }`}
                    >
                        الرواة
                    </button>
                </nav>
                <main>
                    {renderActiveSection()}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;