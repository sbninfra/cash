import { hotelTable, reviewsTable } from "../db/schema";
import { db } from "./db";

export async function insertHotel(
  name = "",
  location = "",
  stars = 0,
  description = [],
  image = ""
) {
  return await db
    .insert(hotelTable)
    .values({ name, location, stars, description, image })
    .returning();
}

export async function insertReviews(
  image = "",
  message = "",
  rating = 0,
  tripId = "",
  isAdminApproved = false
) {
  return await db
    .insert(reviewsTable)
    .values({ image, message, rating, tripId, isAdminApproved })
    .returning();
}
