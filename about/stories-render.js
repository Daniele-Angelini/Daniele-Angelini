(function () {
    "use strict";

    function isInsideAboutFolder() {
        return window.location.pathname.includes("/about/");
    }

    function resolvePath(path) {
        if (!path) return "";
        if (/^(https?:)?\/\//.test(path) || path.startsWith("#")) return path;
        return isInsideAboutFolder() ? "../" + path : path;
    }

    function formatDate(isoDate) {
        if (!isoDate) return "";
        const date = new Date(isoDate + "T00:00:00");
        if (Number.isNaN(date.getTime())) return isoDate;
        return date.toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" });
    }

    function createStoryCard(story) {
        const article = document.createElement("article");
        article.className = "story-card";
        article.dataset.category = story.category || "Notes";

        const imageWrap = document.createElement("a");
        imageWrap.className = "story-card-image";
        imageWrap.href = resolvePath(story.url);

        if (story.image) {
            const image = document.createElement("img");
            image.src = resolvePath(story.image);
            image.alt = story.imageAlt || story.title || "Story cover image";
            image.loading = "lazy";
            imageWrap.appendChild(image);
        } else {
            const placeholder = document.createElement("span");
            placeholder.textContent = story.category || "Story";
            imageWrap.appendChild(placeholder);
        }

        const body = document.createElement("div");
        body.className = "story-card-body";

        const meta = document.createElement("p");
        meta.className = "story-card-meta";
        meta.textContent = [story.category, formatDate(story.date)].filter(Boolean).join(" · ");

        const title = document.createElement("h2");
        const titleLink = document.createElement("a");
        titleLink.href = resolvePath(story.url);
        titleLink.textContent = story.title || "Untitled story";
        title.appendChild(titleLink);

        const excerpt = document.createElement("p");
        excerpt.className = "story-card-excerpt";
        excerpt.textContent = story.excerpt || "";

        const read = document.createElement("a");
        read.className = "story-card-link";
        read.href = resolvePath(story.url);
        read.textContent = "Read story →";

        body.append(meta, title, excerpt, read);
        article.append(imageWrap, body);
        return article;
    }

    function renderStories(container) {
        const allStories = Array.isArray(window.siteStories) ? window.siteStories : [];
        const stories = allStories
            .filter(story => story.published)
            .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

        const limit = Number(container.dataset.storiesLimit || 0);
        const shownStories = limit > 0 ? stories.slice(0, limit) : stories;

        container.innerHTML = "";
        shownStories.forEach(story => container.appendChild(createStoryCard(story)));

        const emptyMessage = document.querySelector("[data-empty-stories-message]");
        if (emptyMessage) emptyMessage.hidden = shownStories.length > 0;

        return stories;
    }

    function setupFilters(container, stories) {
        const buttons = Array.from(document.querySelectorAll("[data-story-filter]"));
        if (!buttons.length) return;

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const selected = button.dataset.storyFilter;
                buttons.forEach(btn => btn.classList.toggle("is-active", btn === button));

                const cards = Array.from(container.querySelectorAll(".story-card"));
                let visibleCount = 0;

                cards.forEach(card => {
                    const match = selected === "all" || card.dataset.category === selected;
                    card.hidden = !match;
                    if (match) visibleCount += 1;
                });

                const emptyMessage = document.querySelector("[data-empty-stories-message]");
                if (emptyMessage) {
                    if (stories.length === 0) {
                        emptyMessage.textContent = "No stories have been published yet.";
                        emptyMessage.hidden = false;
                    } else {
                        emptyMessage.textContent = "No stories in this category yet.";
                        emptyMessage.hidden = visibleCount > 0;
                    }
                }
            });
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const containers = Array.from(document.querySelectorAll("[data-stories-list]"));
        containers.forEach(container => {
            const stories = renderStories(container);
            setupFilters(container, stories);
        });
    });
})();