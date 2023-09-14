import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
        id : number
    name: string

  age: number;
    avatar: string
    status:boolean
    phoneNumber:number
}
