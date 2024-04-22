(async function() {
    try
    {
        await fetch('/_prebid.js');
        await fetch('/ad_common.js');
        await fetch('/ad_code.js');
       
        // if the codes reaches here, it means all fetch calls were successful
        console.log("Adblock Not Active.");
        
        gtag('event', 'adsblocked', {
            'value': "no"
        });
    }
    catch (error)
    {
        // At least one fetch call failed
        console.log("Adblock Detected.");

        gtag('event', 'adsblocked', {
            'value': "yes"
        });
    }
})();