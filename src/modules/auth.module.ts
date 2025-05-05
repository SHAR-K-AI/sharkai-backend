// src/auth/auth.module.ts

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import {UsersModule} from "./users.module";
import { AuthService } from 'src/services/auth.service';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { GoogleAuthStrategy } from 'src/auth/google.strategy';
import { FacebookAuthStrategy } from 'src/auth/facebook.strategy';
import { LocalStrategy } from 'src/auth/local.strategy';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthController } from 'src/controllers/auth.controller';
import {Module} from "@nestjs/common";


@Module({
    imports: [PassportModule, JwtModule.register({ secret: 'jwt-secret', signOptions: { expiresIn: '60m' } }), UsersModule],
    providers: [AuthService, JwtStrategy, GoogleAuthStrategy, FacebookAuthStrategy, LocalStrategy, RolesGuard],
    controllers: [AuthController],
})
export class AuthModule {}
