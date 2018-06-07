# React Native TypeScript Hot Reload Issue Showcase

This showcases an issue with hot reloading using Reaact Native and TypeScript.

`yarn && yarn react-native run-ios`, to start the app in iOS. Android is also
an option if you have an emulator running.

Enable hot reloading.

Make a change to the `TsList.tsx` text. The entire Screen will render over again.
You can tell by either selecting JsList first or by scrolling down on TsList.
You will notice that TsList gets selected, and scrolling is not preserved.

If you make a the `JsList.jx` text, scrolling and the selected tab are
preserved.
