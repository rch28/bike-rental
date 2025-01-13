"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, CreditCard } from "lucide-react";
import { Badge } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import RentalServices from "@/services/RentalServices";

const MyRentals = () => {
  // In a real app, this would come from an API

  
  console.log("my rentals", MyRentals);
  const rentals = [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      bike: "Mountain Bike Pro",
      pickup_location: "Downtown Station",
      dropoff_location: "Uptown Station",
      pickup_date: "2025-01-13T10:00:00",
      dropoff_date: "2025-01-14T10:00:00",
      rental_status: "active",
      total_amount: "45.00",
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-500",
      active: "bg-green-500",
      completed: "bg-blue-500",
      cancelled: "bg-red-500",
      overdue: "bg-purple-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Active Rentals</h2>
      {rentals.map((rental) => (
        <Card key={rental.id} className="w-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">{rental.bike}</CardTitle>
            <Badge className={getStatusColor(rental.rental_status)}>
              {rental.rental_status.toUpperCase()}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <div>
                  <p className="text-sm text-gray-500">Pickup</p>
                  <p>{rental.pickup_location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <div>
                  <p className="text-sm text-gray-500">Dropoff</p>
                  <p>{rental.dropoff_location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <div>
                  <p className="text-sm text-gray-500">Pickup Date</p>
                  <p>{new Date(rental.pickup_date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <div>
                  <p className="text-sm text-gray-500">Dropoff Date</p>
                  <p>{new Date(rental.dropoff_date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Time Remaining: {/* Add time calculation logic */}</span>
              </div>
              <p className="font-bold">${rental.total_amount}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const PaymentHistory = () => {
  // In a real app, this would come from an API
  const payments = [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      bike: "Mountain Bike Pro",
      payment_date: "2025-01-13T10:00:00",
      payment_status: "paid",
      payment_method: "online",
      total_amount: "45.00",
    },
  ];

  const getPaymentStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-500",
      paid: "bg-green-500",
      failed: "bg-red-500",
      refunded: "bg-purple-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      {payments.map((payment) => (
        <Card key={payment.id} className="w-full">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">{payment.bike}</CardTitle>
            <Badge className={getPaymentStatusColor(payment.payment_status)}>
              {payment.payment_status.toUpperCase()}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <div>
                  <p className="text-sm text-gray-500">Payment Date</p>
                  <p>{new Date(payment.payment_date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-4 w-4" />
                <div>
                  <p className="text-sm text-gray-500">Payment Method</p>
                  <p>{payment.payment_method.toUpperCase()}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center pt-4 border-t">
              <p className="font-bold">${payment.total_amount}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { MyRentals, PaymentHistory };
