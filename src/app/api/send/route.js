import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["victorhugo.vazquezrojas@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            Thank you for contacting me!{" "}
            <span className="text-blue">{email}</span>{" "}
          </p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
