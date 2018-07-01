@echo off
cd "%~dp0"
set PATH=bin;%PATH%
node_modules\.bin\ts-node src/main.ts
