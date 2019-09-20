using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ECommerce_React_ASPX_Restaurant.Models
{ 

    /// <summary>
    /// The Customer class represents a model in the app and a table in our database.
    /// </summary>
public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
    // TODO: improve password security
        public string Password { get; set; }

        [NotMapped]
        public string ConfirmPassword { get; set; }

    }
}