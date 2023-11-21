export interface TaskProps {
    title: string
    level: number
    description:string
    _id?:string
    status?: string
}

export interface UserProps {
        name?:string
        email?:string
        image?:string
}
