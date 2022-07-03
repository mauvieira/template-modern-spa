import { useUserData } from "./useUserData";

export const User = () => {
  const { data: user, isLoading, error } = useUserData();

  if (isLoading) {
    return <span>loading... 🕔</span>;
  }

  if(error) {
    return <span>error 😢</span>
  }

  return <div>{JSON.stringify(user, null, 4)}</div>;
};
