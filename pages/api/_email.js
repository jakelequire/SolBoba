import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function handleSubmit(req, res) {
            const name = event.target.elements.name.value;
            const email = event.target.elements.email.value;
            const subject = event.target.elements.subject.value;
            const message = event.target.elements.message.value;
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
              to: 'jlequire@finxity.net',
              from: email,
              subject: subject,
              text: message,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default handleSubmit;