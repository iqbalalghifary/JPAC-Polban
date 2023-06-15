import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RoleAuthGuard implements CanActivate {
    constructor(private reflector: Reflector){}

    async canActivate(context: ExecutionContext) {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        const request = context.switchToHttp().getRequest();
        return roles.includes(request.user.role) 
        
    }
}