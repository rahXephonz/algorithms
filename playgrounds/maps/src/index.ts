import { User } from "./user";

class GetData extends User {
  getAllData() {
    this.insertName();
  }
}

const getData = new GetData();

getData.getAllData();
