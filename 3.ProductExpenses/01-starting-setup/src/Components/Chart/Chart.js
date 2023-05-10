import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
    console.log(totalMax,"spread")
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar 
            key = {dataPoint.id}
            value={dataPoint.value}
            maxValue = {totalMax}
            label = {dataPoint.label}
        />
      ))}
    </div>
  );
}
