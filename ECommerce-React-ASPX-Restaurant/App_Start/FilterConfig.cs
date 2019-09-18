using System.Web;
using System.Web.Mvc;

namespace ECommerce_React_ASPX_Restaurant
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
