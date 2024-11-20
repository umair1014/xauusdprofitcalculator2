import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Calculator, BookOpen, Info, Mail } from 'lucide-react';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isToolsDropdownOpen) setIsToolsDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isActive ? 'text-yellow-500' : 'text-gray-600'
                }`
              }
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </NavLink>

            {/* Tools Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-sm font-medium text-gray-600 hover:text-yellow-600 transition-colors"
                onMouseEnter={() => setIsToolsDropdownOpen(true)}
                onMouseLeave={() => setIsToolsDropdownOpen(false)}
              >
                <Calculator className="w-4 h-4 mr-1" />
                Trading Tools
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div 
                className={`absolute left-0 top-full pt-2 ${isToolsDropdownOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseEnter={() => setIsToolsDropdownOpen(true)}
                onMouseLeave={() => setIsToolsDropdownOpen(false)}
              >
                <div className="bg-white rounded-lg shadow-lg py-2 w-64 border border-gray-100">
                  <NavLink
                    to="/pip-calculator"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${
                        isActive ? 'text-yellow-500 bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-yellow-600'
                      }`
                    }
                  >
                    Pip Calculator
                  </NavLink>
                  <NavLink
                    to="/margin-calculator"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${
                        isActive ? 'text-yellow-500 bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-yellow-600'
                      }`
                    }
                  >
                    Margin Calculator
                  </NavLink>
                  <NavLink
                    to="/spread-comparison"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${
                        isActive ? 'text-yellow-500 bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-yellow-600'
                      }`
                    }
                  >
                    Spread Comparison
                  </NavLink>
                  <NavLink
                    to="/trading-journal"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${
                        isActive ? 'text-yellow-500 bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-yellow-600'
                      }`
                    }
                  >
                    Trading Journal
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isActive ? 'text-yellow-500' : 'text-gray-600'
                }`
              }
            >
              <BookOpen className="w-4 h-4 mr-1" />
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isActive ? 'text-yellow-500' : 'text-gray-600'
                }`
              }
            >
              <Info className="w-4 h-4 mr-1" />
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex items-center text-sm font-medium transition-colors hover:text-yellow-600 ${
                  isActive ? 'text-yellow-500' : 'text-gray-600'
                }`
              }
            >
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <NavLink to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">XAUUSD</span>
            </NavLink>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-yellow-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-2 px-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'bg-yellow-50 text-yellow-600' : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <Home className="w-4 h-4 mr-2" />
                Home
              </NavLink>

              <div className="space-y-1">
                <div className="px-4 py-3 text-sm font-medium text-gray-600">
                  <div className="flex items-center">
                    <Calculator className="w-4 h-4 mr-2" />
                    Trading Tools
                  </div>
                </div>
                <NavLink
                  to="/pip-calculator"
                  className={({ isActive }) =>
                    `block px-8 py-3 text-sm ${
                      isActive ? 'text-yellow-600 bg-yellow-50' : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Pip Calculator
                </NavLink>
                <NavLink
                  to="/margin-calculator"
                  className={({ isActive }) =>
                    `block px-8 py-3 text-sm ${
                      isActive ? 'text-yellow-600 bg-yellow-50' : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Margin Calculator
                </NavLink>
                <NavLink
                  to="/spread-comparison"
                  className={({ isActive }) =>
                    `block px-8 py-3 text-sm ${
                      isActive ? 'text-yellow-600 bg-yellow-50' : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Spread Comparison
                </NavLink>
                <NavLink
                  to="/trading-journal"
                  className={({ isActive }) =>
                    `block px-8 py-3 text-sm ${
                      isActive ? 'text-yellow-600 bg-yellow-50' : 'text-gray-600 hover:bg-gray-50'
                    }`
                  }
                  onClick={toggleMobileMenu}
                >
                  Trading Journal
                </NavLink>
              </div>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'bg-yellow-50 text-yellow-600' : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Blog
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'bg-yellow-50 text-yellow-600' : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <Info className="w-4 h-4 mr-2" />
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'bg-yellow-50 text-yellow-600' : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
                onClick={toggleMobileMenu}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}