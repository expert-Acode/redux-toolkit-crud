import http from "../http-common";
import {baseURL} from  "../http-common"
import axios from "axios";

class TutorialDataService{
    create(data) {
        return http.post("/posts", data);
      }
     get = async (url) => {
          let res = await axios(`${baseURL}${url}`)
          return { status: true, data: res.data, code: 200 }
      }
    getAll(){
      return  baseURL.get("/posts");
        // console.log("alldata")
    }
}
export default new TutorialDataService();