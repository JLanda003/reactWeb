export const helpFetch = () => {
  const URL = 'http://localhost:3004/';

  const customFetch =( endPoint, options = {} )=> {
    options.method = options.method || "GET"
    options.headers = {
      "content-type" : "application/json"
    }

    if ( options.body ) {
      options.body = JSON.stringify( options.body )
    }

    console.log(options)

    return fetch(`${URL}${endPoint}`, options).then( response => {
      return response.ok
      ? response.json()
      : Promise.reject({
        error : true,
        status : response.status,
        statusText : response.statusText
      })
    }).catch( error => error )
  }

  const get = endPoint => customFetch( endPoint );

  return{ get }
}