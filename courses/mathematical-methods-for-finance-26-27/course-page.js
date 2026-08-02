/*
 * Compact course-page accordion behaviour.
 */

document.addEventListener("DOMContentLoaded", () => {
    const majorPanels = Array.from(
        document.querySelectorAll("details.course-hub-panel")
    );

    const isNarrowScreen = () => window.matchMedia("(max-width: 760px)").matches;

    const openAncestors = (element) => {
        let current = element;
        while (current) {
            if (current.tagName === "DETAILS") {
                current.open = true;
            }
            current = current.parentElement;
        }
    };

    const openPanelById = (id, shouldScroll = true) => {
        const panel = document.getElementById(id);
        if (!panel) return;

        if (panel.tagName === "DETAILS") {
            panel.open = true;
        }
        openAncestors(panel);

        if (shouldScroll) {
            window.requestAnimationFrame(() => {
                panel.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    };

    document.querySelectorAll("[data-open-panel]").forEach((link) => {
        link.addEventListener("click", (event) => {
            const id = link.getAttribute("data-open-panel");
            if (!id) return;
            event.preventDefault();
            openPanelById(id);
            history.replaceState(null, "", `#${id}`);
        });
    });

    document.querySelectorAll("[data-panel-action]").forEach((button) => {
        button.addEventListener("click", () => {
            const action = button.getAttribute("data-panel-action");
            majorPanels.forEach((panel) => {
                panel.open = action === "expand";
            });
        });
    });

    majorPanels.forEach((panel) => {
        panel.addEventListener("toggle", () => {
            if (!panel.open || !isNarrowScreen()) return;
            majorPanels.forEach((otherPanel) => {
                if (otherPanel !== panel) {
                    otherPanel.open = false;
                }
            });
        });
    });

    const revealHashTarget = () => {
        const hash = window.location.hash.slice(1);
        if (!hash) return;
        const target = document.getElementById(hash);
        if (!target) return;
        openAncestors(target);
    };

    revealHashTarget();
    window.addEventListener("hashchange", revealHashTarget);
});
