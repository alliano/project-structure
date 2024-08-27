import NotFoundException from "../exceptions/notfound-exception.js";

export default class UserRepository {
  
    static #db_user = [
        {
          id: 1,
          name: "alli",
        },
        {
          id: 2,
          name: "Excel",
        },
        {
          id: 3,
          name: "Joni",
        },
      ];
  static async findAll() {
    return this.#db_user;
  }

  static async findById(id) {
    if (id == 1)
      return {
        id: 1,
        name: "Alliano",
      };
    else throw new NotFoundException(`user dengan id ${id} tidak ditemukan`);
  }

  static async create(user) {
    this.#db_user.push(user);
    return this.#db_user[this.#db_user.length - 1]
  }
}
