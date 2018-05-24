<?php

namespace gorriecoe\DevBuildKey;

use SilverStripe\View\Requirements;
use SilverStripe\Control\Director;
use SilverStripe\Security\Permission;
use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Config\Config;

/**
 * DevBuildKey
 *
 * @package silverstripe-devbuildkey
 */
class DevBuildKey
{
    use Configurable;

    /**
     * Database fields
     * @var boolean
     */
    private static $run_in_background = false;

    public static function javascript()
    {
        $config = Config::inst()->get(__CLASS__, 'run_in_background');
        $js = $config ? 'background' : 'newtab';
        if (!Director::isLive() || Permission::check('ADMIN', 'any', $member)) {
            Requirements::javascript(
                'gorriecoe/silverstripe-devbuildkey: js/dist/' . $js . '.js',
                [
                    'defer' => true
                ]
            );
        }
    }
}
