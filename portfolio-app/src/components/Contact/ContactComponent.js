import React from "react";
import "./Contact.css";
import useForm from "../../hooks/useForm";
import * as yup from "yup";

const Contact = () => {
  const validation = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("This field must be a valid e-mail")
      .required("This field is required"),
    phone: yup.string().required("This field is required"),
  });

  const { formData, handleInputChange, handleSubmit, resetForm } = useForm(
    {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    (formData) => console.dir(formData)
  );

  const { name, email, phone, message } = formData;

  return (
    <section className="contact" id="contact">
      <form onSubmit={handleSubmit}>
        <div className="title white">
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima
            rerum laborum aliquid, eius voluptatem harum delectus facere. Sunt
            perferendis amet at odio blanditiis et distinctio quae sed laborum
            architecto.
          </p>
        </div>
        <div className="contactForm">
          <div className="row">
            <div className="col100">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col50">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col50">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col100">
              <textarea
                name="message"
                onChange={handleInputChange}
                placeholder="Message"
              >
                {message}
              </textarea>
            </div>
          </div>
          <div className="row">
            <div className="col100">
              <button type="submit">Send</button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
