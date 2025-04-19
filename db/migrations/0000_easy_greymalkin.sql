CREATE TABLE "dates" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"month" varchar NOT NULL,
	"day" varchar NOT NULL,
	"trip_id" uuid
);
--> statement-breakpoint
CREATE TABLE "hotels" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"location" varchar,
	"stars" integer NOT NULL,
	"description" varchar[],
	"image" varchar
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image" varchar,
	"message" varchar NOT NULL,
	"rating" integer NOT NULL,
	"trip_id" uuid,
	"is_admin_approved" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "trip_hotels" (
	"trip_id" uuid NOT NULL,
	"hotel_id" uuid NOT NULL,
	CONSTRAINT "trip_hotels_trip_id_hotel_id_pk" PRIMARY KEY("trip_id","hotel_id")
);
--> statement-breakpoint
CREATE TABLE "trips" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"is_flight_included" boolean DEFAULT false NOT NULL,
	"images" varchar[],
	"banner_image" integer,
	"includes" varchar[],
	"itinary" varchar[]
);
--> statement-breakpoint
ALTER TABLE "dates" ADD CONSTRAINT "dates_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_trip_id_fkey" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trip_hotels" ADD CONSTRAINT "fk_trip_id" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "trip_hotels" ADD CONSTRAINT "fk_hotel_id" FOREIGN KEY ("hotel_id") REFERENCES "public"."hotels"("id") ON DELETE no action ON UPDATE no action;