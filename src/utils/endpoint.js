export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
export const withChar = char => endpoint => `${endpoint}${char}`
export const withCliendId = clientId => endpoint => `${endpoint}client_id=${clientId}`
export const withClientSeecret = clientSecret => endpoint => `${endpoint}client_secret=${clientSecret}`
export const withVersion = getVersion => endpoint => `${endpoint}v=${getVersion()}`
export const withLL = ll => endpoint => `${endpoint}ll=${ll}`
export const getYYYYMMDD = () =>
  new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, '')
