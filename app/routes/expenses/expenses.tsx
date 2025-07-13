"use client";
import type { Route } from "./+types/expenses";
import "./expenses.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Add Expenses" },
    { name: "description", content: "Adding Expenses Page" },
  ];
}

export default function Expenses() {
  return (
    <>
     
     <h1>Expenses Page</h1>
    </>
  );
}
