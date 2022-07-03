import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../../constants/api";

export const User = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiBaseUrl + "user")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, []);

  if(loading) {
    return <span>loading...</span>
  }

  return <div>{JSON.stringify(user, null, 4)}</div>;
};
