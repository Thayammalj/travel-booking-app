// import nodemailer from 'nodemailer'

// type ContactBody = {
//   firstName?: string
//   lastName?: string
//   email?: string
//   phone?: string
//   subject?: string
//   message?: string
// }

// export async function POST(req: Request) {
//   try {
//     const body: ContactBody = await req.json()

//     // basic validation
//     if (!body.email || !body.firstName || !body.message) {
//       return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
//     }

//     // Configure transporter from environment variables
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT || 587),
//       secure: process.env.SMTP_SECURE === 'true',
//       auth: process.env.SMTP_USER
//         ? {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//           }
//         : undefined,
//     })

//     const recipient = process.env.CONTACT_RECIPIENT || 'thayakutti13@gmail.com'

//     const subject = `Website Contact: ${body.subject || 'New message'}`

//     const text = `Contact form submission\n\nName: ${body.firstName || ''} ${body.lastName || ''}\nEmail: ${body.email}\nPhone: ${body.phone || ''}\nSubject: ${body.subject || ''}\n\nMessage:\n${body.message || ''}`

//     const html = `
//       <h2>New contact form submission</h2>
//       <p><strong>Name:</strong> ${body.firstName || ''} ${body.lastName || ''}</p>
//       <p><strong>Email:</strong> ${body.email}</p>
//       <p><strong>Phone:</strong> ${body.phone || ''}</p>
//       <p><strong>Subject:</strong> ${body.subject || ''}</p>
//       <hr />
//       <p>${(body.message || '').replace(/\n/g, '<br/>')}</p>
//     `

//     // Send email
//     await transporter.sendMail({
//       from: process.env.SMTP_FROM || process.env.SMTP_USER || `no-reply@${process.env.NEXT_PUBLIC_VERCEL_URL || 'example.com'}`,
//       to: recipient,
//       subject,
//       text,
//       html,
//     })

//     return new Response(JSON.stringify({ ok: true }), { status: 200 })
//   } catch (err: any) {
//     console.error('Contact API error:', err)
//     return new Response(JSON.stringify({ error: err?.message || 'Server error' }), { status: 500 })
//   }
// }
