import { ApiService } from "@/services/ApiServices";
import UserModel from "./UserModel";
export class UserService {
  static baseUrl = "auth";

  static async registerUser(registerUser: UserModel) {
    try {
      const data = await ApiService.post(
        `${UserService.baseUrl}/register`,
        registerUser
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async loginUser(loginUser: UserModel) {
    try {
      const data = await ApiService.post(
        `${UserService.baseUrl}/login`,
        loginUser
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async validateToken() {
    try {
      const data = await ApiService.get(`${UserService.baseUrl}/validateToken`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  static async allUsers() {
    try {
      const data = await ApiService.get(`${UserService.baseUrl}/allusers`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async approval(userId: string, isApproved: boolean) {
    try {
      const data = await ApiService.put(`${UserService.baseUrl}/approval`, {
        userId,
        isApproved,
      });
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
}
