import { ApiService } from "@/services/ApiServices";

export default class UnAuthorized {
  static baseUrl = "unauthorized";
  static async getUnAuthorized() {
    try {
      const data = await ApiService.get(UnAuthorized.baseUrl);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async addNewUnauthorizedData(newUnAuthorizedData: any) {
    try {
      const data = await ApiService.post(
        UnAuthorized.baseUrl,
        newUnAuthorizedData
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
