function getGreeting(hour) {
    if (hour >= 5 && hour <= 11) {
        return "Good Morning";
    } else if (hour >= 12 && hour <= 16) {
        return "Good Afternoon";
    } else if (hour >= 17 && hour <= 20) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
}
