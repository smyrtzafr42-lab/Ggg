import React, { useState, useRef, useEffect } from 'react';
import { readers } from '../data/qiraatData';
import type { Reader } from '../types';
import Card from '../components/Card';

type ReaderInfoType = 'intro' | 'teachers' | 'narrators';

const ReaderDetails: React.FC<{ reader: Reader }> = ({ reader }) => {
    const [activeTab, setActiveTab] = useState<ReaderInfoType>('intro');

    // Reset to intro tab when reader changes
    useEffect(() => {
        setActiveTab('intro');
    }, [reader]);

    const renderContent = () => {
        switch (activeTab) {
            case 'intro':
                return <p>{reader.intro}</p>;
            case 'teachers':
                return <p>{reader.teachers}</p>;
            case 'narrators':
                return (
                    <ul className="list-disc list-inside space-y-1">
                        {reader.narrators.map((narrator, index) => (
                            <li key={index}>{narrator}</li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };
    
    const tabs: { key: ReaderInfoType; label: string }[] = [
        { key: 'intro', label: 'التعريف بالقارئ' },
        { key: 'teachers', label: 'أهم شيوخه' },
        { key: 'narrators', label: 'رواته' },
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
                <h3 className="text-xl font-bold text-[#2c5f2d] mb-3">{tabs.find(t=>t.key === activeTab)?.label}: {reader.name}</h3>
                {renderContent()}
            </div>
        </div>
    );
};


const ReadersView: React.FC = () => {
    const [selectedReader, setSelectedReader] = useState<Reader | null>(readers[0]);
    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedReader && detailsRef.current) {
            setTimeout(() => {
                 detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }, [selectedReader]);

    const handleSelectReader = (reader: Reader) => {
        setSelectedReader(prev => (prev && prev.id === reader.id ? null : reader));
    };

    return (
        <section className="bg-white rounded-lg p-4 sm:p-6 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-[#2c5f2d] mb-6">القراء العشرة</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                {readers.map(reader => (
                    <Card 
                        key={reader.id} 
                        title={reader.name} 
                        onClick={() => handleSelectReader(reader)}
                    />
                ))}
            </div>

            <div ref={detailsRef} className="pt-4">
                {selectedReader && <ReaderDetails reader={selectedReader} />}
            </div>
        </section>
    );
};

export default ReadersView;
