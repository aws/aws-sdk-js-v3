/**
 * Pattern for testing the stability of a Client interface.
 */
export interface ClientInterfaceTest<Client> {
  /**
   * Assert that some resolved config fields can be set to undefined.
   */
  optionalConfigFieldsCanBeVoided(): void;
  /**
   * Create a test that initializes a client
   * with the minimal number of user-supplied values. This is
   * usually 0.
   *
   * This method is also a compilation test.
   */
  initializeWithMinimalConfiguration(): Client;
  /**
   * Create a test that initializes a client with all config fields supplied
   * by the user.
   *
   * This method is also a compilation test.
   */
  initializeWithMaximalConfiguration(): Client;
}
