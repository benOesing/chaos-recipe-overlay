# Fork
This is a fork that tries to automatically  update a prefered loot filter to safe space and time, while collecting sets for the chaos recipe.

![image](example.png?raw=true)

In this example we want to collect 6 sets of the chaos recipe, at the same time. Everything is hidden but the boots, the weapons and gloves, we still want to collect.

## How it works:
This application queries the official POE website for your selected stashtabs, parses the input for unidentified rares that can be used in the chaos recipe and displays the amount you got in the overlay. If your stash contains more than the maximum sets you want to complete at the same time, it hides those items in the "chaos_items_filter.filter" file and combines it with a chosen filter into a new filter file.

## Extra Setup:
1. Download the newest release of [this fork](https://github.com/benOesing/chaos-recipe-overlay/releases/tag/v0.1).

2. You need to move the included filter file "chaos_items_filter.filter" (Some credits to Pathofmatth) into your POE Filter folder.

3. Fill in the complete Path to your favorite filter. (ex. C:/Users/benOesing/Documents/My Games/Path of Exile/Filterblade.filter)

    3.1. The filter you chose in the settings menu will get copied with an _chaos suffix. Use that filter in game. (ex Filterblade_chaos.filter)
    
4. Fill in the number of maximum sets you want to search for at the same time. If your stash is limited you dont want to drown in chest pieces.

5. Optional: Change the "chaos_items_filter.filter" file for your preferences.

6. Ongoing: Refresh the filter every so often.

## TODO: 
    Add two handed weapons, shields, Quiver
    Remove rings and amulets from hidden list
    Check for update to reduce memory
    Add display for items that are really needed to complete a set.

## Disclaimer:
This fork was very rushed, due to the new season approaching. In a few hours of testing it worked as intended and i managed to fill nearly exactly the amount of sets I wanted.

<b>You should look over all items not to miss a 6 socket or even a 6L. The chaos recipe filter overrides every existing filter for matching items!<b>

# Chaos recipe overlay

![image](https://user-images.githubusercontent.com/4255460/67449569-999e0a80-f5e8-11e9-9f8e-b09063c960e7.png)

## Setup ⚙️

1. Download the latest version of the app (the .exe file) in the ~~[release page](https://github.com/poe-world/chaos-recipe-overlay/releases)~~

2. Launch it 🚀

3. In the settings window:

- Pick your desired league
- Enter your account name
- Copy-paste your POESESSID
- Select which stash tabs you want to monitor (5max is recommended)

4. Close the settings window

5. Drag the overlay around (by clicking anywhere on it) in order to place it where you like it best

6. Enjoy your efficient farming !

## POESESSID 🔑

> Your account information are required in order to be able to download your stash tabs content. They are only used to communicate with the official pathofexile.com website and they are stored locally on your computed. No third party whatsoever will ever have access to these credentials.

You will find this value in your cookies once you are logged into the [official website](https://www.pathofexile.com).

- [How to find it using Google Chrome](https://developers.google.com/web/tools/chrome-devtools/storage/cookies)
- [How to find it using Firefox](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector)
- [How to find it using Internet Explorer](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Develop 👩‍🔬👨‍🔬

#### System requirements

- Node/NPM

#### NPM tasks
- `npm install` to install the requiret pacakges;
- `npm run start` to start the app using the sources;
- `npm run debug` same thing, but will also open the browser debugger for the overlay/settings windows;
- `npm run dist` to produce the publishable .exe file (must be on Windows).

## Credits 👏

- This application is fan-made and not affiliated with Grinding Gear Games in any way.
- The overlay icons comes from [game-icons](https://game-icons.net)

