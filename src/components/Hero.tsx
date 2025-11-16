'use client';

import { useState } from 'react';

export default function Hero() {
  const [showProfiles, setShowProfiles] = useState(false);

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-to-br from-[#222829] via-[#2a2f32] to-[#1a1f23]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 bg-[#49c5b6] rounded-full animate-float-1" style={{top: '20%', left: '10%'}}></div>
        <div className="absolute w-1 h-1 bg-[#49c5b6]/60 rounded-full animate-float-2" style={{top: '40%', left: '80%'}}></div>
        <div className="absolute w-3 h-3 bg-[#49c5b6]/40 rounded-full animate-float-3" style={{top: '60%', left: '20%'}}></div>
        <div className="absolute w-1.5 h-1.5 bg-[#49c5b6]/80 rounded-full animate-float-1" style={{top: '80%', left: '70%'}}></div>
        <div className="absolute w-2 h-2 bg-[#49c5b6]/50 rounded-full animate-float-2" style={{top: '30%', left: '60%'}}></div>
        <div className="absolute w-1 h-1 bg-[#49c5b6] rounded-full animate-float-3" style={{top: '70%', left: '40%'}}></div>
      </div>

      {/* Technology Skills - Responsive Grid Layout */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Desktop: Floating positions, Mobile: Hidden */}
        <div className="hidden lg:block">
          <div className="absolute animate-float-1" style={{top: '15%', left: '8%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">Python</span>
            </div>
          </div>
          
          <div className="absolute animate-float-2" style={{top: '25%', right: '10%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">SQL</span>
            </div>
          </div>
          
          <div className="absolute animate-float-3" style={{top: '65%', left: '5%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">Power BI</span>
            </div>
          </div>
          
          <div className="absolute animate-float-1" style={{top: '75%', right: '8%'}}>
            <div className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-lg px-3 py-1.5 backdrop-blur-sm">
              <span className="text-[#49c5b6]/70 font-medium text-sm">Azure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Skills grid background with connecting lines */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
        {/* Subtle connecting lines - very faint */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#49c5b6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content - Main interactive layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-poppins z-20 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4 text-white animate-fade-in-up" 
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)" }}>
          Romi Gupta
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
          Data Analytics and Engineering 
        </p>

        {/* Single elegant expandable button */}
        <div className="mb-8 animate-fade-in-up animation-delay-300 relative z-30">
          <button
            onClick={() => setShowProfiles(!showProfiles)}
            className="group relative overflow-hidden bg-gradient-to-r from-[#49c5b6]/10 to-[#49c5b6]/5 hover:from-[#49c5b6]/20 hover:to-[#49c5b6]/15 border border-[#49c5b6]/30 hover:border-[#49c5b6]/50 rounded-lg px-8 py-4 backdrop-blur-sm transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#49c5b6]/0 via-[#49c5b6]/10 to-[#49c5b6]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <div className="relative flex items-center gap-3">
              <svg className="w-5 h-5 text-[#49c5b6] group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white font-semibold">View My Work</span>
              <div className={`w-5 h-5 transition-transform duration-300 ${showProfiles ? 'rotate-180' : ''}`}>
                <svg className="w-full h-full text-[#49c5b6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Expandable profiles section */}
        <div className={`transition-all duration-700 ease-out ${showProfiles ? 'mb-8 lg:mb-6' : 'mb-6'} ${showProfiles ? 'opacity-100 transform translate-y-0 max-h-96' : 'opacity-0 transform translate-y-8 pointer-events-none max-h-0 overflow-hidden'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {/* GitHub */}
            <a href="https://github.com/MasterMindRomii" target="_blank" rel="noopener noreferrer"
               className="group relative bg-[#49c5b6]/5 hover:bg-[#49c5b6]/10 border border-[#49c5b6]/20 hover:border-[#49c5b6]/40 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-[#49c5b6]/80 group-hover:text-[#49c5b6] transition-colors mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white font-medium text-sm mb-1">GitHub</span>
                <span className="text-[#49c5b6]/60 text-xs">Portfolio</span>
                <div className="absolute -top-3 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-1.5 py-1 rounded-full shadow-lg z-10">
                  All Projects
                </div>
              </div>
            </a>

            {/* Kaggle */}
            <a href="https://www.kaggle.com/romiigupta/code" target="_blank" rel="noopener noreferrer"
               className="group relative bg-[#49c5b6]/5 hover:bg-[#49c5b6]/10 border border-[#49c5b6]/20 hover:border-[#49c5b6]/40 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-[#49c5b6]/80 group-hover:text-[#49c5b6] transition-colors mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.825 23.859c-.022.092-.117.141-.281.141-.281 0-.641-.141-.641-.141l-3.12-1.859-3.593 1.859s-.36.141-.641.141c-.164 0-.259-.049-.281-.141-.047-.234 0-.375.047-.469l1.828-3.656-1.828-3.656c-.047-.094-.094-.234-.047-.469.022-.092.117-.141.281-.141.281 0 .641.141.641.141l3.593 1.859 3.12-1.859s.36-.141.641-.141c.164 0 .259.049.281.141.047.234 0 .375-.047.469l-1.828 3.656 1.828 3.656c.047.094.094.234.047.469z"/>
                </svg>
                <span className="text-white font-medium text-sm mb-1">Kaggle</span>
                <span className="text-[#49c5b6]/60 text-xs">Competitions</span>
                <div className="absolute -top-3 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-1.5 py-1 rounded-full shadow-lg z-10">
                  Max Rank 2312
                </div>
              </div>
            </a>

            {/* Maven Analytics */}
            <a href="https://mavenshowcase.com/profile/b821d360-b081-70b2-e213-93c4be11589e" target="_blank" rel="noopener noreferrer"
               className="group relative bg-[#49c5b6]/5 hover:bg-[#49c5b6]/10 border border-[#49c5b6]/20 hover:border-[#49c5b6]/40 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-[#49c5b6]/80 group-hover:text-[#49c5b6] transition-colors mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
                <span className="text-white font-medium text-sm mb-1">Maven Analytics</span>
                <span className="text-[#49c5b6]/60 text-xs">Recent Projects</span>
                <div className="absolute -top-3 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-1.5 py-1 rounded-full shadow-lg z-10">
                  Live Project
                </div>
              </div>
            </a>

            {/* LeetCode with achievement */}
            <a href="https://leetcode.com/u/RomiGuptaCS/" target="_blank" rel="noopener noreferrer"
               className="group relative bg-[#49c5b6]/5 hover:bg-[#49c5b6]/10 border border-[#49c5b6]/20 hover:border-[#49c5b6]/40 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute -top-3 -right-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-1.5 py-1 rounded-full shadow-lg z-10">
                TOP 50 SQL
              </div>
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-[#49c5b6]/80 group-hover:text-[#49c5b6] transition-colors mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                <span className="text-white font-medium text-sm mb-1">LeetCode</span>
                <span className="text-[#49c5b6]/60 text-xs">Problem Solving</span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile & Tablet: Skills as subtle badges below buttons */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-3 lg:hidden max-w-sm md:max-w-lg animate-fade-in-up animation-delay-400 ${showProfiles ? 'mt-4' : ''}`}>
          {[].map((skill, index) => (
            <div key={skill} 
                 className="bg-[#49c5b6]/5 border border-[#49c5b6]/20 rounded-full px-3 py-1 backdrop-blur-sm"
                 style={{animationDelay: `${0.1 * index}s`}}>
              <span className="text-[#49c5b6]/60 font-medium text-xs md:text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          50% { transform: translateY(-15px) translateX(8px); opacity: 1; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
          33% { transform: translateY(-12px) translateX(-6px); opacity: 1; }
          66% { transform: translateY(6px) translateX(4px); opacity: 0.9; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.6; }
          25% { transform: translateY(8px) translateX(-4px); opacity: 0.9; }
          75% { transform: translateY(-10px) translateX(6px); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}