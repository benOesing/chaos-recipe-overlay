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
    console.log(filterData[0] + '\n' + filterData[1]);
    for (var i = 0; i < filterData.length; i++) {
        if (filterData[i].toLowerCase().includes("# chaos recipe")) {
            var itemType = filterData[i].split(" ")[3].trim();
            if (hideInFilter.indexOf("" + itemType) > -1) {
                filterData[i + 1] = "Hide";
            } else {
                filterData[i + 1] = "Show";
            }
            i++;
        }
    }
    fs.writeFileSync(dirPath + 'chaos_items_filter.filter', filterData.join('\n'));

    const mainFilterData = fs.readFileSync(mainFilterPath, 'utf8').split('\n');
    mainFilterData.unshift("## End of chaos recipe lines. Visit github.com/benOesing");
    for (var i = filterData.length - 1; i >= 0; i--) {
        mainFilterData.unshift(filterData[i]);
    }
    mainFilterData.unshift("## Start of chaos recipe lines. Visit github.com/benOesing");
    var filterName = mainFilterPath.split(".")[0];
    mainFilterPath = filterName + "_chaos.filter";
    fs.writeFileSync(mainFilterPath, mainFilterData.join('\n'));
};