const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://localhost:1337";

const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
  }),
};

export default withData(config);
