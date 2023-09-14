import { IsInt, Max, Min } from "class-validator"

export class CreateUserDto {
    @IsInt()
    @Min(5)
    @Max(20)
    id : number
    name: string
         @Min(18, {
    groups: ['registration'],
  })
    age:number
    avatar: string
    status:boolean
    phoneNumber:number
}
