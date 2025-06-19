# Bloom Cycles App Summary

## Overview
Bloom Cycles is a comprehensive iOS application designed to help users track and manage their reproductive health journey, from menstrual cycles through pregnancy and postpartum care.

## Localization and Language Support

### Current Status
- **Supported Languages:** The app supports 43 languages:
  1. English (en) 🇺🇸
  2. Spanish (es) 🇪🇸
  3. French (fr) 🇫🇷
  4. German (de) 🇩🇪
  5. Chinese Simplified (zh-Hans) 🇨🇳
  6. Chinese Traditional (zh-Hant) 🇹🇼
  7. Arabic (ar) 🇸🇦
  8. Hindi (hi) 🇮🇳
  9. Haitian Creole (ht) 🇭🇹
  10. Hausa (ha) 🇳🇬
  11. Wolof (wo) 🇸🇳
  12. Igbo (ig) 🇳🇬
  13. Yoruba (yo) 🇳🇬
  14. Vietnamese (vi) 🇻🇳
  15. Ukrainian (uk) 🇺🇦
  16. Turkish (tr) 🇹🇷
  17. Thai (th) 🇹🇭
  18. Swedish (sv) 🇸🇪
  19. Russian (ru) 🇷🇺
  20. Portuguese (pt) 🇵🇹
  21. Polish (pl) 🇵🇱
  22. Norwegian (nb) 🇳🇴
  23. Indonesian (id) 🇮🇩
  24. Italian (it) 🇮🇹
  25. Danish (da) 🇩🇰
  26. Finnish (fi) 🇫🇮
  27. Somali (so) 🇸🇴
  28. Tigrinya (ti) 🇪🇷
  29. Swahili (sw) 🇹🇿
  30. Amharic (am) 🇪🇹
  31. Oromo (om) 🇪🇹
  32. Zulu (zu) 🇿🇦
  33. Berber (ber) 🇲🇦
  34. Nubian (nub) 🇸🇩
  35. Bengali (bn) 🇧🇩
  36. Tamil (ta) 🇮🇳
  37. Malay (ms) 🇲🇾
  38. Tagalog/Filipino (fil) 🇵🇭
  39. Japanese (ja) 🇯🇵
  40. Korean (ko) 🇰🇷
  41. Dutch (nl) 🇳🇱
  42. Danish (Denmark) (da-DK) 🇩🇰
  43. Finnish (Finland) (fi-FI) 🇫🇮

- **Runtime Language Switching:** Immediate UI updates without app restart
- **Right-to-Left Support:** Proper display for languages like Arabic
- **Encoding:** Fixed issues with non-Latin character sets

### Implementation
- **Localization Framework:** Using a combination of native iOS localization and custom language management
- **Language Detection:** Automatic detection of device language on first launch
- **Fallback System:** Legacy localization logic for missing translations
- **UI Updates:** Immediate refresh of all views on language change
- **Accessibility:** Full VoiceOver support in all supported languages

### Recent Improvements
- Added `.localized()` extension to all user-facing strings
- Implemented proper date and time formatting for all locales
- Enhanced number formatting based on locale preferences
- Added language-specific accessibility labels and hints
- Improved language selection UI with immediate feedback
- Added aggressive refresh logic for language changes
- Fixed language switching issues in LanguageSettingsView
- Enhanced language management system with ModernLanguageManager
- Added support for 43 languages with proper localization bundles
- Fixed crash on first launch related to language detection

## Recent Updates (March 2525)

### HealthKit and BBT Improvements
- **Enhanced HealthKit Integration:**
  - Updated HealthKitManager to properly conform to ObservableObject
  - Improved state management for HealthKit data in SwiftUI views
  - Enhanced error handling and type safety
  - Optimized data synchronization and updates
- **BBT Data Management:**
  - Resolved type ambiguity issues with BBTReading
  - Improved BBT chart visualization and data handling
  - Enhanced HolisticDayCellView for better BBT data display
  - Implemented proper type safety throughout BBT-related components
  - Optimized data flow and state management for BBT readings

