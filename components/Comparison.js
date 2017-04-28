import React from 'react'


const sampleData = [
  {text: "Westbrook", PPG: 29, APG: 10.2, RPG: 10.1},
  {text: "Harden", PPG: 27, APG: 11.2, RPG: 8.1}
]

module.exports = React.createClass({
    componentWillMount: () => console.log("I will mount..."),
    componentDidMount: () => console.log("I mounted!"),
    render: function() {
      return (
        null
      )
    }
  })
