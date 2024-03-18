import { NextFunction, Response, Request } from "express";
import { CreateUserRequest } from "../model/user-model";
import { UserServices } from "../services/user-services";

export class UserController {
   static async register(req: Request, res: Response, next: NextFunction) {
      try {
         const request: CreateUserRequest = req.body as CreateUserRequest;
         const response = await UserServices.register(request);

         res.status(200).json({
            data: response,
         });
      } catch (error) {
         next(error);
      }
   }
}


