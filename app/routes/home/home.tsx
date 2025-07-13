"use client";
import type { Route } from "./+types/home";
import "./home.css";
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Budget Buddy" },
    { name: "description", content: "Saving money is so easy" },
  ];
}

export default function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Home</h1>
        <h2>Budget Dashboard</h2>
      </div>
      <SummaryCard />
      <section>
        <h1>Recent Expenses</h1>
        <div className="recent-exp">
          <DoughnutChart
            expenses={[
              { label: "Groceries", amount: 120, type: "needs" },
              { label: "Future me", amount: 60, type: "savings" },
              { label: "Entertainment", amount: 40, type: "wants" },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
