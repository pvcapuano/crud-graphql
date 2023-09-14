import { DELETE_USER } from "../Graphql/Mutation";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { useQuery, useMutation } from "@apollo/client";

const ListOfUsers = () => {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser] = useMutation(DELETE_USER);

  if (data) {
    console.log(data);
  }
  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
              <button
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete user
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ListOfUsers;
