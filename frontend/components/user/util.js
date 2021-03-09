export const isEmpty = (obj)=>{
    for(const property in obj) if(obj.hasOwnProperty(property))return false
    return true;
}