### Pattern Analysis Screen Improvements
- **Enhanced Pattern Analysis View:**
  - Fixed blank screen issue in Pattern Analysis
  - Implemented functional navigation buttons
  - Added proper view hierarchy and state management
  - Improved data synchronization between views
  - Enhanced pattern detection and visualization
  - Added comprehensive pattern timeline view
  - Implemented proper error handling and loading states

### HealthKit Integration Enhancements
- **Expanded Health Data Types:**
  - Added support for additional HealthKit data types
  - Implemented proper data synchronization
  - Enhanced data visualization and analysis
  - Improved data privacy and security
  - Added comprehensive error handling
  - Implemented proper data validation

### Build System Improvements
- **Package Management:**
  - Resolved duplicate package references
  - Implemented proper dependency management
  - Enhanced build performance
  - Added comprehensive error handling
  - Improved build system stability

## Recent Updates (June 2025)

### AI Prediction Banner Implementation
- **Smart ML Enablement Banner:**
  - Added a dismissible banner on the Dashboard screen to encourage users to enable AI predictions
  - Implemented contextual appearance logic that shows the banner only when users have logged enough data
  - Added direct navigation path to ML settings for seamless enablement
  - Integrated with MLEnhancedFertilityPredictor to check data sufficiency
  - Enhanced persistence with AppStorage to respect user preferences for dismissal
  - Created tracking mechanism to identify when ML has been previously enabled
  - Added visual design that aligns with the app's aesthetic
  - Implemented full accessibility support with proper labels and hints
  - Optimized performance with SwiftUI transitions and animations
  - Smart appearance logic respects user choices and prevents banner fatigue

### Fertility Screen Data Display Fix
- **Enhanced Date Handling for Test Records:**
  - Fixed issue where future-dated ovulation test records weren't displaying in the Fertility screen
  - Implemented extended date range fetching for ovulation tests to include future entries
  - Added `currentCycleEndDate` property to calculate appropriate end dates for data fetching
  - Updated `OvulationTestPreview` to use a 60-day window for data display
  - Modified `OvulationTestHistoryView` to include test records up to a year in the future
  - Ensured Recent Entries section properly displays all ovulation tests, including future dates
  - Maintained consistent UI while improving data visibility
  - Resolved data inconsistency between Calendar view and Fertility dashboard
  - All changes implemented without modifying UI layout or design

### Pregnancy Symptoms Logging Fix
- **Enhanced Symptom Selection and Persistence:**
  - Fixed critical issue where Fatigue symptom was automatically selected when toggling other symptoms
  - Improved symptom selection state management to prevent unintended selections
  - Implemented proper validation for symptom data when saving and loading from Core Data
  - Added explicit clearing of symptom state to ensure clean transitions
  - Enhanced debugging capabilities with detailed logging of symptom state changes
  - Implemented more reliable symptom toggle logic with copy-based state transitions
  - Fixed persistence issues where symptoms weren't properly saved or loaded
- **UI and UX Improvements:**
  - Added visual feedback to clearly indicate selected symptoms
  - Improved symptom toggle button interactions and state transitions
  - Disabled UI elements when no active pregnancy exists
  - Added alert to guide users to create a pregnancy record first
  - Enhanced accessibility with proper state announcements
  - Added unique identifiers for symptom buttons to ensure proper SwiftUI view updates
- **Technical Implementation:**
  - Modified `toggleSymptom` function to use explicit state management
  - Updated `loadLogForDate` to validate symptoms against the `PregnancySymptom` enum
  - Enhanced `saveLog` with proper validation before storing data
  - Added explicit symptom state clearing on view initialization
  - Implemented debug view to visualize symptom selection state (debug builds only)
  - Fixed Core Data encoding/decoding of symptom data
  - Enhanced validation throughout the symptom selection and storage workflow

