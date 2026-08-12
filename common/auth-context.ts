import { AsyncLocalStorage } from "async_hooks";

export type JFrogAuthContext = {
  accessToken?: string;
  baseUrl?: string;
  principal?: string;
  source?: string;
};

const authContextStorage = new AsyncLocalStorage<JFrogAuthContext>();

export function runWithJFrogAuthContext<T>(
  context: JFrogAuthContext,
  fn: () => T
): T {
  return authContextStorage.run(context, fn);
}

export function getJFrogAuthContext(): JFrogAuthContext | undefined {
  return authContextStorage.getStore();
}
