import UnathorizeException from "../exceptions/unauthorize-exception.js";

const tokenMiddleware = (request, response, nextFunction) => {
  try {
    const token = request.get("X-API-TOKEN");
    if (!token) throw new UnathorizeException(`Silakan login terlebih dahulu`);
    nextFunction();
  } catch (error) {
    nextFunction(error);
  }
};

export default tokenMiddleware;
