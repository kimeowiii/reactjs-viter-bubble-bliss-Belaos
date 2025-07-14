import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <section className="bg-gray-900 py-14 px-4">
        <div className="container mx-auto px-">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="text-center">
              <div className="flex items-center justify-center lg:justify-start">
                <h1 className="text-2xl mb-2 font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Bubble Bliss
                </h1>
                <span className="flex items-center justify-center">🧋</span>
              </div>
              <p className="text-gray-400">Slip happiness in every cup</p>
            </div>
            <div>
              <ul className="gap-2 flex items-center">
                <li>📱</li>
                <li>📷</li>
                <li>🐦</li>
                <li>📘</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-400 mt-8 border-t border-t-gray-400 pt-8 text-center">&copy; 2025 Bubble Bliss. All rights reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
