import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
    dados: Usuario[];

    constructor() {
        this.dados = [];
        this.dados.push(new Usuario('Alex', '12345678909'));
        this.dados.push(new Usuario('Anderson', '19876543346'));
        this.dados.push(new Usuario('Tiago', '66699911133'))
    }

    listarUsuarios(): Usuario[] {
        return this.dados;
    }

    obtemUsuario(cpf: string): Usuario{
        // const usuario = this.dados.find(u => u.cpf == cpf);
        return this.dados.find(u => u.cpf == cpf);
    }

    cadastrarUsuario(usuario: Usuario): string{
        this.dados.push(usuario);
        return `Usuária(o) ${usuario.nome} cadastrada(o) com sucesso!`
    }
    removerUsuario(cpf: string): boolean{
        const usuario = this.dados.find(u => u.cpf == cpf);
        if (usuario) {
            this.dados = this.dados.filter(u => u.cpf != cpf);
            return true;
        }
        return false;
    }
}
