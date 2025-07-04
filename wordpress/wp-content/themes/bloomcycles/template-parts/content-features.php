<?php
/**
 * Template part for displaying the features section
 *
 * @package BloomCycles
 */
?>

<section id="features" class="features-section">
    <h2><?php echo esc_html(get_theme_mod('features_title', 'Comprehensive Features')); ?></h2>
    <p class="section-intro"><?php echo esc_html(get_theme_mod('features_intro', 'Bloom Cycles offers the most complete suite of reproductive health tracking tools available, powered by advanced AI and designed with your privacy in mind.')); ?></p>
    
    <div class="features-container">
        <?php
        $feature_categories = array(
            'core-features' => array(
                'title' => 'Core Tracking Features',
                'taxonomy' => 'feature_category',
                'term' => 'core'
            ),
            'advanced-technology' => array(
                'title' => 'Advanced Technology',
                'taxonomy' => 'feature_category',
                'term' => 'technology'
            ),
            'privacy-accessibility' => array(
                'title' => 'Privacy & Accessibility',
                'taxonomy' => 'feature_category',
                'term' => 'privacy'
            ),
            'medical-education' => array(
                'title' => 'Medical & Educational Tools',
                'taxonomy' => 'feature_category',
                'term' => 'medical'
            )
        );

        foreach ($feature_categories as $category_key => $category) :
            ?>
            <div class="feature-category">
                <h3 class="category-title"><?php echo esc_html($category['title']); ?></h3>
                
                <div class="features-grid">
                    <?php
                    $features_query = new WP_Query(array(
                        'post_type' => 'feature',
                        'posts_per_page' => 4,
                        'tax_query' => array(
                            array(
                                'taxonomy' => $category['taxonomy'],
                                'field' => 'slug',
                                'terms' => $category['term']
                            )
                        )
                    ));

                    if ($features_query->have_posts()) :
                        while ($features_query->have_posts()) : $features_query->the_post();
                            ?>
                            <div class="feature-card">
                                <div class="feature-icon">
                                    <?php echo esc_html(get_post_meta(get_the_ID(), '_feature_icon', true)); ?>
                                </div>
                                <h4><?php the_title(); ?></h4>
                                <?php
                                $feature_items = get_post_meta(get_the_ID(), '_feature_items', true);
                                if ($feature_items) :
                                    ?>
                                    <ul class="feature-list">
                                        <?php
                                        foreach ($feature_items as $item) :
                                            echo '<li>' . esc_html($item) . '</li>';
                                        endforeach;
                                        ?>
                                    </ul>
                                <?php endif; ?>
                            </div>
                            <?php
                        endwhile;
                        wp_reset_postdata();
                    endif;
                    ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section> 