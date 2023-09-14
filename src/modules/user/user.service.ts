import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as fs from 'fs';
@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    try {
      const userData = fs.readFileSync('users.json', 'utf-8');
      const users = JSON.parse(userData);
      users.unshift(createUserDto);
      fs.writeFileSync('users.json', JSON.stringify(users));
      return {
        message: 'add user thành công',
        data: createUserDto,
      };
    } catch (err) {
      console.log('err', err);

      return {
        message: 'add user thất bại',
      };
    }
  }

  findAll() {
    try {
      const userData = fs.readFileSync('users.json', 'utf-8');
      const users: CreateUserDto[] = JSON.parse(userData);
      return {
        message: 'đọc file user thành công',
        data: users,
      };
    } catch (err) {
      console.log('err', err);
      return {
        message: 'lỗi trong quá trình đọc file user service',
      };
    }
  }

  findOne(id: number) {
    try {
      const userData = fs.readFileSync('users.json', 'utf-8');
      const users: CreateUserDto[] = JSON.parse(userData);
      const user = users.find((user) => user.id == id);
      if (!user) {
        return {
          message: `không tìm thấy user có id là ${id}`,
        };
      }
      return {
        message: 'tìm kiếm user thành công',
        data: user,
      };
    } catch (err) {
      console.log('err', err);
      return {
        message: 'lỗi trong quá trình tìm kiếm user',
      };
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const userData = fs.readFileSync('users.json', 'utf-8');
      const users: CreateUserDto[] = JSON.parse(userData);
      const user = users.find((user) => user.id === id);
      if (!user) {
        return { message: `hệ thống không tồn tại user có id là ${id}` };
      }
      Object.assign(user, updateUserDto);
      fs.writeFileSync('users.json', JSON.stringify(users));
      return {
        message: 'update user thành công',
        data: user,
      };
    } catch (err) {
      console.log('err', err);
      return {
        message: 'lỗi trong quá trình update user',
      };
    }
  }

  remove(id: number) {    
    try {
      const userData = fs.readFileSync('users.json', 'utf-8');
      const users: CreateUserDto[] = JSON.parse(userData);
      const user = users.findIndex((user) => user.id === id);
      if (user === -1) {
        return { message: `hệ thống không tồn tại user có id là ${id}` };
      }
      users.splice(user, 1);
      fs.writeFileSync('users.json', JSON.stringify(users));
      return {
        message: 'xóa user thành công',
        data: users,
      };
    } catch (err) {
      console.log('err', err);
      return {
        message: 'lỗi trong quá trình remove user',
      };
    }
  }
}
