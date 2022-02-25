# Notes

## Terms

- MFE: Micro-frontend
- App shell: Is the main application that integrate all the micro-frontends
- remote: a micro-frontend app

## Current implementation

- For now all MFEs are using React

  - **Caveats**:

    - I think the app shell will have problems when we need to load a remote created with a different framework (not tested);

    - **Possible sotutions**:
      - App shell should be framework agnostic;

---

- **Routing**:

  - Using `react-router-dom`:

    - We can export the main app router of a remote to consume it inside the shell. This will work fine if we access the remote routes from his index but there is a problem when accessing directly a route that is nested;

    - **Possible solutions**:
      - Prefetch remote code;
      - Create some fallback code that loads the remote code;
      - Export remote pages separatedly and create the router inside app shell (best choice?);

## General info

- **Communication**:
  - Custom Events;
  - Local/session storage;
  - Cookies;
  - Messaging;
  - Observable Streams (rxjs);
