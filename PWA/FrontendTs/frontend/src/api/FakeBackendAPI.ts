import { AxiosResponse } from "axios";
import { User } from "../globaltypes";

import instance from "./APIInstance";

export default class FakeBackendAPI{

    // static getParty = async(partyId : number) => {
    //     const res: AxiosResponse<Car> = await instance.get(``)

    //     return res.data
    // }

    static getUser = async() => {
        const res: AxiosResponse<User> = await instance.get(`/graphql`)

        return res.data
    }
}