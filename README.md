#  Changelog

### 3.8.1 May 16, 2021
• Fixed saving feed images/videos
• Fixed saving Reels
• Updated for Instagram v187.0


### 3.8 April 30, 2021
• Fixed saving feed images/videos
• Updated for Instagram v185.0
• Fixed crash when launching Reels
• Fixed Auto Follow feature

### 3.7 April 5, 2021
• Fixed saving Reels
• Fixed smart grid feature
• Updated for Instagram v182.0
• AD ID is valid

### 3.6 Mar 9, 2021
• Updated Cell
• Updated TweakSettingsController
• Fixed ad issue
• Fixed saving Reels

### 3.5 Feb. 24, 2021
• Changed assert ot asset
• Supports v176
• Fixed issue with stories crashing
• Updated instaheaders

### 3.4 Feb. 18, 2021
• Fixed issue with saving stories in Instagram v175
• Increased ad reload rate to 20 sec instead of 11 


### 3.3 January 4-12, 2021
• New  Feature: You can now enter any live without being visible to other users
• Fixed issue with saving Audio 
• Fixed crash when tapping comments in live streams
• Changed assertion to assert in Ads



### 3.2 Novemeber 30, 2020
• Fixed issue when following users
• Updated Amazon Framework
• Supports Instagram v169
• Fixed issue with sideloading
• Fixed issue with sorting Profile posts by likes
• Fixed issue with tapping Instagram Logo
• Fixed issue with downloading Reels
• Fixed issue with IGTV download Button
• Fixed issue with enabling View Unsent Feature

### 3.1 Novemeber 3, 2020
• Fixed issue where settings page switches wouldn't activate for iOS 14 users
• Added support for iOS 14 users
• Fixed issue with Zap Message feature
• Fixed issue when activating Unsent Messages feature
• Fixed issue with Smart Gride Mode
• Fixed crash when saving feed images/videos
• Supports Instagram v166.1



### 3.0 October 3, 2020
• Added support for IG V165
• Fixed PIP mode feature. It is now enabled by default
• Fixed download button position in stories and messages
• Fixed crash when viewing user's profile in live streams
• Fixed Manage Account login issues
• Fixed IGTV Download Button position
• Fix Bot Auto Follow
• New Pro Feature: Save IG Audio
• New Pro Feature: Zap Messages

### Fixed Keychain error and Switching accounts
• Delete the Instagram ipa and binary file. Then Product -> Build. 
• Then use the LATEST working version of Instagram ex: 162. 
• Build and Run the application 
• Note: The application should crash as NSFileManager enumeration returns nil
• Now, add Instagram v150_working ONLY.  Delete previous binary file and Instagram v162 ipa . (There should be one IPA and one Binary) 
• Run the application. It should work. (Do Product -> Build if needed. The plist should show the latest version of Instagram, not v150)
• Note the info file will still show Instagram v162, and it still works.


### 2.9.2 September 9, 2020
• Added support for IG V158.0
• Fixed issue with Auto Like and Auto Follow Reels (Tweak)
• Fixed issue with Bot features 

### Fixed Keychain error and Switching accounts
• Delete the Instagram ipa and binary file. Then Product -> Build. 
• Then use the working version of Instagram ex: 150. 
• Build and Run the application 
• Note: the switching account works because you're using v150, which works.
• Now, add Instagram v158 ONLY.  Keep previous binary file and Instagram v150 ipa . (There should be two IPAs and one Binary) 
• Run the application. It should work. (Do Product -> Build if needed. The plist should show the latest version of Instagram, not v150)
• Note the info file will still show Instagram v158, and it still works.


### 2.9 September 1, 2020
• Fixed issue with sign up 
• Added support for IG V157.0


### 2.8: August 20, 2020
• Added support for iPad

