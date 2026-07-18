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
    {
        title: "Lecture 1",
        start: "2025-10-15T10:30:00",
        end: "2025-10-15T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 2",
        start: "2025-10-21T10:30:00",
        end: "2025-10-21T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 3",
        start: "2025-10-22T10:30:00",
        end: "2025-10-22T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 4",
        start: "2025-10-28T10:30:00",
        end: "2025-10-28T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 5",
        start: "2025-10-29T10:30:00",
        end: "2025-10-29T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 6",
        start: "2025-11-11T10:30:00",
        end: "2025-11-11T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 7",
        start: "2025-11-12T10:30:00",
        end: "2025-11-12T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 8",
        start: "2025-11-18T10:30:00",
        end: "2025-11-18T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 9",
        start: "2025-11-19T10:30:00",
        end: "2025-11-19T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 10",
        start: "2025-11-25T10:30:00",
        end: "2025-11-25T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 11",
        start: "2025-11-26T10:30:00",
        end: "2025-11-26T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 12",
        start: "2025-11-28T10:30:00",
        end: "2025-11-28T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 13",
        start: "2025-12-02T10:30:00",
        end: "2025-12-02T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 14",
        start: "2025-12-03T10:30:00",
        end: "2025-12-03T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 15",
        start: "2025-12-05T10:30:00",
        end: "2025-12-05T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 16",
        start: "2025-12-09T10:30:00",
        end: "2025-12-09T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 17",
        start: "2025-12-10T10:30:00",
        end: "2025-12-10T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 18",
        start: "2025-12-12T10:30:00",
        end: "2025-12-12T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 19",
        start: "2025-12-16T10:30:00",
        end: "2025-12-16T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 20",
        start: "2025-12-17T10:30:00",
        end: "2025-12-17T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
    {
        title: "Lecture 21",
        start: "2025-12-19T10:30:00",
        end: "2025-12-19T13:30:00",
        extendedProps: {
            location: "---"
        }
    }
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
