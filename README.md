# Intermittent useEffect Cleanup Issue in React 19

This repository demonstrates a rare bug in React 19 where the cleanup function within `useEffect` is not always called when a component unmounts. This can lead to memory leaks or unexpected side effects if the cleanup function is crucial for resource management.

The issue seems to be triggered under specific circumstances related to component lifecycle interactions and isn't consistently reproducible.  The provided example shows a simplified representation of the problem.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4.  The problem is subtle and may require multiple interactions to trigger.  Try rapidly mounting and unmounting the component.  Watch the console for the 'Mounted' and 'Unmounted' logs. If the 'Unmounted' log is missing, the bug has been triggered.

## Solution

The solution involves ensuring the cleanup function is reliably called by employing various techniques to address potential timing issues and other edge cases causing the failure.