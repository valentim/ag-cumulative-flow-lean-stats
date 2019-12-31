import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HumanizeDuration, HumanizeDurationLanguage } from 'humanize-duration-ts';
import { faChartPie, faChartLine, faChartBar, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Stats from './Stats'
import './styles.css'
import { StatsProps } from './StatsProps';

export interface PeriodStatsProps extends StatsProps {
    lang: string;
}

export default class PeriodCard extends React.Component<PeriodStatsProps> {
    private getIconByStatsType(statsType: string | undefined): IconDefinition {
        const newStatsType = statsType || 'default';
        const icons = {
            leadTime: faChartPie,
            cycleTime: faChartLine,
            default: faChartBar
        }

        return (icons[newStatsType] || icons.default);
    }

    private getHumanReadableTime(time: number): string {
        const humanizeDurationLanguage = new HumanizeDurationLanguage();
        const humanizeDuration = new HumanizeDuration(humanizeDurationLanguage);
        
        humanizeDuration.setOptions({
            language: this.props.lang || 'en',
            round: true
        });

        return humanizeDuration.humanize(
            time,
            {
                unitMeasures: {
                    y: 31557600000,
                    mo: 2629800000,
                    w: 604800000,
                    d: 28800000,
                    h: 3600000,
                    m: 60000,
                    s: 1000,
                    ms: 1
                }
            }
        );
    }

    render() {
        return (
            <div className="card">
                <div className="portlet-handler">
                    <div className="row row-flush" >
                        <div className="col-2 bg-inverse text-center d-flex align-items-center justify-content-center rounded-left">
                            <FontAwesomeIcon icon={this.getIconByStatsType(this.props.statType)} size="2x" />
                        </div>
                        <Stats statName={this.props.statName} number={this.getHumanReadableTime(this.props.number)}></Stats>
                    </div>
                </div>
            </div>
        )
    }
}