### Menopause Feature Integration
- **Enhanced Menopause Tracking:**
  - Dedicated Menopause Summary view with comprehensive symptom tracking
  - Integration with main navigation and Quick Access menu
  - Developer Tools toggle for enabling/disabling Menopause mode
  - Core Data integration for MenopauseSymptomLog entities
  - Symptom categories include:
    - Hot flashes and night sweats
    - Mood changes and emotional wellbeing
    - Sleep disturbances and quality
    - Physical symptoms (joint pain, headaches, etc.)
    - Vaginal dryness tracking
  - Features include:
    - Customizable time range analysis
    - Symptom trend visualization
    - Personalized recommendations
    - Comprehensive filtering options
    - Full localization support
    - Accessibility compliance

### Calendar View Enhancements
- **Improved Calendar Interface:**
  - Enhanced draggable detail view with full-width drag area
  - Added maximize/minimize button for quick view expansion
  - Optimized animation performance for smoother interactions
  - Added comprehensive help overlay with information button
  - Consistent section widths across all views
  - Full localization support for all UI elements
  - Proper dismiss functionality for modal views
- **Pattern Visualization:**
  - Pattern indicators on calendar cells
  - Confidence level display for detected patterns
  - Anomaly highlighting with significance indicators
  - Interactive pattern timeline
  - Pattern comparison capabilities
- **Enhanced Navigation:**
  - Week/Month view toggle
  - Quick access to pattern analysis
  - Customizable filters for data display
  - Calendar sync status indicator

### Pattern Analysis Improvements
- **Enhanced Pattern Detection:**
  - Comprehensive multi-factorial pattern analysis
  - Machine learning integration for subtle pattern detection
  - Interactive pattern timeline with confidence indicators
  - Personalized baselines for cycle metrics
  - Correlation analysis between different tracked factors
  - Pattern journaling with guided prompts
  - Side-by-side pattern comparison between time periods
  - Actionable recommendations based on detected patterns
  - Scientific explanations of pattern significance
  - Visual data representation with interactive charts
  - **Pattern Summary and Pattern Timeline sections now always display the same detected patterns, whether data is entered manually or generated as test data. The EnhancedPatternViewModel synchronizes detectedPatterns with the timeline, ensuring UI consistency and resolving previous discrepancies.**
- **Pattern Types:**
  - Regular/Irregular cycles
  - Luteal phase variations
  - Anovulatory patterns
  - Fertile window variations
  - Intercourse timing optimization
- **Anomaly Detection:**
  - Unusual cycle lengths
  - Missing ovulation
  - Abnormal BBT patterns
  - Inconsistent mucus patterns
  - Unexpected bleeding
  - Irregular intercourse patterns

### Medical Dashboard and Export Features
- **Medical Records Management:**
  - Complete medical history tracking
  - Medication management with dosage and schedule
  - Allergy documentation with severity levels
  - Vaccination records with dates and boosters
  - New Bone Health and Heart Health record types
- **Healthcare Provider Directory:**
  - Primary care provider information
  - Specialist contact details
  - Emergency contact management
- **Appointment Tracking:**
  - Upcoming appointment management
  - Past appointment history
  - Calendar system integration
- **Medical Export System:**
  - Generate comprehensive doctor reports
  - Customizable content selection
  - PDF export functionality
  - Secure authentication for medical data access
  - Categories include:
    - Personal Information
    - Cycle Data
    - Symptoms & Mood
    - Medications
    - Appointments
    - Bone Health
    - Heart Health

### Enhanced Encryption System
- **Multi-level Security Options:**
  - Tiered encryption architecture with four distinct security levels
  - Clear visual differentiation through intuitive SF Symbol icons
  - Comprehensive descriptions and technical specifications for each level
  - User guidance for selecting appropriate security based on data sensitivity
  - Interactive security level selection with detailed explanations
- **Security Levels Implementation:**
  - **No Encryption:** Standard PDF export with no protection for non-sensitive information
  - **Basic Encryption:** AES-128 encryption with PDF standard security handler and 1,000 iterations of PBKDF2 for personal use
  - **Enhanced Encryption:** AES-256 encryption with 10,000 iterations of PBKDF2 and HMAC integrity verification for sensitive health data
  - **Medical-Grade Encryption:** AES-256 encryption with Secure Enclave integration, 100,000 iterations of PBKDF2, and device binding for HIPAA compliance
