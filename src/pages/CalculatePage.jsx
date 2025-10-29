import React, { useState } from 'react'

const CalculatePage = () => {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(5);
  
  const plus = (a, b) => {
    return a + b;
  }
  const minus = (a, b) => {
    return a - b;
  }
  const division = (a, b) => {
    if (b == 0){
      return 0;
    }
    return a / b;
  }
  const multiply = (a, b) => {
    return a * b;
  }

  return (
    <div>
      
    </div>
  )
}

export default CalculatePage
