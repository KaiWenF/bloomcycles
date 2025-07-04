<?php
/**
 * The template for displaying the homepage
 *
 * @package BloomCycles
 */

get_header();
?>

<main id="primary" class="site-main">
    <?php
    // Features Section
    get_template_part('template-parts/content', 'features');
    
    // Screenshots Section
    get_template_part('template-parts/content', 'screenshots');
    
    // Comparison Section
    get_template_part('template-parts/content', 'comparison');
    
    // Watch App Section
    get_template_part('template-parts/content', 'watch-app');
    
    // Press Section
    get_template_part('template-parts/content', 'press');
    
    // Signup Section
    get_template_part('template-parts/content', 'signup');
    ?>
</main>

<?php
get_footer(); 