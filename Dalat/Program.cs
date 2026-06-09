using Umbraco.Forms;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddComposers()
    .Build();

// Register MVC controllers so /SetLang is handled before Umbraco routing
builder.Services.AddControllersWithViews();

WebApplication app = builder.Build();

await app.BootUmbracoAsync();

// Map MVC controller routes BEFORE Umbraco so Umbraco doesn't swallow /SetLang
app.MapControllers();

app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
