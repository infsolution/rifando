export type User={
    name: string;
    email: string;
    avatar_url: string;
}
export type SignInData={
    email: string;
    password:string
} 
export type AuthContextType={
    isAuthenticated: boolean;
    user: User|null;
    signIn:(data: {[x:string]:any})=>Promise<void>
    logout:()=>Promise<void>
}

export type UserData={
    email:string
}


