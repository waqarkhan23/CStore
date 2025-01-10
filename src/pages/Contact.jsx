/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import contactImage from "../assets/contact.jpg";
const Contact = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().matches(
        /^[0-9]{10}$/,
        "Phone number must be 10 digits"
      ),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
      preferredContact: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      if (!recaptchaValue) {
        alert("Please complete the reCAPTCHA");
        setSubmitting(false);
        return;
      }
      // Handle form submission here
      console.log(values);
      alert("Form submitted successfully!");
      resetForm();
      setRecaptchaValue(null);
      setSubmitting(false);
    },
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width image section */}
      <div className="relative w-full h-96">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-70 flex items-center justify-center">
          <div className="text-white text-center max-w-3xl px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us C Store</h1>
            <p className="text-xl">
              Our team is ready to answer your questions and streamline your
              experience—whether you're evaluating your options, getting
              started, or already on your journey with us.
            </p>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg -mt-20 relative z-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Submit Your Information Here
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="mt-1"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="mt-1"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>

            <div className="hidden">
              <Label htmlFor="preferredContact">Preferred Contact Method</Label>
              <Select
                id="preferredContact"
                name="preferredContact"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.preferredContact}
                className="mt-1"
              >
                <option value="">Select...</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </Select>
              {formik.touched.preferredContact &&
              formik.errors.preferredContact ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.preferredContact}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              className="mt-1"
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.subject}
              </div>
            ) : null}
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="mt-1"
              rows={6}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.message}
              </div>
            ) : null}
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(value) => setRecaptchaValue(value)}
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
