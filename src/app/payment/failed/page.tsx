"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@/hooks/navigate";
import { ArrowLeft, XCircle } from "lucide-react";

const PaymentFailure = () => {
  const { goTo } = useNavigate();

  const handleRetry = () => {
    // Navigate back to payment initiation page
    goTo("/payment"); // TODO: Chage this to the correct URL
  };

  const handleNavigateHome = () => {
    goTo("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md w-full space-y-8 text-center">
        <XCircle className="mx-auto h-16 w-16 text-red-500" />
        <h1 className="text-2xl font-bold text-gray-900">Payment Failed</h1>
        <Alert variant="destructive">
          <AlertTitle>Transaction Failed</AlertTitle>
          <AlertDescription>
            Your payment was not successful. Please try again or contact support
            if the problem persists.
          </AlertDescription>
        </Alert>
        <div className="space-y-4">
          {/* <Button
            onClick={handleRetry}
            className="w-full flex items-center justify-center gap-2"
          >
            Try Again
          </Button> */}
          <Button
            variant="outline"
            onClick={handleNavigateHome}
            className="w-full flex items-center justify-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
