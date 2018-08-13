import React from "react";
import _ from "lodash";
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
    <Sparklines height={120} width={180} data={props.data} units="K">
      <SparklinesLine color={props.color} units="hPa" />
      <SparklinesReferenceLine type="avg" units="%" />
    </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
