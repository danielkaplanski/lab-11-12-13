import classes from './page.module.css'; // Import styles
import { getMeal } from '@/lib/meals'; // Import the getMeal function from lib/meals.js
import Link from 'next/link'; // Import Link for navigation
import { Suspense } from 'react'; 

// Fetch the meal details based on the mealSlug dynamically
async function Meal({ mealSlug }) {
  const meal = await getMeal(mealSlug);  // Pass the mealSlug to the getMeal function

  if (!meal) {
    return (
      <div className={classes.loading}>
        <p>Meal not found. Please check the URL.</p>
      </div>
    );
  }

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.image}>
          <img src={meal.image} alt={meal.title} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.summary}>{meal.summary}</p>
          <p className={classes.creator}>
            Created by: <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
        </div>
      </header>
      <section className={classes.instructions}>
        <h2>Instructions</h2>
        <pre>{meal.instructions}</pre>
      </section>
    </div>
  );
}

// Main page component that handles the dynamic route and passes the slug to Meal component
export default async function MealDetailsPage({ params }) {
  const { mealSlug } = await params;  // Await params to access the mealSlug dynamically

  return (
    <>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meal...</p>}>
          <Meal mealSlug={mealSlug} /> {/* Pass the mealSlug to the Meal component */}
        </Suspense>
      </main>
    </>
  );
}
