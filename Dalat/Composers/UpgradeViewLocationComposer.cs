using Microsoft.AspNetCore.Mvc.Razor;
using Umbraco.Cms.Core.Composing;

namespace Dalat.Composers;

/// <summary>
/// Composer to add custom view locations for Umbraco backoffice views
/// </summary>
public class UpgradeViewLocationComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.Services.Configure<RazorViewEngineOptions>(options =>
        {
            options.ViewLocationFormats.Add("/Views/umbraco/UmbracoWebsite/{0}.cshtml");
            options.ViewLocationFormats.Add("/Views/Umbraco/UmbracoWebsite/{0}.cshtml");
            options.ViewLocationFormats.Add("/Views/umbraco/{0}.cshtml");
            options.ViewLocationFormats.Add("/Views/Umbraco/{0}.cshtml");
        });
    }
}
