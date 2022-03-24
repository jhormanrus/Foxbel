const configService = {
  apiUrl: "https://foxbel-api.herokuapp.com",
};

export default (apiEndpoint: string) => {
  return fetch(`${configService.apiUrl}${apiEndpoint}`).then((response) =>
    response.json()
  );
};
