var fs = require('fs')

exports.refreshFilter = async (maxSets, chaosRecipe, mainFilterPath) => {
    const dirPath = mainFilterPath.substring(0,mainFilterPath.lastIndexOf("\/")+1);
    const hideInFilter = [];
    Object.keys(chaosRecipe).forEach((resultKey) => {
        const result = chaosRecipe[resultKey];
        if (result.chaosCount >= maxSets) {
            hideInFilter.push(resultKey);
        }
    });
    const filterData = fs.readFileSync(dirPath + 'chaos_items_filter.filter', 'utf8').split('\n');
    for (var i = 0; i < filterData.length; i++) {
        if (filterData[i].toLowerCase().includes("# chaos recipe")) {
            var itemType = filterData[i].split(" ")[3].trim();
            if (hideInFilter.indexOf("" + itemType) > -1) {
                while(filterData[i] && filterData[i].trim() !== ""){ // trim removes whitespace, newlines etc.
                    filterData.splice(i,1);
                }
            }
        }
    }

    const mainFilterData = fs.readFileSync(mainFilterPath, 'utf8').split('\n');
    mainFilterData.unshift("## End of chaos recipe lines. Visit https://github.com/benOesing/chaos-recipe-overlay");
    for (var i = filterData.length - 1; i >= 0; i--) {
        mainFilterData.unshift(filterData[i]);
    }
    mainFilterData.unshift("## Start of chaos recipe lines. Visit https://github.com/benOesing/chaos-recipe-overlay");
    var filterName = mainFilterPath.split(".")[0];
    mainFilterPath = filterName + "_chaos.filter";
    fs.writeFileSync(mainFilterPath, mainFilterData.join('\n'));
};