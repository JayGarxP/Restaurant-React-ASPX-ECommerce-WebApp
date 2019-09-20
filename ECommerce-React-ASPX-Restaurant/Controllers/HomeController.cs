using ECommerce_React_ASPX_Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_React_ASPX_Restaurant.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // run these once to setup the default connection on a SQLEXPRESS database; will retool this process later.
            //AppDbContext c = new AppDbContext();
            //c.Database.CreateIfNotExists();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}