export const getNavigatorGeolocation = () =>
  new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve))
