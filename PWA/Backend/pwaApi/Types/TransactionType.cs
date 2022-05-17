using System;
namespace pwaApi.Types
{
	public class TransactionType
	{
		public Guid Id { get; set; }
		public double Liters { get; set; }
		public DateTime Date { get; set; }
		public double Amount { get; set; }
	}
}

