import UserRepository from "../repositories/user-repository.js";
import UserValidation from "../validations/user-validation.js";
import Zodvalidator from "../validations/zod-validator.js";

export default class UserService {
  static async findAll() {
    return await UserRepository.findAll();
  }


  static async findById(id) {
    return await UserRepository.findById(id);
  }

  static async create(user) {
    user = Zodvalidator.validate(UserValidation.CREATE, user);
    return await UserRepository.create(user);
  }
}
