import { NextResponse } from "next/server";

export async function GET() {
    const users = [
        {
            nome: 'Rafael',
            sobrenome: 'Francisco',
            email: 'rafael@rsouzad3v.com',
            password: 'senhacorreta',
            tokenAccess: '0123456789a'
        },
        {
            nome: 'Ana',
            sobrenome: 'Silva',
            email: 'ana.silva@example.com',
            password: 'senha123',
            tokenAccess: '1234567890b'
        },
        {
            nome: 'Carlos',
            sobrenome: 'Pereira',
            email: 'carlos.pereira@example.com',
            password: 'password123',
            tokenAccess: '2345678901c'
        },
        {
            nome: 'Beatriz',
            sobrenome: 'Costa',
            email: 'beatriz.costa@example.com',
            password: 'minhasenha',
            tokenAccess: '3456789012d'
        },
        {
            nome: 'Lucas',
            sobrenome: 'Oliveira',
            email: 'lucas.oliveira@example.com',
            password: 'olucas2021',
            tokenAccess: '4567890123e'
        },
        {
            nome: 'Juliana',
            sobrenome: 'Santos',
            email: 'juliana.santos@example.com',
            password: 'senha2021',
            tokenAccess: '5678901234f'
        },
        {
            nome: 'Pedro',
            sobrenome: 'Ferreira',
            email: 'pedro.ferreira@example.com',
            password: 'minhasenha2021',
            tokenAccess: '6789012345g'
        },
        {
            nome: 'Fernanda',
            sobrenome: 'Mendes',
            email: 'fernanda.mendes@example.com',
            password: 'segredoforte',
            tokenAccess: '7890123456h'
        },
        {
            nome: 'Marcos',
            sobrenome: 'Alves',
            email: 'marcos.alves@example.com',
            password: 'senha12345',
            tokenAccess: '8901234567i'
        },
        {
            nome: 'Camila',
            sobrenome: 'Ribeiro',
            email: 'camila.ribeiro@example.com',
            password: 'supersegura',
            tokenAccess: '9012345678j'
        },
        {
            nome: 'Thiago',
            sobrenome: 'Lima',
            email: 'thiago.lima@example.com',
            password: 'senha_lima2021',
            tokenAccess: '0123456789k'
        },
        {
            nome: 'Gabriela',
            sobrenome: 'Gomes',
            email: 'gabriela.gomes@example.com',
            password: 'gabi123',
            tokenAccess: '1234567890l'
        },
        {
            nome: 'Rodrigo',
            sobrenome: 'Rocha',
            email: 'rodrigo.rocha@example.com',
            password: 'senha_2022',
            tokenAccess: '2345678901m'
        },
        {
            nome: 'Renata',
            sobrenome: 'Martins',
            email: 'renata.martins@example.com',
            password: 'renatinha22',
            tokenAccess: '3456789012n'
        },
        {
            nome: 'Daniel',
            sobrenome: 'Barros',
            email: 'daniel.barros@example.com',
            password: 'senha_barros',
            tokenAccess: '4567890123o'
        },
        {
            nome: 'Patrícia',
            sobrenome: 'Souza',
            email: 'patricia.souza@example.com',
            password: 'minhapatricia',
            tokenAccess: '5678901234p'
        },
        {
            nome: 'Felipe',
            sobrenome: 'Moraes',
            email: 'felipe.moraes@example.com',
            password: 'felipe_2022',
            tokenAccess: '6789012345q'
        },
        {
            nome: 'Larissa',
            sobrenome: 'Dias',
            email: 'larissa.dias@example.com',
            password: 'segredolarissa',
            tokenAccess: '7890123456r'
        },
        {
            nome: 'Victor',
            sobrenome: 'Carvalho',
            email: 'victor.carvalho@example.com',
            password: 'senha2023',
            tokenAccess: '8901234567s'
        },
        {
            nome: 'João',
            sobrenome: 'Vieira',
            email: 'joao.vieira@example.com',
            password: 'joaov123',
            tokenAccess: '9012345678t'
        },
        {
            nome: 'Letícia',
            sobrenome: 'Teixeira',
            email: 'leticia.teixeira@example.com',
            password: 'leticia2023',
            tokenAccess: '0123456789u'
        },
        {
            nome: 'Mateus',
            sobrenome: 'Ramos',
            email: 'mateus.ramos@example.com',
            password: 'mateus123',
            tokenAccess: '1234567890v'
        },
        {
            nome: 'Cláudia',
            sobrenome: 'Duarte',
            email: 'claudia.duarte@example.com',
            password: 'claudinha2023',
            tokenAccess: '2345678901w'
        },
        {
            nome: 'Ricardo',
            sobrenome: 'Figueiredo',
            email: 'ricardo.figueiredo@example.com',
            password: 'senha_ricardo',
            tokenAccess: '3456789012x'
        },
        {
            nome: 'Paula',
            sobrenome: 'Almeida',
            email: 'paula.almeida@example.com',
            password: 'paula12345',
            tokenAccess: '4567890123y'
        },
        {
            nome: 'Gustavo',
            sobrenome: 'Neves',
            email: 'gustavo.neves@example.com',
            password: 'gustavo2024',
            tokenAccess: '5678901234z'
        },
        {
            nome: 'Sofia',
            sobrenome: 'Lopes',
            email: 'sofia.lopes@example.com',
            password: 'sofia_secreta',
            tokenAccess: '6789012345a'
        },
        {
            nome: 'Alex',
            sobrenome: 'Castro',
            email: 'alex.castro@example.com',
            password: 'alex2022',
            tokenAccess: '7890123456b'
        },
        {
            nome: 'Aline',
            sobrenome: 'Moreira',
            email: 'aline.moreira@example.com',
            password: 'senha_aline',
            tokenAccess: '8901234567c'
        },
        {
            nome: 'Eduardo',
            sobrenome: 'Silveira',
            email: 'eduardo.silveira@example.com',
            password: 'eduardo123',
            tokenAccess: '9012345678d'
        },
        {
            nome: 'Mariana',
            sobrenome: 'Batista',
            email: 'mariana.batista@example.com',
            password: 'mariana_123',
            tokenAccess: '0123456789e'
        },
        {
            nome: 'Vitor',
            sobrenome: 'Reis',
            email: 'vitor.reis@example.com',
            password: 'vitorsenha',
            tokenAccess: '1234567890f'
        },
        {
            nome: 'Tânia',
            sobrenome: 'Cardoso',
            email: 'tania.cardoso@example.com',
            password: 'tania_2023',
            tokenAccess: '2345678901g'
        },
        {
            nome: 'Bruno',
            sobrenome: 'Pinto',
            email: 'bruno.pinto@example.com',
            password: 'pintobruno',
            tokenAccess: '3456789012h'
        },
        {
            nome: 'Débora',
            sobrenome: 'Oliveira',
            email: 'debora.oliveira@example.com',
            password: 'debora123',
            tokenAccess: '4567890123i'
        },
        {
            nome: 'André',
            sobrenome: 'Moura',
            email: 'andre.moura@example.com',
            password: 'andrem2023',
            tokenAccess: '5678901234j'
        },
        {
            nome: 'Michele',
            sobrenome: 'Souza',
            email: 'michele.souza@example.com',
            password: 'michele_123',
            tokenAccess: '6789012345k'
        },
        {
            nome: 'Leonardo',
            sobrenome: 'Cruz',
            email: 'leonardo.cruz@example.com',
            password: 'leocruz2023',
            tokenAccess: '7890123456l'
        },
        {
            nome: 'Marcela',
            sobrenome: 'Coelho',
            email: 'marcela.coelho@example.com',
            password: 'marcela123',
            tokenAccess: '8901234567m'
        },
        {
            nome: 'Diego',
            sobrenome: 'Sampaio',
            email: 'diego.sampaio@example.com',
            password: 'diego2023',
            tokenAccess: '9012345678n'
        },
    ]
    

    return NextResponse.json(users);
};