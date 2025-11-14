abstract class TakePhotos{
    //variables decleration
    constructor(
        public cameraMode:string,
        public filter:string,
    ){};

    //declare methods name only
    abstract getSepia():void

    //also can write code methods logic
    //also we can override this method
    getReelTime():number{
        return 9;
    }
}

//difference with interface 
//interface can create variables and methods name only;
//abstract class can create variables , methods names and 
//also can write whole logic 

class Instagram1 extends TakePhotos{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter);
    };
    getSepia(): void {
        console.log("speia");
    }
}

const r = new Instagram1("test","test",1);
r.getReelTime();