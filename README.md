# ag-cumulative-flow-lean-stats

> UI Components of lean stats

## Install

```bash
npm install --save ag-cumulative-flow-lean-stats | yarn add ag-cumulative-flow-lean-stats
```

## Usage

There are two types of statistic cards, Quantity and Period cards.

Quantity cards are better to represent quantities of things, for example, if you want to show how much tasks are in the project backlog.

Quantity card has two attributes:
 - number (quantity)
 - statName (name of the statistic)

```tsx
import * as React from 'react';

import { QuantityCard } from 'ag-cumulative-flow-lean-stats';

class Example extends React.Component {
  render () {
    return (
      <QuantityCard number="2" statName="Backlog" />
    )
  }
}
```

Period cards are perfect to show the data as period of time, for example, if you want to show 
the Lead Time of your project.

There are four attributes;
 - number (quantity of time in ms)
 - statName (name of the statistic)
 - statType (what type of lean statistic)
 - lang (language that the quantity of time will be showed)

The statType can be LeadTime or CycleTime, but this attribute is optional and the difference in putting it or not is only in a specific icon for both.

```tsx
import * as React from 'react';

import { QuantityCard, cycleTime } from 'ag-cumulative-flow-lean-stats';

class Example extends React.Component {
  render () {
    return (
      <PeriodCard lang="pt" number="2" statName="Cycle Time" statType={cycleTime} />
    )
  }
}
```

## License

AGPL-3.0-or-later © [AG Cumulative flow | Lean Stats](https://github.com/valentim/ag-cumulative-flow-lean-stats)
