0001;52920767;Google\x20Chrome;917ED9C8-0B49-4D34-9F1F-8E6FFF6EE10A* @package   Services_Soundcloud
 * @author    Anton Lindqvist <anton@qvister.se>
 * @copyright 2010 Anton Lindqvist <anton@qvister.se>
 * @license   http://www.opensource.org/licenses/mit-license.php MIT
 * @link      http://github.com/mptre/php-soundcloud
 */
class Services_Soundcloud_Version
{

    const MAJOR = 2;
    const MINOR = 3;
    const PATCH = 2;

    /**
     * Magic to string method
     *
     * @return string
     *
     * @access public
     */
    function __toString()
    {
        return implode('.', array(self::MAJOR, self::MINOR, self::PATCH));
    }

}
