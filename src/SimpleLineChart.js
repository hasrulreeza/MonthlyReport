import React from "react";
import ResponsiveContainer from "recharts/lib/component/ResponsiveContainer";
import LineChart from "recharts/lib/chart/LineChart";
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import Tooltip from "recharts/lib/component/Tooltip";
import Legend from "recharts/lib/component/Legend";

const data = [
  { name: "JAN 1", Visits: 2200, Orders: 3400 },
  { name: "JAN 2", Visits: 1100, Orders: 3210 },
  { name: "JAN 3", Visits: 1234, Orders: 2918 },
  { name: "JAN 4", Visits: 2234, Orders: 3110 },
  { name: "JAN 5", Visits: 2314, Orders: 3510 },
  { name: "JAN 6", Visits: 2500, Orders: 1901 },
  { name: "JAN 7", Visits: 2611, Orders: 3400 },
  { name: "JAN 8", Visits: 1280, Orders: 2398 },
  { name: "JAN 9", Visits: 2200, Orders: 1111 },
  { name: "JAN 10", Visits: 1100, Orders: 1341 },
  { name: "JAN 11", Visits: 1234, Orders: 2312 },
  { name: "JAN 12", Visits: 2234, Orders: 8978 },
  { name: "JAN 13", Visits: 2314, Orders: 2019 },
  { name: "JAN 14", Visits: 2500, Orders: 1134 },
  { name: "JAN 15", Visits: 2611, Orders: 3400 },
  { name: "JAN 16", Visits: 1280, Orders: 2398 },
  { name: "JAN 17", Visits: 5000, Orders: 4300 },
  { name: "JAN 18", Visits: 4780, Orders: 2908 },
  { name: "JAN 19", Visits: 5890, Orders: 4800 },
  { name: "JAN 20", Visits: 1100, Orders: 5231 },
  { name: "JAN 21", Visits: 1234, Orders: 3211 },
  { name: "JAN 22", Visits: 2234, Orders: 4321 },
  { name: "JAN 23", Visits: 2314, Orders: 1211 },
  { name: "JAN 24", Visits: 100, Orders: 2341 },
  { name: "JAN 25", Visits: 2611, Orders: 3400 },
  { name: "JAN 26", Visits: 1500, Orders: 2398 },
  { name: "JAN 27", Visits: 9123, Orders: 4300 },
  { name: "JAN 28", Visits: 4780, Orders: 2908 },
  { name: "JAN 29", Visits: 2531, Orders: 4800 },
  { name: "JAN 30", Visits: 4780, Orders: 2908 },
  { name: "JAN 31", Visits: 2100, Orders: 4800 }
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="Orders"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
