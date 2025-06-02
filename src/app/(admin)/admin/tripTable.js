import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PencilIcon } from "lucide-react";
import Link from "next/link";
import { IsVisibleToggle, SwitchDemo } from "./VisibleToggle";

const sampleTrips = [
  {
    id: "1a2b3c4d-1111-aaaa-bbbb-ccccdddd0001",
    title: "Explore Bali: 7-Day Island Adventure",
    isFlightIncluded: true,
    images: [
      "https://example.com/images/bali-beach.jpg",
      "https://example.com/images/bali-temple.jpg",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: [
      "6 Nights Hotel Stay",
      "Daily Breakfast",
      "Local Transport",
      "Professional Guide",
    ],
    itinary: [
      "Day 1: Arrival and Beach Sunset",
      "Day 2: Ubud Forest & Waterfalls",
      "Day 3: Mount Batur Trek",
      "Day 4: Island Hopping",
      "Day 5: Local Market Tour",
      "Day 6: Free Day",
      "Day 7: Departure",
    ],
  },
  {
    id: "1a2b3c4d-2222-aaaa-bbbb-ccccdddd0002",
    title: "European Capitals Tour",
    isFlightIncluded: false,
    images: [
      "https://example.com/images/paris.jpg",
      "https://example.com/images/rome.jpg",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: ["Train Tickets", "City Passes", "Museum Entry"],
    itinary: [
      "Day 1: Paris Arrival",
      "Day 2: Louvre and Eiffel Tower",
      "Day 3: Travel to Amsterdam",
      "Day 4: Explore Amsterdam",
      "Day 5: Brussels Tour",
      "Day 6: Rome Arrival",
      "Day 7: Vatican City Tour",
    ],
  },
  {
    id: "1a2b3c4d-3333-aaaa-bbbb-ccccdddd0003",
    title: "Leh-Ladakh Adventure Ride",
    isFlightIncluded: false,
    images: [
      "https://example.com/images/leh-road.jpg",
      "https://example.com/images/ladakh-lake.jpg",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: ["Motorbike Rental", "Helmet & Gear", "Accommodation", "Fuel"],
    itinary: [
      "Day 1: Arrive at Leh",
      "Day 2: Acclimatization & Shanti Stupa",
      "Day 3: Ride to Nubra Valley",
      "Day 4: Pangong Lake",
      "Day 5: Ride back to Leh",
      "Day 6: Explore Local Monasteries",
      "Day 7: Departure",
    ],
  },
  {
    id: "1a2b3c4d-4444-aaaa-bbbb-ccccdddd0004",
    title: "Thailand Budget Escape",
    isFlightIncluded: true,
    images: [
      "https://example.com/images/bangkok.jpg",
      "https://example.com/images/phuket.jpg",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: ["Flight", "Hotel", "Daily Breakfast", "City Transfers"],
    itinary: [
      "Day 1: Bangkok Arrival",
      "Day 2: City Temples Tour",
      "Day 3: Pattaya Day Trip",
      "Day 4: Phuket Arrival",
      "Day 5: Island Hopping",
      "Day 6: Leisure",
      "Day 7: Departure",
    ],
  },
  {
    id: "1a2b3c4d-5555-aaaa-bbbb-ccccdddd0005",
    title: "Spiritual Varanasi & Ganges Retreat",
    isFlightIncluded: false,
    images: ["https://example.com/images/varanasi-ghats.jpg"],
    bannerImage:
      "https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: ["Accommodation", "Boat Ride", "Ganga Aarti Experience"],
    itinary: [
      "Day 1: Arrival in Varanasi",
      "Day 2: Ganga Boat Ride & Temples",
      "Day 3: Sarnath Excursion",
      "Day 4: Free Day",
      "Day 5: Departure",
    ],
  },
  {
    id: "1a2b3c4d-6666-aaaa-bbbb-ccccdddd0006",
    title: "Dubai Desert Getaway",
    isFlightIncluded: true,
    images: [
      "https://example.com/images/dubai-skyline.jpg",
      "https://example.com/images/desert-safari.jpg",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: [
      "Visa Assistance",
      "4-Star Hotel Stay",
      "Desert Safari",
      "Burj Khalifa Entry",
    ],
    itinary: [
      "Day 1: Arrival & Relax",
      "Day 2: City Tour",
      "Day 3: Desert Safari",
      "Day 4: Burj Khalifa & Dubai Mall",
      "Day 5: Marina Cruise",
      "Day 6: Leisure Shopping",
      "Day 7: Departure",
    ],
  },
  {
    id: "1a2b3c4d-7777-aaaa-bbbb-ccccdddd0007",
    title: "South India Temple Trail",
    isFlightIncluded: false,
    images: [
      "https://example.com/images/madurai-temple.jpg",
      "https://example.com/images/mahabalipuram.jpg",
    ],
    bannerImage:
      "https://images.unsplash.com/photo-1744309544231-b3e8ab25ba10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: ["Train Travel", "Local Guide", "Hotel Stay"],
    itinary: [
      "Day 1: Chennai Arrival",
      "Day 2: Mahabalipuram",
      "Day 3: Pondicherry",
      "Day 4: Thanjavur",
      "Day 5: Madurai",
      "Day 6: Rameshwaram",
      "Day 7: Return to Chennai",
    ],
  },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TripTable({ tripData }) {
  // function handlerChangeVisible() {
  //   console.log("handlerChangeVisible");
  // }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>IsFlight</TableHead>
          <TableHead>Is Visible</TableHead>
          <TableHead className=" w-[100px] ">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tripData.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              <img
                src={item.bannerImage}
                alt={item.title}
                className="w-12 h-12 object-cover rounded"
              />
            </TableCell>
            <TableCell>
              <p className=" font-semibold">{item.title}</p>
            </TableCell>
            <TableCell>{item.isFlightIncluded ? "Yes" : "No"}</TableCell>
            <TableCell>
              <IsVisibleToggle tripId={item.id} currentState={item.isVisible} />
            </TableCell>
            <TableCell>
              <Link href={`/admin/trip?id=${item.id}`}>
                <PencilIcon
                  className=" hover:scale-125 duration-200"
                  size={20}
                />
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
