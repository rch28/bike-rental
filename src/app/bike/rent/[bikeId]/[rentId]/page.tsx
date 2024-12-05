import OnlinePayment from "@/BikeRent/components/payment/OnlinePayment";
import PartialPayment from "@/BikeRent/components/payment/PartialPayment";
import PayAtPickup from "@/BikeRent/components/payment/PayAtPickup";
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
import RentBikeServices from "@/services/RentBikeServices";
import React from "react";

type PaymentPageProps = {
  params: Promise<{
    bikeId: string;
    rentId: string;
  }>;
};

const PaymentPage = async ({ params }: PaymentPageProps) => {
  const { bikeId, rentId } = await params;

  if (!bikeId || !rentId) {
    return (
      <div className="h-96 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  const rentalDetails = await RentBikeServices.getSingleRent(rentId);
  const getDays = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  const getDateTime = (d: string) => {
    const dateTime = new Date(d);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();

    return `${date} | ${time}`;
  };
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Rental Payment</CardTitle>
            <CardDescription>
              {rentalDetails.bike_details.name} | Duration:{" "}
              {getDays(rentalDetails.pickup_date, rentalDetails.dropoff_date)}{" "}
              days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-2xl font-bold">
                  रु {rentalDetails.total_amount}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Rental Start</p>
                <p className="text-lg text-gray-700">
                  {getDateTime(rentalDetails.pickup_date)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Options</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="online" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="online">Online Payment</TabsTrigger>
                <TabsTrigger value="partial">Partial Payment</TabsTrigger>
                <TabsTrigger value="pickup">Pay at Pickup</TabsTrigger>
              </TabsList>

              <TabsContent value="online">
                <OnlinePayment rentalDetails={rentalDetails} />
              </TabsContent>

              <TabsContent value="partial">
                <PartialPayment />
              </TabsContent>

              <TabsContent value="pickup">
                <PayAtPickup />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PaymentPage;
