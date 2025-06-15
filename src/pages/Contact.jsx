export function ContactPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <form className="flex flex-col gap-2">
        <input type="text" placeholder="Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <textarea placeholder="Message" className="border p-2" />
        <button className="bg-blue-600 text-white px-4 py-2">Send</button>
      </form>
    </div>
  );
}
