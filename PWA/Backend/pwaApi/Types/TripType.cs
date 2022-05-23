using System;
namespace pwaApi.Types
{
    public class TripType
    {
        public Guid Id { get; set; }
        //public Guid UserId { get; set; }
        //public Guid CarId { get; set; }
        public int Distance { get; set; }
        public DateTime Date { get; set; }
    }
}

