import React from 'react';
import './Contact.css';
import axios from 'axios';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('This field is required'),
    email: yup
      .string()
      .email('This field must be a valid e-mail')
      .required('This field is required'),
    phone: yup.string().required('This field is required'),
  });

  const sendMail = async (body) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    // console.log(process.env.REACT_APP_MAIL);
    try {
      const { data } = await axios.post(
        `https://formsubmit.co/ajax/${process.env.REACT_APP_MAIL}`,
        body
      );
      if (data.success === 'true') {
        toast.dark(data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      sendMail(values);
      setSubmitting(false);
      resetForm({ values: '' });
    }, 400);
  };

  return (
    <section className="contact" id="contact">
      <ToastContainer />
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="title white">
              <h2 data-aos="fade-up">Contact Us</h2>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
                maiores praesentium error dolores reiciendis, dolorem a aliquam,
                libero nesciunt magni nobis facilis inventore tenetur commodi
                veritatis! Eaque ipsum expedita impedit.
              </p>
            </div>
            <div className="contactForm">
              <div className="row">
                <div className="col100">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="error">
                    {errors.name && touched.name && errors.name}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col50">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="error">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
                <div className="col50">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="error">
                    {errors.phone && touched.phone && errors.phone}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col100">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  <span className="error">
                    {errors.message && touched.message && errors.message}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col100" style={{ textAlign: 'center' }}>
                  <button type="submit" disabled={isSubmitting}>
                    {!isSubmitting ? 'Send' : 'Sending...'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;
