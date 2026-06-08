using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DalatRazor.Pages;

public class SetLangModel : PageModel
{
    public IActionResult OnGet(string lang, string returnUrl = "/")
    {
        if (lang != "ar" && lang != "en") lang = "ar";

        Response.Cookies.Append("lang", lang, new CookieOptions
        {
            Expires = DateTimeOffset.UtcNow.AddYears(1),
            IsEssential = true
        });

        return LocalRedirect(string.IsNullOrEmpty(returnUrl) ? "/" : returnUrl);
    }
}
