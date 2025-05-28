import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    handleRequest(err, user, info) {
        console.log('Guard invoked');
        if (err || !user) {
            console.log('Error or no user');
            throw err || new UnauthorizedException('Invalid credentials');
        }
        console.log('User validated:', user);
        return user;
    }
}
