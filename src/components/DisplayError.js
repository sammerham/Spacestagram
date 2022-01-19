import React from "react"
import Alert from "react-bootstrap/Alert";
/**
 * props: an array of error messages.
 * DisplayError---> Displays Alert
 * 
 */

function DisplayError({ errors }) {
  console.log('erros in Display', errors)

  // let errorString = errors.join(", ")
  return <Alert variant="danger">{errors}</Alert>
}

export default DisplayError;