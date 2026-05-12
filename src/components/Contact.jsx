import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID  = 'service_ine33ie';   
const EMAILJS_TEMPLATE_ID = 'template_0rf68qe';  
const EMAILJS_PUBLIC_KEY  = 'Pp0KE_T7Ui6incZWM';   



function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

// ---- Email SVG icon ----
function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

// ---- LinkedIn SVG icon ----
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

// ---- Data — your contact links ----
// icon is now a JSX component instead of an emoji
const contactMethods = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'sakshitejwani4@gmail.com',
    href: 'mailto:sakshitejwani4@gmail.com',
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/sakshitejwani',
    href: 'https://github.com/sakshitejwani',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sakshi-tejwani',
    href: 'https://linkedin.com/in/sakshi-tejwani',
  },
];

function Contact() {
  // formRef lets EmailJS read the form inputs directly
  const formRef = useRef();

  // status can be: 'idle' | 'sending' | 'success' | 'error'
  // We use this to show the right message to the user
  const [status, setStatus] = useState('idle');

  // Called when user clicks "Send Message"
  function handleSubmit(e) {
    e.preventDefault(); // Stop the page from refreshing

    setStatus('sending'); // Show "Sending..." on the button

    // EmailJS sends the form data to your inbox
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,   // Reads name/email/subject/message from the form
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Email sent successfully!
        setStatus('success');
        formRef.current.reset(); // Clear all form fields
      })
      .catch((error) => {
        // Something went wrong
        console.error('EmailJS error:', error);
        setStatus('error');
      });
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">

        {/* Section heading */}
        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>
        <p className="section-subtitle">
          I'm always open to collaboration, brainstorming, tech chat, or new opportunities.
        </p>

        {/* Two-column grid */}
        <div className="contact-grid">

          {/* ---- LEFT: Contact info ---- */}
          <div>
            <h3 className="contact-heading">Get in Touch</h3>
            <p className="contact-intro">
              Whether you have a project in mind, want to collaborate,
              or just want to say hello — feel free to reach out
              through any of these channels:
            </p>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="contact-method-icon">{method.icon}</div>
                  <div className="contact-method-info">
                    <strong>{method.label}</strong>
                    <span>{method.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ---- RIGHT: EmailJS form ---- */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit}>

              {/* Name + Email side by side */}
              <div className="form-row">
                <div className="form-group">
                  <label>Name <span>*</span></label>
                  <input
                    type="text"
                    name="from_name"         
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email <span>*</span></label>
                  <input
                    type="email"
                    name="from_email"        
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label>Message <span>*</span></label>
                <textarea
                  name="message"             
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              {/* Submit button — text changes based on status */}
              <button
                type="submit"
                className="form-submit"
                disabled={status === 'sending'} // Disable while sending
              >
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

              {/* Success message — shown after email is sent */}
              {status === 'success' && (
                <p className="form-success">
                   Message sent! I'll get back to you soon.
                </p>
              )}

              {/* Error message — shown if something goes wrong */}
              {status === 'error' && (
                <p className="form-error">
                   Something went wrong. Please try emailing me directly.
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
