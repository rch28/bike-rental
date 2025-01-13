"use client";
import { Calendar, CreditCard } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useQuery } from "@tanstack/react-query";
import RentalServices from "@/services/RentalServices";
import Loading from "../utils/Loading";
type Status = "pending" | "paid" | "failed" | "refunded";

const PaymentHistory = () => {
  const { data: MyPayments, isLoading } = useQuery({
    queryFn: async () => await RentalServices.getMyPayments(),
    queryKey: ["my-payments"],
    refetchOnWindowFocus: false,
  });

  const getPaymentStatusColor = (status: Status) => {
    const colors: Record<Status, string> = {
      pending: "bg-yellow-500",
      paid: "bg-green-500",
      failed: "bg-red-500",
      refunded: "bg-purple-500",
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <div className="rounded-md border bg-pink-100 min-h-52 flex justify-center items-center">
        {isLoading ? (
          <Loading />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bike</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Date</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {MyPayments?.map((payment: any) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">
                    {payment.product.bike_details.name}
                  </TableCell>
                  <TableCell>
                    <Badge className={getPaymentStatusColor(payment.status)}>
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(payment.payment_date).toLocaleDateString()}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-4 w-4" />
                      <span>{payment.payment_via.toUpperCase()}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-bold">
                    ${payment.total_amount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