- **User Experience Enhancements:**
  - Detailed security information view with collapsible technical details
  - Password strength indicator with visual feedback
  - Secure password generation with cryptographically strong randomness
  - Clear recommendations for appropriate security level selection
  - Guided password creation process with validation
- **Technical Implementation:**
  - Hardware-backed encryption using Secure Enclave when available
  - Progressive key derivation strength increasing with security level
  - Salt generation using SecRandomCopyBytes for maximum security
  - Device binding for highest security level to prevent unauthorized access
  - HMAC integrity verification to detect tampering
  - Proper memory management for sensitive cryptographic materials

### Enhanced WIC Support System
- **Regional Availability:**
  - US-only feature detection
  - Location-based office finder
- **WIC Education Hub:**
  - Program information
  - Eligibility guidelines
  - Benefit details
- **Office Directory:**
  - Geolocation-based finder
  - Contact information
  - Office hours
  - Services offered
- **Benefit Tracker:**
  - Personalized tracking
  - Appointment reminders
  - Renewal date monitoring
- **Food List & Scanner:**
  - Barcode scanning
  - WIC-eligible product verification
  - Nutritional information
- **Nutrition Integration:**
  - WIC guideline-based recommendations
  - Pregnancy-specific guidance
  - Postpartum nutrition support
- **Document Storage:**
  - Secure WIC documentation storage
  - Eligibility papers management
  - Digital record keeping

### Comprehensive Notification System
- **Core Notification Features:**
  - Global notification toggle with granular control
  - Permission handling with proper authorization states
  - Background refresh support
  - Thread grouping for organized notifications
  - Priority-based notification delivery
  - Summary notifications for grouped updates

- **Notification Categories:**
  - **Cycle Events:**
    - Period reminders with customizable advance notice
    - Fertile window alerts
    - Ovulation alerts
  - **Daily Tracking:**
    - Symptom tracking reminders
    - BBT (Basal Body Temperature) reminders
    - Mucus tracking reminders
  - **Pregnancy Support:**
    - Appointment reminders (24h and 1h before)
    - Medication reminders
    - Exercise reminders

- **User Customization:**
  - Individual toggles for each notification type
  - Customizable timing for all reminders
  - Grouping preferences (by category or priority)
  - Notification thread organization
  - Priority level settings

- **Technical Implementation:**
  - Proper Core Data integration
  - Background task scheduling
  - System notification settings respect
  - App state change handling
  - Comprehensive error handling
  - Unit test coverage

- **Accessibility & Localization:**
  - Full VoiceOver support
  - Localized notification content
  - Right-to-left language support
  - Dynamic type compatibility
  - Clear notification actions

### Accessibility & Usability Improvements
- **Accessibility Enhancements:**
  - All interactive elements include descriptive labels and hints
  - Destructive actions provide clear warnings
  - Selection controls announce their state
  - Full localization support for all new features
- **Database Maintenance Tools:**
  - Deduplication tool for Symptom and Mood definitions
  - Accessible via Developer Tools screen
  - Manual operation for data integrity
- **Settings Screen Improvements:**
  - Added info icon with comprehensive help
  - Consistent styling with other info screens
  - Full localization support
  - Enhanced accessibility

### Technical Improvements
- **iOS Version Compatibility:**
  - Added compatibility layer for SwiftUI's `onChange` modifier
  - Ensures consistent behavior across iOS versions
  - Eliminates deprecation warnings
- **PDF Export Manager:**
  - Enhanced error handling
  - Consistent parameter naming
  - Standardized method signatures
  - Improved documentation
  - Support for new data types
- **Pattern Timeline Data:**
  - Real-time pattern generation from user data
  - Removed synthetic/demo patterns
  - Enhanced test data generation
  - Improved data integrity

## Key Features

### 1. Cycle Tracking
- **Period Tracking**: Log menstrual flow, symptoms, and cycle length
- **Fertility Monitoring**: 
  - Track basal body temperature (BBT), cervical mucus, and ovulation tests
  - ML-powered BBT pattern recognition for thermal shift detection
  - Cycle comparison analytics with statistical insights
  - Fertility issue identification with educational resources
