#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

# Run the main container command.
exec "$@"