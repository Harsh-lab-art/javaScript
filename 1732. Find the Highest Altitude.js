var largestAltitude = function(gain) 
{
    let at=0;
    let hst=0;
    for(let i=0;i<gain.length;i++)
    {
        at=at+gain[i];
        if(at>hst)
        {
            hst=at;
        }
    }
    return hst;
};
