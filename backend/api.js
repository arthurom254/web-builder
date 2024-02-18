const json2html=require('node-json2html');
const fs=require('fs');
const liTemplate = {
  "<>": "li",
  html: [
    { "<>": "a", class: "dropdown-item", href: "#", text: "${dropdownItem}" },
  ],
};

liValue=[
    {
    dropdownItem:'Blog'
}, {
    dropdownItem:'About Us'
}, {
    dropdownItem:'Contuct Us'
}
]
li=json2html.render(liValue, liTemplate)
const navval={
    site:"Atom",
    li:li
}
const nav = [
  {
    "<>": "nav",
    class: "navbar navbar-expand-lg navbar-dark bg-dark p-3",
    html: [
      {
        "<>": "div",
        class: "container-fluid",
        html: [
          { "<>": "a", class: "navbar-brand", href: "#", text: "${site}" },
          {
            "<>": "button",
            class: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarNavDropdown",
            "aria-controls": "navbarNavDropdown",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            html: [{ "<>": "span", class: "navbar-toggler-icon" }],
          },
          {
            "<>": "div",
            class: " collapse navbar-collapse",
            id: "navbarNavDropdown",
            html: [
              {
                "<>": "ul",
                class: "navbar-nav ms-auto ",
                html: [
                  {
                    "<>": "li",
                    class: "nav-item",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2 active",
                        "aria-current": "page",
                        href: "#",
                        text: "Home",
                      },
                    ],
                  },
                  {
                    "<>": "li",
                    class: "nav-item",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2",
                        href: "#",
                        text: "Products",
                      },
                    ],
                  },
                  {
                    "<>": "li",
                    class: "nav-item",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2",
                        href: "#",
                        text: "Pricing",
                      },
                    ],
                  },
                  {
                    "<>": "li",
                    class: "nav-item dropdown",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2 dropdown-toggle",
                        href: "#",
                        id: "navbarDropdownMenuLink",
                        role: "button",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                        text: "Company",
                      },
                      {
                        "<>": "ul",
                        class: "dropdown-menu",
                        "aria-labelledby": "navbarDropdownMenuLink",
                        html: "${li}",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    "<>": "nav",
    class: "navbar navbar-expand-lg navbar-dark bg-dark p-3",
    html: [
      {
        "<>": "div",
        class: "container-fluid",
        html: [
          { "<>": "a", class: "navbar-brand", href: "#", text: "${site}" },
          {
            "<>": "button",
            class: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarNavDropdown",
            "aria-controls": "navbarNavDropdown",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            html: [{ "<>": "span", class: "navbar-toggler-icon" }],
          },
          {
            "<>": "div",
            class: " collapse navbar-collapse",
            id: "navbarNavDropdown",
            html: [
              {
                "<>": "ul",
                class: "navbar-nav ms-auto ",
                html: [
                  {
                    "<>": "li",
                    class: "nav-item",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2 active",
                        "aria-current": "page",
                        href: "#",
                        text: "Home",
                      },
                    ],
                  },
                  {
                    "<>": "li",
                    class: "nav-item",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2",
                        href: "#",
                        text: "Products",
                      },
                    ],
                  },
                  {
                    "<>": "li",
                    class: "nav-item",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2",
                        href: "#",
                        text: "Pricing",
                      },
                    ],
                  },
                  {
                    "<>": "li",
                    class: "nav-item dropdown",
                    html: [
                      {
                        "<>": "a",
                        class: "nav-link mx-2 dropdown-toggle",
                        href: "#",
                        id: "navbarDropdownMenuLink",
                        role: "button",
                        "data-bs-toggle": "dropdown",
                        "aria-expanded": "false",
                        text: "Company",
                      },
                      {
                        "<>": "ul",
                        class: "dropdown-menu",
                        "aria-labelledby": "navbarDropdownMenuLink",
                        html: "${li}",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const navb=json2html.render(navval,nav[0]);

fs.writeFile('nav.html', navb,(err)=>{console.log(err)})

console.log("Done");