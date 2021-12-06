import apiClient from "../helpers/HttpCommons";

class TutorialDataService {
  getAllData(): Promise<any> {
    return apiClient.get("/");
  }
  getSelectedData(): Promise<any> {
    return apiClient.get(
      "/?inc=gender,name,email,phone,cell,id,picture,location"
    );
  }
  getMultipleUsers(): Promise<any> {
    return apiClient.get(
      "/?results=25&inc=gender,name,email,phone,cell,id,picture,location"
    );
  }
  // OOP: Add POST, DELETE, PUT and so forth it needed later on.
}

export default new TutorialDataService();
