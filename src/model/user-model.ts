import { Users } from "@prisma/client";

export type UserResponse = {
   statusCode: number;
   message: string;
   additionalData: {
      username: string;
      name: string;
      token?: string;
   };
};

export type CreateUserRequest = {
   username: string;
   password: string;
   name: string;
};

export function toUserReponse(
   user: Users,
   statusCode: number,
   message: string
): UserResponse {
   return {
      statusCode: statusCode,
      message: message,
      additionalData: {
         username: user.username,
         name: user.name,
      },
   };
}
