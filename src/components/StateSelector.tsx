import React from 'react';
import { State } from '../types';
import { MapPin } from 'lucide-react';
import { StateAutocomplete } from './StateAutocomplete';

interface StateSelectorProps {
  states: State[];
  onStateSelect: (state: State) => void;
}

export function StateSelector({ states, onStateSelect }: StateSelectorProps) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-green-600 to-green-900">
      {/* Left side - Image */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0 bg-black/20" />
        <img
          src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Brazil landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-xl w-full">
          {/* Logo and Title */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <MapPin className="w-16 h-16 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complainer - Brasil
            </h1>
            <p className="text-green-100 text-lg md:text-xl">
              Acompanhe dados sobre impostos, política e serviço público do seu estado. 
              Juntos podemos construir um Brasil mais transparente.
            </p>
          </div>

          {/* State Selection */}
          <div className="mb-12">
            <label className="block text-green-100 text-lg mb-3">
              Selecione seu estado
            </label>
            <StateAutocomplete states={states} onStateSelect={onStateSelect} />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Impostos', description: 'Entenda para onde vai seu dinheiro' },
              { title: 'Política', description: 'Conheça o funcionamento dos três poderes' },
              { title: 'Transparência', description: 'Acesse dados sobre servidores públicos' },
              { title: 'Votações', description: 'Acompanhe as decisões do congresso' },
              { title: 'Soluções', description: 'Descubra propostas para melhorar o país' },
              { title: 'Participação', description: 'Aprenda como cobrar seus representantes' },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur rounded-lg p-4 border border-green-400/20 
                         hover:border-green-400/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                <p className="text-green-100 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}