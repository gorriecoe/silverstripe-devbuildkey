<?php

namespace gorriecoe\DevBuildKey;

use SilverStripe\ORM\DataExtension;
use gorriecoe\DevBuildKey\DevBuildKey;

/**
 * ControllerDevBuildKey
 *
 * @package silverstripe-devbuildkey
 */
class ControllerDevBuildKey extends DataExtension
{
    public function init()
    {
        DevBuildKey::javascript();
    }
}
