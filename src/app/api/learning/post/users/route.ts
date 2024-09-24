import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { nome, sobrenome, email, password } = body;

    if (!nome || !sobrenome || !email || !password) {
        return NextResponse.json({
            erro: true,
            message: "Todos os campos são obrigatórios!"
        }, { status: 400 });
    };

    return NextResponse.json({
        erro: false,
        message: "Enviado com sucesso!",
        data: [{
            nome,
            sobrenome,
            email,
            password
        }]
    });
}
