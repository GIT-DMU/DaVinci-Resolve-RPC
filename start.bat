@echo off
start "" "C:\Program Files\Blackmagic Design\DaVinci Resolve\Resolve.exe"
start "" cmd /c "node npm run prod"
exit