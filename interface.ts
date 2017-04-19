interface Book{
    title:string,
    author:string
}

interface ComicBook extends Book{
    rating:number;
    getAsString:()=>string;
}

let b:Book= {title:'Learning TS',author:'Zeo'};
let b1:ComicBook= {title:'Learning TS',author:'Zeo',rating:4, getAsString:()=> `Title:${this.title}` };

//template string, available ES6