- **Cycle Analysis**: View patterns and predictions based on historical data
- **Contraceptive Tracking**: Log and manage contraceptive methods with ML-enhanced predictions
- **Optimized Performance**:
  - Batch fetching of cycle data
  - Intelligent caching system
  - Lazy loading of chart data
  - Performance monitoring and metrics

### 2. Pregnancy Tracking
- **Due Date Calculator**: Based on LMP or conception date
- **Weekly Updates**: Fetal development information
- **Symptom Tracking**: 
  - Log pregnancy-related symptoms with robust selection interface
  - Improved symptom selection with proper state management
  - Validation to prevent erroneous symptom data
  - Enhanced UI with clear visual feedback for selected symptoms
  - Proper data persistence and retrieval from Core Data
- **Appointment Management**: Track medical visits and tests
- **Optimized Data Loading**:
  - Efficient data fetching
  - Background processing
  - Memory management

### 3. Postpartum Care
- **Recovery Tracking**: Monitor physical healing
- **Baby Care Logs**: Track feeding, diapers, sleep
- **Mental Health**: EPDS screening and mood tracking
- **Performance Optimizations**:
  - Batch processing
  - Cached data access
  - Background updates

### 3. Privacy & Security
- **Biometric Authentication:**
  - Face ID and Touch ID integration with proper permission handling
  - Enhanced protection for sensitive sections like Intimacy Logs and Medical Exports
  - Real-time verification of biometric availability with safety checks
  - Detailed error handling and user feedback for authentication issues
  - Fallback mechanisms when biometrics are unavailable
  - Configurable protection levels for different app sections
  - Comprehensive diagnostic logging for troubleshooting
- **Data Protection:**
  - Privacy blur for sensitive data when app is in background
  - Secure local data storage using Core Data
  - Encrypted medical exports with tiered security options
  - Privacy-aware view modifiers
  - Enhanced data handling with proper sanitization
  - Sensitive data caching with secure invalidation
- **Settings & Controls:**
  - Granular privacy settings for all sensitive features
  - Privacy-focused view modifiers
  - Customizable security levels
  - Detailed privacy policy integration
  - User-friendly privacy explanations

## Architecture and Technologies

*   **UI Framework:** SwiftUI
*   **Data Persistence:** 
    *   Core Data for local storage
*   **Charting:** Swift Charts framework for data visualization.
*   **Device Integration:**
    *   HealthKit for health data access
    *   Local Authentication for biometric security
*   **Notifications:** UserNotifications framework for intelligent reminders
*   **Language:** Swift
*   **Platform:** iOS

## Requirements and Technical Specifications

*   **Operating System Compatibility:**
    *   iOS 15.0+ (Compatible with iOS 17.0+)
    *   Full backwards compatibility with earlier iOS versions
    *   iOS 17-specific API adaptations via compatibility layer
*   **Development Requirements:**
    *   Xcode 13.0+
    *   Swift 5.5+
*   **Device Compatibility:**
    *   iPhone SE (2nd generation) and newer
    *   iPad (6th generation) and newer
    *   iPod Touch (7th generation)
*   **Framework Dependencies:**
    *   SwiftUI
    *   Core Data
    *   HealthKit (optional)
    *   AVFoundation
    *   UserNotifications
    *   CoreML (for prediction features)
    *   CloudKit (for data synchronization)
    *   SafariServices (for WIC barcode scanning)

## Recent Changes

- Added iOS version compatibility layer for SwiftUI's `onChange` modifier:
  - Implemented `onChangeCompat` extension in `OnChangeCompatibility.swift` to handle differences between iOS 17's new `onChange` syntax and earlier iOS versions
  - This ensures the app works correctly across iOS versions without deprecation warnings
  - Updated all views to use the compatibility layer for consistent behavior
  - Fixed ambiguous toolbar issues in navigation views
