using System;
using Bogus;
using pwaApi.Types;

namespace pwaApi.Schema
{
	public class Query
	{
        public UserType GetUser()
        {
            Faker<UserType> userFaker = new Faker<UserType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Name, f => f.Name.FullName())
                .RuleFor(c => c.Colour, f => f.Commerce.Color())
                .RuleFor(c => c.FirebaseId, f => f.Finance.Account(10));

            Faker<TripType> tripFaker = new Faker<TripType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Date, f => f.Date.Recent())
                .RuleFor(c => c.Distance, f => f.Random.Int(3,350));

            Faker<ReservationType> ReservationFaker = new Faker<ReservationType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.StartDate, f => f.Date.Recent())
                .RuleFor(c => c.EndDate, f => f.Date.RecentOffset(1));

            Faker<TransactionType> TransactionFaker = new Faker<TransactionType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Liters, f => f.Random.Int(20,65))
                .RuleFor(c => c.Date, f => f.Date.Recent())
                .RuleFor(c => c.Amount, f => f.Random.Double(30,100));

            Faker<CarType> CarFaker = new Faker<CarType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Name, f => f.Vehicle.Model())
                .RuleFor(c => c.Colour, f => f.Commerce.Color())
                //.RuleFor(c => c.Type, f => f.PickRandom<VehicleType>())
                .RuleFor(c => c.MaxRange, f => f.Random.Int(250, 750))
                .RuleFor(c => c.Trips, f => tripFaker.Generate(10))
                .RuleFor(c => c.Transactions, f => TransactionFaker.Generate(10))
                .RuleFor(c => c.Reservations, f => ReservationFaker.Generate(10))
                .RuleFor(c => c.Owner, f => userFaker.Generate())
                .RuleFor(c => c.Users, f => userFaker.Generate(3));

            return userFaker.Generate();
        }

        public IEnumerable<CarType> GetCar()
        {
            Faker<UserType> userFaker = new Faker<UserType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Name, f => f.Name.FullName())
                .RuleFor(c => c.Colour, f => f.Commerce.Color())
                .RuleFor(c => c.FirebaseId, f => f.Finance.Account(10));

            Faker<TripType> tripFaker = new Faker<TripType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Date, f => f.Date.Recent())
                .RuleFor(c => c.Distance, f => f.Random.Int(3,350));

            Faker<ReservationType> ReservationFaker = new Faker<ReservationType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.StartDate, f => f.Date.Recent())
                .RuleFor(c => c.EndDate, f => f.Date.Recent());

            Faker<TransactionType> TransactionFaker = new Faker<TransactionType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Liters, f => f.Random.Int(20,65))
                .RuleFor(c => c.Date, f => f.Date.Recent())
                .RuleFor(c => c.Amount, f => f.Random.Double(30,100));

            Faker<CarType> CarFaker = new Faker<CarType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Name, f => f.Vehicle.Model())
                .RuleFor(c => c.Colour, f => f.Commerce.Color())
                //.RuleFor(c => c.Type, f => f.PickRandom<VehicleType>())
                .RuleFor(c => c.MaxRange, f => f.Random.Int(250, 750))
                .RuleFor(c => c.Trips, f => tripFaker.Generate(10))
                .RuleFor(c => c.Transactions, f => TransactionFaker.Generate(10))
                .RuleFor(c => c.Reservations, f => ReservationFaker.Generate(10))
                .RuleFor(c => c.Owner, f => userFaker.Generate())
                .RuleFor(c => c.Users, f => userFaker.Generate(3));

            return CarFaker.Generate(5);
        }
        
    }
}

