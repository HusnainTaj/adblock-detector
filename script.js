(async function() {
    try
    {
        await fetch('/_prebid.js');
        await fetch('/ad_common.js');
        await fetch('/ad_code.js');
       
        // if the codes reaches here, it means all the fetch calls were successful
        console.log("Adblock Not Active.");
    }
    catch (error)
    {
        // At least one fetch call failed
        console.log("Adblock Detected.");
    }
})();