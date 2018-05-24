<?php

namespace gorriecoe\DevBuildKey;

use SilverStripe\ORM\DataExtension;
use gorriecoe\DevBuildKey\DevBuildKey;

/**
 * SiteTreeDevBuildKey
 *
 * @package silverstripe-devbuildkey
 */
class SiteTreeDevBuildKey extends DataExtension
{
    public function contentcontrollerInit()
    {
        DevBuildKey::javascript();
    }
}
