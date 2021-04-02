export interface IUser{
    id:string;
    firstName:string;
    lastName:string;
    picture:string;
}

export interface IPost{
    id:string;
    text:string;
    image:string;
    likes:number;
    link:string;
    owner:IUser;
}