- Added new Summary Feature with speech synthesis, templates, and AI integration that provides users with comprehensive health summaries.
- Added Summary button to the Quick Access menu, allowing users to easily access the Summary Center.
- Fixed UI configuration to ensure the Summary button appears correctly in the dashboard navigation.
- Refactored theme management to improve UI performance and enhance visual coherence:
  - Optimized the `ThemeManager.refreshUIColors()` method to reduce unnecessary UI rebuilds
  - Updated various views to apply theme backgrounds consistently across the application
  - Enhanced accessibility features and visual feedback in multiple views
- The `CycleAnomaly` struct in `CyclePatternAnalysisManager` now includes an optional `details: String?` property and an updated initializer that accepts this property (defaulting to `nil`).
- This change was made to resolve a SwiftUI error in `HolisticCalendarView` where `anomaly.details` is accessed in the anomalies section.
- If you want to display details for anomalies in the UI, provide the `details` value when creating `CycleAnomaly` instances. If not provided, it will default to `nil` and the UI will not show additional details.
- **Aggressive Refresh Logic for Language Change**:  
  - Updated `LanguageManager.swift` to post multiple notifications (including `LCLLanguageChangeNotification` from Localize_Swift) and force a double refresh after a short delay when the language is changed.  
  - Updated `LanguageSettingsView.swift` to ensure that after every language change, the same aggressive refresh logic is triggered, ensuring all screens update immediately without requiring an app restart.
- Reverted the Nausea symptom icon back to "tornado" from "face.smiling.inverse" in ManageSymptomsView for consistency across the app.

# Additional Updates (June 2025)

- **Biometric Protection Improvements:**
  - Fixed critical crash issue when enabling Face ID/Touch ID protection on real iOS devices
  - Added proper NSFaceIDUsageDescription to ensure Face ID functionality works correctly
  - Implemented safety checks before enabling biometric protection features
  - Enhanced error handling with detailed user feedback for various biometric scenarios
  - Added real-time verification of biometric availability before enabling protection
  - Implemented proper fallback mechanisms when biometrics are unavailable
  - Improved security for accessing sensitive sections like Intimacy Logs and Medical Exports
  - Enhanced diagnostics with detailed logging for biometric authentication issues

- **HealthKit Integration UI Improvements:**
  - Fixed UI state management in HealthKit settings to properly reflect enabled data types
  - Implemented reliable state refresh mechanism for key data type enablement
  - Added visual confirmation when important health data types are enabled
  - Enhanced error handling in HealthKit data synchronization
  - Optimized language bundle handling for proper localization across the app
  - Fixed blank screen issue during app initialization with proper language management
  - Improved state variable handling to prevent compiler errors
  - Enhanced responsive UI updates when health data preferences change

- **WIC Benefit Tracker:**
  - Added a comprehensive WIC Benefit Tracker feature for managing, tracking, and visualizing WIC benefits.
  - Features include benefit cards, monthly summaries, usage tracking, expiry monitoring, reminders, and detailed benefit editing.
  - Enhanced US-only detection and location-based alerts for WIC features.

- **Enhanced Security for Medical Exports:**
  - Implemented a sophisticated multi-level encryption system for medical data exports
  - Added four security levels: No Encryption, Basic Encryption, Enhanced Encryption, and Medical-Grade Encryption
  - Integrated Secure Enclave for hardware-backed encryption on compatible devices
  - Enhanced user interface with visual security level indicators and detailed security information
  - Improved password management with strength indicators and secure generation
  - Implemented cryptographically sound encryption algorithms with increasing strength by level
  - Added device binding for medical-grade security to prevent unauthorized access
  - Enhanced PDF export security with proper permission management

- **UI Navigation Improvements:**
  - Removed duplicate contraction timer from Quick Access menu
  - Consolidated all contraction tracking functionality exclusively within the Pregnancy module
  - Fixed ContentView.swift references to removed TimerView
  - Updated tab indices in main navigation to maintain consistency
  - Improved app organization by removing redundant features
  - Enhanced UX by maintaining contraction tracking in the appropriate pregnancy context
  - Streamlined navigation flow by reducing menu clutter
  - Updated CoreData documentation to reflect timer consolidation

