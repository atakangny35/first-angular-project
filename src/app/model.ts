export class Model {
    name;
    DoList;



    constructor()
    {
        this.name="Çınar";

        this.DoList= [
                    new ToDo("Spor",false),
                    new ToDo("breakfast",true),
                    new ToDo("Pay the bills",false),
                    new ToDo("Study",false),
          ];
    }



}


export class ToDo
{
    description;
    Action;

    constructor(description,Action){
        this.description=description;
        this.Action=Action;
    }

}