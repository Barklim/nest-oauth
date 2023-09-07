import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { GoogleAuthenticationService } from './authentication/social/google-authentication.service';
import { GoogleAuthenticationController } from './authentication/social/google-authentication.controller';

@Module({
  controllers: [AuthenticationController, GoogleAuthenticationController],
  providers: [AuthenticationService, GoogleAuthenticationService],
})
export class IamModule {}
