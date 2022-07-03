import { useEffect, useState } from "react";

export const User = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) {
    return <span>loading...</span>
  }
  
  return <div>{JSON.stringify(user, null, 4)}</div>;
};
