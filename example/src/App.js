import React, { Component } from 'react'

import { QuantityCard, PeriodCard, leadTime, cycleTime } from 'ag-cumulative-flow-lean-stats'

export default class App extends Component {
  render () {
    return (
      <div>
        <PeriodCard number='12000' lang="pt" statType={leadTime} statName='Lead time' />
        <PeriodCard number='6600' statType={cycleTime} statName='Cycle time' />
        <QuantityCard number='2' statName='Backlog' />
        <QuantityCard number='2' statName='WIP' />
      </div>
    )
  }
}
