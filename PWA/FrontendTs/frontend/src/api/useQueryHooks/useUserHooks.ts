
import { useQuery } from "react-query";
import FakeBackendAPI from "../FakeBackendAPI";

export const useFetchUser = () => {
    return useQuery("user", FakeBackendAPI.getUser)
}