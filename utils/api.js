import axios from "axios";

export default axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "41f4b3175emshc60b87d916dc889p17880ejsna8334502f3ff",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
