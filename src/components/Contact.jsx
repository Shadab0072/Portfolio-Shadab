import React, { useState } from 'react'

const Contact = () => {
  // Replace with your Formspree form ID
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzznypyn'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submission, setSubmission] = useState({
    submitting: false,
    success: null,
    error: null
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmission({ submitting: true, success: null, error: null })

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      await response.json()

      setSubmission({
        submitting: false,
        success: "Thanks for reaching out! I'll get back to you soon.",
        error: null
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setSubmission({
        submitting: false,
        success: null,
        error: 'Something went wrong. Please try again.'
      })
    }
  }

  return (
    <section id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-18 md:pb-28">
        <div className="text-center">
          {/* "What's Next?" heading */}
          <p className="text-[#49de80] font-medium tracking-wide text-sm md:text-base">
            What's Next?
          </p>

          {/* "Get In Touch" heading */}
          <h2 className="mt-5 font-extrabold tracking-tight text-4xl leading-[1.1] text-slate-200 md:text-6xl">
            Get In Touch
          </h2>

          {/* Description paragraph */}
          <p className="mt-8 max-w-2xl mx-auto text-lg leading-8 text-[#8792b0]">
            Let's Chat! Whether you have a question, a project idea, or just want to connect, I'm always happy to hear from you. Drop me a message, and I'll be in touch soon!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-12 max-w-md mx-auto">
            <div className="space-y-6">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#49de80] focus:border-transparent placeholder-gray-500"
                required
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#49de80] focus:border-transparent placeholder-gray-500"
                required
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#49de80] focus:border-transparent placeholder-gray-500 resize-y"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submission.submitting}
                className="w-full px-6 py-3 bg-black border border-[#49de80] text-[#49de80] font-semibold rounded-md hover:bg-[#0b1119]/80 hover:shadow-lg active:translate-y-0 active:shadow-md transition-all duration-300 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submission.submitting ? 'Sending...' : 'Say Hello'}
              </button>
              {submission.success && (
                <p className="text-green-400 text-sm">{submission.success}</p>
              )}
              {submission.error && (
                <p className="text-red-400 text-sm">{submission.error}</p>
              )}
            </div>
          </form>

          {/* Footer */}
          <p className="mt-16 text-slate-200 text-sm md:text-base">
            Made with ❤️ by Shadab Husain
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

