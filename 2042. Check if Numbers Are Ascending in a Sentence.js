function areNumbersAscending(s) 
{
    const tokens = s.split(' ');
    let prevNum = -Infinity;
    for (let token of tokens) 
    {
        if (!isNaN(token)) 
        {
            const num = parseInt(token);
            if (num <= prevNum) 
            {
                return false;
            }
            prevNum = num;
        }
    }
    return true;
}
