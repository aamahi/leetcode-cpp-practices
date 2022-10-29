/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) 
{
    let times = [];
    for(let i=0; i<plantTime.length; i++)
            times.push([plantTime[i], growTime[i]]);

    times.sort((a,b)=>b[1]-a[1]);

    let t = 0, bt = 0;
    for(let i=0; i<times.length; i++)
    {
        t += times[i][0];
        bt = Math.max(bt, t+times[i][1]);
    }
    return bt;
};