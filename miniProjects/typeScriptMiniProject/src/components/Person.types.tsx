// here Name and PersonProps types are created so that other can import it and use it 
// so its maintainable and reusable

export type Name={
    first:string,
    last:string
}

export type PersonProps={
    name:Name,
    messageCount?:number
}