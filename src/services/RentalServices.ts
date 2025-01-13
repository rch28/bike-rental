import configureAxios from "./axiosConfig";
import { getCookies } from "./getCookies";

const requests = configureAxios();

const RentalServices = {
  // get my rentals
  getMyRentals: async () => {
    return requests.get("rent/my-rentals/", {
      Authorization: `Bearer ${await getCookies()}`,
    });
  },
};
export default RentalServices;
