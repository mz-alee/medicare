import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const ChartComponent = (alldata) => {
  const data = [
    { name: "Group A", value: alldata?.data?.overview?.total_appointments },
    { name: "Group B", value: alldata?.data?.overview?.total_appointments },
    { name: "Group C", value: alldata?.data?.overview?.new_patients },
    { name: "Group D", value: alldata?.data?.overview?.active_staff },
  ];
  return (
    <div style={{ width: "100%", height: 100 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            { data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
