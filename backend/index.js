const express = require('express')
const cors=require("cors")
const json2html=require("node-json2html")
const mysql=require("mysql")
const liTemplate = {
    "<>": "li",
    html: [
      { "<>": "a", class: "dropdown-item", href: "#", text: "${dropdownItem}" },
    ],
  };
  
  const liValue=[
      {
      dropdownItem:'Blog'
  }, {
      dropdownItem:'About Us'
  }, {
      dropdownItem:'Contuct Us'
  }
  ]
  const li=json2html.render(liValue, liTemplate)
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

const data=json2html.render(navval, nav[0])
var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'builder'
});
con.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});
  const app=express();

  app.use(cors({
    origin:'*'
  }));

  app.get('/nav', (req, res)=>{
    res.send(data)
  });
app.get('/new', (req, res)=>{
  con.query("INSERT INTO `components` (`components`) VALUES ('');",(err, rows)=>{
    if(err){
      res.send(err);
    }
    else{
      con.query('SELECT * from components WHERE id=(SELECT MAX(id) from components)',(err, rows)=>{
        if(err){
          res.send(err)
        }
        else{
          res.send(rows[0])
        }
      })
    }
  })
  
});
app.get('/list', (req, res)=>{
  con.query('SELECT * from components', (err, rows)=>{
    if(err){
      res.send(err);
    }
    else{
      res.send(rows)
    }
  })
})
  app.listen(8000);
  