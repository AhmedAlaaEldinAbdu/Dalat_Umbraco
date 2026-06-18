using Dalat.FieldTypes;
using Umbraco.Cms.Core.Composing;
using Umbraco.Forms.Core.Providers;

namespace Dalat.Composers;

public class FormsFieldTypesComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.WithCollectionBuilder<FieldCollectionBuilder>()
               .Add<GregorianDateFieldType>();
    }
}
