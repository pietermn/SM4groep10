using System;
namespace pwaApi.Types
{
    public enum Type
    {
        coupe,
        hatchback,
        sedan,
        station_wagon,
        convertible,
        SUV
    }

    public class CarType
    {

        public Guid Id { get; set; }

        // Aesthetics
        public string Name { get; set; }
        public string Colour { get; set; }
        public IEnumerable<Type> Type { get; set; }

        // Statistics
        public int MaxRange { get; set; }

        // Related
        public TripType Trips { get; set; }
        public ReservationType Reservations { get; set; }
        public TransactionType Transactions { get; set; }
        public UserType Owner { get; set; }
        public List<UserType> Users { get; set; }

    }
}

