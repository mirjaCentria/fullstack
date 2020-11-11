import React, { useState, useEffect } from 'react'

const Notification = ({ message }) => {
    const noteStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
      }
    if (message === null) {
      return null
    }
  
    return (
      <div className="error" style = {noteStyle}>
        {message}
      </div>
    )
  }
  export default Notification
  
