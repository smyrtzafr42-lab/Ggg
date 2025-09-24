import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-br from-[#2c5f2d] to-[#97bc62] text-white p-6 text-center rounded-lg shadow-xl mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">القراء العشرة ورواتهم</h1>
            <p className="text-lg sm:text-xl opacity-90">من طريق الشاطبية والدرة</p>
        </header>
    );
};

export default Header;
