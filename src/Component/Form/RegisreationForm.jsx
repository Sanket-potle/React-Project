import { Field, Formik } from "formik";
import axios from "axios";
import { useState } from "react";

const RegistrationForm = () => {
  const [stateId, setStateId] = useState();
  const states = [
    { id: 1, name: "Maharashtra", stateId: 1 },
    { id: 2, name: "UP", stateId: 2 },
    { id: 3, name: "DD", stateId: 3 },
  ];
  const city = [
    { id: 1, name: "Mumbai", stateId: 1 },
    { id: 2, name: "Mirzapur", stateId: 2 },
    { id: 3, name: "Ladakh", stateId: 3 },
  ];

  const hobbies = [
    { id: 1, name: "Cricket", value: "Cricket" },
    { id: 2, name: "Kabaddi", value: "Kabaddi" },
    { id: 3, name: "BGMI", value: "BGMI" },
  ];
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          state: "",
          gender: "",
          hobbies: [],
        }}
        validate={(values) => {
          const errors = {};

          if (!values.username) {
            errors.username = "Username is required";
          }

          if (!values.password) {
            errors.password = "Password is required";
          }

          if (!values.state) {
            errors.state = "Please select state";
          }

          if (!values.gender) {
            errors.gender = "Please select gender";
          }

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post(
              "https://dummyjson.com/auth/login",
              {
                username: values.username,
                password: values.password,
              },
            );

            console.log("Response", response.data);
          } catch (error) {
            console.log("Error", error);
          } finally {
            setSubmitting(false);
          }
        }}
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
            {/* Username */}
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />

            {errors.username && touched.username && (
              <span>{errors.username}</span>
            )}

            {/* Password */}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}

            {/* State */}
            <select
              name="state"
              onChange={(e) => {
                handleChange(e);
                setStateId(e.target.value);
              }}
              onBlur={handleBlur}
              value={values.state}
            >
              <option value="" disabled>
                Please Select Your State
              </option>

              {states.map((state) => (
                <option key={state.id} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>

            {/* Gender */}
            <br />

            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.gender === "male"}
            />

            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.gender === "female"}
            />

            <br />

            {/* Hobbies */}
            {hobbies.map((itam) => (
              <div key={itam.id}>
                <label htmlFor={`hobby-${itam.id}`}>
                  <Field
                    type="checkbox"
                    id={`hobby-${itam.id}`}
                    name="hobbies"
                    value={itam.value}
                  />
                  {itam.name}
                </label>
              </div>
            ))}

            {/* Submit */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
