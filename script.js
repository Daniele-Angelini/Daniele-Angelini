document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (!button || !navigation) {
        return;
    }

    const closeMenu = () => {
        navigation.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    button.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");
        button.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
});
