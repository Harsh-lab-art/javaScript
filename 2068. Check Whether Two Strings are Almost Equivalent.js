var checkAlmostEquivalent = function(word1, word2) 
{
    let freq1=new Array(26).fill(0);
    let freq2=new Array(26).fill(0);
    for(let ch of word1)
    {
        freq1[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    for(let ch of word2)
    {
        freq2[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    for(let i=0;i<26;i++)
    {
        if(Math.abs(freq1[i]-freq2[i])>3)
        {
            return false;
        }
    }
    return true;   
};
