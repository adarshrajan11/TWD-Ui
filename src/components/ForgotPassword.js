import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
export default function ForgotPassword({
  handleForgotPasswordClick,
  forgotshow,
  setforgotShow,
}) {
  const [email, setEmail] = useState('')

  // const handleShow = () => {
  //   setforgotShow(true)
  //   handleForgotPasswordClick()
  // }
  const handleClose = () => {
    // Reset form data when closing the modal
    setEmail('')
    setforgotShow(false)
  }
  console.log('hello', forgotshow)
  return (
    <div>
      <div>
        <Modal show={forgotshow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Forgot password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className='mb-3 formArea'>
                <label for='exampleInputEmail1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>

              <div className='d-grid gap-2'>
                <button className='btn btn-outline-success' type='button'>
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}
