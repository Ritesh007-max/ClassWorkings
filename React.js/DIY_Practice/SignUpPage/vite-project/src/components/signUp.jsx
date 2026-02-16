import React, { useRef } from 'react'

function signUp() {

  const name1Ref = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)

  function handleSubmit() {

    const currentData = {
      name1: name1Ref.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    }

    localStorage.setItem("userData", JSON.stringify(currentData))
    event.target.form.reset();
  }

  return (
    <>
      <form>
        <input
          type="text"
          ref={name1Ref}
          name="name1"
          placeholder="Enter your NAME"
        />

        <input
          type="email"
          ref={emailRef}
          name="email"
          placeholder="email"
        />

        <input
          type="number"
          ref={phoneRef}
          name="phone"
          placeholder="Enter your mobile no"
        />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  )
}

export default signUp