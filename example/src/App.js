import React, { Component } from 'react'

import StatCard from 'ag-cumulative-flow-lean-stats'

export default class App extends Component {
  render () {
    return (
      <div>
        <StatCard number='2' statType='leadTime' statName='Lead time' />
        <StatCard number='2' statType='cycleTime' statName='Cycle time' />
        <StatCard number='2' statName='Backlog' />
        <StatCard number='2' statName='WIP' />

      </div>
    )
  }
}
