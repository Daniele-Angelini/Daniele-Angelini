/*
 * Mathematical Methods for Finance 25/26
 * Interactive lesson calendar
 */

const courseLessonEvents = [

];

const courseCalendarInitialDate = "2026-02-01";

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
