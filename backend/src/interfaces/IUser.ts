import { Identifiable } from '.';

export interface IUser extends Identifiable, ILogin {
  username: string;
  role: string;
  image: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IUserRole {
  role: string;
}

export type IUserResponse = Omit<IUser, 'password'>;