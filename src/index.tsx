import * as React from 'react'
import QCard from './app/components/Stats/QuantityCard'
import { PeriodCard as PCard, PeriodStatsProps } from './app/components/Stats/PeriodCard'
import { StatsProps } from './app/components/Stats/StatsProps'

export { StatsProps, PeriodStatsProps };

export class QuantityCard extends React.Component<StatsProps> {
  render() {
    return (
      <QCard statName={this.props.statName} number={this.props.number} />
    )
  }
}

export class PeriodCard extends React.Component<PeriodStatsProps> {
  render() {
    return (
      <PCard lang={this.props.lang} statName={this.props.statName} statType={this.props.statType} number={this.props.number} />
    )
  }
}

export const leadTime = 'leadTime';
export const cycleTime = 'cycleTime';