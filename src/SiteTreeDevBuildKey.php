<?php

namespace gorriecoe\DevBuildKey;

use SilverStripe\View\Requirements;
use SilverStripe\ORM\DataExtension;
use SilverStripe\Control\Director;
use SilverStripe\Security\Permission;

/**
 * SiteTreeDevBuildKey
 *
 * @package silverstripe-devbuildkey
 */
class SiteTreeDevBuildKey extends DataExtension
{
    public function contentcontrollerInit()
    {
        if (!Director::isLive() || Permission::check('ADMIN', 'any', $member)) {
            Requirements::javascript('gorriecoe/silverstripe-devbuildkey: js/dist/devbuildkey.js');
        }
    }
}
