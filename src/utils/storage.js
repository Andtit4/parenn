class LocalStorage {
  static getUser = async () => {
    const user = await LocalStorage.get("user");
    return user;
  };
  static getUserToken = async () => {
    const user = await LocalStorage.get("user");
    return user.token;
  };
}

export default LocalStorage;
