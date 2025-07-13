// DoughnutChart.tsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);



type ExpenseType = "needs" | "wants" | "savings";

interface ExpenseCategory {
  label: string;
  amount: number;
  type: ExpenseType;
}

interface DoughnutChartProps {
  expenses: ExpenseCategory[];
}

const DoughnutChart = ({ expenses }: DoughnutChartProps) => {

  // Group expenses by type
  const grouped = {
    needs: 0,
    wants: 0,
    savings: 0,
  };
  expenses.forEach(cat => {
    grouped[cat.type] += cat.amount;
  });
  const total = grouped.needs + grouped.wants + grouped.savings;
  const percentages = [
    (grouped.needs / total) * 100,
    (grouped.wants / total) * 100,
    (grouped.savings / total) * 100,
  ];

  const data = {
    labels: ["Needs", "Wants", "Savings"],
    datasets: [
      {
        data: percentages,
        backgroundColor: ['#3ec4ed', '#fbbf24', '#34d399'],
        borderWidth: 0,
        cutout: '65%',
      },
    ],
  };

  const options = {
    cutout: '65%',
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="flex w-80 h-80 items-center justify-start gap-20">
      <div className="flex flex-col items-start justify-center font-semibold text-lg hell">
        {expenses.map((cat, idx) => {
          const percent = ((cat.amount / total) * 100).toFixed(0);
          return (
            <span className='spann' key={cat.label}>
              {cat.label}: ${cat.amount} ({cat.type}) - {percent}%
            </span>
          );
        })}
      </div>
      <div className="w-96 h-96 flex items-center justify-center">
        <Doughnut data={data} options={options} width={300} height={300} />
      </div>
    </div>
  );
};

export default DoughnutChart;
