using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ECommerce_React_ASPX_Restaurant.Startup))]
namespace ECommerce_React_ASPX_Restaurant
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
