import configureAxios from "./axiosConfig";

const requests = configureAxios();

const CommonServices = {
  // get FAQS
  getFAQS: async () => {
    return requests.get("support/faqs/");
  },
};
export default CommonServices;
