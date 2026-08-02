
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
            title: "L01 · Course organisation, diagnostic and calculus review",
            start: "2026-09-23T14:30:00",
            end: "2026-09-23T17:30:00",
            extendedProps: {
                module: "Preparatory bridge",
                description:
                    "Course structure, assessment transparency, diagnostic activity, notation, functions, limits, derivatives and integrals."
            }
        },
        {
            id: "lesson-02",
            title: "L02 · Linear algebra, probability and notation",
            start: "2026-09-24T14:30:00",
            end: "2026-09-24T17:30:00",
            extendedProps: {
                module: "Preparatory bridge",
                description:
                    "Vectors, matrices, row-by-column multiplication, linear independence, probability, expectation and variance."
            }
        },
        {
            id: "lesson-03",
            title: "L03 · Metric spaces, distances and convergence",
            start: "2026-09-30T14:30:00",
            end: "2026-09-30T17:30:00",
            extendedProps: {
                module: "Module 1 · Functional analysis",
                description:
                    "Metrics, balls, open and closed sets, sequences, convergence and Cauchy sequences."
            }
        },
        {
            id: "lesson-04",
            title: "L04 · Completeness, compactness and Baire category",
            start: "2026-10-01T14:30:00",
            end: "2026-10-01T17:30:00",
            extendedProps: {
                module: "Module 1 · Functional analysis",
                description:
                    "Complete spaces, contraction principle, compactness, Heine–Borel theorem and Baire category theorem."
            }
        },
        {
            id: "lesson-05",
            title: "L05 · Normed, Banach and Hilbert spaces",
            start: "2026-10-07T14:30:00",
            end: "2026-10-07T17:30:00",
            extendedProps: {
                module: "Module 1 · Functional analysis",
                description:
                    "Norms, Hölder and Minkowski inequalities, sequence and function spaces, Banach and Hilbert geometry, projection and Bessel inequality."
            }
        },
        {
            id: "lesson-06",
            title: "L06 · Sigma-algebras, Borel sets and measures",
            start: "2026-10-08T14:30:00",
            end: "2026-10-08T17:30:00",
            extendedProps: {
                module: "Module 2 · Measure and Fourier analysis",
                description:
                    "Sigma-algebras, generated sigma-algebras, Borel sets, measures and measurable functions."
            }
        },
        {
            id: "lesson-07",
            title: "L07 · Lebesgue integration, convergence and Lp spaces",
            start: "2026-10-14T14:30:00",
            end: "2026-10-14T17:30:00",
            extendedProps: {
                module: "Module 2 · Measure and Fourier analysis",
                description:
                    "Lebesgue integral, equivalence classes, MCT, Fatou, DCT, Fubini–Tonelli and Lp spaces."
            }
        },
        {
            id: "lesson-08",
            title: "L08 · Fourier series, transform, convolution and FFT",
            start: "2026-10-15T14:30:00",
            end: "2026-10-15T17:30:00",
            extendedProps: {
                module: "Module 2 · Measure and Fourier analysis",
                description:
                    "Trigonometric polynomials, Fourier series, Fourier transform, Plancherel theorem, convolution and FFT."
            }
        },
        {
            id: "lesson-09",
            title: "L09 · Probability spaces, random variables and moments",
            start: "2026-10-21T14:30:00",
            end: "2026-10-21T17:30:00",
            extendedProps: {
                module: "Module 3 · Probability",
                description:
                    "Probability spaces, random variables, distributions, expectation, Jensen inequality, variance, covariance and correlation."
            }
        },
        {
            id: "lesson-10",
            title: "L10 · Joint laws, conditioning and Radon–Nikodym",
            start: "2026-10-22T14:30:00",
            end: "2026-10-22T17:30:00",
            extendedProps: {
                module: "Module 3 · Probability",
                description:
                    "Random vectors, Cholesky decomposition, independence, Fubini, conditional distributions, conditional expectation, Bayes and Radon–Nikodym."
            }
        },
        {
            id: "lesson-11",
            title: "L11 · Convergence, LLN, CLT and characteristic functions",
            start: "2026-10-28T14:30:00",
            end: "2026-10-28T17:30:00",
            extendedProps: {
                module: "Module 3 · Probability",
                description:
                    "Modes of convergence, Markov inequality, law of large numbers, central limit theorem, characteristic functions, inversion and Lévy continuity."
            }
        },
        {
            id: "lesson-12",
            title: "L12 · Processes, filtrations and martingales",
            start: "2026-10-29T14:30:00",
            end: "2026-10-29T17:30:00",
            extendedProps: {
                module: "Module 4 · Stochastic processes",
                description:
                    "Process laws, finite-dimensional distributions, measurable processes, filtrations, adaptedness, predictability and martingales."
            }
        },
        {
            id: "lesson-13",
            title: "L13 · Markov, Feller and Kolmogorov dynamics",
            start: "2026-11-04T14:30:00",
            end: "2026-11-04T17:30:00",
            extendedProps: {
                module: "Module 4 · Stochastic processes",
                description:
                    "Markov and Feller properties, Chapman–Kolmogorov equation, semigroups, generators and forward/backward Kolmogorov equations."
            }
        },
        {
            id: "lesson-14",
            title: "L14 · Brownian motion, Poisson processes and stopping",
            start: "2026-11-05T14:30:00",
            end: "2026-11-05T17:30:00",
            extendedProps: {
                module: "Module 4 · Stochastic processes",
                description:
                    "Brownian motion, Wiener space, Brownian martingales, Poisson processes, stopping times and martingale classes."
            }
        },
        {
            id: "lesson-15",
            title: "L15 · Variation, Riemann–Stieltjes and semimartingales",
            start: "2026-11-11T14:30:00",
            end: "2026-11-11T17:30:00",
            extendedProps: {
                module: "Module 5 · Stochastic integration",
                description:
                    "Total and p-variation, Riemann–Stieltjes integration, finite-variation processes, semimartingales and Doob decomposition."
            }
        },
        {
            id: "lesson-16",
            title: "L16 · Quadratic variation and stochastic integration",
            start: "2026-11-12T14:30:00",
            end: "2026-11-12T17:30:00",
            extendedProps: {
                module: "Module 5 · Stochastic integration",
                description:
                    "Quadratic variation, covariation, indicator and simple integrands, Itô isometry, L2 and local L2 extensions."
            }
        },
        {
            id: "lesson-17",
            title: "L17 · Itô processes and Itô formula",
            start: "2026-11-18T14:30:00",
            end: "2026-11-18T17:30:00",
            extendedProps: {
                module: "Module 5 · Stochastic integration",
                description:
                    "Itô processes, one- and multi-dimensional Itô formula, product rule, integration by parts and Lévy characterisation."
            }
        },
        {
            id: "lesson-18",
            title: "L18 · Measure changes and exponential martingales",
            start: "2026-11-19T14:30:00",
            end: "2026-11-19T17:30:00",
            extendedProps: {
                module: "Module 6 · Measure changes and SDEs",
                description:
                    "Absolute continuity, equivalent measures, density processes, conditional Bayes, stochastic exponentials and integrability conditions."
            }
        },
        {
            id: "lesson-19",
            title: "L19 · Girsanov and martingale representation",
            start: "2026-11-25T14:30:00",
            end: "2026-11-25T17:30:00",
            extendedProps: {
                module: "Module 6 · Measure changes and SDEs",
                description:
                    "Girsanov theorem, drift transformation, Brownian motion under the new measure and representation of Brownian martingales."
            }
        },
        {
            id: "lesson-20",
            title: "L20 · SDEs and Feynman–Kac formulas",
            start: "2026-11-26T14:30:00",
            end: "2026-11-26T17:30:00",
            extendedProps: {
                module: "Module 6 · Measure changes and SDEs",
                description:
                    "Stochastic differential equations, existence and uniqueness, elementary solutions, simulation, generators and Feynman–Kac formulas."
            }
        },
        {
            id: "lesson-21",
            title: "L21 · Mock examination, correction and error clinic",
            start: "2026-12-02T14:30:00",
            end: "2026-12-02T17:30:00",
            extendedProps: {
                module: "Final consolidation",
                description:
                    "Integrated programme map, complete mock written examination, detailed correction and review of recurring errors. No new topic."
            }
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
        initialDate: "2026-09-23",
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
            start: "2026-09-21",
            end: "2026-12-04"
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
