
/*
 * Mathematical Methods for Finance lesson calendar
 * Academic year 2026/2027
 *
 * 21 lessons:
 * - every Wednesday and Thursday;
 * - 14:30–17:30;
 * - from 23 September to 2 December 2026.
 */

document.addEventListener("DOMContentLoaded", () => {
    const calendarElement = document.getElementById("course-calendar");
    const loadingElement = document.getElementById("calendar-loading");
    const detailsElement = document.getElementById("calendar-event-details");

    if (!calendarElement) {
        return;
    }

    const lessons = [
        {
            id: "lesson-01",
            title: "L01",
            start: "2026-09-16T14:00:00",
            end: "2026-09-16T16:00:00"
        },
        {
            id: "lesson-02",
            title: "L02",
            start: "2026-09-18T18:00:00",
            end: "2026-09-18T20:00:00"
        },
        {
            id: "lesson-03",
            title: "L03",
            start: "2026-09-21T16:00:00",
            end: "2026-09-21T18:00:00"
        },
        {
            id: "lesson-04",
            title: "L04",
            start: "2026-09-23T14:00:00",
            end: "2026-09-23T16:00:00"
        },
        {
            id: "lesson-05",
            title: "L05",
            start: "2026-09-25T18:00:00",
            end: "2026-09-25T20:00:00"
        }
    ];

    const lessonDates = new Set(
        lessons.map((lesson) => lesson.start.slice(0, 10))
    );

    const toLocalIsoDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const formatDateTime = (event) => {
        const formatter = new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Europe/Rome"
        });

        const startText = formatter.format(event.start);
        const endTime = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: "Europe/Rome"
        }).format(event.end);

        return `${startText}–${endTime}`;
    };

    if (typeof FullCalendar === "undefined") {
        if (loadingElement) {
            loadingElement.className = "calendar-error";
            loadingElement.textContent =
                "The interactive calendar could not be loaded. The complete lesson list is available below.";
        }
        return;
    }

    const calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: "dayGridMonth",
        initialDate: "2026-09-16",
        firstDay: 1,
        timeZone: "Europe/Rome",
        height: "auto",
        fixedWeekCount: false,
        showNonCurrentDates: true,
        dayMaxEvents: 2,
        nowIndicator: false,
        editable: false,
        selectable: false,
        eventStartEditable: false,
        eventDurationEditable: false,
        navLinks: false,
        validRange: {
            start: "2026-09-16",
            end: "2026-12-15"
        },
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,listMonth"
        },
        buttonText: {
            today: "Today",
            month: "Month",
            list: "List"
        },
        eventTimeFormat: {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        },
        events: lessons,

        dayCellDidMount(info) {
            const dateKey = toLocalIsoDate(info.date);
            if (lessonDates.has(dateKey)) {
                info.el.classList.add("has-course-lesson");
            }
        },

        eventDidMount(info) {
            const event = info.event;
            const description = event.extendedProps.description || "";
            info.el.setAttribute(
                "title",
                `${event.title} · ${formatDateTime(event)} · ${description}`
            );
            info.el.setAttribute("aria-label", event.title);
        },

        eventClick(info) {
            info.jsEvent.preventDefault();

            if (!detailsElement) {
                return;
            }

            detailsElement.replaceChildren();

            const heading = document.createElement("strong");
            heading.textContent = info.event.title;

            const meta = document.createElement("span");
            meta.textContent =
                `${info.event.extendedProps.module} · ${formatDateTime(info.event)}`;

            const description = document.createElement("p");
            description.textContent =
                info.event.extendedProps.description || "";

            detailsElement.append(heading, meta, description);
        }
    });

    calendar.render();

    if (loadingElement) {
        loadingElement.remove();
    }
});
