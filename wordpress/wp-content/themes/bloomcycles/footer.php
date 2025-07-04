    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3><?php bloginfo('name'); ?></h3>
                <p><?php echo esc_html(get_theme_mod('footer_description', 'Your personalized companion for reproductive health')); ?></p>
            </div>
            
            <div class="footer-section">
                <h3><?php _e('Quick Links', 'bloomcycles'); ?></h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container'      => false,
                    'fallback_cb'    => false,
                ));
                ?>
            </div>

            <?php if (is_active_sidebar('footer-1')): ?>
            <div class="footer-section">
                <?php dynamic_sidebar('footer-1'); ?>
            </div>
            <?php endif; ?>

            <div class="footer-section">
                <h3><?php _e('Legal', 'bloomcycles'); ?></h3>
                <a href="<?php echo esc_url(get_privacy_policy_url()); ?>"><?php _e('Privacy Policy', 'bloomcycles'); ?></a>
                <a href="<?php echo esc_url(home_url('/terms-of-use/')); ?>"><?php _e('Terms of Use', 'bloomcycles'); ?></a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?> <?php _e('by', 'bloomcycles'); ?> <?php echo esc_html(get_theme_mod('footer_author', 'Kai Wen')); ?>. <?php _e('All rights reserved.', 'bloomcycles'); ?></p>
        </div>
    </footer>

    <?php wp_footer(); ?>
    
    <!-- Google Translate API -->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'es,fr,de,it,pt,ru,zh-CN,ja,ko,ar',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');
        }
        
        // Detect browser language and translate automatically
        document.addEventListener('DOMContentLoaded', function() {
            const userLang = navigator.language || navigator.userLanguage;
            const langCode = userLang.split('-')[0];
            
            // Only translate if not English
            if (langCode !== 'en') {
                const select = document.querySelector('.goog-te-combo');
                if (select) {
                    select.value = langCode;
                    select.dispatchEvent(new Event('change'));
                }
            }
        });
    </script>
</body>
</html> 