export class Pelicula 
{
    private id:string;
    private nombre:string;
    private tipo:string;
    private fechaEstreno:string;
    private cantidadPublico:number;
    private foto:any;
    private actores:any[];


    constructor(nombre:string, tipo:string, fechaEstreno:string, cantidadPublico:number, foto:any, actores:any[],id?:string|undefined)
    {
        this.id = id !== undefined ? id:"";
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.foto = foto;
        this.actores = actores;

    }

    public get ID():string
    {
        return this.id;
    }

    public get Nombre():string
    {
        return this.nombre;
    }

    public get Tipo():string
    {
        return this.tipo;
    }

    public get FechaEstreno():string
    {
        return this.fechaEstreno;
    }

    public get CantidadPublico():number
    {
        return this.cantidadPublico;
    }

    public get Foto():any
    {
        return this.foto;
    }

    public get Actores():any[]
    {
        return this.actores;
    }



}
