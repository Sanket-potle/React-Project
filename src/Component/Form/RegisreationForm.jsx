import { Field, Formik } from "formik";
import axios from "axios";
import { useState } from "react";

const RegistrationForm = () => {
  const [stateId, setStateId] = useState();
  const states = [
    { id: 1, name: "Maharashtra", stateId: 1 },
    { id: 2, name: "UP", stateId: 2 },
    { id: 3, name: "DD", stateId: 3 },
  ]
  const city = [
    { id: 1, name: "Mumbai", stateId: 1 },
    { id: 2, name: "Mirzapur", stateId: 2 },
    { id: 3, name: "Ladakh", stateId: 3 },
  ]

  const hobbies = [
    { id: 1, name: "Cricket", value: "Cricket" },
    { id: 2, name: "Kabaddi", value: "Kabaddi" },
    { id: 3, name: "BGMI", value: "BGMI" },
  ]
  return (
    <>
      <Formik
        initialValues={{ username: "", password: "", state: "", gender: "", hobbies: [] }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post(`https://dummyjson.com/auth/login`, values);
            console.log('Response', response)

          } catch (erro) {
            console.log("err", erro);
          } finally {
            setSubmitting(false)
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
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.username && errors.username}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <select
              name="state"
              onChange={(e) => {
                handleChange(e)
                setStateId(e.target.value)
              }}
              onBlur={handleBlur}
              value={values.state}
            >
              <option value="" disabled>Please Select Your State</option>
              {states.map((state) => {
                return (
                  <>
                    <option value={state.name}>{state.name}</option>
                  </>
                )
              })}
            </select>
            <br />
            <label htmlFor="male">Male</label>
            <input type="radio"
              id="male"
              name="gender"
              onChange={handleChange}
              onBlur={handleBlur}
              value="male"
              checked={values.gender === 'male'} />

            <label htmlFor="Female">FeMale</label>
            <input type="radio"
              id="Female"
              name="gender"
              onChange={handleChange}
              onBlur={handleBlur}
              value="Female"
              checked={values.gender === 'Female'} />
            <br />


            {hobbies.map((itam) => {
              return (
                <>
                  <label htmlFor="">
                    <Field
                      type="checkbox"
                      name="hobbies"
                      value={itam.value} />
                    {itam.label}
                  </label>
                </>
              )
            }

            )}
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default RegistrationForm;