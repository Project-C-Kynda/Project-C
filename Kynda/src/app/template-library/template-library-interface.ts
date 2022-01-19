//THIS FILE IS MOSTLY TEMPORARY AND CAN PROBABLY BE DELETED WHEN WORKING WITH DATABASE
interface template{
    companyid: number;
    name: string;
    templateref: string;
    downloads: number;
    price: number;
}

export const TEMPLATES: template[] = [
    {companyid: 1, name: "template1", templateref: "ref", downloads: 0, price: 69.99},
    {companyid: 1, name:"template2", templateref: "ref", downloads: 21, price: 29.99}
]