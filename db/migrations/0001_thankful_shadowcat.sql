ALTER TABLE "trips" ADD COLUMN "hotels" jsonb[];--> statement-breakpoint
ALTER TABLE "trips" DROP COLUMN "hotel_name";--> statement-breakpoint
ALTER TABLE "trips" DROP COLUMN "hotel_image";--> statement-breakpoint
ALTER TABLE "trips" DROP COLUMN "hotel_rating";--> statement-breakpoint
ALTER TABLE "trips" DROP COLUMN "hotel_location";--> statement-breakpoint
ALTER TABLE "trips" DROP COLUMN "hotel_description";