using System;
using Bogus;
using pwaApi.Types;

namespace pwaApi.Schema
{
	public class Query
	{
        private readonly Faker<UserType> _userFaker;
        private readonly Faker<TripType> _tripFaker;
        private readonly Faker<ReservationType> _reservationFaker;
        private readonly Faker<TransactionType> _transactionFaker;
        private readonly Faker<CarType> _carFaker;

        public Query()
        {
            _userFaker = new Faker<UserType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Name, f => f.Name.FullName())
                .RuleFor(c => c.Colour, f => f.Commerce.Color())
                .RuleFor(c => c.FirebaseId, f => f.Finance.Account(10));

            _tripFaker = new Faker<TripType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Date, f => f.Date.Recent())
                .RuleFor(c => c.Distance, f => f.Random.Int(3, 350));

            _reservationFaker = new Faker<ReservationType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.StartDate, f => f.Date.Recent())
                .RuleFor(c => c.EndDate, f => f.Date.Recent());

            _transactionFaker = new Faker<TransactionType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Liters, f => f.Random.Int(20, 65))
                .RuleFor(c => c.Date, f => f.Date.Recent())
                .RuleFor(c => c.Amount, f => f.Random.Double(30, 100));

            _carFaker = new Faker<CarType>()
                .RuleFor(c => c.Id, f => Guid.NewGuid())
                .RuleFor(c => c.Name, f => f.Vehicle.Model())
                .RuleFor(c => c.Colour, f => f.Commerce.Color())
                .RuleFor(c => c.Type, f => f.Vehicle.Type())
                .RuleFor(c => c.MaxRange, f => f.Random.Int(250, 750))
                .RuleFor(c => c.Trips, f => _tripFaker.Generate(3))
                .RuleFor(c => c.Transactions, f => _transactionFaker.Generate(3))
                .RuleFor(c => c.Reservations, f => _reservationFaker.Generate(3))
                .RuleFor(c => c.Owner, f => _userFaker.Generate())
                .RuleFor(c => c.Users, f => _userFaker.Generate(3));
        }
        public UserType GetUser()
        {
            return _userFaker.Generate();
        }

        //public IEnumerable<CarType> GetCars(int limit)
        //{
        //    return _carFaker.Generate(limit);
        //}
        
        public IEnumerable<CarType> GetCars()
        {
            return _carFaker.Generate(5);
        }
        
    }
}

