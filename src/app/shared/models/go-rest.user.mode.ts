import { UsuarioModel } from "./usuario.model"

export class GoRestUserModel {

    meta?: {
        pagination? : {
            total?: number,
            pages?: number,
            page?: number,
            limit?: number,
            links?: {
                previous?: string,
                current?: string,
                next?: string
            }
        }
    };

    data ? : UsuarioModel []
}