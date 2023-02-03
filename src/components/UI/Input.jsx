
import React, { memo } from 'react'

const Input = ({inputType,value,onChange}) => {
  return (
    <div>
        <input type={inputType} value={value} onChange={onChange}/>
    </div>
  )
}

export default memo(Input)