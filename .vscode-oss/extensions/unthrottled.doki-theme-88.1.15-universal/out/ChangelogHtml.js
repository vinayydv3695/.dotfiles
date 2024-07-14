"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `<h1>Change Log</h1>
<h2>88.5-1.6.1 [Cleanups]</h2>
<ul>
<li>Cleaned up build process to use correct colors.</li>
<li>Renamed stuff to reflect <code>main</code> branch rename.</li>
</ul>
<h2>88.4-1.6.0 [VS Code Web Support]</h2>
<ul>
<li>Extension now supported in <a href="https://code.visualstudio.com/docs/editor/vscode-web">VSCode for the web</a>.</li>
<li>Added better checksum restoration error message.</li>
<li>Updated Sagiri's syntax highlighting color a bit.</li>
</ul>
<h2>88.3-1.5.2 [Hide Watermark Restore]</h2>
<ul>
<li>Restored hide watermark functionality for VSCode 1.75.0. Please re-run the hide watermark command for this to take effect.</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/216770850-7dc66024-78f5-4503-ae15-2dc087def6cd.png" alt="Hidden Watermark"></p>
<h2>88.3-1.5.1 [Terminal Wallpaper Bugfix]</h2>
<ul>
<li>Fixed wallpaper rendering issue terminals of VSCode 1.74.3. Please re-install your wallpaper for this to take effect.</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/213933498-b8d0697a-46d2-4a5f-ab43-830d9fd8231a.png" alt="Terminal"></p>
<h2>88.3-1.5.0 [Semantic Highlighting]</h2>
<ul>
<li>Themes now support <a href="https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#semantic-coloring-in-color-themes">semantic highliglighting</a>. Which I tried to make as similar to <a href="https://github.com/doki-theme/doki-theme-jetbrains">the WebStorm plugin syntax highlighting</a>.
<ul>
<li>If you don't like what I did, then you can always add <code>&quot;editor.semanticHighlighting.enabled&quot;: false,</code> to your <code>settings.json</code> in your VSCode to turn off semantic highlighting :)</li>
</ul>
</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/209368481-0c8a2d07-4195-40d1-9cd7-994833a71091.png" alt="Comparison"></p>
<h2>88.3-1.4.0 [Re-Brand]</h2>
<ul>
<li>Re-Branded extension from <code>The Doki Theme</code> to just <code>Doki Theme</code>.</li>
<li>Updated extension icon to match the newest Doki Theme logo.</li>
<li>Prevents installation of asset that is a directory (for the most part).</li>
<li>Updated XMas Chocola's theme.</li>
</ul>
<h2>88.1-1.3.2 [Sticker Fix Revisited]</h2>
<ul>
<li>Remember what I last said? Well that was a lie, I did it correctly this time. I also am including the <code>z-index</code> in the <code>doki.sticker.css</code> setting so you can update it for your custom setup.</li>
</ul>
<h2>88.1.3.1 [Sticker Z-Index Fix]</h2>
<ul>
<li>Placing the sticker at the proper z-index such that it no longer blocks the: Notifications &amp; Status Bar Tooltips. Please re-install your sticker for this to take effect!</li>
</ul>
<h1>88.1-1.3.0 [Darling]</h1>
<p>Best Girl just got <em>better</em>. ❤️</p>
<p><img src="https://doki.assets.unthrottled.io/misc/best_girl.png" alt="Best Girl"></p>
<p><em>Zero Two's Not Just A Cutie. ;)</em></p>
<p><strong>4 New Themes!</strong></p>
<ul>
<li>I decided that I didn't have enough Zero Two themes, so I fixed that. She now has a new top-tier dark hacker theme: <code>Obsidian</code>. I also felt like Red Zero Two doesn't get enough attention, so I added a light <code>Sakura</code> theme which features her as she was as a child. With all these new Zero Two themes, I thought it would be best to rename the existing dark &amp; light themes to <code>Rose</code> &amp; <code>Lily</code> respectively.</li>
<li>It wouldn't be the <em>Darling</em> release if I didn't include Hiro as well. (Dark Theme)</li>
<li>Lastly, this is the first release with a duo theme! (Nao's doesn't count, I just wanted the melon meme.) Just to pad my Zero Two theme stats, I've now got a Hiro &amp; Zero Two couples' dark theme.</li>
</ul>
<h3>Other Stuff</h3>
<ul>
<li>Desaturated Itsuki's theme a bit.</li>
<li>It was brought to my attention that I cannot spell &quot;Rimuru&quot;.</li>
<li>Zero Two's Obsidian theme is the default theme now.</li>
</ul>
<h1>84.2-1.3.0 [Enhancements n Stuff]</h1>
<ul>
<li>Added the ability to control the position &amp; size of the sticker using the <code>doki.sticker.css</code> configruation property.</li>
<li>Fixed artifacted background images on the extension list tree &amp; settings UI selected config (be sure to re-install your wallpaper for this to take effect).</li>
<li>Restored asset installation on code-server (please be sure to clear caches and hard reload!)</li>
<li>Added Remote Development Server/SSH connection asset installation help instructions.</li>
</ul>
<h1>84.2-1.2.1 [Small Dart Enhancement]</h1>
<ul>
<li>Enhanced Dart syntax highlighting a bit.</li>
</ul>
<h1>84.1-1.2.0 [Light Theme Release]</h1>
<p><img src="https://doki.assets.unthrottled.io/misc/v84_girls.png" alt="v84 Girls"></p>
<p>This release is not for my Dark Theme Normies. Dark themes are nice, but I like Light Themes too (and my Dark Theme Normies). I'm currently trying new things out. Sorry in advance if I made your eyes bleed. I might tweak some of them as time goes on, still not 100% on what looks good &amp; also is a fun color.</p>
<p><strong>6 New Light Themes!</strong></p>
<ul>
<li>Tired &amp; broken down programmers rejoice! Even though you will never be pampered by a real Fox-demigod, you can now at least code with one. Let &quot;The Helpful Fox Senko-san&quot; watch over you as complete your tickets. You can almost feel the &quot;おかえりなのじゃ&quot; you will never get 😭</li>
<li>I decided to complete my Quintessential Quintuplets collection by adding the oldest and youngest quint: Nakano Ichika &amp; Nakano Itsuki.</li>
<li>Tomori Nao, from Charlotte, has an interesting dichotomy when it comes to her personality. She is super cute tho.</li>
<li>Have I ever seen Code Geass? No. Can I appreciate C.C. without having seen the anime? Yeah buddy.</li>
<li>Guess while I'm talking about &quot;anime I haven't seen but, chose to make a theme because the girl is pretty.&quot; We now have Yuzuriha Inori from Guilty Crown.</li>
</ul>
<h3>Other Stuff</h3>
<ul>
<li>Adjusted Sayori's dark diff deleted color &amp; updated Satsuki's light autocomplete letter match color.</li>
</ul>
<h1>78.2-1.2.0 [Asset Settings &amp; Custom Status Bar Name]</h1>
<ul>
<li>Added the following settings that allow you to control what assets get installed during the <code>Install Wallpaper</code> actions.
<ul>
<li><code>doki.background.enabled</code>: Whether you want an image in your empty editor background when when running the 'Install Wallpaper' command.</li>
<li><code>doki.wallpaper.enabled</code>: Whether you want an image on top of your code editor, when running the 'Install Wallpaper' command.</li>
</ul>
</li>
<li>Enhanced the 'Settings (UI)' wallpaper experience.</li>
<li>You can also set your own name that shows up next to the ❤ in the status bar now with the <code>doki.statusbar.name</code> setting.</li>
</ul>
<h1>78.2-1.1.0 [Themed Bracket Pair Colorization]</h1>
<ul>
<li>Since VS Code 1.67, <a href="https://code.visualstudio.com/updates/v1_67#_bracket-pair-colorization-enabled-by-default">bracket pair colorization</a> is on by default. Well the default colors where cramping my style, so I fixed that. If you don't what I did, you can customize it yourself <a href="https://code.visualstudio.com/api/references/theme-color#editor-colors">search for &quot;editorBracketHighlight.foreground&quot; on this page</a> and also see <a href="https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme">customizing a color theme</a>.</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/167956580-ba51862a-8d31-4d1a-9cbe-fb3676f33152.png" alt="Themed Brace Matching"></p>
<h1>78.2-1.0.2 [Major Theme Syntax Coloring Updates]</h1>
<ul>
<li><strong>Major Updates</strong> to syntax highlighting colors to these themes:
<ul>
<li>Asuna Dark</li>
<li>Beatrice</li>
<li>Emilia Light.</li>
<li>Ibuki Light</li>
<li>Monika Dark/Light</li>
<li>Natsuki Dark/Light</li>
<li>Sayori Dark/Light</li>
<li>Yuri Dark/Light</li>
</ul>
</li>
<li>Minor syntax highlighting updates to these themes: Nakano Miku, Megumin, Mai Dark, Ryuko Dark, Tohsaka Rin,
Rias: Crimson, Mai Light, and Asuna Light</li>
<li>Small syntax highlighting usability updates to these themes: Zero Two Dark, Yukino, Hanekawa,
Nagatoro, Rei, Astolfo, Echidna, Shima Rin, Sonoda Umi, Kurisu, &amp; Ishtar Dark</li>
<li>Made the background art brighter for: Satsuki Dark &amp; Asuna Dark</li>
<li>Made background art dimmer for: Yuri Light.</li>
</ul>
<h4>Motivation</h4>
<p>I am in a position where I will now regularly be using my light themes more often. I am also planning on adding more.
Most of my light themes were created a long time ago and my tastes have evolved over time.
I have taken the time to revisit a fair number of my legacy themes, light and dark.</p>
<p>Thank you for your understanding!</p>
<h1>78.0-1.0.2 [The Boys]</h1>
<p>I'm trying to bring in a bit of inclusion.</p>
<p><strong>4 New Dark Themes!</strong></p>
<ul>
<li>I can already hear you now, &quot;Rimuru Tempest, from 'That Time I Got Reincarnated as a Slime', is not a boy. They are the best genderless slime, get your facts correct.&quot; Yeah well....shut up.</li>
<li>Next, is one of the S ranked heroes in the 'One Punch Man' universe, Genos.</li>
<li>After that, is the smug smile of Yukihira Soma from Shokugeki no Soma.</li>
<li>Lastly, I am going to be honest, I haven't seen Haikyu. I just wanted a Indigo &amp; Orange based theme. So here is Hinata Shoyo.</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v78_bois.png" alt="v78 Bois"></p>
<h3>Other Stuff</h3>
<ul>
<li>Updated some of Rory, Ram, &amp; Rem's syntax highlighting colors to be more usable.</li>
</ul>
<h1>74.2.1.0.2 [Unsupported Status Help]</h1>
<ul>
<li>Added some guidance to users who will have issues with removing the [Unsupported] warning when installing assets.</li>
</ul>
<h1>74.2-1.0.1 [Enhanced Usability &amp; Stuff]</h1>
<ul>
<li>Increased badge icon foreground constrast.</li>
<li>Increased usability of Raphtalia's, Yukino's, &amp; Kanna's link colors.</li>
<li>Darkened Nino's theme some.</li>
<li>Removed the Zalgo Text from Š̸̘͚̼͎̯̙̣̱̎̋̐͒a̴̖̟̠̳̤͙̟͂̂͑̐͜ỷ̵̧̨̞̠̖̠o̴̧͍̗̬̎̓͆̔͝ͅr̴̡̮̟͈͠ͅi̴̡̨͓͈̬̗̺̍́̃̇̓'s dark theme name, so you can search for her dark theme now.</li>
</ul>
<h1>74.1-1.0.0 [Synapse break. Vanishment, this world!]</h1>
<p><strong>4 New Dark Themes!</strong></p>
<ul>
<li>Decimate errors in the code alongside the Wicked Lord Shingan. Let your inner fantasies go rampant with Rikka Takanashi from: &quot;Love, Chuunibyou, and Other Delusions&quot;.</li>
<li>It is comfy time! Don't let feature requests stress you out, because you can now code with Nadeshiko from Yuru Camp.</li>
<li>A Certain Scientific RailGun go: bzzzzzzt. Zap bugs out of existence with the electromaster Mikoto Misaka.</li>
<li>Raccoon + Tanuki = one really cute cinnamon bun. Enjoy your time coding with Raphtalia from: &quot;Rising of the Shield Hero.&quot;</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v74_girls.png" alt="v74 Girls"></p>
<h3>Other Stuff</h3>
<ul>
<li>Updated Syntax Highlight &amp; Look and Feel changes for the following legacy themes: Ibuki Dark, Astolfo, Aqua, Natsuki Light, Hatsune Miku, Christmas Chocola, Emilia Dark, Beatrice, Ram, and Rem.</li>
</ul>
<h1>19.0.0 [Holiday Release]</h1>
<p><strong>3 New Dark Themes!</strong></p>
<ul>
<li>
<p>Celebrate Christmas with Chocola from the NekoPara Series!
<em>I lied about Shigure being the last addition from NekoPara.</em></p>
</li>
<li>
<p>The 4th of July now just got even better, now that you can code with Essex from Azur Lane.
If you prefer a more canon experience, Essex's theme also has <strong>secondary content</strong> with the Eagle Union branding.</p>
</li>
<li>
<p>Even though I missed this year's Halloween, I've got something to look forward to in 2022.
Yotsuba, from The Quintessential Quintuplets, isn't 2spooky4me.</p>
</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v22_girls.png" alt="v22 Girls"></p>
<h4>Other Stuff</h4>
<ul>
<li>Moved Tohsaka Rin's wallpaper over to the right.</li>
<li>Not attempting to install custom assets when config is not a path to a file.</li>
</ul>
<h1>18.0.0 [Jahy-sama Will Not Be Discouraged!]</h1>
<p><strong>1 New Theme!</strong></p>
<p>Featuring the Dark World's Second in Command: Jahy!</p>
<p><img src="https://doki.assets.unthrottled.io/misc/v21_girl.png" alt="v21 Girl"></p>
<h1>17.0.0 [Only for Onii-chan]</h1>
<p><strong>3 New Themes!</strong></p>
<p>Last addition from the NekoPara Series:</p>
<ul>
<li>Minaduki Shigure (Light Theme)</li>
</ul>
<p>From the dumpster fire of a series, &quot;EroManga Sensei&quot;:</p>
<ul>
<li>Izumi Sagiri (Dark Theme)</li>
</ul>
<p>From the smaller burning trash heap, &quot;OreImo (My little sister cannot be this cute)&quot;:</p>
<ul>
<li>Kousaka Kirino (Dark Theme)</li>
</ul>
<p>Anime is trash....<em>and so am I</em>.</p>
<p><img src="https://doki.assets.unthrottled.io/misc/v20_girls.png" alt="v20 Girls"></p>
<h1>16.1.0 [Consistent JavaScript Syntax]</h1>
<ul>
<li>Spent the time to actually colorize the JavaScript &amp; TypeScript tokens to be more consistent with the JetBrains Syntax Highlighting. (More colorful mix!)</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/133911128-5d6d72f6-152b-4a21-891b-990323b558ce.png" alt="Syntax Updates"></p>
<h1>16.0.0 [KillLaKill Alt. Themes]</h1>
<p><strong>2 New Themes!</strong></p>
<ul>
<li>Ryuko Light</li>
<li>Satsuki Dark</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v19_girls.png" alt="v19 Girls"></p>
<h1>15.3.0 [Auto Restoration]</h1>
<ul>
<li>Added the <strong>Restore Assets</strong> action that allows you to quickly re-install assets after a VSCode update. Plugin will attempt to restore assets on first detection of VSCode update.</li>
<li>Enhanced the wallpaper in the Welcome Screen.</li>
</ul>
<h1>15.2.0 [Hide Watermark]</h1>
<ul>
<li>Added the <strong>Hide VSCode Watermark</strong> command that...well... hides the VS Code watermark that shows when all editor tabs are closed.</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/130338907-3105bf84-5715-4488-879a-db58c5c4c1cb.png" alt="Hidden Watermark"></p>
<h1>15.1.1 [Asset Installation UX]</h1>
<ul>
<li>Installation progress notification goes away after install. <a href="https://github.com/doki-theme/doki-theme-vscode/issues/107">#107</a></li>
<li>Updated verbage on installation asset success notification. <a href="https://github.com/doki-theme/doki-theme-vscode/issues/106">#106</a></li>
</ul>
<h1>15.1.0 [Search &amp; Selection Differentiation]</h1>
<ul>
<li>Made it easier to differentiate the search &amp; selection background colors for all <strong>61</strong> themes. &lt;sup&gt;&lt;sup&gt;Some days I question my current life choices....&lt;/sup&gt;&lt;/sup&gt;</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/129452488-70c60425-68fa-4b5d-88e1-207bff582ad0.png" alt="Search &amp; Selection Differentiation"></p>
<h1>15.0.1 [Modal Window Enhancement]</h1>
<ul>
<li>Stylized the secondary button in the VS Code modal window to match the theme.</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/129116241-f24404dd-2cb7-4858-8a0b-034e5d914b78.gif" alt="Just Trust Me, Bro"></p>
<h1>15.0.0 [NekoPara OneeSan Vol.]</h1>
<h2>4 New Themes!!</h2>
<ul>
<li>Maple (Light/Dark)</li>
<li>Cinnamon (Dark)</li>
<li>Azuki (Dark)</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v18_girls.png" alt="v18 Girls"></p>
<h1>14.2.0 [Auto-Checksum Fix]</h1>
<ul>
<li>Plugin automatically fixes VSCode's checksums on bundled/custom asset installation/removal. Just close all instances of VSCode and start it back up to get rid of the annoying <code>Unsupported</code> error.</li>
</ul>
<h1>14.1.1 [Settings UI Enhancement]</h1>
<ul>
<li>Updated the VSCode <a href="https://code.visualstudio.com/docs/getstarted/settings">Settings UI</a> to support installed wallpapers!
<img src="https://user-images.githubusercontent.com/15972415/126047756-2410b041-09bb-4783-8a33-f05f47869891.png" alt="Screenshot from 2021-07-17 14-27-59"></li>
</ul>
<h1>14.1.0 [Custom Assets]</h1>
<p>Added the ability for you to add your own assets to be used by the themes!
Please see the <a href="https://github.com/doki-theme/doki-theme-vscode/tree/main#custom-assets">README.md</a> for more details.</p>
<table>
<thead>
<tr>
<th><strong>Custom Sticker</strong></th>
<th><strong>Custom Background</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://raw.githubusercontent.com/doki-theme/doki-theme-vscode/main/readmeStuff/custom_sticker.gif" alt="custom_sticker"></td>
<td><img src="https://raw.githubusercontent.com/doki-theme/doki-theme-vscode/main/readmeStuff/custom_background.gif" alt="custom_background"></td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th><strong>Custom Wallpaper</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://raw.githubusercontent.com/doki-theme/doki-theme-vscode/main/readmeStuff/custom_wallpaper.png" alt="custom_wallpaper"></td>
</tr>
</tbody>
</table>
<h1>14.0.0 [NekoPara Release]</h1>
<h2>3 New Themes!!</h2>
<ul>
<li>Chocola (Dark)</li>
<li>Vanilla (Dark)</li>
<li>Coconut (Dark)</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v17_girls.png" alt="v17 Girls"></p>
<h1>13.2.0 [Small Enhancements]</h1>
<ul>
<li>Welcome Window now has background in VS Code 1.58</li>
<li>Extensions View Header now has background.</li>
<li>Changelog has theme's current sticker in the bottom right &amp; the sticker shows above images.</li>
</ul>
<h1>13.1.0 [Insiders Content Support]</h1>
<ul>
<li>Changed how stickers/wallpapers are installed, so they show up in VSCode v1.58.+.
Please re-run your sticker/wallpaper command to see the changes take effect.</li>
</ul>
<h1>13.0.1 [Just trust me, bro]</h1>
<ul>
<li>Changed extension to be enabled in <a href="https://code.visualstudio.com/docs/editor/workspace-trust#_restricted-mode">restricted mode</a>.</li>
</ul>
<h1>13.0.0 [Hanekawa, Shima Rin, Nagatoro, Yumeko, &amp; Yuno]</h1>
<h2>5 New Themes</h2>
<p>From the Monogatari series:</p>
<ul>
<li>Hanekawa Tsubasa (Dark)</li>
</ul>
<p>From the Yuru Camp series:</p>
<ul>
<li>Shima Rin (Dark)</li>
</ul>
<p>From the Don't Toy With Me, Miss Nagatoro series:</p>
<ul>
<li>Hayase Nagatoro (Dark)</li>
</ul>
<p>From the Kakegurui Series:</p>
<ul>
<li>Jabami Yumeko (Dark)</li>
</ul>
<p>From the Future Diary Series</p>
<ul>
<li>Gasai Yuno (Dark)</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v16_girls.png" alt="v16 Girls"></p>
<h3>Other Stuff</h3>
<ul>
<li>Added <a href="https://code.visualstudio.com/updates/v1_52#_html">linked html editing color</a></li>
<li>Added asset troubleshooting steps for the linux <code>snap</code> VS Code install.</li>
</ul>
<h1>12.2.2 [WSL Button Usability]</h1>
<ul>
<li>Updated the WSL remote button in the status bar to be more visible.</li>
</ul>
<h1>12.2.1 [Text Link Consistency]</h1>
<ul>
<li>Updated the text link color for all themes to be conistent with the other platforms' text link color.</li>
</ul>
<h1>12.2.0 [Theme Color Enhancements]</h1>
<ul>
<li>Combed over the <a href="https://code.visualstudio.com/api/references/theme-color">Theme Colors</a> provided by VS-Code to give the look and feel more themed colors!</li>
</ul>
<h1>12.1.0 [Usability Updates]</h1>
<ul>
<li>Fixed selection usability issues for all themes <a href="https://github.com/doki-theme/doki-theme-vscode/issues/68">#68</a></li>
<li>Changed the quick input panel to be opaque again. If you want it to be transparent, feel free to customize the <a href="https://code.visualstudio.com/api/references/theme-color#quick-picker-colors">quick picker colors</a>. I left the blurred effect on when you've installed the wallpaper.</li>
</ul>
<h1>12.0.0 [Nino, Nakano Miku, Gray, &amp; Tohru]</h1>
<h2>5 New Themes</h2>
<p>From the Quintessential Quintuplets series:</p>
<ul>
<li>Nakano Nino (Dark)</li>
<li>Nakano Miku (Dark)</li>
</ul>
<p>From the Lord El-Melloi II Case Files series:</p>
<ul>
<li>Gray (Dark)</li>
</ul>
<p>From the Daily Life with a Monster girl series:</p>
<ul>
<li>Miia (Dark)</li>
</ul>
<p>Addition to Miss Kobayashi's Dragon Maid:</p>
<ul>
<li>Tohru (Light)</li>
</ul>
<h2>Other stuff</h2>
<ul>
<li>Added a secondary sticker for <a href="https://github.com/doki-theme/doki-master-theme/issues/62">Hatsune Miku</a>!</li>
<li>Grouped all the Type-Moon products under <code>TypeMoon</code> (eg: Fate)</li>
<li>Fixed matched bracket usability.</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v15_girls.png" alt="v15 Girls"></p>
<h1>11.2.0 [Glass-Pane Enhancements]</h1>
<ul>
<li>Made more panels transparent to show your background/sticker.
<ul>
<li>Please be sure to re-install the wallpaper &amp; sticker for this to take effect!</li>
</ul>
</li>
</ul>
<p>Thank you, @JohnEdwa for your contributions!</p>
<p><img src="https://user-images.githubusercontent.com/15972415/116890857-ae068e80-abf3-11eb-8bf5-916d66c036ac.png" alt="Moar glass, moar waifu"></p>
<h1>11.1.3 [Handling non-url characters better]</h1>
<ul>
<li>Mitigated issues where a user's local file path is not url-friendly, preventing assets from showing up. (<a href="https://github.com/doki-theme/doki-theme-vscode/issues/63">#63</a>))</li>
</ul>
<h1>11.1.2 [Network Error Handling]</h1>
<ul>
<li>Alerting user that asset installation has failed because of network issues.</li>
<li>Restored word highlighting (<a href="https://github.com/doki-theme/doki-theme-vscode/issues/62">#62</a>)</li>
</ul>
<h1>11.1.1 [Better Glass Pane Experience]</h1>
<ul>
<li>Fixed annoying background dragging in file tree. Be sure to re-install the wallpaper for this to take effect.</li>
</ul>
<table>
<thead>
<tr>
<th>Before</th>
<th>After</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/15972415/111708429-d38e3300-8813-11eb-916c-bdbb05388c2f.gif" alt="Peek 2021-03-18 17-57"></td>
<td><img src="https://user-images.githubusercontent.com/15972415/111708430-d426c980-8813-11eb-84f5-960b0bb6673d.gif" alt="Peek 2021-03-18 17-53"></td>
</tr>
</tbody>
</table>
<h1>11.1.0 [Usability Updates]</h1>
<ul>
<li>Fixed all theme usability issues found in <a href="https://github.com/doki-theme/doki-theme-vscode/issues/46">#46</a>.</li>
</ul>
<h1>11.0.0 [Astolfo, Maika, Rias, &amp; Rei]</h1>
<h2>4 New Themes</h2>
<p>From the Fate series:</p>
<ul>
<li>Astolfo (Dark)</li>
</ul>
<p>From the Highschool DxD series:</p>
<ul>
<li>Rias: Onyx (a darker theme)
<ul>
<li>2 Stickers:
<ul>
<li>A Mild One</li>
<li>A Cultured One</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>From the Blend S series:</p>
<ul>
<li>Sakuranomiya Maika (Dark)</li>
</ul>
<p>From the Neon Genesis Evangelion series:</p>
<ul>
<li>Ayanami Rei (Dark)</li>
</ul>
<h2>Other stuff</h2>
<ul>
<li>Added <a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">GitLens</a> theming integration.</li>
<li>Updated activation events to enhance user startup experience.</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v14_girls.png" alt="v14 Girls"></p>
<h1>10.0.0 [Glass Pane Wallpapers!]</h1>
<ul>
<li>Changed the behavior of the wallpapers to look like they are behind a glass pane!
<ul>
<li>Be sure to run the <code>Install ... Wallpaper</code> action!</li>
</ul>
</li>
<li>Sticker and Wallpaper actions are now separate. (Mix and match if you so choose!)</li>
</ul>
<p><img src="https://user-images.githubusercontent.com/15972415/110246286-aba5f200-7f2c-11eb-8ddc-51a4867997fd.png" alt="Screenshot 2021-03-07 095027">
<img src="https://user-images.githubusercontent.com/15972415/110246284-ab0d5b80-7f2c-11eb-8b7b-136c8496a980.png" alt="Screenshot 2021-03-07 094953"></p>
<h1>9.1.0 [Better Python Support]</h1>
<ul>
<li>Added better syntax coloring for Python code.</li>
</ul>
<table>
<thead>
<tr>
<th>Before</th>
<th>After</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/15972415/109885062-8c187c00-7c43-11eb-9f1d-7557b280e79d.png" alt="Screenshot from 2021-03-03 17-08-15"></td>
<td><img src="https://user-images.githubusercontent.com/15972415/109885082-920e5d00-7c43-11eb-889d-7d2055cce7d8.png" alt="Screenshot from 2021-03-03 17-07-25"></td>
</tr>
</tbody>
</table>
<h1>9.0.1 [Wallpaper Anchoring]</h1>
<ul>
<li>Updated the anchoring of various theme's wallpapers so that you can see your waifu!
<ul>
<li>Be sure to re-install the stickers for this to take effect.</li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>Before</th>
<th>After</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/15972415/108594985-e14eb680-7342-11eb-8afc-09afe2bc9af0.png" alt="Screenshot from 2021-02-20 06-10-01"></td>
<td><img src="https://user-images.githubusercontent.com/15972415/108594986-e3187a00-7342-11eb-819c-30e49ea16cfe.png" alt="Screenshot from 2021-02-20 06-09-22"></td>
</tr>
</tbody>
</table>
<h1>9.0.0 [Zero Two, Sakurajima Mai]</h1>
<h2>4 New Themes</h2>
<p>From the Darling in the Franxx series:</p>
<ul>
<li>Zero Two (Dark/light)</li>
</ul>
<p>From the Rascal does not dream of bunny girl senpai series:</p>
<ul>
<li>Sakurajima Mai (Dark/light)
<ul>
<li>2 Stickers:
<ul>
<li>A Mild One</li>
<li>A Spicy One</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v13_girls.png" alt="v13 Girls"></p>
<h1>8.0.0 [Echidna, Yukino, Kurisu, Asuna, Umi, &amp; Konata]</h1>
<h2>5 New Themes!</h2>
<p>Love Live! series:</p>
<ul>
<li>Sonoda Umi (Dark)</li>
</ul>
<p>From the OreGairu series:</p>
<ul>
<li>Yukinoshita Yukino (Dark)</li>
</ul>
<p>Addition to Re:Zero series:</p>
<ul>
<li>Echidna (Dark)</li>
</ul>
<p>From the Steins Gate series:</p>
<ul>
<li>Makise Kurisu (Dark)</li>
</ul>
<p>Addition to the Sword Art Online series:</p>
<ul>
<li>Yuuki Asuna (Dark)</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v12_girls.png" alt="v12 Girls"></p>
<h2>Other Stuff</h2>
<h3>Updates</h3>
<ul>
<li>Konata's theme is now a bit darker to aid in usability</li>
</ul>
<h3>Miscellaneous</h3>
<ul>
<li>Update Rin's syntax coloring just a bit.</li>
<li>Migrated editor scheme color overrides to all themes.</li>
<li>&quot;Last Name First Name&quot;'d Misato.</li>
<li>Current line number is now <code>infoForeground</code> colored for dark themes.</li>
</ul>
<h3><a href="https://github.com/doki-theme/doki-theme-vscode/pull/39">See pull request for more information</a></h3>
<h1>7.1.1 [Code Insiders Support]</h1>
<ul>
<li>Restored support for all extension commands for VSCode-Insiders 1.52.0 <code>f47aae014cf8567f648e68369d66b4106ae89f08</code>.</li>
</ul>
<h1>7.1.0 [WSL Sticker Installation Support]</h1>
<ul>
<li>Enabled of stickers when working on a remote WSL VSCode session. <a href="https://github.com/doki-theme/doki-theme-vscode/issues/32">See issue for more details</a></li>
<li>Enhanced Rin &amp; Ishtar's syntax colorings.</li>
</ul>
<h1>7.0.1 [Code Insiders Support]</h1>
<ul>
<li>Restored support for all stickers in VSCode-Insiders 1.52.0.</li>
</ul>
<h1>7.0.0 [Platform Consistency]</h1>
<ul>
<li>Migrated all theme's syntax coloring to look like the Jetbrains themes
<ul>
<li><a href="https://github.com/doki-theme/doki-theme-vscode/pull/29">Please see the pull request for more information</a></li>
</ul>
</li>
<li>Updated Ram's status bar usability</li>
</ul>
<h1>6.0.0 [Fate, Gate, Konosuba]</h1>
<h2>5 New Themes!</h2>
<p>Girls from the Fate series:</p>
<ul>
<li>Ishtar (Light/Dark)</li>
<li>Tohsaka Rin (Dark)</li>
</ul>
<p>From the Gate series:</p>
<ul>
<li>Rory Mercury (Dark)</li>
</ul>
<p>Last addition to the Konosuba series:</p>
<ul>
<li>Aqua (Dark)</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v11_girls.png" alt="v11 Girls"></p>
<h2>Other Stuff</h2>
<ul>
<li>Updated placeholder text</li>
<li>Updated Darkness's dark accent foreground.</li>
</ul>
<h1>5.0.0 [Kanna Kamui]</h1>
<ul>
<li>Added Miss Kobayashi's Dragon Maid's <code>Kanna</code> as a dark theme!
<ul>
<li>This theme has 2 stickers to choose from!</li>
</ul>
</li>
<li>Updated all of the dark theme deleted diff colors.</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v10_girl.png?version=1" alt="The New Girl"></p>
<h1>4.0.0 [Misato Katsuragi]</h1>
<ul>
<li>Added Neon Genesis Evangelion's <code>Misato Katsuragi</code> as a dark theme!</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v9_girl.png?version=1" alt="The New Woman"></p>
<h1>3.2.0 [Many Small Improvements]</h1>
<ul>
<li>Notification toasts now appear in front of the sticker, so you can actually read it :)
<ul>
<li>Please re-install your sticker to have this take effect!</li>
</ul>
</li>
<li>Added action buttons to notifications, so you can perform the required step by just clicking a button.</li>
<li>Changed the comparison/diff colors to theme standards.</li>
<li>Increased Satsuki's selected foreground readability.</li>
<li>More small consistency changes.</li>
</ul>
<h1>3.1.1 [Non-Functional]</h1>
<ul>
<li>Updated repository links in package.json</li>
<li>Replaced extension icon.</li>
<li>Security patches.</li>
</ul>
<h1>3.1.0 [New Sticker Placement]</h1>
<ul>
<li>Moved the sticker to the bottom right hand corner of the window instead of being in the bottom right hand corner of the code editor window.
<ul>
<li>Please re-install your sticker to have this take effect!</li>
</ul>
</li>
</ul>
<h1>3.0.0 [New Themes!]</h1>
<ul>
<li>Added 5 new themes based on various new characters!
<ul>
<li>High School DxD:
<ul>
<li>Rias Gremory (Dark Theme)</li>
</ul>
</li>
<li>Sword Art Online:
<ul>
<li>Yuuki Asuna (Light Theme)</li>
</ul>
</li>
<li>Lucky Star:
<ul>
<li>Izumi Konata (Light Theme/2 Stickers)</li>
</ul>
</li>
<li>KonoSuba:
<ul>
<li>Darkness (Light/Dark Theme)</li>
</ul>
</li>
</ul>
</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v8_girls.png?version=1" alt="The New Girls"></p>
<h2>2.4.2 [Sticker Removal Fix (Revisited)]</h2>
<ul>
<li>Scrubs CSS file after removal.</li>
</ul>
<h2>2.4.1 [Sticker Removal Fix]</h2>
<ul>
<li>Fixed the issue with the sticker not being removed after installing multiple stickers.</li>
</ul>
<h2>2.4.0 [Secondary Sticker Port]</h2>
<ul>
<li>Brought the secondary stickers from the Intellij themes over to VSCode!
<ul>
<li>Themes that have a secondary sticker now:
<ul>
<li>Monika (Light/Dark)</li>
<li>Natsuki (Light/Dark)</li>
<li>Sayori (Light/Dark)</li>
<li>Yuri (Light/Dark)</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2>2.3.0 [Light Theme Adjustments]</h2>
<ul>
<li>Revisited most of the light themes so they are all consistent with the other products.
<ul>
<li>Themes affected:
<ul>
<li>Light Monika</li>
<li>Light Natsuki</li>
<li>Light Yuri</li>
<li>Light Sayori</li>
<li>Beatrice</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2>2.2.1 [Small Adjustments]</h2>
<ul>
<li>You will know when the stickers/wallpapers start and finish installing.</li>
<li>Small color adjustments.</li>
</ul>
<h2>2.2.0 [Offline Mode]</h2>
<ul>
<li>Your theme's wallpaper is now available offline!</li>
<li>Small adjustments to the look and feel of the light Emilia theme.</li>
</ul>
<h2>2.1.1 [Better Update Experience]</h2>
<ul>
<li>The plugin will actually tell you if it could not install your specified sticker.
<ul>
<li>Rather than telling you it installed your sticker when it actually did not.</li>
</ul>
</li>
</ul>
<h2>2.1.0 [Look and Feel Consistency]</h2>
<ul>
<li>Made more VS code components have a more consistent look and feel!</li>
</ul>
<h2>2.0.2 [Non-Functional]</h2>
<ul>
<li>Changed how the plugin gets stickers.
<ul>
<li>I am now able to update the stickers without you having to download a new version.</li>
</ul>
</li>
</ul>
<h2>2.0.1 [Code Server Support]</h2>
<ul>
<li>Stickers/background can be installed on VSCode running on Code Server.</li>
</ul>
<h2>2.0.0 [New Themes!]</h2>
<ul>
<li>Added 5 new themes based on various new characters!
<ul>
<li>Re:Zero:
<ul>
<li>Emilia (Dark/Light Theme)</li>
</ul>
</li>
<li>Danganronpa:
<ul>
<li>Mioda Ibuki (Dark/Light Theme)</li>
</ul>
</li>
<li>Hatsune Miku (Dark Theme)</li>
</ul>
</li>
</ul>
<p><img src="https://doki.assets.unthrottled.io/misc/v7_girls.png?version=1" alt="The New Girls"></p>
<h2>1.0.1 [Non-Functional]</h2>
<ul>
<li>Migrated theme build process to centralized management strategy.</li>
</ul>
<h2>1.0.0 [Initial Release!]</h2>
<ul>
<li>14 Color Themes based on characters from various anime and visual novels.
<ul>
<li>Kill La Kill
<ul>
<li>Ryuko (Dark Theme)</li>
<li>Satsuki (Light Theme)</li>
</ul>
</li>
<li>KonoSuba
<ul>
<li>Megumin (Dark Theme)</li>
</ul>
</li>
<li>Doki-Doki Literature Club
<ul>
<li>Just Monika (Light/Dark Theme)</li>
<li>Natsuki (Light/Dark Theme)</li>
<li>Sayori (Light/Dark Theme)</li>
<li>Yuri (Light/Dark Theme)</li>
</ul>
</li>
<li>Re:Zero
<ul>
<li>Beatrice (Light Theme)</li>
<li>Ram (Dark Theme)</li>
<li>Rem (Dark Theme)</li>
</ul>
</li>
</ul>
</li>
<li>Each Theme has a corresponding sticker pack which includes:
<ul>
<li>A sticker of the character in the lower right hand corner of you editor window</li>
<li>A Customized background of the selected character when all editor windows are closed.</li>
</ul>
</li>
</ul>
`;
//# sourceMappingURL=ChangelogHtml.js.map