using Microsoft.AspNetCore.Mvc;

namespace Dalat.Controllers;

/// <summary>
/// Handles language switching via a cookie and redirects back to the originating page.
/// This must be a standard MVC controller (not a Razor Page) because Umbraco intercepts
/// all requests before Razor Pages can process them.
/// </summary>
public class SetLangController : Controller
{
    [HttpGet("/SetLang")]
    public IActionResult Index(string lang, string returnUrl = "/")
    {
        // Validate lang value
        if (lang != "ar" && lang != "en") lang = "ar";

        Response.Cookies.Append("lang", lang, new CookieOptions
        {
            Expires  = DateTimeOffset.UtcNow.AddYears(1),
            IsEssential = true,
            SameSite = SameSiteMode.Lax
        });

        // LocalRedirect protects against open-redirect attacks
        return LocalRedirect(string.IsNullOrEmpty(returnUrl) ? "/" : returnUrl);
    }
}
