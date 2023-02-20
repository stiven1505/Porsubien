import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./promocionChart.module.css";

const data = [
  {
    name: "día 1",
    personas: 4000,
  },
  {
    name: "día 2",
    personas: 3000,
  },
  {
    name: "día 3",
    personas: 1000,
  },
];

const PromocionChart = () => {
  return (
    <div className={styles.contenedor}>
        <div className={styles.informacion}>
            <h2>Total</h2>
            <h3>8000 personas</h3>
        </div>
      <div className={styles.contenedorChart}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="personas" fill="#9DDFD5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PromocionChart;
