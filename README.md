# The Chaos Recipe Overlay
[![Github All Releases](https://img.shields.io/github/downloads/benOesing/chaos-recipe-overlay/total.svg)]()

This is an overlay and data tracker for the game Path of Exile. The program tries to automatically update a prefered loot filter to safe space and time, while collecting sets for the chaos recipe.

# Features
## Overlay
<p align="center">
  <img src="overlay.png?raw=true" />
</p>

This is the overlay. It shows the items, from left to right: Amulet, Ring, Helmet, Body Armour, Gloves, Belts, Boots, Weapons. The left number indicates the number of items that fullfill the chaos recipe. The right number shows the amount of complete sets including items that are part of the regal recipe. For Weapons the *1.5/2* label, means 3 weapons itemlevel 60-74 and enough itemlevel 75+ items to complete and downgrade to 2 complete chaos recipes.
Rings and weapons are counted in 0.5 increments.
The colors go from grey (already enough), over yellow (wanted), to red (really needed).

## Settings
<p align="center">
  <img src="settings.png?raw=true" />
</p>

This is the beautiful settings window. It contains:
- A dropdown menu which shows every league, that is currently running. Choosing the
right league is trivially easy.
- A inputfield to insert your account name.
- A inputfield to enter your session ID. The input is hidden to be streamer friendly. If you don't know how to find it there is a section down below.
- A inputfield to set the intervall in which the overlay refreshes. If you set this to low, your IP Adress will get banned for a short time and the server doesn't refresh as often, so around 60 seconds is completely fine.
- A fileselect, that opens a dialog where you choose your main filter. Afterwards the path gets shorten to only the filename. 
- A inputfield to indicate the maximum amount of sets you want to collect at the same time.
- A dropdown menu to select the size of the overlay.
- A checkbox to select if the overlay should be locked in position or not.
- A beautiful dropdown menu for all stashtabs found for your account info. Selected stashtabs are highlighted in green. Please dont select to many, because that will again reduce performance and might result in a short ban.

## How it works
This application queries the official POE website for your selected stashtabs, parses the input for unidentified rares that can be used in the chaos recipe and displays the amount you got in the overlay. If your stash contains more than the maximum sets you want to complete at the same time, it hides those items in the "chaos_items_filter.filter" file and combines it with a chosen filter into a new filter file.

## Setup
1. Download the newest release of [this fork](https://github.com/benOesing/chaos-recipe-overlay/releases). This would be the .zip file. Extract it anywhere you like.

2. You need to move the included filter file "chaos_items_filter.filter" into your POE Filter folder.

3. Launch the application. 🚀

4. Fill in the complete Path to your favorite filter. (ex. C:/Users/benOesing/Documents/My Games/Path of Exile/Filterblade.filter)

    4.1. The filter you chose in the settings menu will get copied with an _chaos suffix. Use that filter in game. (ex Filterblade_chaos.filter)
    
5. Fill in the necessary options.

    5.1. Fill in the number of maximum sets you want to search for at the same time. If your stash is limited you don't want to drown in chest pieces.

6. Optional: Change the "chaos_items_filter.filter" file after your preferences.

7. Ongoing: Refresh the filter every so often. This is necessary because GGG (the developer) has a policy that every human action may only result in one automated action. Auto refresh would violate this policy.

## TODO
    Add an overlay that helps picking sets out of tabs.
    Remove rings and amulets from hidden list
    Check for update to reduce memory
    Change filter for items that are **really** needed to complete a set.
    Find a way to give precedence to high value items over chaos recipe filter.
    Highlight items that downgrade to chaos recipe.

## POESESSID 🔑

> Your account information are required in order to be able to download your stash tabs content. They are only used to communicate with the official pathofexile.com website and they are stored locally on your computed. No third party whatsoever will ever have access to these credentials.

You will find this value in your cookies once you are logged into the [official website](https://www.pathofexile.com).

- [How to find it using Google Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/cookies)
- [How to find it using Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector)
- [How to find it using Internet Explorer](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Develop 👩‍🔬👨‍🔬

#### Requirements

- Node/NPM

#### NPM tasks
- `npm install` to install the requiret pacakges;
- `npm run start` to start the app using the sources;
- `npm run debug` same thing, but will also open the browser debugger for the overlay/settings windows;
- `npm run dist` to produce the publishable .exe file (must be on Windows).

## Contribute
It is always nice if you like (star) this repository.
If you find something not working or want to have any feature added, feel free to open a issue in this repository. That way you get tributed for feature requests and it is easy to have a discussion if a suggested feature is feasible and wanted.

## Credits 👏

- This application is fan-made and not affiliated with Grinding Gear Games in any way.
- The overlay icons comes from [game-icons](https://game-icons.net)
- Original overlay from exile-center

