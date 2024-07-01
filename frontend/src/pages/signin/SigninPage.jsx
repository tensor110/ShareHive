import React from 'react'
import AuthPage from '../../components/signin/AuthPaage'
import { images } from '../../constants'

function SigninPage() {
  return (
    <div>
        <a href='/' className='absolute left-12 top-4'><img
            className="md:w-16 lg:w-28 xsm:w-14 xxsm:w-14"
            src={images.Logo}
            alt="logo"
          /></a>
      <AuthPage />
    </div>
  )
}

export default SigninPage
