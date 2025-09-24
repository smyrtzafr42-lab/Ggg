import React from 'react';

interface CardProps {
    title: string;
    subtitle?: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, subtitle, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="bg-[#f0f7da] rounded-lg p-5 text-center cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:-translate-y-1.5"
        >
            <h3 className="text-[#2c5f2d] text-xl font-bold mb-1">{title}</h3>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
    );
};

export default Card;
