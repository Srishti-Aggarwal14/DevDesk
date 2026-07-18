// ===============================
// Browser Notifications
// ===============================

// Ask Permission
function requestNotificationPermission() {

    if (!("Notification" in window)) {
        return;
    }

    if (Notification.permission === "default") {

        Notification.requestPermission();

    }

}

// Show Notification
function showNotification(title, body) {

    if (!("Notification" in window)) {
        return;
    }

    if (Notification.permission === "granted") {

        new Notification(title, {
            body: body,
            icon: "assets/images/logo.png"   // optional
        });

    }

}

// Initialize
requestNotificationPermission();