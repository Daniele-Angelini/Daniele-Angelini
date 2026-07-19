/*
 * Mathematical Methods for Finance 25/26
 * Interactive lesson calendar
 */

const courseLessonEvents = [
    {
        "title": "Lecture 1",
        "start": "2026-02-23T16:00:00",
        "end": "2026-02-23T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 2",
        "start": "2026-02-24T16:00:00",
        "end": "2026-02-24T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 3",
        "start": "2026-03-02T16:00:00",
        "end": "2026-03-02T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 4",
        "start": "2026-03-03T16:00:00",
        "end": "2026-03-03T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 5",
        "start": "2026-03-05T14:00:00",
        "end": "2026-03-05T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 6",
        "start": "2026-03-09T16:00:00",
        "end": "2026-03-09T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 7",
        "start": "2026-03-12T14:00:00",
        "end": "2026-03-12T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 8",
        "start": "2026-03-16T16:00:00",
        "end": "2026-03-16T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 9",
        "start": "2026-03-17T16:00:00",
        "end": "2026-03-17T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 10",
        "start": "2026-03-19T14:00:00",
        "end": "2026-03-19T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 11",
        "start": "2026-03-24T16:00:00",
        "end": "2026-03-24T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 12",
        "start": "2026-03-26T14:00:00",
        "end": "2026-03-26T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 13",
        "start": "2026-03-30T16:00:00",
        "end": "2026-03-30T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 14",
        "start": "2026-03-31T16:00:00",
        "end": "2026-03-31T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 15",
        "start": "2026-04-13T16:00:00",
        "end": "2026-04-13T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 16",
        "start": "2026-04-14T16:00:00",
        "end": "2026-04-14T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 17",
        "start": "2026-04-16T14:00:00",
        "end": "2026-04-16T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 18",
        "start": "2026-04-20T16:00:00",
        "end": "2026-04-20T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 29",
        "start": "2026-04-21T16:00:00",
        "end": "2026-04-21T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 20",
        "start": "2026-04-23T14:00:00",
        "end": "2026-04-23T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 21",
        "start": "2026-04-27T16:00:00",
        "end": "2026-04-27T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 22",
        "start": "2026-04-28T16:00:00",
        "end": "2026-04-28T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 23",
        "start": "2026-04-30T14:00:00",
        "end": "2026-04-30T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
        {
        "title": "Lecture 24",
        "start": "2026-05-04T16:00:00",
        "end": "2026-05-04T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 25",
        "start": "2026-05-05T16:00:00",
        "end": "2026-05-05T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 26",
        "start": "2026-05-07T14:00:00",
        "end": "2026-05-07T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
        {
        "title": "Lecture 27",
        "start": "2026-05-11T16:00:00",
        "end": "2026-05-11T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 28",
        "start": "2026-05-12T16:00:00",
        "end": "2026-05-12T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 29",
        "start": "2026-05-14T14:00:00",
        "end": "2026-05-14T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
        {
        "title": "Lecture 30",
        "start": "2026-05-18T16:00:00",
        "end": "2026-05-18T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 31",
        "start": "2026-05-19T16:00:00",
        "end": "2026-05-19T18:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
    {
        "title": "Lecture 32",
        "start": "2026-05-21T14:00:00",
        "end": "2026-05-21T16:00:00",
        "allDay": false,
        "extendedProps": {
            "location": "Aula 1"
        }
    },
];

const courseCalendarInitialDate = "2026-02-23";

function localDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

function showCalendarError(calendarElement, message) {
    calendarElement.innerHTML = `
        <p class="calendar-error">
            ${message}
        </p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const calendarElement = document.getElementById("course-calendar");

    if (!calendarElement) {
        return;
    }

    if (
        typeof FullCalendar === "undefined" ||
        typeof FullCalendar.Calendar === "undefined"
    ) {
        showCalendarError(
            calendarElement,
            "The calendar library could not be loaded. Reload the page or check the internet connection."
        );
        return;
    }

    const lessonDates = new Set(
        courseLessonEvents.map((event) => event.start.slice(0, 10))
    );

    try {
        calendarElement.innerHTML = "";

        const calendar = new FullCalendar.Calendar(calendarElement, {
            themeSystem: "monarch",
            locale: "en-gb",
            timeZone: "local",

            initialView: "dayGridMonth",
            initialDate: courseCalendarInitialDate,
            firstDay: 1,

            height: "auto",
            expandRows: true,
            nowIndicator: true,
            navLinks: true,
            dayMaxEvents: false,
            allDaySlot: false,

            slotMinTime: "08:00:00",
            slotMaxTime: "20:00:00",
            scrollTime: "10:00:00",

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

            eventDisplay: "block",
            displayEventTime: true,
            displayEventEnd: false,

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

            dayCellDidMount(info) {
                if (lessonDates.has(localDateKey(info.date))) {
                    info.el.classList.add("has-course-lesson");
                }
            },

            eventDidMount(info) {
                const location = info.event.extendedProps.location;
                const start = info.event.start
                    ? info.event.start.toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                    : "";

                const end = info.event.end
                    ? info.event.end.toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                    : "";

                const details = [
                    info.event.title,
                    start && end ? `${start}–${end}` : start,
                    location && location !== "---" ? location : ""
                ].filter(Boolean);

                info.el.setAttribute("title", details.join(" · "));
            }
        });

        calendar.render();

        window.addEventListener("resize", () => {
            calendar.updateSize();
        });
    } catch (error) {
        console.error("FullCalendar initialization error:", error);

        showCalendarError(
            calendarElement,
            "The lesson calendar could not be displayed. Open the browser console for technical details."
        );
    }
});
