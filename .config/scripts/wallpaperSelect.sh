#!/bin/bash

WALL_DIR="$HOME/wallpapers"
pkill -x feh 2>/dev/null
cd "$WALL_DIR"
if [ $? -ne 0 ]; then
	exit 0
fi

CHOICE=$(printf "%s\n" * | rofi -dmenu)
if [ -n "$CHOICE" ]; then
	feh --bg-scale "$CHOICE"
else
	exit 0
fi


