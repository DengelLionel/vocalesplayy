import React from 'react'

const Niveles = ({nivel}) => {
  return (
    <span className={`bg-blue-600 text-white p-[8px] whitespace-no-wrap font-semibold`}>{nivel?nivel:'BÁSICO'}</span>
  )
}

export default Niveles