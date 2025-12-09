#!/usr/bin/env bash

SINK=$(pactl info | grep "Default Sink" | awk -F": " '{print $2}')

case "$1" in
    up)
        pactl set-sink-volume "$SINK" +10%
        ;;
    down)
        pactl set-sink-volume "$SINK" -10%
        ;;
    mute)
        pactl set-sink-mute "$SINK" toggle
        ;;
    *)
        echo "Usage: $0 {up|down|mute}"
        exit 1
        ;;
esac

