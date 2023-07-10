export default (apiEndpoint: string) => {
  return fetch(`${apiEndpoint}`).then((response) =>
    response.json()
  );
};