### Fixed Keychain error and Switching accounts
• Delete the Instagram ipa and binary file. Then Product -> Build. 
• Then use the latest version of Instagram ex: 156. 
• Build and Run the application 
• Note: the switching account error will still happen.
• Now, Delete Instagram v156 ONLY.  Keep the binary file there. 
• Now import Instagram v150, the working version. 
• Run the application. It should work. (I'm not sure if I did Product -> Build before this step)
• Note the info file will still show Instagram v156, and it still works.


### 2.7.2: August 9 - 20, 2020
• New Feature: Translate comments!
• New Feature: Show ␡ indicator for deleted messages
• New Feature: Added Welcome Screen!
• New Feature: Simple Grid.  Expand the grid post size and show the like count.
• Added dynamic free offers
• Added dynamic tweak list
• Added dynamic onboarding screen

### 2.7: August 6, 2020
• Supports Instagram v153.0
• Fixed issue with displaying Security View Controller (Face/Touch ID)
• New Pro Feature: Auto Like videos in the Reels explore page
• New Pro Feature: Auto Follow users in the Reels explore page
• New Feature: Smart Grid supports Reel videos 
• Fixed issue with "@ the user" feature in live streams
• Use valueForKey: instead of MSHookIvar! 

### 2.6.5: July 6, 2020
• Fixed issue with IGTV download button
• Fixed issue with performing video calls
• Fixed issue with viewing deep links
• Performance improvements in downloading media
• Performance improvements in Authentication Mode
• Supports Instagram v150.0
• Fixed issue for sideloading apps for v148+

### 2.6: July 1, 2020
• Fixed issue when tapping live comments to view user's profile
• Fixed issue with "Deep Links" or opening user's Instagram link
• Fixed issue with new Instagram update displaying story ads
• Rewrote Tweak settings page
• Compatible with Instagram v148

### 2.5.1: June 30, 2020
• Fixed bug with getting access to Pro Features

### 2.5: June 11 - 15, 2020
• Converted Project Settings to use New Build System  
• Add the -ObjC flag to "Other Linker Settings" for Firestore to work
• Fixed issue with download button in IGTV videos
• Added login system for existing paying users
• Performance Improvements
• New Feature: Add a new layer of security with Face ID/Touch ID to view the Instagram App

### 2.4: June 3, 2020
• Updating to version 144
• Fixed issue where app would crash when launching Settings Page

### 2.3: May 24, 2020
• Using Legacy Build System to use Swift files in project


### 2.3: May 17-19, 2020
• Fixed issue where download button would not appear in stories
• Performance improvements with downloading media
• New Feature: Sort user's feed by # of likes
• Number of Likes will display for unsupported regions
• Smart Grid feature will now show a red heart for liked images
• Update ad frequency 

### 2.3: April 27, 2020
•  Removed Warning disaplying "Undeclared Selector" by changing "Apple LLVM warnings - Objective-C" Undeclared Selector to NO. 

### 2.2.2: April 27, 2020
•  MAKE SURE TO ADD NEW FRAMEWORKS TO    /opt/theos/vendor/lib/

### 2.2.1: April 20, 2020
•  Added support for arm7 devices

### 2.2: April 20, 2020
•   Fixed issue where tapping Live comment cells would crash
•   Fixed bug for download button in direct messages
•   Fixed issue where filters would not load or display 

### 2.1.3: March 24, 2020
•  Fixed crash when activating View Unsent Messages

### 2.1: March 20, 2020
•  Added back InstagramAppCoreFramework
•  Fixed issue where tapping the download button would crash the app
•  Fixed issue for download button in Stories
•  Fixed issue where tapping the Instagram Logo wouldn't open shortcuts
•  Fixed issue where IGTV videos wouldn't download 
•  Fixed crash when Tapping "View Profile" in live streams
•  Removed setting InstagramVerfied to NO when Restore Purchase  failed 
•  New Feature: PiP for stories

### 2.1: March 15, 2020
•  Follow Requests & Suggested For You features have improved and is no longer in BETA mode
•  Added new shortcut when tapping Instagram Logo
•  New Feature: Unfollow Users
•  New Feature: Keep received photos and videos in the chat log forever
•  New Feature: Replay received media more than once in Direct Messages 


### 2.0.2: February 24, 2020
•  Please relogin to restore purchases
• Swift Mode can be configured to download all your posts
• Swift Mode can be canceled when fetching many posts
• Fixed issue where Swift Mode launched when user's had 0 posts


### 2.0: February 24, 2020
• Launched Rhino 2.0

### 1.9.4: January 30, 2020
• Download button for live videos has improved 
• Fixed Download button position in "See More" stories
• Fixed Download button position in "Direct Messages"
• Removed "Does Not Follow You" for current user
• Fixed issue where "Follows You" would disappear when refreshing user profile 
• Fixed issue for download button color when switching from dark to light mode and vice versa.
• New Feature: Save Direct Message photo/video without viewing it by long pressing the message bubble
• New Feature: Double Tap Confirmation
• Updated backend payment server

### 1.9.3: January 21, 2020
• Updated for Instagram V125
• Fixed Issue with atTheUser function in LiveCommentsCell


### 1.9.1: January 19, 2020
• Fixed issue in viewing user's profile during live and post live streams 
• Fixed issue when long-pressing your own profile picture
• In ProfilePicture file, there is a fix for viewing your own profile photo. TODO: Uncomment the code. 


### 1.9: January 14, 2020
• Supports Instagram V124
• Fixed issue where ads where displaying in the Explore Page
• Fixed issue where IGNavigationController crashed when opening Inbox photos 
• Enhanced live stream experience:  
    1) View member's profile without leaving the live stream
    2) Mention any user in the comments


### 1.8.2: December 24, 2019
• Fixed issue where long-pressing the screen crashed the app


### 1.8: December 22, 2019
• Supports Instagram V123
• Two New Features:
    1) View user’s profile by selecting their comment in live streams
    2) Display following status on a user’s profile
# instagram-for-ios
