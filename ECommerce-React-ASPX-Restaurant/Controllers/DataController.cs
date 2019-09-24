using ECommerce_React_ASPX_Restaurant.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ECommerce_React_ASPX_Restaurant.Controllers
{
    public class DataController : Controller
    {

        // list to hold food items
        public IList<FoodItem> menuItems;

        // GET: Data
        [HttpGet]
        public ActionResult GetMenuList()
        {
            menuItems = new List<FoodItem>();
            using (var db = new AppDbContext())
            {
                // fetch all hardcoded food items from database; add them to menu list
                // See snippets->react-food.sql under exercise files for more information
                // TODO: create tool to convert a WYSIWYG GUI drag and drop to sql query;
                //          distribute it with this code.
                foreach (var f in db.FoodItems)
                {
                    menuItems.Add(f);
                }
            }
            return Json(menuItems, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public string GetUserId()
        {
            int uid = -1; // -1 if not logged in
            if (Session["UserId"] != null)
                uid = Convert.ToInt32(Session["UserId"].ToString());
            return uid.ToString();
        }


        [HttpPost]
        public ActionResult PlaceOrder()
        {
            return null;
        }
    }
}