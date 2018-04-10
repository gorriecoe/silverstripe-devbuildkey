<?php

namespace gorriecoe\DevBuildKey;

use SilverStripe\View\Requirements;
use SilverStripe\ORM\DataExtension;
use SilverStripe\Control\Director;
use SilverStripe\Security\Permission;

/**
 * ControllerDevBuildKey
 *
 * @package silverstripe-devbuildkey
 */
class ControllerDevBuildKey extends DataExtension
{
    public function init()
    {
        if (!Director::isLive() || Permission::check('ADMIN', 'any', $member)) {
            Requirements::javascript('gorriecoe/silverstripe-devbuildkey: js/dist/devbuildkey.js');
        }
    }
}
