@echo off
cd "%~dp0"
set PATH=bin;%PATH%
start /min node_modules\.bin\ts-node src/main.ts
