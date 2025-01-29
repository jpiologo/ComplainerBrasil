import React, { useState } from 'react';
import { StateSelector } from './components/StateSelector';
import { Navigation } from './components/Navigation';
import { brazilianStates } from './data/states';
import type { State } from './types';
import { ExternalLink } from 'lucide-react';

function App() {
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [activeSection, setActiveSection] = useState('inicio');

  if (!selectedState) {
    return <StateSelector states={brazilianStates} onStateSelect={setSelectedState} />;
  }

  const handleSectionClick = (section: string) => {
    if (section.toLowerCase() === 'início') {
      setSelectedState(null);
      setActiveSection('inicio');
      return;
    }
    setActiveSection(section.toLowerCase());
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'política':
        return (
          <section className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Sistema Político do Paraná</h2>
              
              {/* Executive Branch */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Poder Executivo</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">O Poder Executivo do Paraná é exercido pelo Governador do Estado, eleito para mandato de 4 anos. Atualmente, o governo está sediado no Palácio Iguaçu, em Curitiba.</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Responsável pela administração estadual</li>
                    <li>Execução do orçamento</li>
                    <li>Implementação de políticas públicas</li>
                    <li>Gestão das secretarias estaduais</li>
                  </ul>
                  <p>O governador é auxiliado por secretários estaduais, que comandam as diferentes áreas da administração.</p>
                </div>
              </div>

              {/* Legislative Branch */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Poder Legislativo</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">A Assembleia Legislativa do Paraná (ALEP) é composta por 54 deputados estaduais, eleitos para mandatos de 4 anos.</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Elaboração e votação de leis estaduais</li>
                    <li>Fiscalização do Poder Executivo</li>
                    <li>Aprovação do orçamento estadual</li>
                    <li>Criação de CPIs estaduais</li>
                  </ul>
                  <p>As sessões da ALEP são realizadas no Palácio 19 de Dezembro, em Curitiba, e podem ser acompanhadas pelo público.</p>
                </div>
              </div>

              {/* Judiciary Branch */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Poder Judiciário</h3>
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">O Tribunal de Justiça do Paraná (TJPR) é o órgão máximo do Poder Judiciário estadual.</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Julgamento de causas estaduais</li>
                    <li>Controle de constitucionalidade de leis estaduais</li>
                    <li>Administração da justiça em primeira e segunda instâncias</li>
                  </ul>
                  <p>O TJPR é composto por desembargadores e juízes, distribuídos em diferentes comarcas pelo estado.</p>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Current Votes */}
            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Votações em Andamento</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-lg">PL 123/2024 - Reforma Tributária Estadual</h3>
                    <p className="text-gray-600 mb-2">Em votação na ALEP - Previsão: 15/03/2024</p>
                    <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                      Acompanhar <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-lg">PL 456/2024 - Incentivos à Agricultura Familiar</h3>
                    <p className="text-gray-600 mb-2">Aprovado em 1ª votação - 2ª votação: 20/03/2024</p>
                    <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                      Ver detalhes <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Últimas Notícias</h2>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-lg">Novo Portal de Transparência</h3>
                  <p className="text-gray-600 text-sm mb-2">12/03/2024</p>
                  <p className="text-gray-700">Estado lança nova plataforma para consulta de gastos públicos.</p>
                </article>
                <article className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-lg">Concurso Público</h3>
                  <p className="text-gray-600 text-sm mb-2">10/03/2024</p>
                  <p className="text-gray-700">Governo anuncia novo concurso com 1.200 vagas.</p>
                </article>
                <article>
                  <h3 className="font-semibold text-lg">Obras em Rodovias</h3>
                  <p className="text-gray-600 text-sm mb-2">08/03/2024</p>
                  <p className="text-gray-700">Início das obras de duplicação da PR-323.</p>
                </article>
              </div>
            </div>

            {/* Public Spending Overview */}
            <div className="col-span-1 lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Gastos Públicos - Março 2024</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-gray-600">Educação</p>
                    <p className="text-2xl font-bold">R$ 1.2B</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-gray-600">Saúde</p>
                    <p className="text-2xl font-bold">R$ 980M</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="text-gray-600">Infraestrutura</p>
                    <p className="text-2xl font-bold">R$ 750M</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Links */}
            <div className="col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Links Importantes</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.assembleia.pr.leg.br/" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:underline inline-flex items-center">
                      Assembleia Legislativa <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tjpr.jus.br/" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline inline-flex items-center">
                      Tribunal de Justiça <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pr.gov.br/" target="_blank" rel="noopener noreferrer"
                       className="text-blue-600 hover:underline inline-flex items-center">
                      Portal do Governo <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onSectionClick={handleSectionClick} activeSection={activeSection} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Portal de Transparência - {selectedState.name}
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Informações detalhadas sobre impostos, política e serviço público do seu estado
          </p>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;