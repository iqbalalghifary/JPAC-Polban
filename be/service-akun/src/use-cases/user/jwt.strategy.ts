import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
import { config } from "src/config"

export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            secretOrKey: config.JWT_SECRET,
            ignoreExpiration: false,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload: any){
        console.log("validate", payload);
        return {
            role: payload.role,
        }
    }
}