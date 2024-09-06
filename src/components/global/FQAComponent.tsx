import { FAQItem } from "./FQAItem";

const FAQComponent = () => {
  const faqData = [
    {
      question: "Which type of documents are required ?",
      answer:
        "DL is compulsory and any other personal ID card (Aadhar, Pan, Voter Card) required.",
    },
    {
      question: "Is fuel included in the fare ?",
      answer: "Please check with the rental company for their fuel policy.",
    },
    {
      question: "Is long term bike rentals cheaper ?",
      answer:
        "Generally, long-term rentals offer better rates. Contact the rental company for specific pricing.",
    },
    {
      question: "Is there any charge for late return of bike ?",
      answer:
        "Late return fees may apply. Check the rental agreement for details.",
    },
    {
      question: "How much does it cost to rent a bike or car ?",
      answer:
        "Prices vary based on vehicle type and rental duration. Contact the rental company for current rates.",
    },
  ];

  return (
    <div className="w-full p-4 pt-6">
      <div className="   lg:flex gap-4 justify-between rounded overflow-hidden">
        <div className=" flex-1">
            <span className="text-base font-bold tracking-widest">FQA'S</span>
          <h1 className="text-3xl   lg:text-5xl font-bold my-2 ">
            <span className="text-black">General </span>
            <span className="text-primary">Frequently </span>
            <span className="text-black">Asked Questions</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Here you can check general questions by the customer.
          </p>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/910/799/699/hip-hop-tyler-the-creator-caricature-wallpaper-preview.jpg"
            alt="Vehicle "
            className="w-full  h-full object-cover rounded-xl"
          />
        </div>

        <div className="p-4 flex-1 align-middle  ">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
