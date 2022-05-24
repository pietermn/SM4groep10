import {} from "@mui/material"
import React from "react"
import "./BalanceCard.scss"

interface IBalanceCardProps{
    name: string;
    colour: string;
    balance: string;
}

export default function CarCard(props: IBalanceCardProps){


    return(
        <div className="container">
            <div className="container div">
                <h1>Balance</h1>
                <div className="BalanceGrid">
                    <h2 className="Name">{props.name}</h2>

                </div>
                
            </div>
        </div>
    );
}