"use client";
// pages/meals/[someName].js
import { useRouter } from 'next/router';

export default function MealDetailsPage() {
  const router = useRouter();
  const { someName } = router.query; // Pobieramy dynamiczny parametr z URL

  return <h1>Meal Details for {someName}</h1>;
}
