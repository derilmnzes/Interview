import axios from "axios";

export async function  getCategory() {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return response.data
  } catch (err) {
    console.log(err)
    return err.response.data;
  }
}

export async function  getAllProductsBYCategory(category) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      return response.data
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  }


  export async function  getProductDetails(category) {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${category}`
      );
      return response.data
    } catch (err) {
      console.log(err)
      return err.response.data;
    }
  }
