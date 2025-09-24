import React, { useState, useRef, useEffect } from 'react';
import { narrators } from '../data/qiraatData';
import type { Narrator } from '../types';
import Card from '../components/Card';

type NarratorInfoType = 'intro' | 'path' | 'origins' | 'uniqueness';

const NarratorDetails: React.FC<{ narrator: Narrator }> = ({ narrator }) => {
    const [activeTab, setActiveTab] = useState<NarratorInfoType>('intro');

    // Reset to intro tab when narrator changes
    useEffect(() => {
        setActiveTab('intro');
    }, [narrator]);

    const renderContent = () => {
        switch (activeTab) {
            case 'intro':
                return <p>{narrator.intro}</p>;
            case 'path':
                return <p>{narrator.path}</p>;
            case 'origins':
                return <p>{narrator.origins}</p>;
            case 'uniqueness':
                return <p>{narrator.uniqueness}</p>;
            default:
                return null;
        }
    };
    
    const tabs: { key: NarratorInfoType; label: string }[] = [
        { key: 'intro', label: 'التعريف بالراوي' },
        { key: 'path', label: 'طريق الراوي' },
        { key: 'origins', label: 'أصول القراءات' },
        { key: 'uniqueness', label: 'انفرادات الراوي' },
    ];

    return (
        <div className="mt-8">
            <div className="flex justify-center gap-2 sm:gap-3 my-4 flex-wrap">
                 {tabs.map(tab => (
                     <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`transition-colors duration-300 py-2 px-5 rounded-full text-sm sm:text-base ${
                            activeTab === tab.key
                                ? 'bg-[#2c5f2d] text-white shadow-md'
                                : 'bg-[#97bc62] text-white hover:bg-[#2c5f2d]'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-lg mt-4 min-h-[120px] leading-relaxed border border-gray-200">
                 <h3 className="text-xl font-bold text-[#2c5f2d] mb-3">{tabs.find(t=>t.key === activeTab)?.label}: {narrator.name}</h3>
                {renderContent()}
            </div>
        </div>
    );
};

const NarratorsView: React.FC = () => {
    const [selectedNarrator, setSelectedNarrator] = useState<Narrator | null>(narrators[0]);
    const detailsRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (selectedNarrator && detailsRef.current) {
            setTimeout(() => {
                detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }, [selectedNarrator]);

    const handleSelectNarrator = (narrator: Narrator) => {
        setSelectedNarrator(prev => (prev && prev.id === narrator.id ? null : narrator));
    };

    return (
        <section className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-[#2c5f2d] mb-6">الرواة</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                {narrators.map(narrator => (
                    <Card
                        key={narrator.id}
                        title={narrator.name}
                        subtitle={`راوي ${narrator.reader}`}
                        onClick={() => handleSelectNarrator(narrator)}
                    />
                ))}
            </div>

            <div ref={detailsRef} className="pt-4">
                {selectedNarrator && <NarratorDetails narrator={selectedNarrator} />}
            </div>
        </section>
    );
};

export default NarratorsView;
