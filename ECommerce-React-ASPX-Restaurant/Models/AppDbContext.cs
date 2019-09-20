using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ECommerce_React_ASPX_Restaurant.Models
{
    public class AppDbContext : DbContext
    {
        // Are you having trouble connecting to localDB or SQL Server Express?
        // Try starting here on stack overflow:
        // https://stackoverflow.com/questions/18060667/why-am-i-getting-cannot-connect-to-server-a-network-related-or-instance-speci/38641107#38641107
        // public AppDbContext() : base("DefaultConnection") { } // Not working for me...
        public AppDbContext() : base("ALTCONNECTION") { } // working for me on SQL express 2017 with localDB installed, see Web.config in root of this project

        
        public DbSet<Customer> Customers { get; set; }
        public DbSet<FoodItem> FoodItems { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

    }
}