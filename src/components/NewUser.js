import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

export default function NewUser({ handleNewUserClick, newuser, setnewuser }) {
  const handleClose = () => {
    // Reset form data when closing the modal
    setName('')
    setMobile('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setnewuser(false)
  }
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Handle the registration submission
  const register = () => {
    // You can add your registration logic here
    // Validate input and send a request to your registration API
  }

  return (
    <div>
      <div>
        <Modal show={newuser} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className='mb-3 formArea'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='form-control'
                  id='name'
                />
              </div>
              <div className='mb-3 formArea'>
                <label htmlFor='mobile' className='form-label'>
                  Mobile Number
                </label>
                <input
                  type='text'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className='form-control'
                  id='mobile'
                />
              </div>
              <div className='mb-3 formArea'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='form-control'
                  id='email'
                />
              </div>
              <div className='mb-3 formArea'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control'
                  id='password'
                />
              </div>
              <div className='mb-3 formArea'>
                <label htmlFor='confirmPassword' className='form-label'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className='form-control'
                  id='confirmPassword'
                />
              </div>
              <p className='formArea forgotPasswordSection text-danger'>
                {/* Display registration error message here */}
              </p>
              <div className='d-grid gap-2'>
                <button
                  className='btn btn-success'
                  type='button'
                  onClick={register}
                >
                  Register
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  )
}
