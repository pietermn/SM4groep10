import { useQuery } from "react-query";
import FakeBackendAPI from "../FakeBackendAPI";

export const useFetchCars = () => {
    return useQuery("cars", FakeBackendAPI.getCars)
}