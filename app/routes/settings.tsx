"use client";
import type { Route } from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Settings" },
    { name: "description", content: "App settings" },
  ];
}

export default function Settings() {
  return (
    <>
     
     <h1>Settings Page</h1>
    </>
  );
}
