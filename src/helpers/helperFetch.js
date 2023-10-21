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
    }).catch( error => {
      return{
        error : true,
        statusText : 'Error: No se ha logrado la petición.'
      }
    } )
  }

  const get = endPoint => customFetch( endPoint );
  
  const post = (endPoint, options) =>{
    options.method = "POST"
    return customFetch(endPoint, options);
  };

  const put = (endPoint, options, id) =>{
    options.method = "PUT"
    return customFetch(`${endPoint}/${id}`, options);
  };

  const delT = (endPoint, id) => {
    const options = {
      method : "DELETE"
    }
    return customFetch(`${endPoint}/${id}`, options);
  }

  return{ get, post, put, delT }
}