import React, { useContext } from 'react'
import { DarkMode } from '../Contexts/DarkModeContext'

function useDarkMode() {
  return useContext(DarkMode);
}

export default useDarkMode