import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/api";

//* Asenkron thunk aksiyonu
const getLanguages = createAsyncThunk("languages/getLanguages", async () => {
  // API isteği atılır
  const res = await api.get("/getLanguages");

  // payload'a return edilir
  return res.data.data?.languages;
});

export default getLanguages;

export const translateText = createAsyncThunk("translate", async (p) => {
  //- API'YE Gönderilecek olan parametreleri belirleme
  const params = new URLSearchParams();

  params.set("source_language", p.sourceLang.value);
  params.set("target_language", p.targetLang.value);
  params.set("text", p.text);

  //* API'ye gönderilecek headerı belirledik.
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };

  //*API YE İsteğini at
  const res = await api.post("/translate", params, { headers });
  //* payloadı belirle
  return res.data.data;
});
