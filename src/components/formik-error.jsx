import { ErrorMessage } from "formik"
 
const FormikError = ({ name }) => {
  return (
    <ErrorMessage name={name} component="div" className="text-sm text-red-900"/>
  )
}

export default FormikError