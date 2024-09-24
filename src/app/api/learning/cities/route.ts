import { NextResponse } from "next/server";

interface City {
    name: string;
    region: string;
}

export async function GET() {
    
    const cities: City[] = [
        {
            name: 'São Paulo',
            region: 'Sudeste'
        },
        {
            name: 'Rio de Janeiro',
            region: 'Sudeste'
        },
        {
            name: 'Salvador',
            region: 'Nordeste'
        },
        {
            name: 'Brasília',
            region: 'Centro-Oeste'
        },
        {
            name: 'Fortaleza',
            region: 'Nordeste'
        },
        {
            name: 'Curitiba',
            region: 'Sul'
        },
        {
            name: 'Manaus',
            region: 'Norte'
        },
        {
            name: 'Belém',
            region: 'Norte'
        },
        {
            name: 'Porto Alegre',
            region: 'Sul'
        },
        {
            name: 'Recife',
            region: 'Nordeste'
        }
    ];

    return NextResponse.json(cities);
};