- **Pregnancy Symptoms Logging Improvements:**
  - Fixed bug where the Fatigue symptom was automatically selected when toggling other symptoms
  - Enhanced state management for symptom selection to prevent unintended selections
  - Improved data validation and persistence for pregnancy symptom logs
  - Implemented UI safeguards to prevent using the symptom logging without an active pregnancy
  - Added visual enhancements to clarify symptom selection state
  - Incorporated proper SwiftUI view updating with unique identifiers for symptom buttons
  - Improved the overall reliability and user experience of pregnancy symptom tracking

- **Fertility Education UI Copy Update:**
  - Updated the Fertility Education screen to use possessive style for algorithm references for clarity and consistency.
  - Changed 'BloomCycle uses...' to 'BloomCycle's algorithm uses...' and 'BloomCycle combines...' to 'BloomCycle's algorithm combines...'.

- **General Improvements:**
  - Improved Core Data model documentation and update process.
  - Enhanced accessibility and localization for all new features.
  - Refined error handling and UI feedback throughout the app.
  - Updated README.md and documentation to reflect all recent changes.

- Removed: The "Import Data" menu item and screen from the Settings screen. This feature is not included in this version. No Core Data changes were required as the screen was blank.
- Removed: The "Timer" icon from the Dashboard Customization screen as this functionality will not be included in this version.
- Changed: Modified Health integration to show a custom notification dialog instead of the system Health access popup when a user first accesses the fertility calendar. The dialog explains the benefits of Health integration and provides direct access to enable it in settings.
- Fixed: Pregnancy symptoms in ContentView.swift now properly persist and require a parent pregnancy record to be logged.
- Fixed: The "Done" button in the Quick Access screen now correctly dismisses the screen in all presentation contexts.

## User Experience Enhancements

- **Improved Health Integration Flow**: Implemented a custom notification dialog to replace the default iOS Health access popup when users first access the fertility calendar. This dialog:
  - Explains why Health data improves prediction accuracy
  - Provides context before permissions are requested
  - Offers a direct path to enabling integration in settings
  - Only appears once rather than on every calendar access
  - Improves user control over Health data sharing

- **Bug Fixes and Optimizations**:
  - Fixed pregnancy symptoms tracking in ContentView.swift to ensure proper data persistence
  - Removed unused features to streamline the application

- Changed: Sexual Activity is now clearly indicated as a key data type for prediction accuracy in the Data Types screen, with a star and label. The 'Enable Key Data Types' button now enables all required data types for accurate predictions, including Sexual Activity, with a single tap. Sexual Activity has been added to the essential set of data types required for optimal fertility predictions.
- Added: Visual AI readiness indicator in the Health Integration screen with a green brain icon and "AI Prediction Ready" message when all key data types are enabled, providing clear confirmation that the system is ready for AI-powered predictions.

# Project Summary

## Recent Updates

### Performance Optimizations
- Moved HealthKit operations to background threads using modern Swift concurrency
- Implemented async/await for HealthKit data fetching
- Added proper error handling with custom HealthKitError types
- Moved Core ML predictions to background threads
- Implemented caching for ML predictions
- Added proper thread safety for Core Data operations
- Improved error handling and type safety
- Added proper documentation and code organization

## Current Status

### Completed Features
- Basic cycle tracking
- HealthKit integration
- Core ML predictions
- Core Data persistence
- Localization support
- Accessibility features
- Background processing for HealthKit and Core ML

### In Progress
- Advanced cycle predictions
- Enhanced UI/UX
- Additional health metrics
- Improved data visualization
- Performance optimizations

### Planned Features
- Social features
- Advanced analytics
- Custom notifications
- Export/import functionality
- Cloud sync

## Next Steps

### Short Term
- Implement batch processing for Core Data
- Add background context for write operations
- Optimize fetch requests
- Implement proper indexing
- Add proper error handling

### Medium Term
- Implement model versioning
- Add proper model update mechanism
- Implement proper feature engineering
- Add proper model evaluation
- Implement proper deployment

### Long Term
- Implement CI/CD pipeline
- Add automated testing
- Implement documentation
- Add code review process
- Implement release process

