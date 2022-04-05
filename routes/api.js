const router = require("express").Router();
const { MessagingResponse } = require("twilio").twiml;

router.post("/sms", async (req, res) => {
  const { body } = req;
  console.log(body);
  let message;
  message = new MessagingResponse().message("Hello Welcome to Twilio!");
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(message.toString());
});

module.exports = router;
