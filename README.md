# Personal Blog

Personal Blog is a web application that allows individuals to track their emotional states and concepts occupying their head space.

Feel free to use the code, or to contribute to this repo.

## Application Overview

The application has the following features:

- **Authentication**: User can login, and logout.
- **Check In**: User can log their emotional state and context.
- **Blog**: User can write, edit and delete long form post entries and view published posts.
- **Dashboard**: User can view check in and post history insights.

## Architecture Overview

The application utilises a three-layer architecture with features organised in feature-slices.

### Components and utilities

The application is structured with a feature-based approach, with components and utilities classified into:

- **Global**: Components and utilities used across multiple features.
- **Feature**: Components and utilities that belong to a specific feature or sub feature context.

### State Management

- **Redux with Redux Toolkit**: Used to manage application state.

### Backend Integration

The application integrates with Firebase for backend services:

- **Firebase Realtime DB Web**: Stores application data.
- **Firebase Authentication Web**: Manages user authentication and authorization.
- **Firebase Hosting**: Domain and hosting configuration.

### Database Structure

- `database:`
  - `test:`
    - Same as main, used in dev mode.
  - `main:`
    - `checkIns:`
      - `checkInDate:` `checkInData`
    - `tags:` `tagData`
    - `metadata:`
      - `postUuid:` `postMetadata`
    - `shortContent:`
      - `postUuid:` `postShortContent`
    - `fullContent:`
      - `postUuid:` `postFullContent`

### Testing

Testing is conducted at 2 levels:

- **Unit Testing**: Implemented with Vitest for utility functions.
- **UI Testing**: Conducted with Playwright for end-to-end user interface testing.

### File Structure

Notable aspects of the file structure:

```
src/
  app/
    store.ts - Redux store configuration.
    hooks.ts - Custom Redux hooks for dispatch and selector.
  common/
    utils.ts - Global utility functions.
  components/ - Global components used across multiple features.
  features/
    feature/
      feature.tsx - Main UI component for feature.
      subFeature.tsx - Sub feature UI component.
      featureSlice.ts - Redux slice for feature.
      featureSlice.spec.ts - Unit testing for reducer functions.
      featureSliceSelectors.ts - Redux selectors for feature.
      featureSliceUtils.ts - Business logic functions.
      featureSliceRemote/Auth.ts - DB and Auth API wrapper functions.
      featureUtils.ts - Utility functions for UI presentation.
      featureUtils.spec.ts - Unit tests for feature utility functions.
  remote/ - Firebase configuration and DB paths.
tests/
  - Playwright UI tests for end-to-end scenarios.
```

## Getting Started

You will need to set up a new Firebase project to get credentials to make use of the hosting, authentication and database SDKs.

To set up and run the Personal Blog Application, follow these steps:

1. **Clone the Repository**: `git clone https://github.com/wooweh/personal_blog`
2. **Install Dependencies**: `npm install`
3. **Start the Development Server**: `npm run dev`
4. **Open the App**: Visit `http://localhost:5173/` in your browser.
5. **Run unit tests**: `npm run test`
