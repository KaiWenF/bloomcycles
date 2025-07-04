<?php
if (!defined('ABSPATH')) exit;

/**
 * BloomCycles Theme Setup
 */
function bloomcycles_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Enable support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Register nav menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'bloomcycles'),
        'footer'  => __('Footer Menu', 'bloomcycles'),
    ));
}
add_action('after_setup_theme', 'bloomcycles_setup');

/**
 * Enqueue scripts and styles
 */
function bloomcycles_scripts() {
    // Enqueue main stylesheet
    wp_enqueue_style('bloomcycles-style', get_stylesheet_uri(), array(), '1.0.0');

    // Enqueue custom scripts
    wp_enqueue_script('bloomcycles-navigation', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true);

    // Dark mode script
    wp_add_inline_script('bloomcycles-navigation', '
        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
        }

        // Check for saved dark mode preference
        document.addEventListener("DOMContentLoaded", function() {
            if (localStorage.getItem("darkMode") === "true") {
                document.body.classList.add("dark-mode");
            }
        });
    ');
}
add_action('wp_enqueue_scripts', 'bloomcycles_scripts');

/**
 * Register Custom Post Types
 */
function bloomcycles_register_post_types() {
    // Features Post Type
    register_post_type('feature', array(
        'labels' => array(
            'name'               => __('Features', 'bloomcycles'),
            'singular_name'      => __('Feature', 'bloomcycles'),
            'add_new'           => __('Add New Feature', 'bloomcycles'),
            'add_new_item'      => __('Add New Feature', 'bloomcycles'),
            'edit_item'         => __('Edit Feature', 'bloomcycles'),
            'new_item'          => __('New Feature', 'bloomcycles'),
            'view_item'         => __('View Feature', 'bloomcycles'),
            'search_items'      => __('Search Features', 'bloomcycles'),
            'not_found'         => __('No features found', 'bloomcycles'),
            'not_found_in_trash'=> __('No features found in Trash', 'bloomcycles'),
        ),
        'public'      => true,
        'has_archive' => true,
        'supports'    => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'   => 'dashicons-star-filled',
        'rewrite'     => array('slug' => 'features'),
    ));
}
add_action('init', 'bloomcycles_register_post_types');

/**
 * Register widget areas
 */
function bloomcycles_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'bloomcycles'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'bloomcycles'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'bloomcycles_widgets_init');

/**
 * Custom template tags
 */
function bloomcycles_posted_on() {
    $time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time>';
    
    $time_string = sprintf($time_string,
        esc_attr(get_the_date(DATE_W3C)),
        esc_html(get_the_date())
    );

    echo '<span class="posted-on">' . $time_string . '</span>';
}

/**
 * Customizer additions
 */
function bloomcycles_customize_register($wp_customize) {
    // Add section for theme options
    $wp_customize->add_section('bloomcycles_options', array(
        'title'    => __('Theme Options', 'bloomcycles'),
        'priority' => 130,
    ));

    // Add setting for dark mode default
    $wp_customize->add_setting('dark_mode_default', array(
        'default'           => false,
        'sanitize_callback' => 'bloomcycles_sanitize_checkbox',
    ));

    $wp_customize->add_control('dark_mode_default', array(
        'type'    => 'checkbox',
        'section' => 'bloomcycles_options',
        'label'   => __('Enable Dark Mode by Default', 'bloomcycles'),
    ));
}
add_action('customize_register', 'bloomcycles_customize_register');

/**
 * Sanitize checkbox values
 */
function bloomcycles_sanitize_checkbox($checked) {
    return ((isset($checked) && true == $checked) ? true : false);
}

/**
 * Add custom image sizes
 */
function bloomcycles_add_image_sizes() {
    add_image_size('feature-thumbnail', 600, 400, true);
    add_image_size('hero-image', 1920, 1080, true);
}
add_action('after_setup_theme', 'bloomcycles_add_image_sizes'); 