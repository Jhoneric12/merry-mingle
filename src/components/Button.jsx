import React from 'react'

function Button( {btnText, styles}) {
  return (
    <button className={`bg-light-primary-color rounded-full px-10 py-5 text-white hover:opacity-90 mt-4 text-sm ${styles}`}>
        {btnText}
    </button>
  )
}

export default Button