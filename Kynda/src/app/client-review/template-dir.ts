export interface Template{
    name:string;
    ref:string;
    rev:Boolean;
}

export const TEMPLATES : Template[] =[
    {name: "template 1", ref: "../../assets/templates/templateA.html", rev:true},
    {name: "template 2", ref: "../../assets/templates/templateB.html", rev:true},
    {name: "template 3", ref: "../../assets/templates/templateA.html", rev:true},
    {name: "template 4", ref: "../../assets/templates/templateB.html", rev:true},
    {name: "template 5", ref: "../../assets/templates/templateA.html", rev:true},
    {name: "template 6", ref: "../../assets/templates/templateB.html", rev:true},
    {name: "template 7", ref: "../../assets/templates/templateA.html", rev:true},
    {name: "template 8", ref: "../../assets/templates/templateB.html", rev:true}
]