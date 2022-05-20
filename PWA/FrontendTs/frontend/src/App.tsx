import React, { useEffect, useState } from "react";
import { data } from "./api/fetchWeather";
import { request, gql, GraphQLClient } from "graphql-request";

import "./App.css";
import UserPageHeader from "./components/UserPageHeader";

const query = gql`
    {
        user {
            id
        }
    }
`;

const App = () => {
    // const client = new GraphQLClient("http://localhost:5000/graphql", {
    //     headers: {},
    // });
    // client.request(query).then((data) => console.log(data));

    return (
        <div className="main-container">
            <UserPageHeader name="Kara van Oranje" colour="Orange" />
        </div>
    );
};

export default App;
