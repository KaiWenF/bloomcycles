<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="hero-section">
    <nav class="main-nav">
        <div class="logo">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                echo '<a href="' . esc_url(home_url('/')) . '">' . get_bloginfo('name') . '</a>';
            }
            ?>
        </div>
        
        <div class="nav-links">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'nav-menu',
                'fallback_cb'    => false,
            ));
            ?>
        </div>
        
        <div class="nav-controls">
            <div id="google_translate_element" class="translate-button"></div>
            <button onclick="toggleDarkMode()" class="theme-toggle" aria-label="Toggle dark mode">
                <span class="theme-icon">🌙</span>
            </button>
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                <span class="menu-icon">☰</span>
            </button>
        </div>
    </nav>
    
    <div class="mobile-menu">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'container'      => false,
            'menu_class'     => 'mobile-menu-links',
            'fallback_cb'    => false,
        ));
        ?>
    </div>

    <?php if (is_front_page()): ?>
    <section class="hero">
        <div class="hero-content">
            <h1><?php bloginfo('name'); ?></h1>
            <p class="tagline"><?php bloginfo('description'); ?></p>
            <?php
            // Get the hero content from theme customizer or default
            $hero_description = get_theme_mod('hero_description', 'Experience the future of reproductive health tracking with advanced AI technology, medical-grade security, and comprehensive support through every stage of your journey.');
            $cta_primary_text = get_theme_mod('cta_primary_text', 'Discover More');
            $cta_primary_link = get_theme_mod('cta_primary_link', '#features');
            $cta_secondary_text = get_theme_mod('cta_secondary_text', 'Join Waitlist');
            $cta_secondary_link = get_theme_mod('cta_secondary_link', '#signup');
            ?>
            <p class="hero-description"><?php echo esc_html($hero_description); ?></p>
            <div class="cta-buttons">
                <a href="<?php echo esc_url($cta_primary_link); ?>" class="cta-button primary"><?php echo esc_html($cta_primary_text); ?></a>
                <a href="<?php echo esc_url($cta_secondary_link); ?>" class="cta-button secondary"><?php echo esc_html($cta_secondary_text); ?></a>
            </div>
        </div>
    </section>
    <?php endif; ?>
</header> 