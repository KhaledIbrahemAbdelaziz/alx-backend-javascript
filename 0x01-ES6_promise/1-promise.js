function getFullResponseFromAPI(success) {
  return new promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('The fake API is not working currently'));
  });
}

export default getFullResponseFromAPI;
