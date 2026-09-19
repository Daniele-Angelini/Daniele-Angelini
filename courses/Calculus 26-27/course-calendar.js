
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
        },
        {
            id: "lesson-06",
            title: "L06",
            start: "2026-09-28T16:00:00",
            end: "2026-09-28T18:00:00"
        },
        {
            id: "lesson-07",
            title: "L07",
            start: "2026-09-30T14:00:00",
            end: "2026-09-30T16:00:00"
        },
        {
            id: "lesson-08",
            title: "L08",
            start: "2026-10-02T18:00:00",
            end: "2026-10-02T20:00:00"
        },
        {
            id: "lesson-09",
            title: "L09",
            start: "2026-10-05T16:00:00",
            end: "2026-10-05T18:00:00"
        },
        {
            id: "lesson-10",
            title: "L10",
            start: "2026-10-07T14:00:00",
            end: "2026-10-07T16:00:00"
        },
        {
            id: "lesson-11",
            title: "L11",
            start: "2026-10-09T18:00:00",
            end: "2026-10-09T20:00:00"
        },
        {
            id: "lesson-12",
            title: "L12",
            start: "2026-10-12T16:00:00",
            end: "2026-10-12T18:00:00"
        },
        {
            id: "lesson-13",
            title: "L13",
            start: "2026-10-14T14:00:00",
            end: "2026-10-14T16:00:00"
        },
        {
            id: "lesson-14",
            title: "L14",
            start: "2026-10-16T18:00:00",
            end: "2026-10-16T20:00:00"
        },
        {
            id: "lesson-15",
            title: "L15",
            start: "2026-10-19T16:00:00",
            end: "2026-10-19T18:00:00"
        },
        {
            id: "lesson-16",
            title: "L16",
            start: "2026-10-21T14:00:00",
            end: "2026-10-21T16:00:00"
        },
        {
            id: "lesson-17",
            title: "L17",
            start: "2026-10-23T18:00:00",
            end: "2026-10-23T20:00:00"
        },
        {
            id: "lesson-18",
            title: "L18",
            start: "2026-10-26T16:00:00",
            end: "2026-10-26T18:00:00"
        },
        {
            id: "lesson-19",
            title: "L19",
            start: "2026-10-28T14:00:00",
            end: "2026-10-28T16:00:00"
        },
        {
            id: "lesson-20",
            title: "L20",
            start: "2026-10-30T18:00:00",
            end: "2026-10-30T20:00:00"
        },
        {
            id: "lesson-21",
            title: "L21",
            start: "2026-11-02T16:00:00",
            end: "2026-11-02T18:00:00"
        },
        {
            id: "lesson-22",
            title: "L22",
            start: "2026-11-04T14:00:00",
            end: "2026-11-04T16:00:00"
        },
        {
            id: "lesson-23",
            title: "L23",
            start: "2026-11-06T18:00:00",
            end: "2026-11-06T20:00:00"
        },
        {
            id: "lesson-24",
            title: "L24",
            start: "2026-11-09T16:00:00",
            end: "2026-11-09T18:00:00"
        },
        {
            id: "lesson-25",
            title: "L25",
            start: "2026-11-11T14:00:00",
            end: "2026-11-11T16:00:00"
        },
        {
            id: "lesson-26",
            title: "L26",
            start: "2026-11-13T18:00:00",
            end: "2026-11-13T20:00:00"
        },
        {
            id: "lesson-27",
            title: "L27",
            start: "2026-11-16T16:00:00",
            end: "2026-11-16T18:00:00"
        },
        {
            id: "lesson-28",
            title: "L28",
            start: "2026-11-18T14:00:00",
            end: "2026-11-18T16:00:00"
        },
        {
            id: "lesson-29",
            title: "L29",
            start: "2026-11-20T18:00:00",
            end: "2026-11-20T20:00:00"
        },
        {
            id: "lesson-30",
            title: "L30",
            start: "2026-11-23T16:00:00",
            end: "2026-11-23T18:00:00"
        },
        {
            id: "lesson-31",
            title: "L31",
            start: "2026-11-25T14:00:00",
            end: "2026-11-25T16:00:00"
        },
        {
            id: "lesson-32",
            title: "L32",
            start: "2026-11-27T18:00:00",
            end: "2026-11-27T20:00:00"
        },
        {
            id: "lesson-33",
            title: "L33",
            start: "2026-11-30T16:00:00",
            end: "2026-11-30T18:00:00"
        },
        {
            id: "lesson-34",
            title: "L34",
            start: "2026-12-02T14:00:00",
            end: "2026-12-02T16:00:00"
        },
        {
            id: "lesson-35",
            title: "L35",
            start: "2026-12-04T18:00:00",
            end: "2026-12-04T20:00:00"
        },
        {
            id: "lesson-36",
            title: "L36",
            start: "2026-12-09T18:00:00",
            end: "2026-12-09T20:00:00"
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
