using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreDatatables.Models;

namespace AspNetCoreDatatables.Controllers
{
    public class SearchViewModel
    {
        public string Value { get; set; }
    }

    public class DatatablesModel
    {
        public int Page { get; set; }

        public string Draw { get; set; }

        public int Start { get; set; }

        public int Length { get; set; }

        //public SearchViewModel Search { get; set; }
        [FromQuery(Name = "search[value]")]
        public string Search { get; set; }
    }

    public class HomeController : Controller
    {
        private readonly UserContext context;

        public HomeController(UserContext context)
        {
            this.context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetUsers([FromQuery]DatatablesModel model)
        {
            var count = this.context.Users.Count();
            var usersQuery = this.context.Users.AsQueryable();
            if (!string.IsNullOrEmpty(model.Search))
            {
                usersQuery = usersQuery.Where(x =>
                    string.Concat(x.FirstName, " ", x.LastName).Contains(model.Search));
            }

            var users = usersQuery.Skip(model.Start).Take(10).ToList();

            return Ok(new
            {
                draw = model.Draw,
                data = users,
                recordsFiltered = count,
                recordsTotal = count
            });
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
