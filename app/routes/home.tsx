"use client";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Budget Buddy" },
    { name: "description", content: "Saving money is so easy" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Welcome to Budget Buddy</h1>
      <h1>Hello mfs</h1>
    </>
  );
}
