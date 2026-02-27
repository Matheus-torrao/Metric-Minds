export interface DadosTurno{
    id?: string;
    maquina:string;
    tempoProgramandoMinutos:number;
    tempoParadaMinutos: number;
    producaoReal: number;
    pecasDefeituosas: number;
    velocidadeNominalPorMinuto: number;                                            
}

export interface ResultadoOEE {
    disponibilidade: number;
    performance: number;
    qualidade: number;
    oeeFinal: number;
}