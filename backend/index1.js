const json2html=require('node-json2html');
const fs=require('fs')
const template={
    '<>':'div',
    'text':'<p>Hello ${name}</p>',
    'class':'text-dark',
    'style':'text-align:center;font-size:2rem'
}
data=[
    {
        name:'Arthur'
    },
    {
        name:'John'
    },
    {
        name:'Sakaja'
    },
    {
        name:'Peter'
    },
    {
        name:'Ken'
    }
]
const html=json2html.render(data, template);
console.log(html)

fs.writeFile('index.html',html,(err)=>{})