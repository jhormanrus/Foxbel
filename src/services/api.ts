const configService = {
  apiUrl: "https://foxbel.my.to",
};

export default (apiEndpoint: string) => {
  return fetch(`${configService.apiUrl}${apiEndpoint}`).then((response) =>
    response.json()
  );
};
