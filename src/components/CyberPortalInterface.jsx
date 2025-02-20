import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortalIcon = () => (
  <motion.svg
    viewBox="0 0 24 24"
    width="96"
    height="96"
    stroke="currentColor"
    fill="none"
    strokeWidth="1"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
  >
    <circle cx="12" cy="12" r="10" className="animate-pulse" />
    <circle cx="12" cy="12" r="6" strokeOpacity={0.5} />
    <motion.circle
      cx="12" cy="12" r="2"
      className="animate-spin"
      strokeOpacity={0.8}
    />
  </motion.svg>
);

const CyberPortalInterface = () => {
  const [portalData] = useState({
    id: 228,
    rarity: 'Легендарный',
    energy: 30,
    price: 0.897
  });

  return (
    <div className="min-h-screen bg-[#0a0a12] text-cyan-400 p-4 relative overflow-hidden">
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="relative border border-cyan-500 rounded-xl overflow-hidden bg-gradient-to-b from-[#0a0a12] to-[#0f111a]">
          <div className="p-6 border-b border-cyan-500/30">
            <h1 className="text-3xl text-center font-bold tracking-wider text-cyan-400">
              CYBER PORTAL GENESIS
            </h1>
          </div>
          
          <div className="p-6 space-y-8">
            <div className="relative w-full aspect-square max-w-2xl mx-auto rounded-xl overflow-hidden border border-cyan-500/50">
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-900 via-cyan-900 to-blue-900"
                style={{
                  animation: 'gradientShift 10s infinite alternate',
                  backgroundSize: '200% 200%'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-cyan-400/80">
                  <div className="relative">
                    <PortalIcon />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto p-6 bg-[#141425]/80 rounded-xl border border-cyan-500/30">
              <h3 className="text-2xl mb-6 text-center text-cyan-400">
                Портал #{portalData.id}
              </h3>
              <div className="space-y-4 text-lg">
                <p>Редкость: {portalData.rarity}</p>
                <p>Энергия: {portalData.energy}%</p>
                <p>Цена: {portalData.price} ETH</p>
              </div>
              <button className="w-full mt-6 px-6 py-4 bg-green-800/80 hover:bg-green-700/80 rounded-lg text-white text-lg transition-colors duration-300">
                Купить портал
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberPortalInterface;
