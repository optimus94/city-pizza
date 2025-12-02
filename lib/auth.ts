type SignInParams = {
  email: string;
  password: string;
};

export const signIn = async ({ email, password }: SignInParams) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Fake validation
      if (email === "test@test.com" && password === "123456") {
        resolve({
          userId: "123",
          email,
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000); // simulate API delay
  });
};

export const getCurrentUser = async () => {
  // In a real app this would read from secure storage / API token.
  // For this demo we return a fixed user matching the fake signIn response.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId: "123",
        name: "CityPizza User",
        email: "test@test.com",
      });
    }, 200);
  });
};
