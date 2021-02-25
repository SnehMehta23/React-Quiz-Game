import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function DataViz() {
  const data = [
    { name: "Monday", temp: 23 },
    { name: "Tuesday", temp: 20 },
    { name: "Wednesday", temp: 18 },
    { name: "Thursday", temp: 24 },
    { name: "Friday", temp: 32 },
  ];

  return (
    <div className="chart-container">
      <LineChart width={600} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
          strokeWidth="4px"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="temp" />
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default DataViz;
