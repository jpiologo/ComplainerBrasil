import React, { useState, useRef, useEffect } from 'react';
import { State } from '../types';
import { Search } from 'lucide-react';

interface StateAutocompleteProps {
  states: State[];
  onStateSelect: (state: State) => void;
}

export function StateAutocomplete({ states, onStateSelect }: StateAutocompleteProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredStates = states.filter(state =>
    state.name.toLowerCase().includes(query.toLowerCase()) ||
    state.abbreviation.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev < filteredStates.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
    } else if (e.key === 'Enter' && filteredStates[highlightedIndex]) {
      onStateSelect(filteredStates[highlightedIndex]);
      setIsOpen(false);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Digite o nome do seu estado..."
          className="w-full px-4 py-3 pl-10 rounded-lg bg-white/10 backdrop-blur 
                   border-2 border-green-400/30 text-white placeholder-green-200 
                   focus:outline-none focus:border-green-400 transition-colors text-lg"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400" />
      </div>

      {isOpen && filteredStates.length > 0 && (
        <ul
          ref={listRef}
          className="absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded-lg bg-white/10 
                   backdrop-blur-lg border-2 border-green-400/30 shadow-xl"
        >
          {filteredStates.map((state, index) => (
            <li
              key={state.id}
              onClick={() => {
                onStateSelect(state);
                setIsOpen(false);
                setQuery('');
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`px-4 py-2 cursor-pointer ${
                index === highlightedIndex
                  ? 'bg-green-500/20 text-white'
                  : 'text-green-100 hover:bg-green-500/10'
              }`}
            >
              {state.name} ({state.abbreviation})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}