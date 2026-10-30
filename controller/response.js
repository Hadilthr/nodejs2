

function getResponse(req, res) {
  res.send('Hello, abdeslam!');
}

function hadilResponse(req, res) {
  res.send('Hello, Hadil!');
}

function messageResponse(req, res) {
  res.send('This is a message response.');
}

module.exports = { getResponse, hadilResponse, messageResponse };