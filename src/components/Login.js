import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import ForgotPassword from './ForgotPassword'
import NewUser from './NewUser'
export default function Login(props) {
  const [show, setShow] = useState(false) //to Show the Modal
  const [email, setEmail] = useState('') // to store the email to send request
  const [password, setpassword] = useState('') // to store the password to send request
  const [forgotshow, setforgotShow] = useState(false)
  const [newuser, setnewuser] = useState(false)
  const handleForgotPasswordClick = () => {
    //to close the Login modal on opening forgot password component
    setShow(false)
  }
  const handleNewUserClick = () => {
    setShow(false)
  }

  const handleClose = () => {
    //Using useState to close our modal
    setEmail('')
    setpassword('')
    setShow(false)
  }
  const handleShow = () => setShow(true) //Using useState to display our modal
  const [error, setError] = useState('')
  const openforgot = () => {
    setforgotShow(true)
    setShow(false)
  }
  const openregister = () => {
    setnewuser(true)
    setShow(false)
  }
  const submit = async () => {
    //API Handling to Login
    try {
      const response = await axios.post(
        'http://192.95.51.55:8080/auth/auth/login',
        {
          email: email,
          password: password,
        }
      )
      const token = response.data.token
      if (response.data && response.data.status === true) {
        // Login was successful; you have a token.
        handleClose()
        window.location.replace('https://tvmwildlife.com/')
      } else {
        // Login failed, handle the error here
        setError('Invalid credentials')
      }
      console.log('res', response)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <button className='btn btn-primary' onClick={handleShow}>
        LOGIN
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
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
            <div className='mb-3'>
              <label for='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <p className='formArea forgotPasswordSection' onClick={openforgot}>
              Forgot Password?
            </p>
            <div className='d-grid gap-2'>
              <button
                className='btn btn-success'
                type='button'
                onClick={submit}
              >
                Login
              </button>
              <button
                className='btn btn-outline-success'
                type='button'
                onClick={openregister}
              >
                Sign up as new user
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <ForgotPassword
        handleForgotPasswordClick={handleForgotPasswordClick}
        forgotshow={forgotshow}
        setforgotShow={setforgotShow}
      />
      <NewUser
        handleNewUserClick={handleNewUserClick}
        newuser={newuser}
        setnewuser={setnewuser}
      />
    </div>
  )
}
