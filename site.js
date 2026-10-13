document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SIDEBAR TOGGLE
    ========================= */


    const sidebarToggle = document.getElementById("sidebarToggle");

    if (sidebarToggle) {

        sidebarToggle.addEventListener("click", function () {

            document.body.classList.toggle("sidebar-collapsed");

        });

    }



    /* =========================
       DARK / LIGHT THEME
    ========================= */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("dark-theme");

            if (document.body.classList.contains("dark-theme")) {

                themeIcon.classList.remove("bi-sun-fill");
                themeIcon.classList.add("bi-moon-stars-fill");

            } else {

                themeIcon.classList.remove("bi-moon-stars-fill");
                themeIcon.classList.add("bi-sun-fill");

            }

        });

    }


    /* =========================
       SIDEBAR DROPDOWN
    ========================= */

    const dropdownLinks = document.querySelectorAll(".dropdown-link");

    dropdownLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const parent = this.closest(".sidebar__item");

            if (parent) {
                parent.classList.toggle("open");
            }

        });

    });


    /* =========================
       NESTED DROPDOWN
    ========================= */

    const nestedLinks =
        document.querySelectorAll(".nested-dropdown-link");

    nestedLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const parent = this.closest(".nested-item");

            if (parent) {
                parent.classList.toggle("open");
            }

        });

    });

});


const selectAll = document.getElementById("selectAll");

if (selectAll) {
    selectAll.addEventListener("change", function () {
        document.querySelectorAll('input[type="checkbox"]:not(#selectAll)')
            .forEach(function (checkbox) {
                checkbox.checked = selectAll.checked;
            });
    });
}

/*WHATSAPP*/

document.querySelectorAll(".contact").forEach(function (contact) {

    contact.addEventListener("click", function () {

        // Remove active from all contacts
        document.querySelectorAll(".contact").forEach(function (item) {
            item.classList.remove("active");
        });

        // Add active to clicked contact
        this.classList.add("active");


        // Get contact data
        const name = this.dataset.name;
        const status = this.dataset.status;
        const reply = this.dataset.reply;
        const time = this.dataset.time;
        const image = this.dataset.image;


        // Change header
        document.getElementById("chatName").textContent = name;
        document.getElementById("chatStatus").textContent = status;


        // Change messages
        document.getElementById("messages").innerHTML = `

            <div class="message-row received">

                <img src="${image}">

                <div>

                    <div class="message received-message">
                        ${reply}
                    </div>

                    <div class="message-time">
                        ${time}
                    </div>

                </div>

            </div>

        `;

    });

});



/*VIEWICON*/
document.addEventListener("DOMContentLoaded", function () {

    const password = document.getElementById("password");
    const eye = document.getElementById("showPassword");

    if (!password || !eye) return;

    eye.addEventListener("mousedown", function () {
        password.type = "text";
    });

    eye.addEventListener("mouseup", function () {
        password.type = "password";
    });

    eye.addEventListener("mouseleave", function () {
        password.type = "password";
    });

});

//SIDEBAR HIGHLIGHT


/* SIDEBAR HIGHLIGHT */
document.addEventListener("DOMContentLoaded", function () {

    const sidebar = document.querySelector(".sidebar");

    if (!sidebar) return;

    const currentPath = window.location.pathname
        .replace(/\/+$/, "")
        .toLowerCase();

    const links = sidebar.querySelectorAll(
        "a.sidebar__link, a.sidebar__submenu-link, a.sidebar__nested-link"
    );

    links.forEach(function (link) {

        // Remove active class initially
        link.classList.remove("active");

        let linkPath;

        try {
            linkPath = new URL(link.href, window.location.origin)
                .pathname.replace(/\/+$/, "").toLowerCase();
        } catch (error) {
            return;
        }

        // Highlight the link matching the current page
        if (linkPath === currentPath) {

            link.classList.add("active");

            // Open the parent dropdowns
            let parent = link.parentElement;

            while (parent && parent !== sidebar) {

                if (
                    parent.classList.contains("sidebar__item") ||
                    parent.classList.contains("nested-item")
                ) {
                    parent.classList.add("open");
                }

                parent = parent.parentElement;
            }
        }
    });

});

