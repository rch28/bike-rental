import Layout from "@/components/global/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loading from "@/components/utils/Loading";
import React from "react";
import { LuClock } from "react-icons/lu";

type PaymentPageProps = {
  params: Promise<{
    rentId: string;
  }>;
};
const rentalDetails = {
  bikeId: "BIKE-123",
  totalAmount: 150.0,
  duration: "24 hours",
  startTime: "2024-12-04 10:00 AM",
  status: "Active",
};
const handlePaymentSubmit = (e: any) => {
  e.preventDefault();
  // Handle payment submission logic here
  console.log("Payment submitted");
};
const PaymentPage = async ({ params }: PaymentPageProps) => {
  const { rentId } = await params;

  if (!rentId) {
    return (
      <div className="h-96 flex justify-center items-center">
        <Loading />
      </div>
    );
  }
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Rental Payment</CardTitle>
            <CardDescription>
              Bike ID: {rentalDetails.bikeId} | Duration:{" "}
              {rentalDetails.duration}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-2xl font-bold">
                  ${rentalDetails.totalAmount}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Rental Start</p>
                <p className="text-lg">{rentalDetails.startTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Options</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="full" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="full">Full Payment</TabsTrigger>
                <TabsTrigger value="partial">Partial Payment</TabsTrigger>
                <TabsTrigger value="pickup">Pay at Pickup</TabsTrigger>
              </TabsList>

              <TabsContent value="full">
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Card Number</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">CVV</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                  >
                    Pay ${rentalDetails.totalAmount}
                  </button>
                </form>
              </TabsContent>

              <TabsContent value="partial">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Payment Amount
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      placeholder="Enter amount"
                      max={rentalDetails.totalAmount}
                    />
                    <p className="text-sm text-gray-500">
                      Remaining amount will be due at dropoff
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Card Number</label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                  >
                    Make Partial Payment
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="pickup">
                <div className="text-center p-6 space-y-4">
                  <LuClock className="w-12 h-12 mx-auto text-blue-600" />
                  <h3 className="text-lg font-medium">Pay at Pickup</h3>
                  <p className="text-gray-500">
                    You can make the payment when you pick up the bike. Total
                    amount due: ${rentalDetails.totalAmount}
                  </p>
                  <button
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    onClick={() => console.log("Confirmed pay at pickup")}
                  >
                    Confirm Pay at Pickup
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PaymentPage;
