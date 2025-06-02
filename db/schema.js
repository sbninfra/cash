import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  uuid,
  varchar,
  primaryKey,
  timestamp,
} from "drizzle-orm/pg-core";

export const tripTable = pgTable("trips", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title"),
  description: varchar("description"),
  slug: varchar("slug"),
  dates: varchar("dates").array(),
  isFlightIncluded: boolean("is_flight_included").default(false),
  images: varchar("images").array(),
  bannerImage: varchar("banner_image"),
  includes: varchar("includes").array(),
  note: varchar("note").array(),
  itinary: varchar("itinary").array(),
  itinaryDescription: varchar("itinary_description"),
  isVisible: boolean("is_visible").notNull().default(true),

  //hotel details
  hotelName: varchar("hotel_name"),
  hotelImage: varchar("hotel_image"),
  hotelRating: integer("hotel_rating"),
  hotelLocation: varchar("hotel_location"),
  hotelDescription: varchar("hotel_description"),
});

export const reviewsTable = pgTable(
  "reviews",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name"),
    email: varchar("email"),
    rating: integer("rating").notNull(),
    message: varchar("message").notNull(),
    isAdminApproved: boolean("is_admin_approved").notNull().default(false),
    // tripId: uuid("trip_id"),
  }
  // (table) => ({
  //   tripFk: foreignKey({
  //     columns: [table.tripId],
  //     foreignColumns: [tripTable.id],
  //     name: "reviews_trip_id_fkey",
  //   }),
  // })
);

export const contactTable = pgTable("contacts", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name"),
  email: varchar("email"),
  phone: varchar("phone"),
  location: varchar("location"),
  message: varchar("message"),
});

export const blogTable = pgTable("blog", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: varchar("title"),
  metaDescription: varchar("meta_description"),
  blogCategory: varchar("blog_category"),
  image: varchar("image"),
  tags: varchar("tags").array(),
  date: varchar("date"),

  // Data-> blog content
  data: varchar("data"),
  userImage: varchar("user_image"),
  userName: varchar("user_name"),
  slug: varchar("slug"),
  isVisible: boolean("is_visible").default(true),
});

export const blogForm = pgTable("blogForm", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name"),
  email: varchar("email"),
  message: varchar("message"),
  number: varchar("number"),
  refrenceBlogLink: varchar("refrence_blog_link"),
  createdAt: timestamp("created_at").defaultNow(),
});
