#!/usr/bin/env bash

# --- DEFINITIONS --- #
CLASS="floatKitty"
HEIGHT=400
WIDTH=700
TERM="kitty"
OPACITY=0.7
HOLD="--hold"
UNIQUE="--single-instance=no"
NO_PREVIOUS_SIZE="remember_window_size no"

# --- MENU --- #
SHORTCUTS=("Btop" "Long Cava" "Nitch")

# --- FUNCTIONS --- #
cava(){
	# CAVA SPECIFIC CONF
	# I have a 1366x768 monitor so i have adjusted to my personal screen 
	HEIGHT=150 # about 4cm
	WIDTH=1300 # about 35cm
	OPACITY=0.3 # wanna see wallpaper ;]

	$TERM --class $CLASS \
		$UNIQUE \
		-o background_opacity=$OPACITY \
		-o "$NO_PREVIOUS_SIZE" \
		-o initial_window_width=$WIDTH \
		-o initial_window_height=$HEIGHT \
		cava &
}

nitch(){
	OPACITY=0.3 # wanna see wallpaper ;]

	$TERM --class $CLASS $HOLD \
		$UNIQUE \
		-o background_opacity=$OPACITY \
		-o "$NO_PREVIOUS_SIZE" \
		-o initial_window_width=$WIDTH \
		-o initial_window_height=$HEIGHT \
		zsh -c 'clear;nitch' &
}

btop(){
	OPACITY=1 # Want to see the actual specs ;]
	HEIGHT=600
	WIDTH=1100

	$TERM --class $CLASS $HOLD \
		$UNIQUE \
		-o background_opacity=$OPACITY \
		-o "$NO_PREVIOUS_SIZE" \
		-o initial_window_width=$WIDTH \
		-o initial_window_height=$HEIGHT \
		btop &
}
main(){
	choice=$(printf "%s\n" "${SHORTCUTS[@]}" | rofi -dmenu -p "Launch : ")
	case "$choice" in
		"${SHORTCUTS[0]}") btop ;;
		"${SHORTCUTS[1]}") cava ;;
		"${SHORTCUTS[2]}") nitch ;;
		*) exit 0 ;;
	esac
	exit 0
}

# --- MAIN --- #
main

