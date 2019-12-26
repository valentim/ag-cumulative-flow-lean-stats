/**
 * @class ExampleComponent
 */

import * as React from 'react'

import './styles.css'

export type Props = {
  number: number,
  statName: string,
  statType: string
}

export default class StatCard extends React.Component<Props> {
  render() {
    return (
      <div className="card">
          <div className="portlet-handler">
            <div className="row row-flush" >
              <div className="col-2 bg-inverse text-center d-flex align-items-center justify-content-center rounded-left">
                <em className="fas fa-code-branch fa-2x"></em>
              </div>
              <div className="col-10">
                <div className="card-body text-center">
                  <h4 className="mt-0">{this.props.number}</h4>
                  <p className="mb-0 text-muted">{this.props.statName}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
