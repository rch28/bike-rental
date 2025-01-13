"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import RentalServices from "@/services/RentalServices";
import Loading from "../utils/Loading";
import RemainingTime from "@/functions/Remaining";
type Status = "pending" | "active" | "completed" | "cancelled" | "overdue";
const MyRentals = () => {
  const { data: MyRentals, isLoading } = useQuery({
    queryFn: async () => await RentalServices.getMyRentals(),
    queryKey: ["my-rentals"],
    refetchOnWindowFocus: false,
  });

  const getStatusColor = (status: Status) => {
    const colors: Record<Status, string> = {
      pending: "bg-yellow-500",
      active: "bg-green-500",
      completed: "bg-blue-500",
      cancelled: "bg-red-500",
      overdue: "bg-purple-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Active Rentals</h2>
      <div className="rounded-md border bg-pink-100 overflow-x-scroll p-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {isLoading ? (
          <div className="h-52 flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <Table>
            <TableHeader className="border-b-2 border-gray-400">
              <TableRow>
                <TableHead>Bike</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Pickup Location</TableHead>
                <TableHead>Dropoff Location</TableHead>
                <TableHead>Pickup Date</TableHead>
                <TableHead>Dropoff Date</TableHead>
                <TableHead>Time Remaining</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MyRentals?.map((rental: any) => (
                <TableRow key={rental.id}>
                  <TableCell className="font-medium">
                    {rental.bike_details.name}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(rental.rental_status)}>
                      {rental.rental_status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{rental.pickupLocation}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{rental.dropoffLocation}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(rental.pickup_date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="pl-4 mt-2 text-orange-400">
                      <RemainingTime pickupDate={rental.pickup_date} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(rental.dropoff_date).toLocaleDateString()}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 bg-purple-600 rounded-full px-2 py-1 text-white">
                      <Clock className="h-4 w-4" />
                      <span className="">
                        <RemainingTime pickupDate={rental.dropoff_date} />
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    ${rental.total_amount}
                  </TableCell>
                </TableRow>
              ))}
              {MyRentals?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center">
                    No active rentals found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