## Notes
- All features should be properly tested
- Performance metrics should be collected
- User feedback should be incorporated
- Documentation should be updated
- Code review process should be followed


## Recent Enhancements
- Added Pregnancy Data to Medical Export 
  - Implemented toggle in ExportReportView to include pregnancy data in medical exports
  - Updated PDFBatchProcessor to generate detailed pregnancy data pages 
  - Pregnancy data exports include LMP dates, due dates, pregnancy notes, health metrics and appointments
  - Enhanced appointment display with provider and notes information
  - Used generic NSManagedObject approach for maximum flexibility with CoreData entities
- Implemented ML prediction caching system with automatic cache invalidation
  - Added MLPredictionCache for efficient prediction storage
  - Automatic cache clearing on cycle data changes
  - Cache invalidation on user profile updates
  - Cache management for contraceptive changes
  - 1-hour cache expiration for data freshness
  - Thread-safe implementation with memory efficiency
- Enhanced HealthKit step count statistics logic
  - Step count queries now use `.cumulativeSum` for compatibility with HealthKit's cumulative data type
  - Average daily steps are calculated by dividing total steps by the number of days in the selected range
  - Prevents runtime errors and ensures accurate analytics for ML and user insights
  - Improved error handling and code safety for HealthKit queries 
- Major HealthKit privacy and info UI improvements
  - Implemented a comprehensive Privacy Settings screen for HealthKit integration, allowing users to control which data types are shared and manage permissions
  - Added an information icon and info sheet to the Health Integration screen, providing localized, user-friendly guidance on HealthKit features
  - Refactored Backup & Restore and HealthKitSettingsView for better modularity and compiler performance
  - Improved localization and accessibility for all new UI components 

## June 2025 UI Update

- The Data Export section (Export HealthKit Data, format picker, Data Analytics) in the HealthKit Integration screen has been hidden from the user interface to simplify the app. The code is preserved and can be restored if these features are needed in the future.

# Recent Updates (July 2025)

### iPad UI Improvements
- **Enhanced iPad Navigation Structure:**
  - Fixed UserProfileSetupView display issues on iPad devices where the screen was incorrectly showing in a sidebar/split view
  - Restructured navigation hierarchy to ensure consistent full-screen presentation across all device types
  - Removed nested NavigationView structures causing display inconsistencies
  - Implemented consistent StackNavigationViewStyle for profile setup screens
  - Modified key views to properly handle iPad navigation:
    - WalkthroughContainerView: Removed redundant NavigationView wrapping
    - SettingsView: Added proper NavigationView with StackNavigationViewStyle
    - QuickAccessView: Enhanced navigation destination handling
  - Improved parent-child view relationships for proper iPad layout
  - Ensured consistent user experience between iPhone and iPad devices

### Widget Implementation
- **Comprehensive Widget Integration:**
  - Implemented two widget types: Cycle Tracking Widget and Health Summary Widget
  - Created a robust WidgetDataProvider for efficient Core Data access from widgets
  - Implemented intelligent WidgetTimelineProvider with adaptive refresh scheduling
  - Added background refresh tasks for timely widget updates
  - Implemented proper caching mechanisms for performance optimization
  - Added graceful error handling with fallback displays
  - Implemented full localization support using the app's existing string extension
- **Cycle Tracking Widget:**
  - Displays current cycle day, phase, and predictions
  - Shows temperature data and key symptoms
  - Supports both small and medium widget sizes
  - Provides quick glance information with color-coded phase indicators
  - Updates automatically with cycle progression
- **Health Summary Widget:**
  - Displays upcoming health events and reminders
  - Shows recent symptom trends and health metrics
  - Supports small and medium widget configurations
  - Provides actionable health insights at a glance
- **App Integration:**
  - Added WidgetIntegrationManager for coordinating widget updates
  - Implemented shared UserDefaults through app groups for data communication
  - Added privacy controls with option to blur sensitive data when device is locked
  - Created WidgetSettingsView for user configuration options
  - Added widget troubleshooting tools in settings
  - Integrated widget refresh triggers with app data changes 