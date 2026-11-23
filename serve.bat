@echo off
echo ========================================================
echo   Starting LeadGenius AI Local Preview Server...
echo ========================================================
powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0serve.ps1"
pause
