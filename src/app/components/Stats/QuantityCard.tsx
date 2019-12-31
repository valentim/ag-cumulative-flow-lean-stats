import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from '@fortawesome/free-solid-svg-icons'
import Stats from './Stats'
import './styles.css'
import { StatsProps } from './StatsProps';

export default class QuantityCard extends React.Component<StatsProps> {
    
    render() {
        return (
            <div className="card">
                <div className="portlet-handler">
                    <div className="row row-flush" >
                        <div className="col-2 bg-inverse text-center d-flex align-items-center justify-content-center rounded-left">
                            <FontAwesomeIcon icon={faInfinity} size="2x" />
                        </div>
                        <Stats statName={this.props.statName} number={this.props.number}></Stats>
                    </div>
                </div>
            </div>
        )
    }
}
