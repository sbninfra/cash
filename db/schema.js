import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  uuid,
  varchar,
  primaryKey,
} from "drizzle-orm/pg-core";

export const tripTable = pgTable("trips", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title").notNull(),
  isFlightIncluded: boolean("is_flight_included").notNull().default(false),
  images: varchar("images").array(),
  bannerImage: varchar("banner_image"),
  includes: varchar("includes").array(),
  itinary: varchar("itinary").array(),
  isVisible: boolean("is_visible").notNull().default(true),
});

export const hotelTable = pgTable("hotels", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  location: varchar("location"),
  stars: integer("stars").notNull(),
  description: varchar("description").array(),
  image: varchar("image"),
});

export const datesTable = pgTable(
  "dates",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    month: varchar("month").notNull(),
    dates: varchar("day").notNull(),
    tripId: uuid("trip_id"),
  },
  (table) => ({
    tripFk: foreignKey({
      columns: [table.tripId],
      foreignColumns: [tripTable.id],
      name: "dates_trip_id_fkey",
    }),
  })
);

export const reviewsTable = pgTable(
  "reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    image: varchar("image"),
    message: varchar("message").notNull(),
    rating: integer("rating").notNull(),
    tripId: uuid("trip_id"),
    isAdminApproved: boolean("is_admin_approved").notNull().default(false),
  },
  (table) => ({
    tripFk: foreignKey({
      columns: [table.tripId],
      foreignColumns: [tripTable.id],
      name: "reviews_trip_id_fkey",
    }),
  })
);

export const tripHotelsTable = pgTable(
  "trip_hotels",
  {
    tripId: uuid("trip_id").notNull(),
    hotelId: uuid("hotel_id").notNull(),
  },
  (table) => ({
    pk: primaryKey(table.tripId, table.hotelId),
    tripFk: foreignKey({
      columns: [table.tripId],
      foreignColumns: [tripTable.id],
      name: "fk_trip_id",
    }),
    hotelFk: foreignKey({
      columns: [table.hotelId],
      foreignColumns: [hotelTable.id],
      name: "fk_hotel_id",
    }),
  })
);
