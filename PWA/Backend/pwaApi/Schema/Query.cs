using System;
using pwaApi.Types;

namespace pwaApi.Schema
{
	public class Query
	{
        public Book GetBook() =>
        new Book
        {
            Title = "C# in depth.",
            Author = new Author
            {
                Name = "Jon Skeet"
            }
        };
    }
}

