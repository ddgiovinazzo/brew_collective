export const elapsedTime = (dateString)=>{
    const currentDate = new Date()
    const targetTime = new Date(dateString).getTime()
    const elapsedTime = (currentDate.getTime() - targetTime) / 1000
    const currentMonth = (currentDate.getMonth()+1)
    const currentYear = (currentDate.getFullYear())
    
    if(elapsedTime < 60) return 'a few seconds ago'

    else if(elapsedTime < 120) return 'a minute ago'
    else if(elapsedTime < 3600) return `${Math.floor(elapsedTime / 60)} minutes ago`

    else if(elapsedTime < 7200) return `an hour ago`
    else if(elapsedTime < 86400) return `${Math.floor(elapsedTime / 3600)} hours ago`

    else if(elapsedTime < 172800) return `yesterday`
    else if(elapsedTime < 2678400 && [1,3,5,7,8,10,12].includes(currentMonth)) return `${Math.floor(elapsedTime / 86400)} days ago`
    else if(elapsedTime < 2592000 && [11,4,6,9].includes(currentMonth)) return `${Math.floor(elapsedTime / 86400)} days ago`
    else if(elapsedTime < 2505600 && currentYear % 4 === 0) return `${Math.floor(elapsedTime / 86400)} days ago`
    else if(elapsedTime < 2419200 && currentYear % 4 !== 0) return `${Math.floor(elapsedTime / 86400)} days ago`

    else if(elapsedTime < 5356800 && [1,3,5,7,8,10,12].includes(currentMonth)) return `a month ago`
    else if(elapsedTime < 5184000 && [11,4,6,9].includes(currentMonth)) return `a month ago`
    else if(elapsedTime < 5011200 && currentYear % 4 === 0) return `a month ago`
    else if(elapsedTime < 4838400 && currentYear % 4 !== 0) return `a month ago`

    else if(elapsedTime < 31536000) return `${Math.floor(elapsedTime / 2592000)} months ago`

    else if(elapsedTime < 63072000) return `a year ago`

    else if (elapsedTime <= 63072000) return `${Math.floor(elapsedTime / 31536000)} years ago`

    return elapsedTime
}