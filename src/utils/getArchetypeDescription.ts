// src/utils/getArchetypeDescription.ts

// Importa os dados dos arquétipos
import { archetypes } from '../features/quiz/data/archetypes';

// Cria um mapa para buscar as descrições de forma eficiente
const descriptionsMap = new Map<string, string>();
archetypes.forEach(arq => {
  // Associa o nome do arquétipo à sua característica (string)
  descriptionsMap.set(arq.nome, arq.caracteristicas);
});

// A função agora retorna uma string ou um texto padrão
export function getArchetypeDescription(nome: string): string {
  return descriptionsMap.get(nome) || "Personalidade única e marcante!";
}