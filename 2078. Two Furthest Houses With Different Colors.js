var maxDistance = function(colors) 
{
    const n=colors.length;
    let maxdist=0;
    for(let i=0;i<n;i++)
    {
        if(colors[i]!==colors[0])
        {
            maxdist=Math.max(maxdist,i);
        }
        if(colors[i]!==colors[n-1])
        {
            maxdist=Math.max(maxdist,n-1-i);
        }
    }
    return maxdist;
};
