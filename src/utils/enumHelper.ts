export function getEnumName(enm: any, index: number){ 
    return Object.entries(enm)
        .filter(([key, value]) => typeof value === "number")
        .filter(([key, value], indx)=>indx === index-1)
        .map(([key, value]) => (key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()))
}