import axios from "axios";
import { selector, atom } from "recoil";
import { iDATA } from "./InterFace";

const URL: string = "https://fakestoreapi.com/products/";

export const product = selector({
  key: "products",
  get: async () => {
    const data = await axios.get(URL);
    const newData = data.data;
    return newData as Array<iDATA>;
  },
});
export const detailProduct = selector({
  key: "detailProduct",
  get: async (props) => {
    const data = await axios.get(`${URL}/${props}`);
    const newData = data.data;
    return newData as iDATA;
  },
});

export const detail = atom({
  key: "detail",
  default: {} as iDATA,
});

export const cart = atom({
  key: "cart",
  default: [] as Array<iDATA>,
});
