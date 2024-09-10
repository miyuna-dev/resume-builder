import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateError = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/")
  }, [])

  return (
    <>
    </>
  )
}

export default PrivateError