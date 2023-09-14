import { Controller, Get, Res, Version } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';
import * as fs from "fs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Version('3')
  @Get('hello')
  getHello(): string {

    return this.appService.getHello();
  }
    @Version('4')
  @Get('hello')
  getHello2(): string {
    return this.appService.getHello2();
  }
    @Get('hello')
  getHellotest(): string {
    return this.appService.getHellotest();
  }
  // @Get('*')
  // notFound(@Res() res: Response) {
  //   return res.status(404).send('<h1>PAGE NOT FOUND</h1>');
  // }
}
