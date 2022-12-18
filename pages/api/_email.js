import sendgrid from "@sendgrid/mail";
const sgMail = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function handleSubmit(req, res) {
    console.log("This is a test")
    const event = req.event;
    
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid.send({
              to: 'jlequire@finxity.net',
              from: event.target.elements.email.value,
              subject: event.target.elements.subject.value,
              text: event.target.elements.message.value,
    });
   sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default handleSubmit;
