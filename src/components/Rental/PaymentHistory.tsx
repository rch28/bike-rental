import { Calendar, CreditCard } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
type Status = "pending" | "paid" | "failed" | "refunded";

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

export default PaymentHistory;
