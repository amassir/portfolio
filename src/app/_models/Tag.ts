export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'orange');
    static readonly HTML = new Tag('Html', 'pink');
    static readonly JAVA = new Tag('Java', 'green');
    static readonly SQL = new Tag('SQL', 'brown');
    static readonly PHP = new Tag('PHP', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly APIREST = new Tag('API REST', 'blue');


    private constructor(private readonly key: string, public readonly color: string, ){

    }

    toString(){
        return this.key;
    }
}