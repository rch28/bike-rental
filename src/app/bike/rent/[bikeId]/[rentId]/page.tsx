import Loading from "@/components/utils/Loading";
import React from "react";

type PaymentPageProps = {
  params: Promise<{
    rentId: string;
  }>;
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
  return <div>PaymentPage</div>;
};

export default PaymentPage;
