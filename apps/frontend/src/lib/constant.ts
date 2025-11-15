// export const HTTP_URL = "https://http-backend.naukriscore.com/api/v2/employee";

export const HTTP_URL =
  process.env.NODE_ENV === "production"
    ? "https://http-backend.naukriscore.com/api/v2/employee"
    : "https://j8hgnh63-5001.inc1.devtunnels.ms/api/v2/employee";