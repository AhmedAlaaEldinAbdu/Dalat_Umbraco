using Umbraco.Forms.Core;
using Umbraco.Forms.Core.Enums;

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

    // No custom backoffice settings needed — return empty string to use the default empty template
    public override string GetDesignView() => string.Empty;
}
