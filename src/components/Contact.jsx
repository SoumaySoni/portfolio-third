export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Get in Touch</h2>
      <form className="max-w-xl mx-auto space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
    </section>
  )
}
