import { api } from "../api";
import { useQuery } from 'react-query';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}
type GetUserResponse = {
  totalCount: number;
  users:User[]
}

export async function getUsers(page: number): Promise<GetUserResponse> {
    const { data, headers } = await api.get("http://localhost:3000/api/users",{
      params:{
        page
      }
    });

    const totalCount = Number(headers["x-total-count"]);

    const users = data.users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString("pt-Br", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };
    });

    return {
      totalCount ,
      users
    };
}

export function useUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page) );
}