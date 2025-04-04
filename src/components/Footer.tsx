import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="section-container py-8">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="text-xl font-bold gradient-text mb-2">Rocket Video AI</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Transform your ideas into stunning AI videos instantly with cutting-edge technology.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-list">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Support</h4>
              <ul className="footer-list">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-sm text-gray-500 mb-4">
            © {currentYear} Rocket Video AI. All rights reserved.
          </p>
          
          <div className="xbesh-credit flex justify-center">
            <a 
              href="https://www.xbesh.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full shadow-sm hover:bg-white transition-colors duration-300"
            >
              <span className="text-xs text-gray-700 font-medium mr-2">Built with</span>
              <img src="https://www.xbesh.com/logos/xbesh_logo.svg" alt="xBesh Logo" className="h-5 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
