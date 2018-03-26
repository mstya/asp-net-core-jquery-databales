using System;
using System.Collections.Generic;
using System.Linq;

namespace AspNetCoreDatatables.Models
{
    public class DbInitializer
    {
        public DbInitializer()
        {
        }

        public static void Initialize(UserContext context)
        {
            context.Database.EnsureCreated();

            if (context.Users.Any())
            {
                return;
            }

            var users = new List<User>();
            Enumerable.Range(0, 30).ToList().ForEach(x =>
            {
                users.Add(new User() { Age = x, Email = $"test.user{x}@gmail.com", FirstName = $"TestName{x}", LastName = $"TestLastName{x}" });
            });

            context.Users.AddRange(users);
            context.SaveChanges();
        }
    }
}
