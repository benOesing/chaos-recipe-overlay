// Vendor
const { ipcRenderer } = require('electron');
const settings = require('electron-settings');

// Services
const { fetchStashItems } = require('../services/stash-items');
const { aggregateChaosRecipe } = require('../services/chaos-recipe');
const { fetchCurrentLeague } = require('../services/active-leagues');
const { refreshFilter } = require('../services/update-filter');

const refreshChaosRecipe = async () => {
  console.log("Refresh");
  const updateIndicator = (indicatorId, { isDanger, isWarning, chaosCount, regalCount, totalCount }) => {
    const slotElement = document.getElementById(indicatorId);
    const valueElement = slotElement.querySelector('span');

    slotElement.classList.remove('danger');
    slotElement.classList.remove('warning');

    if (isDanger) {
      slotElement.classList.add('danger');
    } else if (isWarning) {
      slotElement.classList.add('warning');
    }

    valueElement.textContent = chaosCount + "/" + totalCount;

  };
  console.log("   UI-Colors Done");

  const { league: leagueSetting, account, sessionId, stashIds } = settings.get('user');
  const league = await fetchCurrentLeague(leagueSetting);
  console.log("   League-Fetch Done");

  try {
    const stashItems = await fetchStashItems(stashIds, { league, account, sessionId });
    console.log("   Stash-Fetch Done");
    const chaosRecipe = aggregateChaosRecipe(stashItems);

    updateIndicator('hand', chaosRecipe.hand);
    updateIndicator('bodyArmour', chaosRecipe.bodyArmour);
    updateIndicator('helmet', chaosRecipe.helmet);
    updateIndicator('glove', chaosRecipe.glove);
    updateIndicator('boot', chaosRecipe.boot);
    updateIndicator('belt', chaosRecipe.belt);
    updateIndicator('ring', chaosRecipe.ring);
    updateIndicator('amulet', chaosRecipe.amulet);
    console.log("   UI-Values Done");

    // Not really the place to do this, but here we have access to everything we need
    refreshFilter(settings.get('user.maxSets'), chaosRecipe, settings.get('user.mainFilter'));
    console.log("   Filter Done");

  } catch (error) {
    console.log("Overlay poll error", error);
  }
};

ipcRenderer.on('forceChaosRecipeRefresh', () => refreshChaosRecipe());
setInterval(() => refreshChaosRecipe(), settings.get('overlay.refreshTime') * 1000 || 30000);
refreshChaosRecipe();

const ForceRefreshButtonElement = document.getElementById('force-refresh-button');
ForceRefreshButtonElement.onclick = () => {
  refreshChaosRecipe();
}

const OpenOptionsButtonElement = document.getElementById('open-options-button');
OpenOptionsButtonElement.onclick = () => {
  ipcRenderer.send('open-options');
}

