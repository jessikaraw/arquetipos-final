// 1. Definimos e EXPORTAMOS a interface (o "molde") do objeto Arquetipo.
//    Agora, qualquer outro arquivo pode importar este tipo para saber como é um arquétipo.
//   Adicionei a propriedade 'id' para corresponder aos seus dados.

export interface ArchetypeType {
  id: number;
  nome: string;
  caracteristicas: string;
}

// 2. Usamos 'export const' para exportar a lista de arquétipos já com o tipo aplicado.
//    Isso garante que todos os objetos dentro desta lista sigam o "molde" da ArchetypeType.
export const archetypes: ArchetypeType[] = [
  { id: 1, nome: "Governante", caracteristicas: "Ordem, controle, segurança, responsabilidade e prestígio social." },
  { id: 2, nome: "Criador", caracteristicas: "Inovação, imaginação, criatividade, arte e liberdade." },
  { id: 3, nome: "Cuidador", caracteristicas: "Cuidado, conexão, empatia e comprometimento." },
  { id: 4, nome: "Herói", caracteristicas: "Força, competência, coragem, competição, poder, revolução, segurança e certeza." },
  { id: 5, nome: "Rebelde", caracteristicas: "Poder, rebeldia, revolução e quebra de paradigmas." },
  { id: 6, nome: "Sábio", caracteristicas: "Erudito, pesquisador, professor e especialista." },
  { id: 7, nome: "Explorador", caracteristicas: "Descoberta, individualismo, liberdade e autenticidade." },
  { id: 8, nome: "Inocente", caracteristicas: "Leveza, simplicidade, idealização, nostalgia e paz." },
  { id: 9, nome: "Cara comum", caracteristicas: "Inclusão, pertencimento, igualdade e simplicidade." },
  { id: 10, nome: "Bobo da Corte", caracteristicas: "Diversão, viver o momento presente e vida leve descontraída." },
  { id: 11, nome: "Mago", caracteristicas: "Poder, magia, tecnologia, consciência, universo, sincronicidade, soluções milagrosas, lei da atração e abundância." },
  { id: 12, nome: "Amante", caracteristicas: "Autoaceitação, felicidade, amor, êxtase e intimidade." },
];

// 3. O 'export default' não é mais necessário, pois já usamos 'export const' acima para o array.