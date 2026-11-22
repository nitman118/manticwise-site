// Site settings. Empty strings mean "not known yet": the pages then leave the item out.
export const site = {
  /** Public address, no trailing slash. Keep in step with `site` in astro.config.mjs. */
  url: 'https://manticwise.com',
  /** false: every page is noindex and robots.txt disallows all. true: indexable, sitemap linked. */
  launched: false,
  /**
   * Buttondown username. Empty: the sign-up form is shown disabled and the privacy page hides the newsletter text.
   * Before setting it, confirm in the Buttondown account and then check src/pages/privacy.astro still matches:
   *   - a data processing agreement is in place, and which safeguard covers the transfer to the US (name it on the page)
   *   - double opt-in is on
   *   - every email has a one-click unsubscribe, and unsubscribing removes the address from the list
   *   - open and click tracking are off
   *   - contactEmail and controllerName below are filled in
   */
  buttondownUsername: '',
  /** Contact address shown in the footer and the privacy statement. */
  contactEmail: '',
  /** Legal name of the data controller, shown in the privacy statement. */
  controllerName: '',
};

export const siteName = 'Manticwise';
export const tagline = 'Data and AI, reasoned through.';
