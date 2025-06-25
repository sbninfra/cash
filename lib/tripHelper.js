"use server";
import { tripTable } from "../db/schema";
import { db } from "./db";

export async function insertTrip(value) {
  return await db.insert(tripTable).values(value).returning();
}

export async function getTrips() {
  return await db.select().from(tripTable);
}
