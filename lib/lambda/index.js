async function main(event) {
  const msg = "Hello, cdk";
  console.log(msg);
  return {
    body: JSON.stringify({ message: msg }),
    statusCode: 200,
  };
}

module.exports = { main };
