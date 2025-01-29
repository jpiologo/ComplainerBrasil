import React, { useState } from 'react';
import { Home, DollarSign, LandPlot, Users, Vote, Lightbulb, AlertCircle, Menu, X } from 'lucide-react';

interface NavigationProps {
  onSectionClick: (section: string) => void;
  activeSection: string;
}

const navItems = [
  { name: 'Início', icon: Home },
  { name: 'Impostos', icon: DollarSign },
  { name: 'Política', icon: LandPlot },
  { name: 'Servidores', icon: Users },
  { name: 'Votações', icon: Vote },
  { name: 'Soluções', icon: Lightbulb },
  { name: 'Cobrança', icon: AlertCircle },
];

export function Navigation({ onSectionClick, activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (name: string) => {
    onSectionClick(name);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium 
                  ${activeSection === item.name.toLowerCase()
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600 hover:border-b-2 hover:border-green-600'
                  }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute w-full bg-white z-50 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleItemClick(item.name)}
              className={`${
                activeSection === item.name.toLowerCase()
                  ? 'bg-green-50 text-green-600'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
              } group flex items-center px-3 py-2 text-base font-medium rounded-md w-full`}
            >
              <item.icon
                className={`${
                  activeSection === item.name.toLowerCase()
                    ? 'text-green-600'
                    : 'text-gray-400 group-hover:text-green-600'
                } mr-4 flex-shrink-0 h-6 w-6`}
                aria-hidden="true"
              />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}