import React from 'react'

 module.exports = ({playerName}) => {
   return (
     <tr>
       <td colSpan="9" className="animated-background">{playerName}</td>
     </tr>
   )
 }
