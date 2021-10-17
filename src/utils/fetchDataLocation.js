import fetcher from "../libs/fetcher";
import { messageError } from "../libs/clientMessages/clientMessages";

const fetchDataLocation = async () => {
  let locationInfo = "0,0";

  try {
    const getGeolocation = await fetcher(
      `https://ipinfo.io/1.55.205.97?token=9ab22bef53bc5c`
    );

    locationInfo = getGeolocation.loc;
  } catch (err) {
    messageError("Your location is not defined");
  }

  const splitLocationData = locationInfo.split(",");

  return {
    latitude: splitLocationData[0],
    longitude: splitLocationData[1],
  };
};

export default fetchDataLocation;
