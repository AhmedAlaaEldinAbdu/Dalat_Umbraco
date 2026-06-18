using Umbraco.Forms.Core;
using Umbraco.Forms.Core.Enums;
using Umbraco.Forms.Core.Models;

namespace Dalat.FieldTypes;

public class GregorianDateFieldType : FieldType
{
    public GregorianDateFieldType()
    {
        Id            = new Guid("a3f7b2c1-4d58-4e9a-bc10-2f3d6e8a1c05");
        Name          = "GregorianDate";
        Description   = "Renders a Gregorian (HTML5) date picker — no Hijri calendar.";
        Icon          = "icon-calendar";
        DataType      = FieldDataType.String;
        SortOrder     = 21;
        SupportsRegex = false;
    }

    public override string GetDesignView() =>
        "~/Views/Partials/Forms/FieldTypes/FieldType.GregorianDate.DesignView.html";

    public override IEnumerable<object> ProcessSubmittedValue(
        Field field,
        IEnumerable<object> postedValues,
        HttpContext context)
    {
        // Read the value directly from the form post using the field alias
        var raw = context.Request.Form[field.Alias].ToString();

        if (string.IsNullOrWhiteSpace(raw))
            return Enumerable.Empty<object>();

        // Accept both dd/MM/yyyy (jQuery UI) and yyyy-MM-dd (HTML5 native)
        if (DateOnly.TryParseExact(raw, new[] { "dd/MM/yyyy", "yyyy-MM-dd", "d/M/yyyy" },
                System.Globalization.CultureInfo.InvariantCulture,
                System.Globalization.DateTimeStyles.None, out var date))
        {
            return new object[] { date.ToString("dd/MM/yyyy") };
        }

        return new object[] { raw };
    }
}
