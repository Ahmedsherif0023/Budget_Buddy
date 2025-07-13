"use client";
import type { Route } from "./+types/profile";
import "./profile.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Profile" },
    { name: "description", content: "Profile Page" },
  ];
}

export default function Profile() {
  return (
    <>
     
     <h1>Profile Page</h1>
    </>
  );
}
