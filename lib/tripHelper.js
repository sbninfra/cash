"use server";
import { eq } from "drizzle-orm";
import { tripTable } from "../db/schema";
import { db } from "./db";

export async function insertTrip(
  title = "",
  isFlightIncluded = false,
  images = [],
  bannerImage = "",
  includes = [],
  itinary = []
) {
  return await db
    .insert(tripTable)
    .values({ title, isFlightIncluded, images, bannerImage, includes, itinary })
    .returning();
}

export async function getAllTrips() {
  return await db.select().from(tripTable);
}

export async function getTripById(id) {
  return await db.select().from(tripTable).where(eq(tripTable.id, id));
}

export async function getAllVisibleTrips() {
  return await db.select({ isVisible: true }).from(tripTable);
}

export async function toggleVisiblity(id) {
  // Step 1: Get the current value
  const trip = await db
    .select({ isVisible: tripTable.isVisible })
    .from(tripTable)
    .where(eq(tripTable.id, id))
    .limit(1);

  const current = trip?.[0]?.isVisible ?? false;

  // Step 2: Toggle and update
  await db
    .update(tripTable)
    .set({ isVisible: !current })
    .where(eq(tripTable.id, id));
}
