import apiEndPoint from "../endpoint";
import instance from "../lib/request";
import { LocalStorage } from "../../utils";

class Api {
  async LoadAuthToken() {
    const token = await LocalStorage.getUserToken();
    return token;
  }

  AutomatiquelyAddTokenToHeader = async () => {
    const token = await this.LoadAuthToken();
    if (token) {
      instance.defaults.headers.common["auth-token"] = token;
    }
  };

  signIn = async (phone, password) => {
    console.log(apiEndPoint.auth.login);
    await this.AutomatiquelyAddTokenToHeader();
    return await instance.post(apiEndPoint.auth.login, {
      phone,
      password
    });
  };

  signUp = async (phone, password, firstName, lastName) => {
    console.log(apiEndPoint.auth.register);
    return await instance.post(apiEndPoint.auth.register, {
      phone,
      password,
      firstName,
      lastName,
      email: "test@gmail.com"
    });
  };

  getAllCategorys = async () => {
    await this.AutomatiquelyAddTokenToHeader();
    return await instance.get(apiEndPoint.categorys);
  };

  getAllProducts = async () => {
    await this.AutomatiquelyAddTokenToHeader();
    return await instance.get(apiEndPoint.products.getAll + "show");
  };

  getProductsByCategory = async category => {
    await this.AutomatiquelyAddTokenToHeader();
    return await instance.get(
      apiEndPoint.products.getByCategory + category._id
    );
  };

  searchProducts = async search => {
    await this.AutomatiquelyAddTokenToHeader();
    return await instance.get(apiEndPoint.products.search + search);
  };

  getActiveCovers = async () => {
    await this.AutomatiquelyAddTokenToHeader();
    return await instance.get(apiEndPoint.covers + "active");
  };

  getAllCovers = async () => {
    await this.AutomatiquelyAddTokenToHeader();
    return await instance.get(apiEndPoint.covers);
  };

  updateUserProfil = async (firstName, lastName, email, address) => {
    await this.AutomatiquelyAddTokenToHeader();
    const userId = (await LocalStorage.getUser())._id;
    return await instance.post(apiEndPoint.user.update + userId, {
      firstName,
      lastName,
      email,
      address
    });
  };

  createOrder = async product => {
    await this.AutomatiquelyAddTokenToHeader();
    const userId = (await LocalStorage.getUser())._id;
    return await instance.post(apiEndPoint.ordered, {
      userId,
      productId: product._id,
      price: product.price,
      quantity: 1
    });
  };
}

export default new Api();
