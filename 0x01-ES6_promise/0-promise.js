function getResponseFromAPI(res) {
  return new promise((resolve, reject) => {
    if (res) resolve({ status: 200, body: 'Success' });
    reject(Error('The fake API is not working currently'));
  });
}
export default getResponseFromAPI;
