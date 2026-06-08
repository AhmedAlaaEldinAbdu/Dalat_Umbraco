using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DalatRazor.Pages;

public class IndexModel : PageModel
{
    public string Lang { get; private set; } = "ar";

    public void OnGet()
    {
        // Read lang from cookie; default to Arabic
        Lang = Request.Cookies["lang"] ?? "ar";
        if (Lang != "ar" && Lang != "en") Lang = "ar";
    }
}
