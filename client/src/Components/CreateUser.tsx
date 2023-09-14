import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER);
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          createUser({
            variables: {
              name: name,
              username: username,
              password: password,
            },
          });
        }}
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUser;
