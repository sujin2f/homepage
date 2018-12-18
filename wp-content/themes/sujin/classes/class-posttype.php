<?php
/**
 * Class : Rest API
 *
 * @project Sujin
 * @since   8.0.0
 * @author  Sujin 수진 Choi http://www.sujinc.com/
 */

namespace Sujin\Wordpress\Theme\Sujin;

use Sujin\Wordpress\WP_Express\Post_Type;
use Sujin\Wordpress\WP_Express\Meta_Box;
use Sujin\Wordpress\WP_Express\Meta\Post_Meta;

class Posttype {
  use Helpers\Singleton;

	function __construct() {
		$slider = Post_Type::get_instance('Slider')
			->set_show_in_rest(true);

		$metabox = Meta_Box::get_instance( 'Additional Info' )
			->set_post_type( $slider );

		Post_Meta::get_instance( 'Link URL' )
			->set_show_in_rest( true )
			->set_metabox( $metabox );

		Post_Meta::get_instance( 'Button Text' )
			->set_show_in_rest( true )
			->set_metabox( $metabox );
	}
}
