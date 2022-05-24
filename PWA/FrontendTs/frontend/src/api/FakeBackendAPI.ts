import axios, { AxiosResponse } from "axios";
import { Car, User } from "../globaltypes";

import instance from "./APIInstance";

export default class FakeBackendAPI{

    static getUser = async() => {
        const res: AxiosResponse<any> = await axios.post("http://localhost:5200/graphql", {
            query: `{
                user{
                  id
                  name
                  colour
                }
              }`
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })

        return res.data.data.user as User
    }

    static getCars = async() => {
        const res: AxiosResponse<any> = await axios.post("http://localhost:5200/graphql", {
            query: `{
                cars{
                    id
                    name
                    colour
                    type
                    maxRange
                    tank
                
                    trips{
                      user {
                        name
                      }
                      date
                      distance
                    }
                    
                    transactions{
                      id
                      user {
                        id
                        name
                        colour
                      }
                      date
                      liters
                      amount
                    }
                
                    reservations{
                      id
                      user {
                        id
                        name
                        colour
                      }
                      startDate
                      endDate
                    }
                
                    owner {
                      id
                      name
                      colour
                    }
                
                    users{
                      id
                      name
                      colour
                    }
                  }
              }`
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
        return res.data.data.cars as Car[];
    }
}