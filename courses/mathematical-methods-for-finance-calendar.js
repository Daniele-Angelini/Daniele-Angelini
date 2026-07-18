/*
 * Mathematical Methods for Finance 25/26
 * Lesson calendar
 *
 * HOW TO ADD A LESSON
 * Duplicate one of the example objects below and insert:
 *   - title: text shown on the calendar
 *   - start: beginning date and time
 *   - end: ending date and time
 *   - extendedProps.location: classroom or online room
 *
 * Date format:
 * YYYY-MM-DDTHH:MM:SS
 *
 * Example:
 * {
 *     title: "Lecture 1",
 *     start: "2025-10-06T14:00:00",
 *     end: "2025-10-06T16:00:00",
 *     extendedProps: {
 *         location: "Room A"
 *     }
 * }
 */

const courseLessonEvents = [
    /*
    {
        title: "Lecture 1",
        start: "2025-10-06T14:00:00",
        end: "2025-10-06T16:00:00",
        extendedProps: {
            location: "Room A"
        }
    },
    {
        title: "Lecture 2",
        start: "2025-10-08T14:00:00",
        end: "2025-10-08T16:00:00",
        extendedProps: {
            location: "Room A"
        }
    }
    */
];

/*
 * Set this to the month that should be shown when the calendar opens.
 * Once the real lessons are inserted, you can use the date of the
 * first lesson.
 */
const courseCalendarInitialDate = "2025-10-01";

document.addEventListener("DOMContentLoaded", () => {
    const calendarElement = document.getElementById("course-calendar");

    if (!calendarElement || typeof FullCalendar === "undefined") {
        return;
    }

    const calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: "dayGridMonth",
        initialDate: courseCalendarInitialDate,
        firstDay: 1,
        height: "auto",
        nowIndicator: true,
        navLinks: true,
        dayMaxEvents: true,
        allDaySlot: false,
        slotMinTime: "08:00:00",
        slotMaxTime: "20:00:00",
        scrollTime: "08:00:00",

        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
        },

        buttonText: {
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day"
        },

        eventTimeFormat: {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        },

        slotLabelFormat: {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        },

        events: courseLessonEvents,

        eventDidMount(info) {
            const location = info.event.extendedProps.location;

            if (location) {
                info.el.setAttribute(
                    "title",
                    `${info.event.title} — ${location}`
                );
            }
        }
    });

    calendar.render();
});
