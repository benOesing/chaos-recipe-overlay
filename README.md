# Fork
This is a fork that tries to automaticly update a prefered loot filter to safe space and time.

## Extra Steps:
    Download the newest release instead.

    First you need to move the included filter File "chaos_items_filter.filter" (Credits to Pathofmatth) into your POE Filter folder.
    The filter you chose in the settings menu will get copied with an _chaos suffix. Use that filter in game.
    Update your filter as often as needed. The overlay update ratio can be changed in the setup.

### Additional Options
You have to give the full path to your desired main Filter and the chaos_items_filter must be in the same directory.
You have to chose the maximum number of sets you try to complete at the same time.
Changing the chaos_items_filter.filter file, translates into the resulting filter.

## TODO: 
    Add two handed weapons, shields, Quiver
    Remove rings and amulets from hidden list
    Check for update to reduce memory


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

