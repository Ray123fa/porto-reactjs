import { useState } from "react";
import emailjs from "@emailjs/browser";
import SvgDown from "./svg/SvgDown";
import Alert from "./misc/Alert";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlert({
        show: true,
        type: "warning",
        message: "All fields are required",
      });
    } else {
      const nameRegex = /^[A-Za-z .]+$/;
      if (!nameRegex.test(formData.name)) {
        setAlert({
          show: true,
          type: "warning",
          message: "Invalid name format",
        });
      } else {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          to_name: "Rayhan F",
          message: formData.message,
        };

        emailjs
          .send(serviceId, templateId, templateParams, publicKey)
          .then((response) => {
            if (response.status == 200 || response.status == "200") {
              setAlert({
                show: true,
                type: "success",
                message: "Message sent successfully!",
              });
            } else {
              setAlert({
                show: true,
                type: "error",
                message: "Message failed to sent!",
              });
            }
          })
          .catch(() => {
            setAlert({
              show: true,
              type: "error",
              message: "Message failed to sent!",
            });
          });
      }
    }

    // Hide Alert
    setTimeout(() => {
      setAlert({
        show: false,
        type: "",
        message: "",
      });
    }, 5000);

    // Clear form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-3/4 md:w-1/2 bg-[#cbcfd5] dark:bg-[#e2e2e2] p-4 rounded-2xl text-black" data-aos="zoom-in" data-aos-duration="5000">
      {alert.show && <Alert type={alert.type} message={alert.message} />}

      <label htmlFor="name" className="text-base pb-0">
        Name
      </label>
      <input type="text" id="name" className="input input-bordered dark:text-white" value={formData.name} onChange={handleChange} />

      <label htmlFor="email" className="text-base mt-2">
        Email
      </label>
      <input type="email" id="email" className="input input-bordered dark:text-white" value={formData.email} onChange={handleChange} />

      <label htmlFor="message" className="text-base mt-2">
        Message
      </label>
      <textarea id="message" className="textarea textarea-bordered dark:text-white" value={formData.message} onChange={handleChange} maxLength={250}></textarea>

      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary px-6 mt-2 text-base" id="btnSubmit">
          Send
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  const isDark = localStorage.getItem("theme") === "dracula" ? true : false;

  return (
    <div className="flex flex-col items-center justify-center dark:text-white" id="contact">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">Contact Me</h2>

      <Form />
      <SvgDown className="translate-y-2" fill={isDark ? "#e2e2e2" : "#cbcfd5"} />
    </div>
  );
};

export default Contact;
