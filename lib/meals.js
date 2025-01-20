"use server";
import sql from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(),'meals.db');
const db = sql('meals.db');

export async function getMeals(){
   await new Promise((resolve)=>setTimeout(resolve,2000));
   return db.prepare('SELECT * FROM meals').all();
}
export async function getMeal(slug){
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
