import { z } from "zod";

export default class UserValidation {
  static CREATE = z.object({
    firstName: z.string(),
    lastName: z.string(),
    password: z.string(),
  });
}
