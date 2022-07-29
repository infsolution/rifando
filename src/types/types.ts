export type User={
    id?:string;
    name: string;
    email: string;
    avatar_url: string;
}
export type SignInData={
    email: string;
    password:string
} 

export type Profile={
    id?:string,
    name:string,
    profile_image?:string,
    user_id:string,
    rating?:number
}

export type AuthContextType={
    profile: Profile|null;
    loged:boolean;
    signIn:(data: {[x:string]:any})=>Promise<void>
    logout:()=>Promise<void>

}

export type UserData={
    email:string
}

export type TPoint={
    id?:number,
    number:number,
    point_image?:string,
    raffle_id:number,
    profile_id?:number,
    paid_out?:boolean,
    value:number,
    draw?:boolean
}
export type Raffle={
    id?:number;
    name:string;
    description?:string;
    draw_date?:string;
    point_value?:number;
    total_points:number;
    total_sold:number
    points?:TPoint[]
}

