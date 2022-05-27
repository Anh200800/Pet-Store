// api/productApi.js
import axiosClient from "./axiosClient";
const productApi = {
getAll : (params) => {
const url = '/products';
return axiosClient.get(url, { params });
},
get: (productId) => {
    const url = `/products/${productId}`;
    return axiosClient.get(url)
}
}
export default productApi;

