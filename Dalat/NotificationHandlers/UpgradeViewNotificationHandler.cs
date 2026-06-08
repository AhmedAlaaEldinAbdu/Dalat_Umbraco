using Umbraco.Cms.Core.Events;
using Umbraco.Cms.Core.Notifications;

namespace Dalat.NotificationHandlers;

/// <summary>
/// Handles startup issues related to Umbraco upgrade views
/// </summary>
public class UpgradeViewNotificationHandler : INotificationHandler<UmbracoApplicationStartingNotification>
{
    private readonly ILogger<UpgradeViewNotificationHandler> _logger;

    public UpgradeViewNotificationHandler(ILogger<UpgradeViewNotificationHandler> logger)
    {
        _logger = logger;
    }

    public void Handle(UmbracoApplicationStartingNotification notification)
    {
        _logger.LogInformation("Umbraco application starting - handling upgrade view resolution");
    }
}
