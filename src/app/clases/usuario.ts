export class Usuario 
{

    private id:string;
    private email:string;
    private password:string;

    constructor(email:string, password:string, id?:string)
    {
        this.id = id !== undefined?id:"";
        this.email = email;
        this.password = password;
    }

    public get ID():string
    {
        return this.id;
    }

    public get Email():string
    {
        return this.email;
    }

    public get Password():string
    {
        return this.password;
    }

    public guardarLocalStorage():void
    {
        localStorage.setItem("usuario", JSON.stringify(this));
    }

    public static eliminarLocalStorage():void
    {
        localStorage.removeItem("usuario");
    }

    public static obtenerLocalStorage():any
    {
        return localStorage.getItem("usuario") !== null ? JSON.parse(localStorage.getItem("usuario")!): null;
    }

}
