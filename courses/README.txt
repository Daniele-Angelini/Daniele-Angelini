MATHEMATICAL METHODS FOR FINANCE — INTERACTIVE CALENDAR

FILES
-----
1. mathematical-methods-for-finance-25-26.html
2. mathematical-methods-for-finance-calendar.js
3. calendar-additions.css

UPLOAD LOCATION
---------------
Upload all three files inside the existing "courses" folder:

courses/
├── mathematical-methods-for-finance-25-26.html
├── mathematical-methods-for-finance-calendar.js
└── calendar-additions.css

The page continues to use:
../style.css
../script.js

ADDING THE LESSONS
------------------
Open mathematical-methods-for-finance-calendar.js and add each lesson inside:

const courseLessonEvents = [
    ...
];

Use this format:

{
    title: "Lecture 1",
    start: "2025-10-06T14:00:00",
    end: "2025-10-06T16:00:00",
    extendedProps: {
        location: "Room A"
    }
}

The calendar initially opens on October 2025. Change:

const courseCalendarInitialDate = "2025-10-01";

to the month of the first real lesson.

IMPORTANT
---------
The calendar libraries are loaded from the official FullCalendar package
through jsDelivr. The calendar therefore requires an internet connection.
