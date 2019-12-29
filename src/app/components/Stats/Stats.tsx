import * as React from 'react'

export type Props = {
  number: number,
  statName: string
}

export default class Stats extends React.Component<Props> {
    render() {
        return (
            <div className="col-10">
                <div className="card-body text-center">
                    <h4 className="mt-0">{this.props.number}</h4>
                    <p className="mb-0 text-muted">{this.props.statName}</p>
                </div>
            </div>
        )
    }
}
