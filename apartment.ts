
//Class to provide data  related to Washroom Specificartion 
class WashRoomSpecification {
    protected noOftaps:number;
    protected size:number;
    public avaliable_elecronic_equipment:any;
    protected isMirrorAvailable:boolean


    public setWashRoomSpecification(noOftaps:number,size:number,avaliable_elecronic_equipment:any,isMirrorAvailable:boolean):any{
        this.noOftaps =noOftaps;
        this.size = size;
        this.avaliable_elecronic_equipment =avaliable_elecronic_equipment
        this.isMirrorAvailable = isMirrorAvailable
    }
    
    protected getWashRoomSpecification():any{
        return {
        
            'No of Taps' : this.noOftaps,
            'size':this.size,
            'Available Electronic Equipment':this.avaliable_elecronic_equipment,
            'Is Mirror Avaliabel':true

        }


    }
}

// Class to define Room Specification and to provide data for Room and Washroom Specificain . 

class RoomSpecification extends WashRoomSpecification {

    protected isFurnished:boolean;
    protected roomSize:number;
    public avaliable_elecronic_equipment:any;

    public setRoomSpecification(isFurnished:boolean,roomSize:number,avaliable_elecronic_equipment:any):any{
        this.isFurnished =isFurnished;
        this.roomSize = roomSize
        this.avaliable_elecronic_equipment =avaliable_elecronic_equipment
    }


    
    protected getRoomSpecification():any{
        return {
            'is Furnished' : this.isFurnished,
            'size':this.size,
            'Available Electronic Equipment':this.avaliable_elecronic_equipment,
            'Wash Room Specification': super.getWashRoomSpecification()

        }


    }

}

// class to define detail of specific Apartment including detail of Room Specification and Washroom . 

class Apartment extends RoomSpecification {

    private apartmentNumber:number;
    private apartmentSize:number;
    private apartMentType:string;
    public noOfRooms:number;
    public noOfWashroom:number;
    

    constructor(apartmentNumber:number, apartmentSize:number,apartMentType:string )
    {
        super()

        this.apartmentNumber = apartmentNumber;
        this.apartmentSize = apartmentSize;
        this.apartMentType = apartMentType;

        if(apartMentType==='1 BHK'){
            this.noOfRooms = 1
            this.noOfWashroom =1

        }
        else if(apartMentType==='2 BHK'){
            this.noOfRooms = 2
            this.noOfWashroom = 2
        }
        else if(apartMentType==='2 BHK'){
            this.noOfRooms = 3
            this.noOfWashroom = 3


        }
    }

    public modularKitchen():string
    {
        return 'It has Modular Kitchen'
    }



    public getApartmentDetail():any
    {

        return {
            'Apartment Number':this.apartmentNumber,
            'Apartment Type' :this.apartMentType,
            'Apartment Size' :this.apartmentSize + ' Square Feet',
            'Total Number Of Rooms':this.noOfRooms,
            'Total Number Of WashRooms':this.noOfWashroom,
            'Is Kitchen Avaliable':this.modularKitchen(),
            'Room Specification':super.getRoomSpecification()
        }
    }


}

const roomObject = new RoomSpecification()

roomObject.setRoomSpecification(true,200,['AC','TV'])
console.log(roomObject)

const apartmentObject = new Apartment(2, 500,'2 BHK')
 
console.log(apartmentObject.getApartmentDetail())
