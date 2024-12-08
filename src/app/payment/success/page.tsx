// app/payment/success/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import RentBikeServices from "@/services/RentBikeServices";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface TransactionDetails {
  rentalId?: string;
  userName?: string;
  bikeName?: string;
  amount: number;
}

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get eSewa parameters from URL
        const oid = searchParams.get("oid");
        const amt = searchParams.get("amt");
        const refId = searchParams.get("refId");

        if (!oid || !amt || !refId) {
          throw new Error("Missing required payment parameters");
        }

        // Parse rental details from oid
        // Format: "Rental UUID - username - bikename"
        const orderDetails = oid.split(" - ");
        // if (orderDetails.length !== 3) {
        //   throw new Error("Invalid order ID format");
        // }

        // const rentalId = orderDetails[0].replace("Rental ", "");
        // const userName = orderDetails[1];
        // const bikeName = orderDetails[2];
        // console.log(orderDetails, rentalId);

        setTransactionDetails({
          amount: parseFloat(amt),
        });

        // Call verify endpoint
        const response = await RentBikeServices.verifyEsewaPayment({
          oid,
          amt,
          refId,
        });

        if (response.success) {
          setVerified(true);
          toast.success("Payment verified successfully");
        } else {
          throw new Error("Payment verification failed");
        }
      } catch (error) {
        toast.error("Failed to verify payment");
        console.error("Payment verification error:", error);
      } finally {
        setVerifying(false);
      }
    };

    verifyPayment();
  }, [searchParams]);

  const handleNavigateHome = () => {
    router.push("/profile/rental-management/active-rentals");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        {verifying ? (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Verifying Payment</AlertTitle>
            <AlertDescription>
              Please wait while we verify your payment...
            </AlertDescription>
          </Alert>
        ) : verified ? (
          <div className="text-center space-y-6">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              Payment Successful!
            </h1>

            {transactionDetails && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">
                  Transaction Details
                </h2>
                <div className="space-y-2 text-left">
                  {/* <p className="flex justify-between">
                    <span className="text-gray-600">Bike:</span>
                    <span className="font-medium">
                      {transactionDetails.bikeName}
                    </span>
                  </p> */}
                  <p className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">
                      Rs. {transactionDetails.amount.toFixed(2)}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Reference:</span>
                    <span className="font-medium text-sm">
                      {searchParams.get("refId")}
                    </span>
                  </p>
                </div>
              </div>
            )}

            <Alert className="bg-green-50 border-green-200">
              <AlertTitle>Transaction Complete</AlertTitle>
              <AlertDescription>
                Your payment has been verified and processed successfully.
              </AlertDescription>
            </Alert>

            <Button
              onClick={handleNavigateHome}
              className="w-full flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Dashboard
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-6">
            <XCircle className="mx-auto h-16 w-16 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              Verification Failed
            </h1>
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                We couldn't verify your payment. Please contact support if the
                amount has been deducted.
              </AlertDescription>
            </Alert>
            <Button
              onClick={handleNavigateHome}
              className="w-full flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
