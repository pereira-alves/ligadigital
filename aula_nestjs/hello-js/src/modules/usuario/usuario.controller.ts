import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}
    
    @Get('/listar')
    listarUsuarios(): Usuario[] {
        return this.usuarioService.listarUsuarios();
    }

    @Get('/')
    obtemUsuario(@Query('cpf') cpf: string): Usuario{
        const usuario = this.usuarioService.obtemUsuario(cpf);
        if (!usuario){
            throw new NotFoundException();
        }
        return usuario;
    }

    @Post('/cadastrar')
    cadastrarUsuario(@Body() usuario: Usuario): string{
        if (!usuario.nome || usuario.nome == ''){
            throw new BadRequestException();
        }
        return this.usuarioService.cadastrarUsuario(usuario);
    }

    @Delete('/:cpf')
    removerUsuario(@Param('cpf') cpf: string): boolean {
        return this.usuarioService.removerUsuario(cpf);
    }
}
