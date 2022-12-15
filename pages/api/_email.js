import sgMail from '@sendgrid/mail';




export default function handleSubmit(event) {
  event.preventDefault();

  // Get the values from the form fields
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const subject = event.target.elements.subject.value;
  const message = event.target.elements.message.value;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'jlequire@finxity.net',
    from: email,
    subject: subject,
    text: message,
  };

  sgMail.send(msg);
}
