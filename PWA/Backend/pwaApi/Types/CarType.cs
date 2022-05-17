﻿using System;
namespace pwaApi.Types
{
    //public enum VehicleType
    //{
    //    coupe,
    //    hatchback,
    //    sedan,
    //    station_wagon,
    //    convertible,
    //    SUV
    //}

    public class CarType
    {

        public Guid Id { get; set; }

        // Aesthetics
        public string Name { get; set; }
        public string Colour { get; set; }
        public string Type { get; set; }

        // Statistics
        public int MaxRange { get; set; }

        // Related
        public List<TripType> Trips { get; set; }
        public List<ReservationType> Reservations { get; set; }
        public List<TransactionType> Transactions { get; set; }
        public UserType Owner { get; set; }
        public List<UserType> Users { get; set; }

    }
}
