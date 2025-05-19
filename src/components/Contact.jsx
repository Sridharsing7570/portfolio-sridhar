import { Badge, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";

const Contact = () => {
  const email = "sridharsing14@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/sridhar-sing-4b7b8a244";
  const githubUrl = "https://github.com/Sridharsing7570";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    try {
      // Get visitor information
      const timestamp = new Date().toLocaleString();
      const pageUrl = window.location.href;

      // Create form data with all information
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append(
        "subject",
        formData.subject || "Message from Portfolio"
      );
      formPayload.append("message", formData.message);
      formPayload.append("timestamp", timestamp);
      formPayload.append("pageUrl", pageUrl);
      formPayload.append("userAgent", navigator.userAgent);
      formPayload.append(
        "screenResolution",
        `${window.screen.width}x${window.screen.height}`
      );
      formPayload.append("referrer", document.referrer || "Direct visit");

      // Use FormSubmit.co service
      const response = await fetch(
        "https://formsubmit.co/ajax/sridharsing14@gmail.com",
        {
          method: "POST",
          body: formPayload,
        }
      );

      if (response.ok) {
        setSubmitStatus("success");

        // Save in localStorage for backup
        const messages = JSON.parse(
          localStorage.getItem("portfolioMessages") || []
        );
        messages.push({
          ...formData,
          timestamp,
          pageUrl,
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
        });
        localStorage.setItem("portfolioMessages", JSON.stringify(messages));

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-1 text-sky-500 border-sky-200 bg-white rounded-full text-sm"
          >
            Contact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Let's Connect
          </h2>
          <p className="max-w-xl mx-auto text-lg text-slate-600 mb-10">
            I'm currently looking for new opportunities and open to
            collaborations. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <Card className="shadow-lg border-none bg-white overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-sky-500 to-blue-600 p-8 text-white flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-4">Contact Information</h3>
                <p className="text-sky-100 mb-8">
                  Feel free to reach out using any of these contact methods, and
                  I'll get back to you soon.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <a href={`mailto:${email}`} className="hover:underline">
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3" />
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3" />
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub Portfolio
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 p-8">
                <h3 className="font-bold text-xl mb-6 text-slate-800">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-slate-500">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-slate-500">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-500">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-slate-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Tell me about your project or inquiry..."
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-600"
                    disabled={submitStatus === "sending"}
                  >
                    {submitStatus === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                  {submitStatus === "success" && (
                    <p className="text-green-500 text-sm mt-2">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm mt-2">
                      Failed to send message. Please try again later or contact
                      me directly at {email}.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
