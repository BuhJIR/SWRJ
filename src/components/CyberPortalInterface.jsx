import React, { useState, useEffect } from 'react';

const PortalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="50" cy="50" r="45" className="text-cyan-500 opacity-50" />
    <circle cx="50" cy="50" r="35" className="text-cyan-500 opacity-75" />
    <circle cx="50" cy="50" r="25" className="text-cyan-500" />
  </svg>
);

const CyberPortalInterface = () => {
  const [portalData, setPortalData] = useState({
    id: 228,
    rarity: 'Легендарный',
    energy: 30,
    price: 0.897
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="w-[85vw] h-[85vh] bg-[#0A192F] rounded-lg border border-cyan-500 flex flex-col overflow-hidden">
        {/* Заголовок */}
        <div className="w-full p-4 border-b border-cyan-500">
          <h1 className="text-cyan-500 text-3xl text-center font-mono tracking-wider">
            CYBER PORTAL GENESIS
          </h1>
        </div>

        {/* Основной контент */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center gap-8">
          {/* Портал */}
          <div className="w-3/4 aspect-square relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-cyan-900 to-blue-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/3 h-1/3 text-cyan-500 animate-pulse">
                  <PortalIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Информация о портале */}
          <div className="w-3/4 max-w-md p-6 bg-gray-900 bg-opacity-50 rounded-lg border border-cyan-500">
            <h3 className="text-cyan-500 text-2xl mb-4 font-mono">
              Портал #{portalData.id}
            </h3>
            <div className="space-y-3 text-cyan-500 font-mono">
              <p className="text-lg">Редкость: {portalData.rarity}</p>
              <p className="text-lg">Энергия: {portalData.energy}%</p>
              <p className="text-lg">Цена: {portalData.price} ETH</p>
            </div>
            <button className="w-full mt-6 py-3 bg-green-800 hover:bg-green-700 text-white rounded-md transition-colors font-mono text-lg">
              Купить портал
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberPortalInterface;
