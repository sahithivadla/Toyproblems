function countBs(str)
{
    var count=0
    for(let i=0;i<str.length;i++)
    {
        if(str[i] === 'B')
        {
            count++
        }
    }
    return count
}

a = countBs("BaBb")
console.log(a)

function countChar(str , str1)
{
    var count=0
    for(let i=0;i<str.length;i++)
    {
        if(str[i] === str1)
        {
            count++
        }
    }
    return count
}

b= countChar("sahithi","i")
console.log(b)








