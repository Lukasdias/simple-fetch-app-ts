import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import UserCard from "./components/UserCard/index";
import UserContainer from "./components/UserContainer/index";
import DefaultButton from "./components/DefaultButton/index";
interface UserInfo {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  gender: string;
  email: string;
  phone: string;
}

function App() {
  const axios = require("axios").default;
  const [users, setUsers] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://randomuser.me/api/?page=${currentPage}`)
        .then(function (response: any) {
          setUsers([...users, ...response.data.results]);
        })
        .catch(function (error: any) {
          console.log(error);
          return;
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div className="App">
      <Title title={`Fetched Users: ${currentPage} `} />
      <DefaultButton
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        <p>+</p>
      </DefaultButton>

      <UserContainer>
        {users.map((user: UserInfo, idx: number) => (
          <UserCard
            key={idx}
            firstName={user.name.first}
            lastName={user.name.last}
            gender={user.gender}
            email={user.email}
            image={user.picture.thumbnail}
            phone={user.phone}
          />
        ))}
      </UserContainer>
    </div>
  );
}

export default App;
