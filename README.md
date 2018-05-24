# Silverstripe dev build key
Enables the use of the key press `ctrl+d` or `alt+d` to run dev build.

## Installation
Composer is the recommended way of installing SilverStripe modules.
```
composer require gorriecoe/silverstripe-devbuildkey
```

## Requirements

- silverstripe/cms ^4.0

## Maintainers

- [Gorrie Coe](https://github.com/gorriecoe)

## Configuration
Dev build key provides 2 options for processing dev build.

1. Run in new tab (default)
2. Run in background via ajax and only open a new tab if dev build fails.

To run in background apply the following yaml settings.
```
gorriecoe\DevBuildKey\DevBuildKey:
  run_in_background: true
```
