import UserService from "../services/user-service.js";

export default class UserController {
  static async findAll(request, response, nextFunction) {
    try {
        const result = await UserService.findAll();
        response.status(200).json(result);
    } catch (error) {
      nextFunction(error);
    }
  }

  static async findById(request, response, nextFunction) {
    try {
        const result = await UserService.findById(request.params.id);
        response.status(200).json(result);
    } catch (error) {
      nextFunction(error);
    }
  }

  static async create(request, response, nextFunction) {
    try {
        const result = await UserService.create(request.body);
        response.status(201).json(result);
    } catch (error) {
      nextFunction(error);
    }
  }
}
