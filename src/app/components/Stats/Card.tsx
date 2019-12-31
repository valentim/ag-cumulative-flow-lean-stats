import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie, faChartLine, faChartBar } from '@fortawesome/free-solid-svg-icons'
import Stats from './Stats'
import './styles.css'

export type Props = {
  number: number,
  statName: string,
  statType?: string
}

export default class Card extends React.Component<Props> {
    getIconByStatsType(statsType: string | undefined) {
        const newStatsType = statsType || 'default';
        const icons = {
            leadTime: faChartPie,
            cycleTime: faChartLine,
            default: faChartBar
        }

        return (icons[newStatsType] || icons.default);
    }

    render() {
        return (
            <div className="card">
                <div className="portlet-handler">
                    <div className="row row-flush" >
                        <div className="col-2 bg-inverse text-center d-flex align-items-center justify-content-center rounded-left">
                            <FontAwesomeIcon icon={this.getIconByStatsType(this.props.statType)} size="2x" />
                        </div>
                        <Stats statName={this.props.statName} number={this.props.number}></Stats>
                    </div>
                </div>
            </div>
        )
    }
}
