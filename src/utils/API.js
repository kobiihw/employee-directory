import axios from "axios";


const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

// Export an object that searches the Giphy API for the passed query
export default {
  search: function() {
       return axios.get(BASEURL);
  }
};

