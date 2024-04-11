import { Response, Injectable, Query, ParseIntPipe } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class AuthMiddleware {

  use(@Query('token', new ParseIntPipe()) token: string, res: Response, next: NextFunction) {
    next();
  }

}