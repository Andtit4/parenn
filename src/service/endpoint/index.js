const apiEndPoint = {
  auth: {
    login: "user/login/",
    register: "user/"
  },
  user: {
    update: "user/",
    coins: "user/coins/",
    updateProfilImage: "user/updateImage/"
  },
  categorys: "category/",
  products: {
    getAll: "product/",
    getByCategory: "product/category/",
    search: "product/search/"
  },
  covers: "cover/",
  ordered: "ordered/",
  bucket: {
    getFiles: "bucket/"
  }
};

export default apiEndPoint;
