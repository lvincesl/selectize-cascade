
/**
 * 
 * @param {*} parent 
 * @param {*} child 
 * @param {*} url 
 */
function selectizeCascade(parent, child, url) 
{
    var timeOUt;    
    
    url = url.replace(":parentId:", parent.val());

    var setChildOptions = function (callback)
    {
        clearTimeout(timeOUt);
    
        $.ajax({
            type: 'GET',
            url: url,
            success: function(data)
            {
                callback(JSON.parse(data));
            }
        });
  
        child.data('selectize').enable();
    };

    
    /* Clear child options */
    child.data('selectize').disable();
    child.data('selectize').clearOptions();

    if (!parent.val().length) return;
    child.selectize({
        loadingClass: 'selectizeLoading'
    });

    child.data('selectize').load(function (callback) { timeOut = setTimeout(setChildOptions, 500, callback); });
}