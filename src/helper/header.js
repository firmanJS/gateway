exports.HeaderJWT = async function(req){
  return { headers: { 'x-token-api':req.headers['x-token-api'] } };
}