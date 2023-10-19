export class Actor 
{
    private pais:string;
    private nombre:string;
    private apellido:string;
    private usuario:string;
    private numero:string;
    private email:string;
    private direccion1:string;
    private direccion2:string;

    constructor(pais:string, nombre:string, apellido:string, usuario:string, numero:string, email:string, direccion1:string, direccion2?:string|undefined)
    {
        this.pais = pais;
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.numero = numero;
        this.email = email;
        this.direccion1 = direccion1;
        this.direccion2 = direccion2 !== undefined ? direccion2:"";
    }

    public get Pais():string
    {
        return this.pais;
    }

    public get Nombre():string
    {
        return this.nombre;
    }

    public get Apellido():string
    {
        return this.apellido;
    }

    public get Usuario():string
    {
        return this.usuario;
    }

    public get Numero():string
    {
        return this.numero;
    }

    public get Email():string
    {
        return this.email;
    }

    public get Direccion1():string
    {
        return this.direccion1;
    }

    public get Direccion2():string
    {
        return this.direccion2;
    }

}
