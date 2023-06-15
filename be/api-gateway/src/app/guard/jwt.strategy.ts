import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { config } from "../config"

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            secretOrKey: config.JWT_SECRET,
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: any){
        return {
            role: payload.role,
        }
    }
}