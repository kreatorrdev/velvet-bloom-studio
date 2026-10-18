@echo off
cd /d "%~dp0velvet-bloom-studio"
echo Velvet Bloom Studio - http://localhost:3000
echo Keep this window open while viewing the site.
call npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
pause
