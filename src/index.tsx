import * as React from 'react'
import Card from './app/components/Stats/Card'


export type Props = {
  number: number,
  statName: string,
  statType?: string
}

export default class StatCard extends React.Component<Props> {
  render() {
    return (
      <Card statName={this.props.statName} statType={this.props.statType} number={this.props.number} />
    )
  }
}
