import axiosSecure from "./axiosSecure";

export const saveUserData = async (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    status: "Active",
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};
