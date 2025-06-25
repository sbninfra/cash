import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const tripTable = pgTable("trips", {
  id: uuid("id").primaryKey().defaultRandom(),
  count: varchar("count"),
  text: varchar("text"),
});
